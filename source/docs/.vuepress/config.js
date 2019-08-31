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
				['', '【読書録】'],
				'mathematics',
				'physics',
				'computer_science'
			],
			'/lecture_review/': [
				['', '【授業記録】'],
				['2A/', '2A'],
				['3S/', '3S'],
				['3A/', '3A'],
				['4S/', '4S'],
				['4A/', '4A']
			],
			'/articles/': [
				['', '【記事・まとめ】'],
			],
			'/chitchat/': [
				['', '【雑談】'],
				['diary', '日記'],
				['utokyo', '大学'],
				['china', '中国'],
			],
		}
	},
	base: '/my_page/',
	dest: '../docs/',
	markdown: {
		lineNumbers: true
	}
}
