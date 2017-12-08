/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-form/__test__/sub',["magix","../index","./sub1"],(require,exports,module)=>{
/*Magix,Form*/
require("./sub1");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Form = require('../index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"__mx-style_index_-form-item __mx-style_index_-clearfix\"><label class=\"__mx-style_index_-form-label __mx-style_index_-form-required\">活动名称：</label><div class=\"__mx-style_index_-form-content\"><input mx-guid=\"g0\u001f\" mx-ssid=\"\u001f0\" class=\"__mx-style_index_-input\" placeholder=\"请填写活动名称\" value=\"<%=$$.nameX1%>\" mx-change=\"\u001f\u001e@{sync.value.from.ui}({c:[{p:'nameX1',f:{required:true,blength:[20,50]}}]})\" mx-focusout=\"\u001f\u001e@{sync.value.from.ui}()\" mx-focusin=\"\u001f\u001e@{sync.value.from.ui}()\"></div></div><div mx-ssid=\"\u001f1\" mx-view=\"mx-form/__test__/sub1\" mx-change=\"\u001f\u001e@{sync.value.from.ui}({c:[{p:'name_sub1',f:{from:'name'}}]})\" mx-focusout=\"\u001f\u001e@{sync.value.from.ui}()\" mx-focusin=\"\u001f\u001e@{sync.value.from.ui}()\"></div>","subs":[{"keys":["nameX1"],"path":"input[mx-guid=\"g0\u001f\"]","attr":"value=\"<%=$$.nameX1%>\"","attrs":[{"n":"value","q":1,"p":1}]}],"file":"mx-form/__test__/sub.html"},
    mixins: [Form],
    init(extra) {
        this.updater.set(extra);
    },
    render() {
        let me = this;
        console.log(me.updater.get());
        me.updater.digest();
    }
});

});