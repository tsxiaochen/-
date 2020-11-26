/**
 * @file demo page for component
 * @author lvlei
 */
/* globals Page, swan */

Page({

    //基本数据输出
    data: {
        
    detail:{},

    },
    fetchDetail: function (id) {

    var that = this;
    swan.request({
      url: 'https://www.zeiot.cn/zixun.php',
      method: 'GET',
      dataType: 'json',
      data: { id: id },
       header: {
        'content-type': 'application/json' 
       },
      success: function (res) {
        
        swan.setPageInfo({
            title: res.data.title,
            keywords:res.data.keywords,
            description:res.data.keywords,
        })
       that.setData({
           detail: res.data,
        
        });

      }
    })
  }
  ,
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

