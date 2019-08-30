module.exports = {
	title: 'とある情報科学徒の雑談日記',
	themeConfig: {
		nav: [
			{ text: 'Top', link: '/' },
			//{ text: 'About', link: '/about/' },
			{ text: 'Reads', link: '/reads/' },
			{ text: 'Lectures', link: '/lecture_reports/'},
			{ text: 'Chitchat', link: '/chitchat/'},
			{
				text: 'Links',
				items: [
					{ text: 'Twitter', link: 'https://twitter.com/bobo_academia' },
					{ text: 'GitHub', link: 'https://github.com/BOBO1997' },
				]
			}
		],
		sidebar: {	
			'/reads/': [
				'',
				'mathematics',
				'physics',
				'computer_science'
			],
			'/lecture_reports/': [
				'',
				['2A/', '2A'],
				['3S/', '3S'],
				['3A/', '3A'],
				['4S/', '4S'],
				['4A/', '4A']
			],
			'/chitchat/': [
				''
			],
			'/': [
				''
			]
		}
	},
	base: '/my_page/',
	dest: '../docs/'
}
