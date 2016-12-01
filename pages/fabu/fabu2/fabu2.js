
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
     var images = e.imageList
     this.setData({
       //imageList: images
     })
     console.log('fabu2:IMAGES-----> '+images)
  },
  onShow(e) {
    var ins = getApp()
    var t = ins.data.Confirmtag
    this.setData({
       tag: t,
       Majortag:ins.data.Majortag,
       Typetag:ins.data.Typetag
     })
  },

  choosetag: function() {
    wx.navigateTo({
      url: 'fabu_tag/fabu_tag'
    })
  }
})
