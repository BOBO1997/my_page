module.exports = {
	title: 'とある情報科学徒の雑談日記',
	description: '欢迎来到我的网站',
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
				'',
				'mathematics',
				'physics',
				'computer_science'
			],
			'/lecture_review/': [
				'',
				['2A/', '2A'],
				['3S/', '3S'],
				['3A/', '3A'],
				['4S/', '4S'],
				['4A/', '4A']
			],
			'/articles/': [
				''
			],
			'/chitchat/': [
				''
			],
		}
	},
	base: '/my_page/',
	dest: '../docs/',
	markdown: {
		lineNumbers: true
	}
}
