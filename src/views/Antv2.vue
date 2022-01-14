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