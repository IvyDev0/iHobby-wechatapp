
Page({
  data: {
    imageList:[]
  },


  onLoad(e) {
     var images = e.imageList;
     this.setData({
       imageList: images
     })

  },


  choosetag: function() {
    wx.navigateTo({
      url: 'fabu_tag/fabu_tag'
    })
  }
})
