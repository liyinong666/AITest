const app = getApp()

Page({
  data: {
    appName: '',
    version: ''
  },

  onLoad() {
    this.setData({
      appName: app.globalData.appName,
      version: app.globalData.version
    })
  },

  onTapBack() {
    wx.navigateBack({
      delta: 1
    })
  }
})
