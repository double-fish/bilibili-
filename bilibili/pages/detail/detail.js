// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
videoInfo:null,
otherList:[],
commentData:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
/* console.log(options); */
let videoId=options.id;
this.getCurrentVideo(videoId);
this.getOtherList(videoId);
this.getCommentList(videoId);
  },
/* 根据视频ID获取视频 */
  getCurrentVideo(videoId){
wx.request({
  url:"http://mock-api.com/mnEe4VnJ.mock/videoDetail?id="+videoId,
  
  success:res=>{
    
    if(res.data.code===0){
      this.setData({
        videoInfo:res.data.data.videoInfo
      })
    }
    
  }
})
  },
/*   获取推荐视频 */
  getOtherList(videoId){
    wx.request({
      url:"http://mock-api.com/mnEe4VnJ.mock/otherList?id="+videoId,
      success:res=>{
        if(res.data.code===0){
          this.setData({
            otherList:res.data.data.otherList
          })
        }
      }
    })
    
  },
 /*  获取评论数据 */
 getCommentList(videoId){
wx.request({
  url:"http://mock-api.com/mnEe4VnJ.mock/commentList?id="+videoId,
  success:res=>{
    if(res.data.code===0){
      this.setData({
        commentData:res.data.data.commentData
      })
    }
  }
})
 },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})