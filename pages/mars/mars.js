const Constant = require( '../../utils/config.js' );
Page( {
    data: {
        inputValue: "",
        tranvalue:"",
        loading: false,
        disabled: true,
        modalHidden: true,
        trans: [],
        items:[
          {
           name:"0" ,value:"简体" ,checked:""
          },
          {
           name:"1" ,value:"繁体" ,checked:""
          },
          {
           name:"2" ,value:"火星文" ,checked:"true"
          }
        ],
        type:2
    },
    bindKeyInput: function( e ) {
        var info = e.detail.value;
        this.setData( {
            inputValue: info,
            disabled: !info.length > 0
        });
    },
    search: function( e ) {
        var result = [];
        //查询按钮
        this.setData( {
            tranvalue:this.data.inputValue,
            loading: true,
            disabled: true
        });
        let that = this;//保留page函数中object的引用				
        //联网
        wx.request( {
            url: Constant.getMars({
              text:that.data.inputValue,
              type:that.data.type
            }),
            success: function( res ) {
                console.log( res.data );
                if( res.data.error_code === 0 ) { //成功
                    result = res.data.outstr?res.data.outstr:[""];
                }else{
                    that.setData( { //这个位置应该用page的引用调用
                        modalHidden: false,
                        modalErrorText: "转换失败"
                    });
                }
            },
            fail: function() {
                //console.log(this); //这时候的this不是Page了
                that.setData( { //这个位置应该用page的引用调用
                    modalHidden: false,
                    modalErrorText: "请求失败,请检测网络"
                })
            },
            complete: function() {
                console.log( "complete" )
                that.setData( {
                    loading: false,
                    disabled: false,
                    trans: result
                })
            }
        })
    },
    onLoad: function( options ) {
        // 页面初始化 options为页面跳转所带来的参数
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
    radioChange:function(e){
      console.log(e.detail.value)
      this.setData({
        type:e.detail.value
      })
    }

})