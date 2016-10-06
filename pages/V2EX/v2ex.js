var Api = require('../../utils/api.js');
Page({
  data:{
    // text:"这是一个页面"
    topics:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that=this;
    wx.request({
    	url: Api.getHotestTopic({
    		p:null
    	}),
    	success:function(res){
    		console.log(res);
        that.setData({
          topics:res.data
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
  showdetail:function(e){

  	var id = e.currentTarget.id,
    url = 'detail/detail?id=' + id;
      
    wx.navigateTo({
      url: url
    })
  	console.log(e.currentTarget.id);
  }
})