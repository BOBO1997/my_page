module.exports = {
	title: 'とある情報科学徒の雑談日記',
	description: '欢迎来到我的网站',
	head: [
		['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]
	],
	themeConfig: {
		nav: [
			{ text: 'Top', link: '/' },
			{ text: 'Book Review', link: '/book_review/' },
			{ text: 'Lecture Review', link: '/lecture_review/'},
			{ text: 'Articles', link: '/articles/'},
			{ text: 'Chitchat', link: '/chitchat/'},
			{
				text: 'SNS',
				items: [
					{ text: 'Twitter', link: 'https://twitter.com/bobo_academia' },
					{ text: 'GitHub', link: 'https://github.com/BOBO1997' },
				]
			}
		],
		sidebar: {	
			'/book_review/': [
				//['', '【読書録】'],
				['', '>>>>>>   読書録   <<<<<<'],
				['mathematics','数学書'],
				//['physics','物理書'],
				//['computer_science','計算機科学'],
				['liberal_arts','その他の学問書(?)'],
				//['novels','小説'],
				//['light_novels','ラノベ'],
				['others', 'その他']
			],
			'/lecture_review/': [
				//['', '【授業記録】'],
				['', '>>>>>>  授業日記  <<<<<<'],
				['2A/', '2A'],
				['3S/', '3S'],
				['3A/', '3A'],
				['4S/', '4S'],
				['4A/', '4A']
			],
			/*
			'/articles/': [
				['', '>>>>>> 記事/まとめ <<<<<<'],
				//['mathematics', '数学'],
				//['physics', '物理'],
				//['computer_science', '計算機科学'],
				//['others', 'その他'],
			],
			*/
			'/articles/computer_science/': [
				['', '計算機科学関連:目録'],
				['tsp_by_grover','[量子計算]TSPを解く動的計画法をGrover探索で加速する方法'],
			],
			'/articles/mathematics/': [
				['', '数学関連:目録'],
				['module_to_rep','群環上の加群と有限群の表現との対応まとめ'],
			],
			'/chitchat/': [
				['', '>>>>>>    雑談    <<<<<<'],
				//['', '【雑談】'],
				//['diary', '日記'],
				['utokyo', '大学'],
				//['china', '中国'],
				['vocaloid', 'ボーカロイド'],
				//['animes', 'アニメ'],
			],
		}
	},
	base: '/my_page/',
	dest: '../docs/',
	markdown: {
		lineNumbers: true
	},
	plugins: [
		//'vuepress-plugin-latex',
		[
			'vuepress-plugin-mathjax',
			{
				target: 'svg',
				macros: {
					//'*': '\\times',
				},
			},
		]
	]
}
