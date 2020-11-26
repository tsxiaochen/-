/**
 * @file demo page for component
 * @author lvlei
 */
/* globals Page, swan */

Page({

    //基本数据输出
    data: {

       article:[],


    },
  
     fetchDetail: function (id) {
    var that = this;
    swan.request({
      url: 'https://www.zeiot.cn/chanpin.php',
      data: { id: id },
      success: function (res) {

            swan.setPageInfo({
            title: res.data.title,
            keywords:res.data.keywords,
            description:res.data.keywords,
        })
        that.setData({
          article: res.data
        })

        setTimeout(function () {
          that.setData({
            hidden: true
          })
        }, 300)
      }
    })
  }

    ,onLaunch: function () {
		console.log('SWAN launch');
	},
	onShow: function () {
		console.log('SWAN展现');
	},
	onHide: function () {
		console.log('SWAN当前处于后台');
	},

   onLoad: function (options) {
    this.setData({
      hidden: false
    })
    this.fetchDetail(options.id);
  },
	onError: function () {
		console.log('SWAN发生错误');
	},
	globalData: 'SWAN'

});

