/**
 * @file demo page for component
 * @author lvlei
 */
/* globals Page, swan */

Page({

    //基本数据输出
    data: {

       chanpin:[],


    },


    fetchData:function(){
      var that = this;
    that.setData({
      hidden: false
    })

    swan.request({
      url: "https://www.zeiot.cn/chanpin_list.php",
      success: function (res) {
         swan.setStorage({
            key:'key40',
            data: res.data,
        });
        that.setData({
          chanpin: res.data
        })
        
      }
    })

    }
    
 
    ,onLaunch: function () {
		console.log('SWAN launch');
	},chanpin10:function(){
          var that = this;
        
        swan.getStorage({
            key: 'key',
             success: function (res) {
                that.setData({
                zixun: res.data
                })

             },

        });
    },
	onShow: function () {
		console.log('SWAN展现');
	},
	onHide: function () {
		console.log('SWAN当前处于后台');
	},

     onShow() {
        swan.setPageInfo({
            title: '中易云（唐山）物联网科技有限公司',
            keywords: '中易云,物联网云平台,手机控制PLC,网络组态,远程监控,数据采集系统,物联网平台,物联网系统定制,物联网平台定制,云组态',
            description: '易云系统是一个综合性物联网云平台,为企业提供成熟、安全、可扩展高的物联网云平台。中易云物联网平台包含手机控制PLC、网络组态、远程监控、数据采集系统的众多功能!',
            
        })
    },
  onLoad: function () {
    this.fetchData();
     this.chanpin10();
  },
	onError: function () {
		console.log('SWAN发生错误');
	},
	globalData: 'SWAN'

});

