/**
 * @file demo page for component
 * @author lvlei
 */
/* globals Page, swan */

Page({


    //基本数据输出
    data: {

         imgs: [
            "https://www.zeiot.cn/uploads/200203/1-2002031A5523M.jpg",
            "https://www.zeiot.cn/uploads/200203/1-2002031A63C35.jpg",
        ],
        imgs1: [
            "https://www.zeiot.cn/images/1-2002031A5523M1.jpg",
            "https://www.zeiot.cn/images/1-2002031A5523M2.jpg",
            "https://www.zeiot.cn/images/1-2002031A5523M3.jpg",
            "https://www.zeiot.cn/images/1-2002031A5523M4.jpg",
            "https://www.zeiot.cn/images/1-2002031A5523M5.jpg",
        ],
       zixun:[],
       chanpin:[],
       imgUrl: "https://www.zeiot.cn/images/icon1.png",

    },
    fetchData:function(){
      var that = this;
    that.setData({
      hidden: false
    })

    swan.request({
      url: "https://www.zeiot.cn/zixun_list.php",
      success: function (res) {
        swan.setStorage({
            key:'key',
            data: res.data,
        });
        that.setData({
          zixun: res.data
        })

      }
    })


    },  fetchData1:function(){
      var that = this;
    that.setData({
      hidden: false
    })


    swan.request({
      url: "https://www.zeiot.cn/chanpin_list.php",
      success: function (res) {
         swan.setStorage({
            key:'key1',
            data: res.data,
        });
        that.setData({
          chanpin: res.data
        })

      }
    })

    }

    ,anli:function(){
      var that = this;
    that.setData({
      hidden: false
    })

    swan.request({
      url: "https://www.zeiot.cn/anli_list.php",
      success: function (res) {
         swan.setStorage({
            key:'key2',
            data: res.data,
        });
        that.setData({
          anli: res.data
        })

      }
    })

    },onLaunch: function () {
		console.log('SWAN launch');

	},
	onShow: function () {
		console.log('SWAN展现');
	},chanpin:function(){
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
    chanpin1:function(){
          var that = this;

        swan.getStorage({
            key: 'key1',
             success: function (res) {
                that.setData({
                chanpin: res.data
                })

             },

        });
    }, chanpin2:function(){
          var that = this;

        swan.getStorage({
            key: 'key2',
             success: function (res) {
                that.setData({
                anli: res.data
                })

             },

        });
    },
	onHide: function () {
		console.log('SWAN当前处于后台');
	},

  onLoad: function () {
     this.fetchData1();
     this.anli();

     //调用缓存资讯数据实现数据展示
     this.chanpin();
      this.chanpin1();
     this.chanpin2();
     this.fetchData();
  },
   onShow() {
        swan.setPageInfo({
            title: '中易云（唐山）物联网科技有限公司',
            keywords: '中易云,物联网云平台,手机控制PLC,网络组态,远程监控,数据采集系统,物联网平台,物联网系统定制,物联网平台定制,云组态',
            description: '易云系统是一个综合性物联网云平台,为企业提供成熟、安全、可扩展高的物联网云平台。中易云物联网平台包含手机控制PLC、网络组态、远程监控、数据采集系统的众多功能!',

        })

    },

    //表单
    formSubmit: function (e) {

        //console.log(e.detail.value);
        if (e.detail.value.xingming.length == 0 || e.detail.value.xingming.length >= 8) {

          swan.showToast({

            title: '姓名不能为空或过长!',

            icon: 'loading',

            duration: 1500

          })

          setTimeout(function () {

            swan.hideToast()

          }, 2000)

        }
        else if (!this.tel_verify(e.detail.value.xingbie)) {

          swan.showToast({

            title: '电话号码有误!',

            icon: 'loading',

            duration: 1500

          })

          setTimeout(function () {

            swan.hideToast()

          }, 2000)

        }

        else if (e.detail.value.aihao.length == 0) {

            swan.showToast({

            title: '需求不能为空!',

            icon: 'loading',

            duration: 1500

          })

          setTimeout(function () {

            swan.hideToast()

          }, 2000)

        } else {


            swan.request({

            url: 'https://www.zeiot.cn/ceshi/form.php',

            header: {

              "Content-Type": "application/x-www-form-urlencoded"

            },

            method: "POST",

            data: { xingming: e.detail.value.xingming, xingbie: e.detail.value.xingbie, aihao: e.detail.value.aihao },

            success: function (res) {
              console.log(res.data);
              if (res.data.status == 0) {

                swan.showToast({

                  title: '提交失败！！！',

                  icon: 'loading',

                  duration: 1500

                })

              } else {

                swan.showToast({

                  title: '提交成功！',//这里打印出登录成功

                  icon: 'success',

                  duration: 1000

                })

              }

            }

          })

        }

      },
      tel_verify:function(tel){
        var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(16[0-9]{1})|(19[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
        console.log(myreg.test(tel))
        if(myreg.test(tel)){
          return true;
        }else{
          return false;
        }
      },
	onError: function () {
		console.log('SWAN发生错误');
	},
	globalData: 'SWAN'

});



