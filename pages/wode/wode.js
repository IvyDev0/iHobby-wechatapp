var app = getApp()

Page( {
  data: {
    feed: [],
    feed_length: 0,
    userInfo: {},
    userListInfo: [ {
      icon: '../../images/wode/zan.png',
      text: '已赞',

    }, {
        icon: '../../images/wode/iconfont-card.png',
        text:'关注',
       
      }, {
        icon: '../../images/wode/iconfont-icontuan.png',
        text: '粉丝',
      }, {
        icon: '../../images/wode/iconfont-shouhuodizhi.png',
        text: '订单'
      }, {
        icon: '../../images/wode/iconfont-kefu.png',
        text: '问题'
      }]
  },
  onLoad: function() {
    var that = this,
    var f=util.getData().list;
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
      userInfo: userInfo,   
      feed:f
    })

  })
  }

})

