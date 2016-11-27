// pinglun.js

var util = require('../../utils/util.js')
var app = getApp()
var inputContent = {}

Page({
  data: {
    feed:[],
    inputContent: {}
  },
  onLoad: function(e) {
    // 获取feed内容
    var id = e.feedid;
    var f = util.getData();
    var feed_data = f.list;
    this.setData({
      feed: feed_data[id-1]
    });
  },

  bindChange: function(e) {
    inputContent[e.currentTarget.id] = e.detail.value
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