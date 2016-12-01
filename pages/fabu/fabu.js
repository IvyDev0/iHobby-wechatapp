const { listToMatrix, always } = require('../../lib/util.js');
const request = require('../../lib/request.js');
const api = require('../../lib/api.js');

Page({
    data: {
        // 相册列表数据
        albumList: [
            "../../../images/local/d1.png", 
            "../../../images/local/d2.png",
            "../../../images/local/d3.png", 
            "../../../images/local/d4.png", 
            "../../../images/local/d5.png", 
            "../../../images/local/d6.png", 
            "../../../images/local/d3.png", 
            "../../../images/local/d4.png", 
            "../../../images/local/d1.png" 
        ],
        buttondisabled:true,
        modalHidden:true,
        source:'',
        // 图片布局列表（二维数组，由`albumList`计算而得）
        layoutList: [],
        // 布局列数
        layoutColumnSize: 3,

        // 是否显示loading
        showLoading: false,

        // loading提示语
        loadingMessage: '',

        // 是否显示toast
        showToast: false,

        // 提示消息
        toastMessage: '',

        // 是否显示动作命令
        showActionsSheet: false,

        // 当前操作的图片
        imageInAction: '',

        // 图片预览模式
        previewMode: false,

        previewNum: 0,

        selectedImg:[],

        // 当前预览索引
        previewIndex: 0,
    },

    // 显示loading提示
    showLoading(loadingMessage) {
        this.setData({ showLoading: true, loadingMessage });
    },

    // 隐藏loading提示
    hideLoading() {
        this.setData({ showLoading: false, loadingMessage: '' });
    },

    // 显示toast消息
    showToast(toastMessage) {
        this.setData({ showToast: true, toastMessage });
    },

    // 隐藏toast消息
    hideToast() {
        this.setData({ showToast: false, toastMessage: '' });
    },

    // 隐藏动作列表
    hideActionSheet() {
        this.setData({ showActionsSheet: false, imageInAction: '' });
    },

    onLoad() {
      wx.showToast({
          title: '加载本地相册…',
          icon: 'loading',
          duration: 1000
      }),
      this.renderAlbumList();
      this.chooseImage();

    },
    // 渲染相册列表
    renderAlbumList() {
        let layoutColumnSize = this.data.layoutColumnSize;
        let layoutList = [];

        if (this.data.albumList.length) {
            layoutList = listToMatrix([0].concat(this.data.albumList), layoutColumnSize);
            let lastRow = layoutList[layoutList.length - 1];
            if (lastRow.length < layoutColumnSize) {
                let supplement = Array(layoutColumnSize - lastRow.length).fill(0);
                lastRow.push(...supplement);
            }
        }
        this.setData({ layoutList });
    },
    mark(event) {
        var num = this.data.previewNum;
        var selected = this.data.selectedImg;
        let imageUrl = event.target.dataset.src;
        let previewIndex = this.data.albumList.indexOf(imageUrl);
        this.setData({
            buttondisabled:false,
            previewIndex: previewIndex,
            previewNum: num+1, 
            selectedImg: selected.concat(this.data.albumList[previewIndex])
        })
    },

    modalTap: function() {
        this.setData({
            modalHidden: false
        })
    },
    // 添加水印-“是”
    modalConfirm: function() {
        wx.navigateTo({
          url: 'fabu_sy/fabu_sy',
        })
    },
    // 添加水印-“否”
    modalCancel: function() {
        this.setData({
            modalHidden: true
        }),
        wx.navigateTo({
          url: 'fabu2/fabu2?imageList='+selectedImg,
        })
    },


    // 从相册选择照片或拍摄照片
    chooseImage() {
        
    },
           

    // 进入预览模式
    enterPreviewMode(event) {
        this.setData({ previewMode: true });
    },

    // 退出预览模式
    leavePreviewMode() {
        this.setData({ previewMode: false, previewIndex: 0 });
    },

    // 显示可操作命令
    showActions(event) {
        this.setData({ showActionsSheet: true, imageInAction: event.target.dataset.src });
    }

});