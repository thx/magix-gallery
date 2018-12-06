/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
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
ver:2.0.6
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
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', examples = $$.examples, lang = $$.lang; var $expr, $art, $line; try {
    $p += '<h2 mxs="_K:_">mx-speech</h2><div mxv mxa="_K:_" class="__mx-style_index_-pt20"><textarea mxe="' + $viewId + '_0_' + ($expr = '<%=lang%>', $e(lang)) + '" mxc="[{p:\'examples.' + ($expr = '<%=lang%>', $e(lang)) + '\'}]" class="__mx-style_index_-textarea __mx-style_index_-mb20" style="width:90%;height:200px;">' + ($expr = '<%=examples[lang]%>', $e(examples[lang])) + '</textarea><br mxs="_K:a"/><div mxv="lang" mxe="' + $viewId + '_1" mxc="[{p:\'lang\',f:{refresh:true},a:\'selected\'}]" mx-view="mx-dropdown/index?selected=' + ($expr = '<%@lang%>', $i($$ref, lang)) + '"><i mxs="_K:b" value="zh-cn" class="__mx-style_index_-none">中文</i><i mxs="_K:c" value="en" class="__mx-style_index_-none">英文</i></div><button mxs="_K:d" type="button" class="__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-ml20" mx-click="' + $viewId + 'speak()">朗读</button></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-speech/__test__/index.html';
    throw msg;
} return $p; },
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