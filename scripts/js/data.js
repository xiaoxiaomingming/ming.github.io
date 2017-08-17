$(function(){
	var cnData = 
	{
		title:'前端开发工程师 明明',
		tips:'暂时比较简陋，正在完善中~',
		clickWorks:'我的作品',
		myworksTitle:'我的作品',
		mymessageTile:'联系我',
		works:[
			{href:'https://www.0-fashion.com',title:'零时尚官网',des:'企业在线官网',bgimage:'content/images/computer1.png'},			
			{href:'https://mall.0-fashion.com',title:'零时尚网上商城',des:'电商类网站',bgimage:'content/images/computer2.png'},
			{href:'https://oa.0-fashion.com',title:'小蝶扫码',des:'工具APP官网在线官网',bgimage:'content/images/computer3.png'},
			{href:'SXM_DEMO/vueCar/buyCar_component.html',title:'Vue购物车',des:'用Vue组件写的购物车',bgimage:'content/images/computer4.png'},
			{href:'https://github.com/sunxiaomingATcn/h5APP_LSS',title:'Hybrid APP',des:'Hbuilder开发混合应用',bgimage:'content/images/computer5.png'},
			{href:'https://github.com/sunxiaomingATcn/sunxiaomingATcn.github.io/tree/master/SXM_DEMO/nodejs',title:'NodeJs爬虫',des:'用NodeJS写的小爬虫demo',bgimage:'content/images/computer6.png'},
			{href:'SXM_DEMO/carousel/carousel.html',title:'JS原生图片轮播插件',des:'用原生js开发的幻灯片插件',bgimage:'content/images/computer7.png'},
			{href:'SXM_DEMO/fileReader/index.html',title:'H5图片上传预览插件',des:'基于FileReader API的图片上传预览插件',bgimage:'content/images/computer8.png'},
			{href:'SXM_DEMO/FullScreenScrolling/index.html',title:'jQuery全屏滚动插件',des:'基于jQuery封装的全屏幕滚动插件',bgimage:'content/images/computer9.png'},
			{href:'SXM_DEMO/demo-dzp/index.html',title:'移动端H5转盘抽奖游戏',des:'',bgimage:'content/images/computer10.png'},
			{href:'https://github.com/sunxiaomingATcn',title:'我的GitHub',des:'',bgimage:'content/images/computer11.png'},
			{href:'http://www.cnblogs.com/xiaomingSun',title:'我的技术博客',des:'',bgimage:'content/images/computer12.png'}
		],
		messages:[
			{classname:'animate-show-up animateDelay1',title:'电话','answer':'请不要来电，本人不在线'},
			{classname:'animate-show-up animateDelay2',title:'QQ','answer':'请不要来电，本人不在线'},
			{classname:'animate-show-up animateDelay3',title:'微信','answer':'请不要来电，本人不在线'},
			{classname:'animate-show-up animateDelay4',title:'前端大牛想对我提出宝贵意见','answer':'不接受任何形式的批评'},
			{classname:'animate-show-up animateDelay5',title:'前端小白渴望与我同流合污','answer':'后续可能做留言板功能'},
			{classname:'animate-show-up animateDelay6',title:'我的尊严','answer':'想吸纳我去贵公司 mingmingsun@163.com'},			
		]
		
	}
	var enData = {
		title:'Web Developer Ming',
		tips:"For the time being, it's being perfected",
		clickWorks:'My work',
		myworksTitle:'My work',
		mymessageTile:'Contact me',
		works:[
			{href:'https://www.0-fashion.com',title:'Zero fashion official website',des:'Enterprise online official website',bgimage:'content/images/computer1.png'},			
			{href:'https://mall.0-fashion.com',title:'Zero fashion online mall',des:'Electricity supplier category website',bgimage:'content/images/computer2.png'},
			{href:'https://oa.0-fashion.com',title:'Kocho scan code',des:'Tools APP official website online official website',bgimage:'content/images/computer3.png'},
			{href:'SXM_DEMO/vueCar/buyCar_component.html',title:'Vue shopping cart',des:'A shopping cart written in Vue components',bgimage:'content/images/computer4.png'},
			{href:'https://github.com/sunxiaomingATcn/h5APP_LSS',title:'Hybrid APP',des:'Hbuilder developing mixed applications',bgimage:'content/images/computer5.png'},
			{href:'https://github.com/sunxiaomingATcn/sunxiaomingATcn.github.io/tree/master/SXM_DEMO/nodejs',title:'NodeJs crawler',des:'A small crawler written in demo NodeJS',bgimage:'content/images/computer6.png'},
			{href:'SXM_DEMO/carousel/carousel.html',title:'JS original picture carousel plugin',des:'Slide plug-in developed with native JS',bgimage:'content/images/computer7.png'},
			{href:'SXM_DEMO/fileReader/index.html',title:'H5 picture upload preview plugin',des:'Picture upload preview plugin based on FileReader API',bgimage:'content/images/computer8.png'},
			{href:'',title:'',des:'',bgimage:'content/images/computer9.png'},
			{href:'SXM_DEMO/demo-dzp/index.html',title:'Mobile terminal H5 turntable sweepstakes game',des:'',bgimage:'content/images/computer10.png'},
			{href:'https://github.com/sunxiaomingATcn',title:'My GitHub',des:'',bgimage:'content/images/computer11.png'},
			{href:'http://www.cnblogs.com/xiaomingSun',title:'My Technical blog',des:'',bgimage:'content/images/computer12.png'}
		],
		messages:[
			{classname:'animate-show-up animateDelay1',title:'Telephone','answer':"Please don't call me, I'm not online"},
			{classname:'animate-show-up animateDelay2',title:'QQ','answer':"Please don't call me, I'm not online"},
			{classname:'animate-show-up animateDelay3',title:'weChat','answer':"Please don't call me, I'm not online"},
			{classname:'animate-show-up animateDelay4',title:'The front bull wants to give me some valuable advice','answer':'Not accepting any form of criticism'},
			{classname:'animate-show-up animateDelay5',title:'The primary front end with my desire','answer':'Follow up may do message board function'},
			{classname:'animate-show-up animateDelay6',title:'My dignity','answer':'Want to take me to your company?:mingmingsun@163.com'},			
		]
	}
	
	//vue实例化
	var app = new Vue({
		el:'#pageContainer',
		data:{switchs:false},
		computed:{
			Language:function(){//控制语言
				return this.switchs?enData:cnData
			}
		}
		
	})
})
