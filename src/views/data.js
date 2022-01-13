module.exports = {
	// 节点
	nodes: [
		{
			id: 'node1', // String，可选，节点的唯一标识
			width: 80,   // Number，可选，节点大小的 width 值
			height: 40,  // Number，可选，节点大小的 height 值
			label: '需求', // String，节点标签
			attrs: {
				label: {
					textWrap: {
						ellipsis: true,
						width: -20,
					},
					textAnchor: 'middle',
					textVerticalAnchor: 'middle',
					refX: '50%',
					refY: '50%',
					fontSize: 12,
				},
				buttonGroup: {
					refX: '100%',
					refY: '50%',
				},
				button: {
					fill: '#5F95FF',
					stroke: 'none',
					x: -10,
					y: -10,
					height: 20,
					width: 30,
					rx: 10,
					ry: 10,
					cursor: 'pointer',
					event: 'node:collapse',
				},
				buttonSign: {
					refX: 5,
					refY: -5,
					stroke: '#FFFFFF',
					strokeWidth: 1.6,
				},
			}
		},
		{
			id: 'node2', // String，节点的唯一标识
			width: 120,   // Number，可选，节点大小的 width 值
			height: 40,  // Number，可选，节点大小的 height 值
			label: '数据入湖任务', // String，节点标签
		},
		{
			id: 'node3', // String，节点的唯一标识
			width: 120,   // Number，可选，节点大小的 width 值
			height: 40,  // Number，可选，节点大小的 height 值
			label: '数据融合任务', // String，节点标签
		},
		{
			id: 'node4', // String，节点的唯一标识
			width: 120,   // Number，可选，节点大小的 width 值
			height: 40,  // Number，可选，节点大小的 height 值
			label: '作业A', // String，节点标签
		},
		{
			id: 'node5', // String，节点的唯一标识
			width: 120,   // Number，可选，节点大小的 width 值
			height: 40,  // Number，可选，节点大小的 height 值
			label: '作业B', // String，节点标签
		},
		{
			id: 'node6', // String，节点的唯一标识
			width: 120,   // Number，可选，节点大小的 width 值
			height: 40,  // Number，可选，节点大小的 height 值
			label: '...', // String，节点标签
		},
		{
			id: 'node7', // String，节点的唯一标识
			width: 120,   // Number，可选，节点大小的 width 值
			height: 40,  // Number，可选，节点大小的 height 值
			label: '脚本1', // String，节点标签
		},
		{
			id: 'node8', // String，节点的唯一标识
			width: 120,   // Number，可选，节点大小的 width 值
			height: 40,  // Number，可选，节点大小的 height 值
			label: '脚本2', // String，节点标签
		},
	],
	// 边
	edges: [
		{
			source: 'node1', // String，必须，起始节点 id
			target: 'node2', // String，必须，目标节点 id
		},
		{
			source: 'node1', // String，必须，起始节点 id
			target: 'node3', // String，必须，目标节点 id
		},
		{
			source: 'node2', // String，必须，起始节点 id
			target: 'node4', // String，必须，目标节点 id
		},
		{
			source: 'node2', // String，必须，起始节点 id
			target: 'node5', // String，必须，目标节点 id
		},
		{
			source: 'node3', // String，必须，起始节点 id
			target: 'node6', // String，必须，目标节点 id
		},
		{
			source: 'node5', // String，必须，起始节点 id
			target: 'node7', // String，必须，目标节点 id
		},
		{
			source: 'node5', // String，必须，起始节点 id
			target: 'node8', // String，必须，目标节点 id
		},
	],
};