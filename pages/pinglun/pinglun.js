// pinglun.js

var util = require('../../utils/util.js')
var app = getApp()

Page({
  data: {
    feed:[],
    inputContent: '',
    userInfo: {}
  },
  
  onLoad: function(e) {
    // 获取feed内容
    var id = e.feedid;
    var f = util.getData();
    var feed_data = f.list;
    this.setData({
      feed: feed_data[id-1]
    });
    app.getUserInfo( function( userInfo ) {
      that.setData( {
      userInfo: userInfo
      })
    })
  },

  // 获取输入评论
  bindKeyInput: function(e) {
    // 更新评论
    this.setData({
      inputContent: e.detail.value,
      // 需要服务器。。。。。。。
    })

  },
  // 点击回车收起键盘，录入输入数据
  bindHideKeyboard: function(e) {
    if (e.detail.value === '\n') {
      //收起键盘
      wx.hideKeyboard()
    }
    // 将this.data.inputContent加入数据库。。。。。。
    
  },
  // Event handler.
  dianzan: function(e) {
    // 对应num+1
    var feed = util.getData();
    var id = e.currentTarget.id, feed_data = feed.list;
    feed_data[id-1].ifliked=true;
    feed_data[id-1].like_num += 1;
    this.setData({
      feed:feed_data[id-1]
    });
    // 弹出toast
    wx.showToast({
      title: '已赞!'+'\n\n'+'可在“我的”-“已赞”中查看或进行预订！',// TODO: 怎么换行
      icon: 'success',
      duration: 1500
    })
  },
})