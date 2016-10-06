var Api = require( '../../utils/api.js' );
var chart = [];
var top = 0;
Page( {
  data: {
    inputValue: "",
    charts: {},
    scrolltop: 100000
  },
  onLoad: function( options ) {
    // 页面初始化 options为页面跳转所带来的参数
    chart = wx.getStorageSync( "Charts" ) || [];
    this.setData( {
      charts: chart
    })
  },
  onReady: function() {
    // 页面渲染完成
  },
  onShow: function() {
    // 页面显示
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  },
  bindKeyInput: function( e ) {
    var info = e.detail.value;
    this.setData( {
      inputValue: info
    });
  },
  send: function( e ) {
    var that = this;
    var msg = that.data.inputValue;
    chart.push( [ "me", msg ] );

    wx.request( {
      url: Api.getAnswer( {
        info: msg
      }),
      success: function( res ) {
        console.log( res.data.text );
        chart.push( [ "he", res.data.text ] );
        that.setData( {
          inputValue: "",
          charts: chart
        })
        that.saveCharts();
      }
    })

    that.setData( {
      charts: chart
    })
    that.saveCharts();
  },
  saveCharts: function() {
    top += 50;
    wx.setStorageSync( "Charts", chart );
    this.setData( {
      scrolltop: top
    })
  },
  bindscroll: function( e ) {
    top = e.detail.scrollTop;
    console.log( e.detail.scrollTop );
  }
})