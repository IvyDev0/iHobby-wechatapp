
Page({
  data:{
    items: [
      {name: 'USA', value: '安全工程'},
      {name: 'CHN', value: '电子信息科学', checked: 'true'},
      {name: 'BRA', value: '计算机科学'},
      {name: 'JPN', value: '高分子材料学'},
      {name: 'ENG', value: '生物学'},
      {name: 'FRA', value: '心理学'},
      ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  checkboxChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  }
})