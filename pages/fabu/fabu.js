const { listToMatrix, always } = require('../../lib/util.js');

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

    // 从相册选择照片或拍摄照片
    chooseImage() {
        wx.chooseImage({
            count: 9,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],

            success: (res) => {
                this.showLoading('正在上传图片…');

                console.log(api.getUrl('/upload'));
                wx.uploadFile({
                    url: api.getUrl('/upload'),
                    filePath: res.tempFilePaths[0],
                    name: 'image',

                    success: (res) => {
                        let response = JSON.parse(res.data);

                        if (response.code === 0) {
                            console.log(response);

                            let albumList = this.data.albumList;
                            albumList.unshift(response.data.imgUrl);

                            this.setData({ albumList });
                            this.renderAlbumList();

                            this.showToast('图片上传成功');
                        } else {
                            console.log(response);
                        }
                    },

                    fail: (res) => {
                        console.log('fail', res);
                    },

                    complete: () => {
                        this.hideLoading();
                    },
                });

            },
        });
    },

    // 进入预览模式
    enterPreviewMode(event) {
        if (this.data.showActionsSheet) {
            return;
        }

        let imageUrl = event.target.dataset.src;
        let previewIndex = this.data.albumList.indexOf(imageUrl);

        this.setData({ previewMode: true, previewIndex: previewIndex });
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