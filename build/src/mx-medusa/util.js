/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-medusa/util",["./index","magix"],(require,exports,module)=>{
/*I18n,Magix*/

var I18n = require("./index");
var Magix = require("magix");
var Map = {
    zh: 'zh-cn',
    en: 'en-us'
};
var Get = function () {
    var lang = Magix.config('medusa');
    if (!lang) {
        var ua = navigator.userAgent;
        var result = ua.match(/language\/(\S+)/);
        if (result && result.length > 0) {
            lang = result[1];
        }
        else {
            // language 判断除IE外其他浏览器使用语言
            // browserLanguage 判断IE浏览器使用语言
            lang = navigator.language || navigator.browserLanguage || I18n.defaultLocale;
        }
    }
    //获取浏览器配置语言前两位
    lang = Map[(lang.toLowerCase()).substr(0, 2)];
    var map = I18n[lang] || I18n[I18n.defaultLocale];
    return map;
};
module.exports = Get();

});