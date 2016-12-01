var app = getApp()

Page({
  data:{
    majorchoose:false,
    typechoose:false,
    
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
      for (var i = 0; i < major.length; ++i) {
          major[i].ifchoose = false;      
      }
      major[id-1].ifchoose = true;
      var ins = getApp()
      ins.data.Majortag = major[id-1].name
      this.setData({
          major: major,
          majorchoose: id
      })
  },
  choosetype(e) {
    var id = e.currentTarget.id
    var protype = this.data.protype
    for (var i = 0; i < protype.length; ++i) {
          protype[i].ifchoose = false;      
    }
    protype[id-1].ifchoose = true;
    var ins = getApp()
    ins.data.Typetag = protype[id-1].name

    this.setData({
        protype: protype,
        typechoose: id
    })
  },

  addtag() {
    wx.navigateTo({
        url: '../addtag/addtag'
    })
  },

  confirmtag() {
    var ins = getApp()
    ins.data.Confirmtag = true
    console.log(getApp().data.Typetag+' '+getApp().data.Majortag+'  '+ins.data.Confirmtag);
    wx.navigateBack({})
  }
})