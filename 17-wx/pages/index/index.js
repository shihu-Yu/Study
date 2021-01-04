Page({

  /**
   * 页面的初始数据
   */
  data: {
      message:"大鱼的翅膀",
      list:[
        {id:1,task:"xixxi"},
        {id:2,task:"你是我的眼"}
      ],
      show:true
  },
  // bindtap:function(){
  //   console.log('bindtab...')
  // },
  bindtap:function(event){
    // 通过event获取传递过来的数据
    console.log(event.currentTarget.dataset.id)
    console.log(event.currentTarget.dataset.age)
  },
  handleTap1:function(){
    console.log('handleTap1...')
  },  
  handleTap2:function(){
    console.log('handleTap2...')
  },
  handleTap3:function(){
    console.log('handleTap3...')
  },
  gotoDetail:function(){
    wx.navigateTo({
      url: "../../pages/detail/index"
    })
  },
  gotoCart(){
    wx.switchTab({
      url: '../../pages/cart/index',
    })
  },
  gotoDetail2:function(){
    wx.navigateTo({
      url: "../../pages/detail/index"
    })
  },
  //更新数据 setState 
  updata:function(){
    // 这里的this指向page
    this.setData({
      message:'明天,你好'
    },()=>{
      // 该回调函数是在页面渲染完成之后执行的
      console.log('updata done')
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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