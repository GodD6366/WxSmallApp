var wordArray = [ [ "事实上", "virtually" ], [ "解开", "unravel" ],
    [ "诚实", "veracity" ], [ "剪断", "snip" ], [ "术语", "jargon" ],
    [ "发抖", "shudder" ], [ "完全地", "utterly" ], [ "美丽", "beauty" ],
    [ "租户", "tenant" ], [ "记账", "tally" ],
    [ "证明", "warrant" ], [ "表情", "countenance" ], [ "编织", "knit" ], [ "阀", "valve" ], [ "粗俗的", "vulgar" ],
    [ "抱怨", "whine" ], [ "笨蛋", "dunderhead" ], [ "焊接", "weld" ], [ "伪造的", "spurious" ], [ "响亮的", "sonorous" ] ];
var scores = 0;

Page( {
    data: {
        endscore: "0"
    },
    onLoad: function( options ) {
        scores = 0;
        // 页面初始化 options为页面跳转所带来的参数
        for( var i = 1;i <= 6;i++ ) {
            var temp = wx.getStorageSync( '' + i );
            var tempanswer = wx.getStorageSync( temp );
            
            for( var j = 0;j < wordArray.length;j++ ) {
                if( wordArray[ j ][ 0 ] == temp ) {
                    if( wordArray[ j ][ 1 ] == tempanswer ) {
                        scores++;
                    } else {
                        break;
                    }
                }
            }
        }
        //获取数据
        this.setData( {
            endscore: scores
        })
        console.log("得分:"+this.data.endscore);

    },
    onReady: function() {
        // 页面渲染完成
    },
    onShow: function() {
        // 页面显示
        console.log( "页面显示" );
    },
    onHide: function() {
        // 页面隐藏
    },
    onUnload: function() {
        // 页面关闭
        // try {
        //     wx.clearStorageSync()
        // } catch( e ) {
        // }
    }
})