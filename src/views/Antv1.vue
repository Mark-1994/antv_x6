<template>
  <div class="surface">
    <div id="canvasPanel"></div>
    <!-- 画布 -->
    <div id="minimapContainer"></div>
    <!-- minimap -->
  </div>
</template>

<script>
import { Graph, Shape } from '@antv/x6'
export default {
    name: 'Antv1',
    mounted () {
        this.createGraphic()
    },
    methods: {
        createGraphic () {
            const container = document.getElementById('canvasPanel')
            const minimapContainer = document.getElementById('minimapContainer')
            const width = container.scrollWidth
            const height = (container.scrollHeight || 500) - 20
            this.graph = new Graph({
                container: container,
                width,
                height,
                sorting: 'approx',
                grid: true,
                scroller: {
                    enabled: true,
                    pageVisible: false,
                    pageBreak: true,
                    pannable: true
                },
                minimap: {
                    enabled: true,
                    width: 200,
                    height: 160,
                    padding: 10,
                    container: minimapContainer
                },
                snapline: true, // 对齐线
                connecting: {
                    connectionPoint: {
                        name: 'anchor',
                        args: {
                            sticky: true
                        }
                    },
                    anchor: {
                        name: 'midSide',
                        args: {
                            direction: 'H'
                        }
                    },
                    snap: {
                        radius: 100
                    }, // snap 设置为 true 时连线的过程中距离节点或者连接桩 10px 时会触发自动吸附
                    allowBlank: false, // 是否允许连接到画布空白位置的点
                    allowLoop: false, // 是否允许创建循环连线，即边的起始节点和终止节点为同一节点
                    // 这个是拖拽的时候线的样式，可以在拖拽成功之后再修改线的样式
                    createEdge () {
                        return new Shape.Edge({
                            attrs: {
                                line: {
                                    strokeDasharray: '5 5',
                                    stroke: 'red',
                                    strokeWidth: 2,
                                    sourceMarker: {
                                        tagName: 'circle',
                                        r: 5,
                                        cx: 5,
                                        fill: 'red'
                                    },
                                    targetMarker: {
                                        tagName: 'circle',
                                        r: 5,
                                        cx: 5,
                                        fill: 'red'
                                    }
                                }
                            }
                        })
                    }
                    // 可以写连线的验证
                    // validateConnection({ sourceView, targetView, sourceMagnet, targetMagnet }) {}
                }
            })
            // 这里我只做了连线成功的线样式的处理
            this.graph.on('edge:connected', (args) => {
                const edge = args.edge
                const node = args.currentCell
                const elem = args.currentMagnet
                const protId = elem.getAttribute('port')
                // 触发 port 重新渲染
                node.setPortProp(portId, 'connected', true)
                // 更新连线样式
                edge.attr({
                    line: {
                        strokeDasharray: ''
                    }
                })
            })
            this.graph.on('edge:removed', ({ cell, edge }) => {

            })
            // 双击的时候编辑视图
            this.graph.on('node:dblclick', ({ cell, node }) => {
                // 获取 node 中的 vue 模板数据
                let currentNode = node.store.data.component.data().nodeData
                // 不改变引用地址
                Object.assign(this.currentNode, currentNode)
                this.currentNode.drawer = true
            })
            // 添加刪除按鈕，暂时没有找到删除按钮的回调和样式
            this.graph.on('edge:mouseenter', ({ edge }) => {
                edge.addTools([
                    {
                        name: 'button-remove',
                        args: {
                            distance: -30
                        }
                    }
                ])
            })
            // 删除按钮
            this.graph.on('edge:mouseleave', ({ edge }) => {
                // 可以指定删除某个 tool
                edge.removeTools()
            })
        }
    }
}
</script>