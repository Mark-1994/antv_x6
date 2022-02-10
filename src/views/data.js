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
				},
				{
					tagName: 'g',
					selector: 'buttonGroup',
					children: [
						{
							tagName: 'rect',
							selector: 'button',
						},
						{
							tagName: 'path',
							selector: 'buttonSign',
						},
					],
				}
			],
			attrs: {
				body: {
					strokeWidth: 1,
				},
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
					refY: '25%'
				},
				button: {
					fill: '#5F95FF',
					stroke: 'none',
					height: 20,
					width: 30,
					rx: 10,
					ry: 10,
					cursor: 'pointer',
					event: 'node:collapse', // 自定义事件
				},
				buttonSign: {
					refX: 5,
					refY: 5,
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
				body: {
					strokeWidth: 1,
				},
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
				body: {
					strokeWidth: 1,
				},
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
				body: {
					strokeWidth: 1,
				},
				image: {
					xlinkHref: 'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*evDjT5vjkX0AAAAAAAAAAAAAARQnAQ',
					width: 20,
					height: 20,
					x: 6,
					y: 10
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
				body: {
					strokeWidth: 1,
				},
				image: {
					xlinkHref: 'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*evDjT5vjkX0AAAAAAAAAAAAAARQnAQ',
					width: 20,
					height: 20,
					x: 6,
					y: 10
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
				body: {
					strokeWidth: 1,
				},
				image: {
					xlinkHref: 'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*evDjT5vjkX0AAAAAAAAAAAAAARQnAQ',
					width: 20,
					height: 20,
					x: 6,
					y: 10
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
				body: {
					strokeWidth: 1,
				},
				image: {
					xlinkHref: 'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*evDjT5vjkX0AAAAAAAAAAAAAARQnAQ',
					width: 20,
					height: 20,
					x: 6,
					y: 10
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
				body: {
					strokeWidth: 1,
				},
				image: {
					xlinkHref: 'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*evDjT5vjkX0AAAAAAAAAAAAAARQnAQ',
					width: 20,
					height: 20,
					x: 6,
					y: 10
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
					groupSelector: 'commonStyle1'
				}
			],
			// ports: {
			// 	groups: {
			// 		list: {
			// 			markup: [
			// 				{
			// 					tagName: 'rect',
			// 					selector: 'portBody'
			// 				},
			// 				{
			// 					tagName: 'text',
			// 					selector: 'portNameLabel'
			// 				}
			// 			],
			// 			attrs: {
			// 				portNameLabel: {
			// 					text: '字段1'
			// 				}
			// 			}
			// 		},
			// 	},
			// },
			ports: [
				{
					id: 'node9-1',
					markup: [
						{
							tagName: 'rect',
							selector: 'portBody'
						},
						{
							tagName: 'text',
							selector: 'portNameLabel'
						}
					],
					attrs: {
						portBody: {
							width: 150, // 宽度
							height: 24, // 高度
							x: 0,
							y: 18,
							strokeWidth: 1, // 边框宽度
							stroke: '#5F95FF', // 边框颜色
							fill: '#EFF4FF', // 背景色
							magnet: false // 当 magnet 属性为 true 时，表示该元素可以被链接，即在连线过程中可以被当做连线的起点或终点，与链接桩类似。
						},
						portNameLabel: {
							text: '字段1',
							x: 58,
							y: 35
						}
					}
				},
				{
					id: 'node9-2',
					markup: [
						{
							tagName: 'rect',
							selector: 'portBody'
						},
						{
							tagName: 'text',
							selector: 'portNameLabel'
						}
					],
					attrs: {
						portBody: {
							width: 150, // 宽度
							height: 24, // 高度
							x: 0,
							y: 30,
							strokeWidth: 1, // 边框宽度
							stroke: '#5F95FF', // 边框颜色
							fill: '#EFF4FF', // 背景色
							magnet: false // 当 magnet 属性为 true 时，表示该元素可以被链接，即在连线过程中可以被当做连线的起点或终点，与链接桩类似。
						},
						portNameLabel: {
							text: '字段2',
							x: 58,
							y: 47
						}
					}
				}
			],
			attrs: {
				commonStyle: {
					refWidth: '100%',
					stroke: '#fff',
					fill: '#5F95FF'
				},
				commonStyle1: {
					fill: '#fff'
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
		},
		{
			id: 'node10',
			label: '表B',
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
					groupSelector: 'commonStyle1'
				}
			],
			ports: [
				{
					id: 'node10-1',
					markup: [
						{
							tagName: 'rect',
							selector: 'portBody'
						},
						{
							tagName: 'text',
							selector: 'portNameLabel'
						}
					],
					attrs: {
						portBody: {
							width: 150, // 宽度
							height: 24, // 高度
							x: 0,
							y: 18,
							strokeWidth: 1, // 边框宽度
							stroke: '#5F95FF', // 边框颜色
							fill: '#EFF4FF', // 背景色
							magnet: false // 当 magnet 属性为 true 时，表示该元素可以被链接，即在连线过程中可以被当做连线的起点或终点，与链接桩类似。
						},
						portNameLabel: {
							text: '字段1',
							x: 58,
							y: 35
						}
					}
				},
				{
					id: 'node10-2',
					markup: [
						{
							tagName: 'rect',
							selector: 'portBody'
						},
						{
							tagName: 'text',
							selector: 'portNameLabel'
						}
					],
					attrs: {
						portBody: {
							width: 150, // 宽度
							height: 24, // 高度
							x: 0,
							y: 30,
							strokeWidth: 1, // 边框宽度
							stroke: '#5F95FF', // 边框颜色
							fill: '#EFF4FF', // 背景色
							magnet: false // 当 magnet 属性为 true 时，表示该元素可以被链接，即在连线过程中可以被当做连线的起点或终点，与链接桩类似。
						},
						portNameLabel: {
							text: '字段2',
							x: 58,
							y: 47
						}
					}
				}
			],
			attrs: {
				commonStyle: {
					refWidth: '100%',
					stroke: '#fff',
					fill: '#5F95FF'
				},
				commonStyle1: {
					fill: '#fff'
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
		},
		{
			id: 'node11',
			label: '表AB',
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
					groupSelector: 'commonStyle1'
				}
			],
			ports: [
				{
					id: 'node11-1',
					markup: [
						{
							tagName: 'rect',
							selector: 'portBody'
						},
						{
							tagName: 'text',
							selector: 'portNameLabel'
						}
					],
					attrs: {
						portBody: {
							width: 150, // 宽度
							height: 24, // 高度
							x: 0,
							y: 13,
							strokeWidth: 1, // 边框宽度
							stroke: '#5F95FF', // 边框颜色
							fill: '#EFF4FF', // 背景色
							magnet: false // 当 magnet 属性为 true 时，表示该元素可以被链接，即在连线过程中可以被当做连线的起点或终点，与链接桩类似。
						},
						portNameLabel: {
							text: '字段1',
							x: 58,
							y: 30
						}
					}
				}
			],
			attrs: {
				commonStyle: {
					refWidth: '100%',
					stroke: '#fff',
					fill: '#5F95FF'
				},
				commonStyle1: {
					fill: '#fff'
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
		},
		{
			id: 'node12', // String，节点的唯一标识
			width: 120,   // Number，可选，节点大小的 width 值
			height: 40,  // Number，可选，节点大小的 height 值
			label: '服务接口', // String，节点标签
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
				body: {
					strokeWidth: 1,
				},
				image: {
					xlinkHref: 'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*evDjT5vjkX0AAAAAAAAAAAAAARQnAQ',
					width: 20,
					height: 20,
					x: 6,
					y: 10
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
			id: 'node13', // String，节点的唯一标识
			width: 120,   // Number，可选，节点大小的 width 值
			height: 40,  // Number，可选，节点大小的 height 值
			label: '标签A', // String，节点标签
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
				body: {
					strokeWidth: 1,
				},
				image: {
					xlinkHref: 'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*evDjT5vjkX0AAAAAAAAAAAAAARQnAQ',
					width: 20,
					height: 20,
					x: 6,
					y: 10
				},
				label: {
					textWrap: {
						ellipsis: true,
						width: -50,
						height: '50%' // 高度为参照元素高度的一半
					}
				}
			}
		}
	],
	// 边
	edges: [
		{
			source: 'node1', // String，必须，起始节点 id
			target: 'node2', // String，必须，目标节点 id
			attrs: {
				line: {
					strokeWidth: 1
				}
			}
		},
		{
			source: 'node1', // String，必须，起始节点 id
			target: 'node3', // String，必须，目标节点 id
			attrs: {
				line: {
					strokeWidth: 1
				}
			}
		},
		{
			source: 'node2', // String，必须，起始节点 id
			target: 'node4', // String，必须，目标节点 id
			attrs: {
				line: {
					strokeWidth: 1
				}
			}
		},
		{
			source: 'node2', // String，必须，起始节点 id
			target: 'node5', // String，必须，目标节点 id
			attrs: {
				line: {
					strokeWidth: 1
				}
			}
		},
		{
			source: 'node3', // String，必须，起始节点 id
			target: 'node6', // String，必须，目标节点 id
			attrs: {
				line: {
					strokeWidth: 1
				}
			}
		},
		{
			source: 'node5', // String，必须，起始节点 id
			target: 'node7', // String，必须，目标节点 id
			attrs: {
				line: {
					strokeWidth: 1
				}
			}
		},
		{
			source: 'node5', // String，必须，起始节点 id
			target: 'node8', // String，必须，目标节点 id
			attrs: {
				line: {
					strokeWidth: 1
				}
			}
		},
		{
			source: 'node7', // String，必须，起始节点 id
			target: {
				cell: 'node9',
				port: 'node9-1'
			},
			attrs: {
				line: {
					strokeWidth: 1
				}
			},
			router: {
				name: 'er',
				args: {
					direction: 'H'
				}
			}
		},
		{
			source: 'node7', // String，必须，起始节点 id
			target: {
				cell: 'node9',
				port: 'node9-2'
			},
			attrs: {
				line: {
					strokeWidth: 1
				}
			},
			router: {
				name: 'er',
				args: {
					direction: 'H'
				}
			}
		},
		{
			source: 'node8', // String，必须，起始节点 id
			target: {
				cell: 'node10',
				port: 'node10-1'
			},
			attrs: {
				line: {
					strokeWidth: 1
				}
			},
			router: {
				name: 'er',
				args: {
					direction: 'H'
				}
			}
		},
		{
			source: 'node8', // String，必须，起始节点 id
			target: {
				cell: 'node10',
				port: 'node10-2'
			},
			attrs: {
				line: {
					strokeWidth: 1
				}
			},
			router: {
				name: 'er',
				args: {
					direction: 'H'
				}
			}
		},
		{
			source: {
				cell: 'node9',
				port: 'node9-2'
			},
			target: {
				cell: 'node11',
				port: 'node11-1'
			},
			attrs: {
				line: {
					strokeWidth: 1
				}
			},
			router: {
				name: 'er',
				args: {
					direction: 'H'
				}
			}
		},
		{
			source: {
				cell: 'node10',
				port: 'node10-1'
			},
			target: {
				cell: 'node11',
				port: 'node11-1'
			},
			attrs: {
				line: {
					strokeWidth: 1
				}
			},
			router: {
				name: 'er',
				// name: 'manhattan',
				args: {
					direction: 'H'
				}
			}
		},
		{
			source: 'node11', // String，必须，起始节点 id
			target: 'node12', // String，必须，目标节点 id
			attrs: {
				line: {
					strokeWidth: 1
				}
			}
		},
		{
			source: {
				cell: 'node11',
				port: 'node11-1'
			},
			target: 'node13', // String，必须，目标节点 id
			attrs: {
				line: {
					strokeWidth: 1
				}
			}
		}
	]
}