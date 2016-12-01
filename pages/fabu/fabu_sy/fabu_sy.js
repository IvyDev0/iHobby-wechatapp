// pages/fabu/fabu_sy/fabu_sy.js
Page({
    data: {
        grids: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    modalTap: function() {
        wx.navigateTo({
          url: '../fabu2/fabu2'
        })
    }
});