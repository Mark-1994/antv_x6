module.exports = {
	// 节点
	nodes: [
		{
			id: 'node1', // String，可选，节点的唯一标识
			width: 80,   // Number，可选，节点大小的 width 值
			height: 40,  // Number，可选，节点大小的 height 值
			label: '需求', // String，节点标签
			markup: [
				{
					tagName: 'rect',
					selector: 'body'
				},
				{
					tagName: 'image',
					selector: 'image'
				},
				{
					tagName: 'text',
					selector: 'label'
				}
			],
			attrs: {
				image: {
					xlinkHref: require('../assets/logo.png'),
					width: 16,
					height: 16,
					x: 6,
					y: 12
				},
				label: {
					textWrap: {
						ellipsis: true, // 文本超出显示范围时，自动添加省略号
						width: -50, // 宽度减少 20px
						breakWord: true, // 是否截断单词
						height: '50%' // 高度为参照元素高度的一半
					},
					textAnchor: 'middle',
					textVerticalAnchor: 'middle',
					refX: '50%', // 设置元素 x 坐标
					refY: '50%', // 设置元素 y 坐标
					fontSize: 14,
				},
				buttonGroup: {
					refX: '100%',
					refY: '50%',
				},
				button: {
					text: '2',
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
			markup: [
				{
					tagName: 'rect',
					selector: 'body'
				},
				{
					tagName: 'image',
					selector: 'image'
				},
				{
					tagName: 'text',
					selector: 'label'
				}
			],
			attrs: {
				image: {
					xlinkHref: require('../assets/logo.png'),
					width: 16,
					height: 16,
					x: 6,
					y: 12
				},
				label: {
					textWrap: {
						ellipsis: true,
						width: -50,
						height: '50%' // 高度为参照元素高度的一半
					}
				}
			}
		},
		{
			id: 'node3', // String，节点的唯一标识
			width: 120,   // Number，可选，节点大小的 width 值
			height: 40,  // Number，可选，节点大小的 height 值
			label: '数据融合任务', // String，节点标签
			markup: [
				{
					tagName: 'rect',
					selector: 'body'
				},
				{
					tagName: 'image',
					selector: 'image'
				},
				{
					tagName: 'text',
					selector: 'label'
				}
			],
			attrs: {
				image: {
					xlinkHref: require('../assets/logo.png'),
					width: 16,
					height: 16,
					x: 6,
					y: 12
				},
				label: {
					textWrap: {
						ellipsis: true,
						width: -50,
						height: '50%' // 高度为参照元素高度的一半
					}
				}
			}
		},
		{
			id: 'node4', // String，节点的唯一标识
			width: 120,   // Number，可选，节点大小的 width 值
			height: 40,  // Number，可选，节点大小的 height 值
			label: '作业A', // String，节点标签
			markup: [
				{
					tagName: 'rect',
					selector: 'body'
				},
				{
					tagName: 'image',
					selector: 'image'
				},
				{
					tagName: 'text',
					selector: 'label'
				}
			],
			attrs: {
				image: {
					xlinkHref: require('../assets/logo.png'),
					width: 16,
					height: 16,
					x: 6,
					y: 12
				},
				label: {
					textWrap: {
						ellipsis: true,
						width: -50,
						height: '50%' // 高度为参照元素高度的一半
					}
				}
			}
		},
		{
			id: 'node5', // String，节点的唯一标识
			width: 120,   // Number，可选，节点大小的 width 值
			height: 40,  // Number，可选，节点大小的 height 值
			label: '作业B', // String，节点标签
			markup: [
				{
					tagName: 'rect',
					selector: 'body'
				},
				{
					tagName: 'image',
					selector: 'image'
				},
				{
					tagName: 'text',
					selector: 'label'
				}
			],
			attrs: {
				image: {
					xlinkHref: require('../assets/logo.png'),
					width: 16,
					height: 16,
					x: 6,
					y: 12
				},
				label: {
					textWrap: {
						ellipsis: true,
						width: -50,
						height: '50%' // 高度为参照元素高度的一半
					}
				}
			}
		},
		{
			id: 'node6', // String，节点的唯一标识
			width: 120,   // Number，可选，节点大小的 width 值
			height: 40,  // Number，可选，节点大小的 height 值
			label: '...', // String，节点标签
			markup: [
				{
					tagName: 'rect',
					selector: 'body'
				},
				{
					tagName: 'image',
					selector: 'image'
				},
				{
					tagName: 'text',
					selector: 'label'
				}
			],
			attrs: {
				image: {
					xlinkHref: require('../assets/logo.png'),
					width: 16,
					height: 16,
					x: 6,
					y: 12
				},
				label: {
					textWrap: {
						ellipsis: true,
						width: -50,
						height: '50%' // 高度为参照元素高度的一半
					}
				}
			}
		},
		{
			id: 'node7', // String，节点的唯一标识
			width: 120,   // Number，可选，节点大小的 width 值
			height: 40,  // Number，可选，节点大小的 height 值
			label: '脚本1', // String，节点标签
			markup: [
				{
					tagName: 'rect',
					selector: 'body'
				},
				{
					tagName: 'image',
					selector: 'image'
				},
				{
					tagName: 'text',
					selector: 'label'
				}
			],
			attrs: {
				image: {
					xlinkHref: require('../assets/logo.png'),
					width: 16,
					height: 16,
					x: 6,
					y: 12
				},
				label: {
					textWrap: {
						ellipsis: true,
						width: -50,
						height: '50%' // 高度为参照元素高度的一半
					}
				}
			}
		},
		{
			id: 'node8', // String，节点的唯一标识
			width: 120,   // Number，可选，节点大小的 width 值
			height: 40,  // Number，可选，节点大小的 height 值
			label: '脚本2', // String，节点标签
			markup: [
				{
					tagName: 'rect',
					selector: 'body'
				},
				{
					tagName: 'image',
					selector: 'image'
				},
				{
					tagName: 'text',
					selector: 'label'
				}
			],
			attrs: {
				image: {
					xlinkHref: require('../assets/logo.png'),
					width: 16,
					height: 16,
					x: 6,
					y: 12
				},
				label: {
					textWrap: {
						ellipsis: true,
						width: -50,
						height: '50%' // 高度为参照元素高度的一半
					}
				}
			}
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