// pinglun.js

var util = require('../../../utils/util.js')
var app = getApp()

Page({
  data: {
    feedid:"",
    showinput:false,
    ifliked:false,
    feed_user_icon:"",
    feed_user_name:"",
    feed_time:"",
    feed_text:"",
    feed_post:"",
    like_num:0,
    comment_num:0,
    share_num:0
  },
  onLoad: function(e) {
    // 获取feed内容
    var id = e.feedid;
    var feed = util.getData();
    var feed_data = feed.list;
    this.setData({
      feedid: id,
      showinput: e.showinput,
      ifliked: e.ifliked,
      feed_user_icon: '../'+feed_data[id-1].feed_user_icon,
      feed_user_name: feed_data[id-1].feed_user_name,
      feed_time: feed_data[id-1].feed_time,
      feed_text: feed_data[id-1].feed_text,
      feed_post: '../'+feed_data[id-1].feed_post,
      like_num: feed_data[id-1].like_num,
      comment_num: feed_data[id-1].comment_num,
      share_num: feed_data[id-1].share_num
    });
    console.log('----'+id+' '+this.data.ifliked);
  },

  // Event handler.
  dianzan: function(e) {
    // 对应num+1
    var newlike_num = this.data.like_num+1;
    this.setData({
      ifliked: true,
      like_num: newlike_num
    });
    // 弹出toast
    wx.showToast({
      title: '已赞!'+'\n\n'+'可在“我的”-“已赞”中查看或进行预订！',// TODO: 怎么换行
      icon: 'success',
      duration: 1500
    })
  },
  
})