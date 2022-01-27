<template>
  <div>
    <div>
      <div id="container"></div>
    </div>
    <Button type="primary" @click="resetGraph">画布重绘</Button>
  </div>
</template>

<script>
import { Graph, Shape, Addon, Node, Cell } from "@antv/x6";
import { DagreLayout } from "@antv/layout";
import temData from "./er.json";
const LINE_HEIGHT = 24;
const NODE_WIDTH = 150;
export default {
  name: "Antv2",
  data() {
    return {
      graph: {},
      dagreLayout: {},
    };
  },
  mounted() {
    Graph.registerPortLayout(
      "erPortPosition",
      (portsPositionArgs) => {
        return portsPositionArgs.map((_, index) => {
          return {
            position: {
              x: 0,
              y: (index + 1) * LINE_HEIGHT,
            },
            angle: 0,
          };
        });
      },
      true
    );

    Graph.registerNode(
      "er-rect",
      {
        inherit: "rect",
        markup: [
          {
            tagName: "rect",
            selector: "body",
          },
          {
            tagName: "text",
            selector: "label",
          },
        ],
        attrs: {
          rect: {
            strokeWidth: 1,
            stroke: "#5F95FF",
            fill: "#5F95FF",
          },
          label: {
            fontWeight: "bold",
            fill: "#ffffff",
            fontSize: 12,
          },
        },
        ports: {
          groups: {
            list: {
              markup: [
                {
                  tagName: "rect",
                  selector: "portBody",
                },
                {
                  tagName: "text",
                  selector: "portNameLabel",
                },
                {
                  tagName: "text",
                  selector: "portTypeLabel",
                },
              ],
              attrs: {
                portBody: {
                  width: NODE_WIDTH,
                  height: LINE_HEIGHT,
                  strokeWidth: 1,
                  stroke: "#5F95FF",
                  fill: "#EFF4FF",
                  magnet: true,
                },
                portNameLabel: {
                  ref: "portBody",
                  refX: 6,
                  refY: 6,
                  fontSize: 10,
                },
                portTypeLabel: {
                  ref: "portBody",
                  refX: 95,
                  refY: 6,
                  fontSize: 10,
                },
              },
              position: "erPortPosition",
            },
          },
        },
      },
      true
    );
    this.graph = new Graph({
      container: document.getElementById("container"),
      connecting: {
        router: {
          name: "er",
          args: {
            offset: 25,
            direction: "H",
          },
        },
        createEdge() {
          return new Shape.Edge({
            attrs: {
              line: {
                stroke: "#A2B1C3",
                strokeWidth: 2,
              },
            },
          });
        },
      },
      width: 800,
      height: 500,
      background: {
        color: "rgba(0, 0, 0, .03)", // 画布背景
      },
      panning: {
        enabled: true, // 是否启用拖拽
      },
      mousewheel: {
        enabled: true, // 是否启用缩放
      },
      selecting: {
        enabled: true, // 启用点选/框选
        showNodeSelectionBox: true, // 是否显示节点的选择框
        rubberband: true, // 启用框选
        modifiers: "ctrl", // 组合键
      },
      keyboard: {
        enabled: true,
      },
    });
    this.dagreLayout = new DagreLayout({
      type: "dagre",
      rankdir: "LR",
      ranksep: "30", // 层间距
      nodesep: "10", // 节点间距
      controlPoints: true, // 是否保留布局连线的控制点
    });
    this.dagreLayout.layout(temData);
    this.graph.fromJSON(temData);
    // 键盘 delete 事件
    this.graph.bindKey(
      ["delete"],
      (e) => {
        const cells = this.graph.getSelectedCells();
        if (cells.length) {
          // 删除前移除所有包含工具
          cells.forEach((currentCell) => {
            currentCell.removeTools();
          });
          this.graph.removeCells(cells);
        }
      },
      "keydown"
    );
    // 双击进入编辑模式
    this.graph.on("node:dblclick", ({ e, x, y, node, view }) => {
      console.log(node);
      console.log(x, y);
      node.addTools({
        name: "node-editor",
        args: {
          event: e,
          attrs: {
            // fontSize: 12,
          },
        },
      });
    });
    // 右键菜单
    let _this = this;
    this.graph.on("node:contextmenu", ({ e, node, view }) => {
      const { x, y } = e.originalEvent;
      // 创建节点
      let conextMenuContainer = document.createElement("ul");
      conextMenuContainer.id = "contextMenu";
      let textTem = ["运行", "编辑", "复制节点", "删除节点"];
      for (let i = 0; i < 4; i++) {
        let liTem = document.createElement("li");
        liTem.innerText = textTem[i];
        liTem.addEventListener("mouseover", function () {
          this.style.backgroundColor = "rgba(0, 0, 0, .03)";
          this.style.cursor = "auto";
        });
        liTem.addEventListener("mouseout", function () {
          this.style.backgroundColor = "#fff";
        });
        liTem.addEventListener("click", function () {
          document.getElementById("contextMenu").remove();
          _this.$Message.info(this.innerText);
        });
        conextMenuContainer.appendChild(liTem);
      }
      // conextMenuContainer.addEventListener('mouseleave', function () {
      //     this.remove()
      // })
      conextMenuContainer.style.listStyle = "none";
      conextMenuContainer.style.border = "1px solid #666";
      conextMenuContainer.style.minWidth = "120px";
      conextMenuContainer.style.backgroundColor = "#fff";
      conextMenuContainer.style.position = "fixed";
      conextMenuContainer.style.left = x + "px";
      conextMenuContainer.style.top = y + "px";
      document.getElementById("container").appendChild(conextMenuContainer);
    });
    this.graph.on("blank:click", () => {
      document.getElementById("contextMenu") &&
        document.getElementById("contextMenu").remove();
    });
  },
  methods: {
    // 画布重绘
    resetGraph() {
      this.graph.fromJSON(temData);
      this.graph.centerContent(); // 画布居中
    },
  },
};
</script>

<style scoped>
#container {
  margin: 0 auto;
}
</style>