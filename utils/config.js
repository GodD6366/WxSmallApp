const HOSTS_MARS="http://japi.juhe.cn/charconvert/change.from";
const MARS_KEY="7ef860d239abcaa5821c378364aa2dcd";
// API_KEY
// const API_KEY="9dc7ab2f8993b0b215ad8c550e1f4ebe";
//翻译
const YOUDAO_API_URL="http://fanyi.youdao.com/openapi.do?keyfrom=WXsmfanyi&key=1679744696&type=data&doctype=json&version=1.1&q=";

function _obj2uri(o){
    return Object.keys(o).map(function(k){
        return encodeURIComponent(k) + "=" + encodeURIComponent(o[k]);
    }).join('&');
}

function _getMars(o){
    console.log(HOSTS_MARS+'?'+_obj2uri(o)+"&key="+MARS_KEY)
    return HOSTS_MARS+'?'+_obj2uri(o)+"&key="+MARS_KEY;
}
module.exports = {
    YOUDAO_API_URL: YOUDAO_API_URL,
    getMars:_getMars
}
