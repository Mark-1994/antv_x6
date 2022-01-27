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
					fontSize: 14
				},
				buttonGroup: {
					refX: '100%',
					refY: '50%'
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
		{
			id: 'node9',
			label: '表A',
			width: 150,
			height: 24,
			markup: [
				{
					tagName: 'rect',
					selector: 'portBody',
					groupSelector: 'commonStyle'
				},
				{
					tagName: 'text',
					selector: 'portNameLabel',
					groupSelector: 'commonStyle'
				}
			],
			ports: {
				groups: {
					list: {
						markup: [
							{
								tagName: 'rect',
								selector: 'portBody',
							},
							{
								tagName: 'text',
								selector: 'portNameLabel',
							}
						]
					},
				},
			},
			// ports: [
			// 	{
			// 		id: 'node9-1',
			// 		group: 'list',
			// 		attrs: {
			// 			portNameLabel: {
			// 				text: '字段1'
			// 			}
			// 		}
			// 	},
			// 	{
			// 		id: 'node9-2',
			// 		group: 'list',
			// 		attrs: {
			// 			portNameLabel: {
			// 				text: '字段2'
			// 			}
			// 		}
			// 	}
			// ],
			attrs: {
				commonStyle: {
					refWidth: '100%',
					stroke: '#fff',
					fill: '#5F95FF'
				},
				portBody: {
					width: 150, // 宽度
					height: 24, // 高度
					strokeWidth: 1, // 边框宽度
					stroke: '#5F95FF', // 边框颜色
					fill: '#5F95FF', // 背景色
					magnet: false // 当 magnet 属性为 true 时，表示该元素可以被链接，即在连线过程中可以被当做连线的起点或终点，与链接桩类似。
				},
				portNameLabel: {
					ref: 'portBody',
					fontSize: 14
				}
			}
		}
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
		}
	]
}