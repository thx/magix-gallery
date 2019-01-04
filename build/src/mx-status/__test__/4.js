/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-status/__test__/4",["magix","__test__/example","$","../dropdown","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../dropdown");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
module.exports = Base.extend({
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
} ; var $g = '', $_temp, $p = '', cur = $$.cur, opers = $$.opers, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxv mxa="_zs_galleryd_:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryd_:a" class="_zs_galleryk"><div mxs="_zs_galleryd_:_" class="mb20 clearfix"><div class="fl color-9">以下示例：</div><div class="fl"><div>纯操作项，hover显示操作项</div><div>当前选中项排在第一个</div></div></div><div mxv><span mxa="_zs_galleryd_:b" class="mr40"><span mxs="_zs_galleryd_:a" class="color-9">当前选中项：</span>' + $e(cur.text) + '（' + $e(cur.value) + '）</span><div mxv="opers" mx-change="' + $viewId + 'change()" mx-view="mx-status/dropdown?opers=' + $i($$ref, opers) + '&selected=' + $eu(cur.value) + '"></div></div></div><div mxa="_zs_galleryd_:c" class="_zs_galleryl"><div mxs="_zs_galleryd_:b" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryd_:d" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryd_:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-status.dropdown\n    opers="&#123;&#123;@opers&#125;&#125;" \n    selected="&#123;&#123;=cur.value&#125;&#125;"\n    mx-change="change()"/&gt;</pre></div><div mxa="_zs_galleryd_:e" class="_zs_galleryl"><div mxs="_zs_galleryd_:d" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_galleryd_:f" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_galleryd_:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let opers = [&#123;\n            value: 0,\n            text: \'暂停投放\',\n            icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe67f;&lt;/i&gt;\',\n            color: \'#a40100\'\n        &#125;, &#123;\n            value: 1,\n            text: \'正在投放\',\n            icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe683;&lt;/i&gt;\',\n            color: \'#51a300\'\n        &#125;, &#123;\n            value: 9,\n            text: \'结束投放\',\n            icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe682;&lt;/i&gt;\',\n            color: \'#999999\'\n        &#125;]\n\n        this.updater.digest(&#123;\n            opers,\n            cur: opers[1]\n        &#125;);\n    &#125;,\n    \'change&lt;change&gt;\'(e)&#123;\n        // e.status 完整的对象\n        //      value\n        //      text\n        this.updater.digest(&#123;\n            cur: e.status\n        &#125;);\n    &#125;\n&#125;);</pre></div></div>'; return $p; },
    render: function () {
        var opers = [{
                value: 0,
                text: '暂停投放',
                icon: '<i class="mc-iconfont">&#xe67f;</i>',
                color: '#a40100'
            }, {
                value: 1,
                text: '正在投放',
                icon: '<i class="mc-iconfont">&#xe683;</i>',
                color: '#51a300'
            }, {
                value: 9,
                text: '结束投放',
                icon: '<i class="mc-iconfont">&#xe682;</i>',
                color: '#999999'
            }];
        this.updater.digest({
            opers: opers,
            cur: opers[1]
        });
    },
    'change<change>': function (e) {
        // e.status 完整的对象
        //      value
        //      text
        this.updater.digest({
            cur: e.status
        });
    }
});

});