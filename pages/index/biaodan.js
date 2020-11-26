
//index.js
//获取应用实例
const app = getApp()
Page({

  data: {

  },

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

    } else if (e.detail.value.xingbie.length == 0) {

      swan.showToast({

        title: '电话不能为空!',

        icon: 'loading',

        duration: 1500

      })

      setTimeout(function () {

        swan.hideToast()

      }, 2000)

    } else if (e.detail.value.aihao.length == 0) {

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

              title: '提交成功！！！',//这里打印出登录成功

              icon: 'success',

              duration: 1000

            })

          }

        }

      })

    }

  },

});

