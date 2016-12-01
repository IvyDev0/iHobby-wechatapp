Page({
  data:{
    majorchoose:false,
    ifchoose:false,
    
    major:[{
          "id":1,
          "name":"心理学",
          "ifchoose":false
      },{
          "id":2,
          "name":"计算机",
          "ifchoose":false
      },{
          "id":3,
          "name":"数学",
          "ifchoose":false
      },{
          "id":4,
          "name":"化学",
          "ifchoose":false
      }],
    
    protype:[{
          "id":1,
          "name":"手机壳",
          "ifchoose":false
      },{
          "id":2,
          "name":"卡贴",
          "ifchoose":false
      },{
          "id":3,
          "name":"水杯",
          "ifchoose":false
      },{
          "id":4,
          "name":"T恤",
          "ifchoose":false
      }]

  },
  onLoad:function(options){

  },

  choosemajor(e) {
      var id = e.currentTarget.id
      var major = this.data.major
      // 一个for循环判断其他的ifchoose
      major[id-1].ifchoose = true;
      this.setData({
          major: major
      })
  },
  choosetype(e) {
    var id = e.currentTarget.id
    var protype = this.data.protype
    protype[id-1].ifchoose = true;name
    console.log(protype[id-1].ifchoose);

    this.setData({
        protype: protype
    })
  },

  addtag() {
    wx.navigateTo({
        url: '../addtag/addtag'
    })
  },
  confirmtag() {
      wx.navigateBack({
        delta: 1, // 回退前 delta(默认为1) 页面
        success: function(res){
          // success
          // 传值
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
  }
})