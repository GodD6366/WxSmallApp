var Util = require('../../../utils/util.js');
var Api = require('../../../utils/api.js');

Page({
  data:{
    info:[],
    replies:[]
  },
  onLoad:function(options){

    // 页面初始化 options为页面跳转所带来的参数 
    var that=this;
    wx.request({
    	url:Api.getTopicInfo({
    		id:options.id
    	}),
    	success:function(res){
    		res.data[0].created = Util.formatTime(Util.transLocalTime(res.data[0].created));
    		console.log(res.data);
    		that.setData({
    			info:res.data
    		})
    	}
    })  

    this.getReplies(options.id); 
  },
  getReplies:function(id){
    var that=this;
    wx.request({
    	url:Api.getReplies({
    		topic_id:id
    	}),
    	success:function(res){
    		console.log(res);
    		res.data.forEach(function(item){
    			item.created=Util.formatTime(Util.transLocalTime(item.created));
    		})
    		console.log(res.data);
    		that.setData({
    			replies:res.data
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
  }
})