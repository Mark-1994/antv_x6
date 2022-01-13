<template>
  <div id="container"></div>
</template>

<script>
import { Graph, Cell, Shape } from "@antv/x6";
export default {
  name: "Antv",
  data() {
    return {
      LINE_HEIGHT: 24,
      NODE_WIDTH: 150,
      datas: [
        {
          id: "1",
          shape: "er-rect",
          label: "表A",
          width: 150,
          height: 24,
          position: {
            x: 24,
            y: 150,
          },
          ports: [
            {
              id: "1-1",
              group: "list",
              attrs: {
                portNameLabel: {
                  text: "ID",
                },
                portTypeLabel: {
                  text: "STRING",
                },
              },
            },
            {
              id: "1-2",
              group: "list",
              attrs: {
                portNameLabel: {
                  text: "Name",
                },
                portTypeLabel: {
                  text: "STRING",
                },
              },
            },
            {
              id: "1-3",
              group: "list",
              attrs: {
                portNameLabel: {
                  text: "Class",
                },
                portTypeLabel: {
                  text: "NUMBER",
                },
              },
            },
            {
              id: "1-4",
              group: "list",
              attrs: {
                portNameLabel: {
                  text: "Gender",
                },
                portTypeLabel: {
                  text: "BOOLEAN",
                },
              },
            },
          ],
        },
        {
          id: "2",
          shape: "er-rect",
          label: "表B",
          width: 150,
          height: 24,
          position: {
            x: 250,
            y: 210,
          },
          ports: [
            {
              id: "2-1",
              group: "list",
              attrs: {
                portNameLabel: {
                  text: "ID",
                },
                portTypeLabel: {
                  text: "STRING",
                },
              },
            },
            {
              id: "2-2",
              group: "list",
              attrs: {
                portNameLabel: {
                  text: "Name",
                },
                portTypeLabel: {
                  text: "STRING",
                },
              },
            },
            {
              id: "2-3",
              group: "list",
              attrs: {
                portNameLabel: {
                  text: "StudentID",
                },
                portTypeLabel: {
                  text: "STRING",
                },
              },
            },
            {
              id: "2-4",
              group: "list",
              attrs: {
                portNameLabel: {
                  text: "TeacherID",
                },
                portTypeLabel: {
                  text: "STRING",
                },
              },
            },
            {
              id: "2-5",
              group: "list",
              attrs: {
                portNameLabel: {
                  text: "Description",
                },
                portTypeLabel: {
                  text: "STRING",
                },
              },
            },
          ],
        },
        {
          id: "3",
          shape: "er-rect",
          label: "表C",
          width: 150,
          height: 24,
          position: {
            x: 480,
            y: 350,
          },
          ports: [
            {
              id: "3-1",
              group: "list",
              attrs: {
                portNameLabel: {
                  text: "ID",
                },
                portTypeLabel: {
                  text: "STRING",
                },
              },
            },
            {
              id: "3-2",
              group: "list",
              attrs: {
                portNameLabel: {
                  text: "Name",
                },
                portTypeLabel: {
                  text: "STRING",
                },
              },
            },
            {
              id: "3-3",
              group: "list",
              attrs: {
                portNameLabel: {
                  text: "Age",
                },
                portTypeLabel: {
                  text: "NUMBER",
                },
              },
            },
          ],
        },
        {
          id: "4",
          shape: "edge",
          source: {
            cell: "1",
            port: "1-1",
          },
          target: {
            cell: "2",
            port: "2-3",
          },
          attrs: {
            line: {
              stroke: "#A2B1C3",
              strokeWidth: 2,
            },
          },
          zIndex: 0,
        },
        {
          id: "5",
          shape: "edge",
          source: {
            cell: "3",
            port: "3-1",
          },
          target: {
            cell: "2",
            port: "2-4",
          },
          attrs: {
            line: {
              stroke: "#A2B1C3",
              strokeWidth: 2,
            },
          },
          zIndex: 0,
        },
      ],
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
              y: (index + 1) * this.LINE_HEIGHT,
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
                  width: this.NODE_WIDTH,
                  height: this.LINE_HEIGHT,
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
    const graph = new Graph({
      container: document.getElementById("container"),
      width: 800,
      height: 600,
      background: {
        color: '#fffbe6'
      },
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
    });
    graph.on('cell:dblclick', ({ cell, e }) => {
      const isNode = cell.isNode()
      cell.addTools({
        name: isNode ? 'node-editor' : 'edge-editor',
        args: {
          event: e,
          attrs: {
            backgroundColor: isNode ? '#EFF4FF' : '#FFF',
          },
        },
      })
    })
    const cells = []
    this.datas.forEach(item => {
      if (item.shape === 'edge') {
        cells.push(graph.createEdge(item))
      } else {
        cells.push(graph.createNode(item))
      }
    })
    graph.resetCells(cells)
    graph.zoomToFit({ padding: 10, maxScale: 1 })
  },
};
</script>
