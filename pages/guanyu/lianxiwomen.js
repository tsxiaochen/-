/**
 * @file demo page for component
 * @author lvlei
 */
/* globals Page, swan */

Page({

    data: {

    },calling: function () {
    swan.makePhoneCall({
      phoneNumber: '13331027879',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
	onLaunch: function () {
		console.log('SWAN launch');
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
	onError: function () {
		console.log('SWAN发生错误');
	},
	globalData: 'SWAN'

});

