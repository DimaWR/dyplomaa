module.exports.commands = [{
    'event': 'init',
    'alias': ['i'],
    'desc': 'create a new blog by dyplomaa',
    'fn': require('../app/init')
},{
    'event': 'server',
    'alias': ['s'],
    'desc': 'start dyplomaa & server',
    'fn': require('../app/server')
},{
	'event':'sample',
	'alias':[],
	'desc':'create a new sample of dyplomaa',
	'fn':require('../app/sample').init
},{
	'event':'new',
	'alias':['n'],
	'desc':'create a new article of dyplomaa',
	'fn':require('../app/article').newArticle
},{
	'event':'remove',
	'alias':['r'],
	'desc':'delete an article of dyplomaa',
	'fn':require('../app/article').removeArticle
},{
	'event':'generate',
	'alias':['g'],
	'desc':'generate all file to html',
	'fn':require('../app/generate')
},{
	'event':'deploy',
	'alias':['d'],
	'desc':'deploy blog file to repo',
	'fn':require('../app/deploy')
}];

module.exports.helps = [{
	'event':'h',
	'fullname':'help',
	'desc':'dyplomaa commands list',
	'fn':require('../app/helps').help
},{
	'event':'v',
	'fullname':'version',
	'desc':'dyplomaa version',
	'fn':require('../app/helps').version
}]