<template>
    <div id="container"></div>
</template>

<script>
import { Graph, Shape } from '@antv/x6'
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
                color: 'rgba(0, 0, 0, .03)'
            }
        })
        this.dagreLayout = new DagreLayout({
            type: 'dagre',
            rankdir: 'LR',
            ranksep: '30', // 层间距
            nodesep: '10', // 节点间距
            controlPoints: true // 是否保留布局连线的控制点
        })
        this.rect = new Shape.Rect({
            attrs: {
                label: {
                    fontSize: 12
                }
            }
        })
        console.log(this.rect)
        this.dagreLayout.layout(temData)
        this.graph.fromJSON(temData)
    }
}
</script>

<style scoped>
    #container {
        margin: 0 auto;
    }
</style>