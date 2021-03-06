require.config({
	paths: {
		"jquery": "../../libs/script/jquery-2.1.1.min",
		"vue": "../../libs/script/vue.min",
		"angular": "../../libs/script/angular.min",
		"angularData": "angularData",
		"angularModule": "angularModule",
		"angularController": "angularController",
		"EnglishData": "EnglishData",
		"ChineseData": "ChineseData",
		"index": "angularIndex",
		"ringlike": "ringlike"
	},
	shim: {
		'angular': {
			'exports': 'angular'
		},
	}
})

require(['jquery', 'angular', 'angularController', 'index'], function($, angular) {
	//angular动态绑定视图
	angular.bootstrap(document, ["dataApp"]);

})