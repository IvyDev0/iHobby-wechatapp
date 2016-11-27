var app = getApp()

Page( {
  data: {
    userInfo: {},
    userListInfo: [ {
      icon: '../../images/wode/yizan.png',
      text: '已赞',

    }, {
        icon: '../../images/wode/guanzhu.png',
        text:'关注',
       
      }, {
        icon: '../../images/wode/fensi.png',
        text: '粉丝',
      }, {
        icon: '../../images/wode/dingdan.png',
        text: '订单'
      }, {
        icon: '../../images/wodd/wenti.png',
        text: '问题'
      }]
  },
  onLoad: function() {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
      userInfo: userInfo
    })

  })
  }

})

