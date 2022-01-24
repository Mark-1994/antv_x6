<template>
    <div>
        <div>
            <div id="container"></div>
        </div>
        <Button type="primary" @click="resetGraph">画布重绘</Button>
    </div>
</template>

<script>
import { Graph, Shape, Addon } from '@antv/x6'
import { DagreLayout } from '@antv/layout'
import temData from './data.js'
export default {
    name: 'Antv2',
    data () {
        return {
            graph: null,
            dagreLayout: null
        }
    },
    mounted () {
        this.graph = new Graph({
            container: document.getElementById('container'),
            width: 800,
            height: 500,
            background: {
                color: 'rgba(0, 0, 0, .03)' // 画布背景
            },
            panning: {
                enabled: true // 是否启用拖拽
            },
            mousewheel: {
                enabled: true // 是否启用缩放
            },
            selecting: {
                enabled: true, // 启用点选/框选
                showNodeSelectionBox: true, // 是否显示节点的选择框
                rubberband: true, // 启用框选
                modifiers: 'ctrl' // 组合键
            },
            keyboard: {
                enabled: true
            }
        })
        this.dagreLayout = new DagreLayout({
            type: 'dagre',
            rankdir: 'LR',
            ranksep: '30', // 层间距
            nodesep: '10', // 节点间距
            controlPoints: true // 是否保留布局连线的控制点
        })
        this.dagreLayout.layout(temData)
        this.graph.fromJSON(temData)
        // 键盘 delete 事件
        this.graph.bindKey(['delete'], (e) => {
            const cells = this.graph.getSelectedCells()
            if (cells.length) {
                // 删除前移除所有包含工具
                cells.forEach(currentCell => {
                    currentCell.removeTools()
                })
                this.graph.removeCells(cells)
            }
        }, 'keydown')
        // 双击进入编辑模式
        this.graph.on('node:dblclick', ({ e, x, y, node, view }) => {
            console.log(node)
            console.log(x, y)
            node.addTools({
                name: 'node-editor',
                args: {
                    event: e,
                    x,
                    y,
                    attrs: {
                        // fontSize: 12
                    }
                }
            })
        })
    },
    methods: {
        // 画布重绘
        resetGraph () {
            this.graph.fromJSON(temData)
        }
    }
}
</script>

<style scoped>
    #container {
        margin: 0 auto;
    }
</style>