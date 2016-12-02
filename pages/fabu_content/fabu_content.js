// pages/fabu_content/fabu_content.wxml
//
// 真正发布信息的页面
// 最终要存储用户发布内容。

var app = getApp()

Page({
  data: {
    imageList:[
      "../../../images/local/d1.png", 
      "../../../images/local/d2.png",
      "../../../images/local/d3.png"
    ],
    tag:false,
    Majortag:'',
    Typetag:'',
  },


  onLoad(e) {
     var imageList = e.imageList
     this.setData({
       //imageList: imageList
     })
  },
  onShow(e) {
    this.setData({
       tag: app.globalData.Confirmtag,
       Majortag:app.globalData.Majortag,
       Typetag:app.globalData.Typetag
     })
  },
  previewImage() {

  },
  chooseImage() {

  },
  send() {
    wx.redirectTo({
      url: '../index/index'
    })
  },
  choosetag() {
    wx.navigateTo({
      url: '../fabu_content_tag/fabu_content_tag'
    })
  }
})
