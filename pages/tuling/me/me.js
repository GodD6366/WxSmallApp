Page({
  data:{
    nickName:'',
    avatarUrl:'',
    city:'',
    province:'',
    modalHidden:true
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that=this;
    wx.getUserInfo({
      success:function(res){
        var userInfo = res.userInfo;
        var nickName = userInfo.nickName;
        var avatarUrl = userInfo.avatarUrl;
        var gender = userInfo.gender; //性别 0：未知、1：男、2：女 
        var province = userInfo.province;
        var city = userInfo.city;
        var country = userInfo.country;

        that.setData({
              nickName:nickName,
              avatarUrl:avatarUrl,
              city:city,
              province:province
        })
      }
    })
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
  clear:function(){
    this.setData({
      modalHidden:false
    })
  },
  Changeok:function(){
     wx.clearStorageSync();
     this.Changecancel();
  },
  Changecancel:function(){
    this.setData({
      modalHidden:true
    })
  }
})