//index.js
//获取应用实例
var app = getApp()
Page( {
  data: {
    // 轮播
    images: [
      '../../images/local/d1.png',
      '../../images/local/d2.png',
      '../../images/local/d3.png',
      '../../images/local/d4.png',
      '../../images/local/d5.png'
    ],
    indicatorDots: true,  
    autoplay: true,  
    interval: 5000,  
    duration: 1000,  
    userInfo: {} 
  },
  onLoad: function() {
    console.log( 'onLoad' )
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
