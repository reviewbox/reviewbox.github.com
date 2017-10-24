var Xray = require("x-ray");

var xray = new Xray();

xray('http://pcpartpicker.com/parts/power-supply', '.right-column',
	[{
		title: 'h2',
		searchTitle: '.search-bar',
		links: 'table@html'

		//	xray('table', [{
		//	title: 'tbody tr@html',
		//	d:xray('tr', [{link: 'td@html'}])
		//}])
	}]
)
	//.paginate('a[rel="nofollow"]:last-child@href')
	//.limit(3)
	.write('./results.json');