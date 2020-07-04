Page({

  /**
   * 页面的初始数据
   */
  data: {
  navList:[],
  currentIndexNav:0,
  swiperList:[],
  videoList:[]
  },
  activeNav(e){
this.setData({
  currentIndexNav:e.target.dataset.index
})

  },
  getNavList(){
    
      wx.request({
        url:"http://mock-api.com/mnEe4VnJ.mock/navList",
     success:res=>{
       if(res.data.code===0){
         this.setData({
           navList:res.data.data.navList
         })
       }
 /*     this.navList=res.data.data.navList */
      /*  console.log(res); */
       
     }
      })
    },
    getSwiperList(){
      wx.request({
        url:"http://mock-api.com/mnEe4VnJ.mock/swiperList",
        success:res=>{
          if(res.data.code===0){
            this.setData({
              swiperList:res.data.data.swiperList
            })
          }
         
        }
      })
    },
    getVideoList(){
  wx.request({
    url:"http://mock-api.com/mnEe4VnJ.mock/videoList",
    success:res=>{
      if(res.data.code===0){
        this.setData({
          videoList:res.data.data.videoList
        })
      }
      
    }
  })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList();
    this.getSwiperList();
    this.getVideoList();
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