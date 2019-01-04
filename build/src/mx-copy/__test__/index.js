/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-copy/__test__/index",["magix","__test__/example","$","__test__/subs","mx-title/second","../index","__test__/hl","__test__/api","__test__/event"],(require,exports,module)=>{
/*Magix,Base,$*/
require("__test__/subs");
require("mx-title/second");
require("../index");
require("__test__/hl");
require("__test__/api");
require("__test__/event");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, success = $$.success, text2 = $$.text2, text3 = $$.text3, options = $$.options, events = $$.events; $p += '<div mxv mxa="_zs_gallerya_:_" class="pr pr120"><div mx-view="__test__/subs?list=' + $i($$ref, [{ name: '使用示例', key: viewId + '_demo' }, { name: 'API', key: viewId + '_api' }, { name: 'Event', key: viewId + '_event' }]) + '"></div><div id="' + $e(viewId) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxv mxa="_zs_gallerya_:a" class="_zs_galleryh"><div mxv mxa="_zs_gallerya_:b" class="_zs_galleryk"><div mxa="_zs_gallerya_:c" class="mb20"><div class="btn btn-brand" mx-success="' + $viewId + 'done2()" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1">复制</div>'; if (success) {
    ;
    $p += '<span mxs="_zs_gallerya_:_" class="color-green ml20">复制成功</span>';
} ; $p += '</div><textarea cols="30" rows="4" id="' + $e(viewId) + '_text_1">Magix棒棒的！</textarea></div><div mxa="_zs_gallerya_:d" class="clearfix"><div mxa="_zs_gallerya_:e" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_gallerya_:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_gallerya_:f" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_gallerya_:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\n    &lt;div class="mb20"&gt;\n        &lt;mx-copy copy-node="&#123;&#123;=viewId&#125;&#125;_text_1" class="btn btn-brand"\n            mx-success="done()"&gt;复制&lt;/mx-copy&gt;\n        &#123;&#123;if success&#125;&#125;\n        &lt;span class="color-green ml20"&gt;复制成功&lt;/span&gt;\n        &#123;&#123;/if&#125;&#125;\n    &lt;/div&gt;\n    &lt;textarea cols="30" rows="4" id="&#123;&#123;=viewId&#125;&#125;_text_1"&gt;Magix棒棒的！&lt;/textarea&gt;</pre></div><div mxa="_zs_gallerya_:g" class="_zs_galleryl _zs_gallerye _zs_galleryf"><div mxs="_zs_gallerya_:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:3})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_3"><span mxa="_zs_gallerya_:h" class="_zs_galleryo">' + $n(text3) + '</span><i mxs="_zs_gallerya_:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_3">\n    let Magix = require(\'magix\');\n    let $ = require(\'$\');\n    \n    module.exports = Magix.View.extend(&#123;\n        tmpl: \'@index.html\',\n        render() &#123;\n            this.updater.digest(&#123;\n                viewId: this.id\n            &#125;);\n        &#125;,\n        \'done&lt;success&gt;\'(e) &#123;\n            this.updater.digest(&#123;\n                success: true\n            &#125;)\n        &#125;\n    &#125;);</pre></div></div></div><div id="' + $e(viewId) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=' + $i($$ref, options) + '" class="mb40"></div><div id="' + $e(viewId) + '_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options=' + $i($$ref, events) + '"></div></div>'; return $p; },
    render: function () {
        var options = [{
                key: 'copy-node',
                desc: '需要复制的节点id',
                type: 'string',
                def: ''
            }];
        var events = [{
                type: 'success',
                desc: '复制成功触发',
                params: [{
                        key: '-',
                        desc: '-',
                        type: '-'
                    }]
            }, {
                type: 'error',
                desc: '复制失败触发',
                params: [{
                        key: '-',
                        desc: '-',
                        type: '-'
                    }]
            }];
        this.updater.digest({
            options: options,
            events: events
        });
    },
    'done2<success>': function (e) {
        this.updater.digest({
            success: true
        });
    }
});

});