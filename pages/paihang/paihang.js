var base64 = require("../../images/base64");
Page({
    onLoad: function(){
        this.setData({
            icon: base64.icon20
        });
    },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  }

});