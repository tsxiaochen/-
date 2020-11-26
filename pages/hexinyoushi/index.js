/**
 * @file demo page for component
 * @author lvlei
 */
/* globals Page, swan */

Page({




    //基本数据输出
    data: {
      nodes: [],
      hidden: false,

    },
    fetchData: function () {
    var that = this;
    that.setData({
      hidden: false
    })



  },

   onLoad: function () {
    this.fetchData();
  }, onShow() {
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
 //表单提交结束
});

