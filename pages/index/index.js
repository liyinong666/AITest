Page({
  data: {
    appName: '',
    count: 0
  },

  onLoad() {
    this.setData({
      appName: getApp().globalData.appName
    })
  },

  onTapAdd() {
    this.setData({
      count: this.data.count + 1
    })
  },

  onTapReset() {
    if (this.data.count === 0) {
      return
    }

    this.setData({
      count: 0
    })
  },

  onTapAbout() {
    wx.navigateTo({
      url: '/pages/about/about'
    })
  }
})
