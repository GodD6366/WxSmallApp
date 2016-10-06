const Constant = require( '../../utils/config.js' );
const util = require( '../../utils/util.js' );

Page( {
    data: {
        inputValue: "",
        tranvalue:"",
        loading: false,
        disabled: true,
        modalHidden: true,
        trans: []
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
            url: Constant.YOUDAO_API_URL + this.data.inputValue,
            // header: {
            //     "Content-Type": "application/json",
            // },
            success: function( res ) {
                console.log( res.data );
                // console.log( res.data.translation[ 0 ] );
                // console.log( res.data.web[ 0 ].value );

                if( res.data.errorCode === 0 ) { //成功
                    //跳转地址可以写相对路径,绝对路径一定要以/ 开头 这样写pages/air_quality/result是错误的
                    //   wx.navigateTo( {  
                    //     url:util.createURL( "./result", res.data),
                    //   });
                    result = res.data.basic?res.data.basic.explains:["无相关翻译"];

                }else{
                    that.setData( { //这个位置应该用page的引用调用
                        modalHidden: false,
                        modalErrorText: "翻译失败"
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
    }

})