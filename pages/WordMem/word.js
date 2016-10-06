var wordArray = [ [ "事实上", "virtually" ], [ "解开", "unravel" ],
		[ "诚实", "veracity" ], [ "剪断", "snip" ], [ "术语", "jargon" ],
		[ "发抖", "shudder" ], [ "完全地", "utterly" ], [ "美丽", "beauty" ],
		[ "租户", "tenant" ], [ "记账", "tally" ],
		[ "证明", "warrant" ], [ "表情", "countenance" ], [ "编织", "knit" ], [ "阀", "valve" ], [ "粗俗的", "vulgar" ],
		[ "抱怨", "whine" ], [ "笨蛋", "dunderhead" ], [ "焊接", "weld" ], [ "伪造的", "spurious" ], [ "响亮的", "sonorous" ] ];

var isUse=false;
var key = "";
var worddata = "";
var app = getApp();

Page( {
  data: {
    key: '',
    worddata: '',
    words: null,
    worden: null,
    defclass: "wordbtn",
    defword: "defword",
    selected:["null","null","null","null","null","null"],
    len: 0,
    modalHidden: true,
    modalHidden2:true
  },
  onLoad: function( options ) {
    // 页面初始化 options为页面跳转所带来的参数
    //随机取十个数
    var arr = [], arren = [];
    for( var i = 0;i < 20;i++ ) {
      arr.push( i );
      arren.push( i );
    }
    arr.sort( function() {
      return Math.random() - 0.5;
    });
    arr.length = 6;

    arren.sort( function() {
      return Math.random() - 0.5;
    });
    arren.length = 20;

    app.saveData( 1, wordArray[ arr[ 0 ] ][ 0 ] );
    app.saveData( 2, wordArray[ arr[ 1 ] ][ 0 ] );
    app.saveData( 3, wordArray[ arr[ 2 ] ][ 0 ] );
    app.saveData( 4, wordArray[ arr[ 3 ] ][ 0 ] );
    app.saveData( 5, wordArray[ arr[ 4 ] ][ 0 ] );
    app.saveData( 6, wordArray[ arr[ 5 ] ][ 0 ] );

    this.setData( {
      key:wordArray[ arr[ 0 ] ][ 0 ],
      words: [
        { index: 1, name: wordArray[ arr[ 0 ] ][ 0 ], value: wordArray[ arr[ 0 ] ][ 0 ], checked: 'true' },
        { index: 2, name: wordArray[ arr[ 1 ] ][ 0 ], value: wordArray[ arr[ 1 ] ][ 0 ] },
        { index: 3, name: wordArray[ arr[ 2 ] ][ 0 ], value: wordArray[ arr[ 2 ] ][ 0 ] },
        { index: 4, name: wordArray[ arr[ 3 ] ][ 0 ], value: wordArray[ arr[ 3 ] ][ 0 ] },
        { index: 5, name: wordArray[ arr[ 4 ] ][ 0 ], value: wordArray[ arr[ 4 ] ][ 0 ] },
        { index: 6, name: wordArray[ arr[ 5 ] ][ 0 ], value: wordArray[ arr[ 5 ] ][ 0 ] },
      ],
      worden: [
        { name: wordArray[ arren[ 0 ] ][ 1 ], value: wordArray[ arren[ 0 ] ][ 1 ] },
        { name: wordArray[ arren[ 1 ] ][ 1 ], value: wordArray[ arren[ 1 ] ][ 1 ] },
        { name: wordArray[ arren[ 2 ] ][ 1 ], value: wordArray[ arren[ 2 ] ][ 1 ] },
        { name: wordArray[ arren[ 3 ] ][ 1 ], value: wordArray[ arren[ 3 ] ][ 1 ] },
        { name: wordArray[ arren[ 4 ] ][ 1 ], value: wordArray[ arren[ 4 ] ][ 1 ] },
        { name: wordArray[ arren[ 5 ] ][ 1 ], value: wordArray[ arren[ 5 ] ][ 1 ] },
        { name: wordArray[ arren[ 6 ] ][ 1 ], value: wordArray[ arren[ 6 ] ][ 1 ] },
        { name: wordArray[ arren[ 7 ] ][ 1 ], value: wordArray[ arren[ 7 ] ][ 1 ] },
        { name: wordArray[ arren[ 8 ] ][ 1 ], value: wordArray[ arren[ 8 ] ][ 1 ] },
        { name: wordArray[ arren[ 9 ] ][ 1 ], value: wordArray[ arren[ 9 ] ][ 1 ] },
        { name: wordArray[ arren[ 10 ] ][ 1 ], value: wordArray[ arren[ 10 ] ][ 1 ] },
        { name: wordArray[ arren[ 11 ] ][ 1 ], value: wordArray[ arren[ 11 ] ][ 1 ] },
        { name: wordArray[ arren[ 12 ] ][ 1 ], value: wordArray[ arren[ 12 ] ][ 1 ] },
        { name: wordArray[ arren[ 13 ] ][ 1 ], value: wordArray[ arren[ 13 ] ][ 1 ] },
        { name: wordArray[ arren[ 14 ] ][ 1 ], value: wordArray[ arren[ 14 ] ][ 1 ] },
        { name: wordArray[ arren[ 15 ] ][ 1 ], value: wordArray[ arren[ 15 ] ][ 1 ] },
        { name: wordArray[ arren[ 16 ] ][ 1 ], value: wordArray[ arren[ 16 ] ][ 1 ] },
        { name: wordArray[ arren[ 17 ] ][ 1 ], value: wordArray[ arren[ 17 ] ][ 1 ] },
        { name: wordArray[ arren[ 18 ] ][ 1 ], value: wordArray[ arren[ 18 ] ][ 1 ] },
        { name: wordArray[ arren[ 19 ] ][ 1 ], value: wordArray[ arren[ 19 ] ][ 1 ] },
      ]
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
    try {
      wx.clearStorageSync()
    } catch( e ) {
    }
  },
  //点击中文触发的事件
  SetKey: function( e ) {
    console.log( e );
    console.log( e.detail.value );
    key = e.detail.value;
    this.setData( {
      key: e.detail.value
    })
  },
  //点击英文的时候触发的事件
  SetData: function( e ) {
    var i=1;//当前中文的index
    //获取index
    for(i=1;i<=6;i++){
      var tempword = wx.getStorageSync( '' + i );
      if(this.data.key==tempword)
        break;
    }

    var j=0;
   for(j=0;j<6;j++){
      if(this.data.selected[j]==e.detail.value){
        isUse=true;
        this.setData({
          modalHidden2: false
        }); 
      }
   }

      if(!isUse){
            //给label下面的input赋值
            this.data.selected[i-1]=e.detail.value;
            var temp=this.data.selected;

            this.setData({
              selected:temp
            })

            console.log( e.detail.value );
            worddata = e.detail.value;
            this.setData( {
              worddata: e.detail.value
            })

            //存储数据
            wx.setStorage( {
              key: this.data.key,
              data: this.data.worddata
            })
      }
  },
  show: function( e ) {
    var i=0
    for(i=0;i<6;i++){
      if(this.data.selected[i]=="null"){
        this.setData({
          modalHidden: false
        }); 
      }else{
         if(i==5){
            wx.navigateTo( {
              url: 'endScore/Score'
            })
        }
      }
    }
  },
  modalChange:function(){
    this.setData({
      modalHidden: true
    })
  },
  modalChange2:function(){
    this.setData({
      modalHidden2: true
    })
   isUse=false;
  },
  modalGo:function(){
    this.setData({
      modalHidden: true
    })

    wx.navigateTo( {
       url: 'endScore/Score'
    })
  }
})