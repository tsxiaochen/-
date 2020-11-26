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
      url: 'https://www.zeiot.cn/anli.php',
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
 //表单提交结束

    onLaunch: function () {
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
