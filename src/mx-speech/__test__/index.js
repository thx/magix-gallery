/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-speech/__test__/index",["magix","../index","../../mx-form/index","mx-dropdown/index"],(require,exports,module)=>{
/*Magix,Speech,Form*/
require("mx-dropdown/index");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Speech = require("../index");
var Form = require("../../mx-form/index");
var Examples = {
    'zh-cn': '小时候，乡愁是一枚小小的邮票，我在这头，母亲在那头。长大后，乡愁是一张窄窄的船票，我在这头，新娘在那头。后来啊，乡愁是一方矮矮的坟墓，我在外头，母亲在里头。而现在，乡愁是一湾浅浅的海峡，我在这头，大陆在那头。',
    'en': 'When I was young , my homesickness was a small stamp , I was here , my mother was there . After growing up , my homesickness was a narrow ticket , I was here , my bride was there . Later , my homesickness was a little tomb , I was outside , my mother was inside . And now , my homesickness is a shallow strait , I am here , the mainland is there . '
};
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-speech</h2><div class=\"_B\"><textarea class=\"_aq _p\" style=\"width:90%;height:200px;\" mx-change=\"\u001f\u001e__b({c:[{p:'examples.<%=$eq($$.lang)%>'}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b()\"><%=$$.examples[$$.lang]%></textarea><br><div mx-ssid=\"\u001f0\" mx-change=\"\u001f\u001e__b({c:[{p:'lang',f:{refresh:true}}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b()\" mx-view=\"mx-dropdown/index?selected=<%@$$.lang%>\"><i value=\"zh-cn\" class=\"_ah\">中文</i><i value=\"en\" class=\"_ah\">英文</i></div><button type=\"button\" class=\"_an _ao _v\" mx-click=\"\u001f\u001espeak()\">朗读</button></div>"},
    mixins: [Form],
    init: function () {
        this.capture('speech', new Speech({
            rate: 0.5
        }));
    },
    render: function () {
        var me = this;
        me.updater.digest({
            examples: __assign({}, Examples),
            lang: 'zh-cn'
        });
    },
    'speak<click>': function () {
        var speech = this.capture('speech');
        var data = this.updater.get();
        var lang = data.lang;
        speech.assign({
            lang: lang
        });
        speech.speak(data.examples[lang]);
    }
});

});