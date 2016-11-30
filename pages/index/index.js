//index.js

var util = require('../../utils/util.js')
var app = getApp()

Page({
  data: {
    feed: [],
    showActionsSheet: false
  },
  //事件处理函数
  // 点击”分享“、“评论”、“点赞”
  fenxiang: function() {
   this.setData({ 
     showActionsSheet: true
   })
  },
  hideActionSheet() {
    this.setData({ 
      showActionsSheet: false
    });
  },
  pinglun:function(e) {
    var feed = util.getData(),feed_data = feed.list;
    var feedid = e.currentTarget.id;
    var ifliked = feed_data[feedid-1].ifliked;
    wx.navigateTo({
      // 传值给详细页面：feed的id号、是否点了评论、是否点过赞
      url: '../pinglun/pinglun?feedid='+feedid+'&showinput=true'+'&ifliked='+ifliked
    })
  },
  seeuser:function() {
    //wx.navigateTo({ })
  },
  dianzan: function(e) {
    // 对应num+1
    var feed = util.getData();
    var id = e.currentTarget.id, feed_data = feed.list;
    feed_data[id-1].ifliked=true;
    feed_data[id-1].like_num += 1;
    this.setData({
      feed:feed_data
    });
    // 弹出toast
    wx.showToast({
      title: '已赞!'+'\n\n'+'可在“我的”-“已赞”中查看或进行预订！',// TODO: 怎么换行
      icon: 'success',
      duration: 1500
    })
  },

  onPullDownRefresh: function() {
    // Do something when pull down.
    console.log('刷新');
    wx.showNavigationBarLoading();
    setTimeout(function(){wx.hideNavigationBarLoading();wx.stopPullDownRefresh();}, 1500);
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
    console.log('circle 下一页');
    var that = this;
    setTimeout(function(){wx.hideNavigationBarLoading();that.nextLoad();}, 1000);
  },

  onLoad: function () {
    console.log('onLoad')
    //调用应用实例的方法获取全局数据
    this.refresh();
  },

  //使用本地 fake 数据实现刷新效果
  refresh: function(){
    console.log("load data"); 
    var feed = util.getData();
    var feed_data = feed.list;
    this.setData({
      feed:feed_data,
    });
  },
  //使用本地 fake 数据实现继续加载效果
  nextLoad: function(){
    var next = util.getData();
    console.log("continue load");
    var next_data = next.list;
    this.setData({
      feed: this.data.feed.concat(next_data),
    });
  }
})