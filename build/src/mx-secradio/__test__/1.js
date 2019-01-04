/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-secradio/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
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
} ; var $g = '', $_temp, $p = '', selected = $$.selected, list = $$.list, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxv mxa="_zs_galleryc%:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryc%:a" class="_zs_galleryk"><div mxs="_zs_galleryc%:_" class="clearfix lh22"><div class="color-9 fl">以下示例：</div><div class="fl"><div>mx-change实时获取选中值</div><div>支持展开收起功能</div><div>父节点，子节点都有前缀</div></div></div><div mxa="_zs_galleryc%:b" class="mb15 lh22"><span mxs="_zs_galleryc%:a" class="color-9">当前选择：</span>' + $e(selected) + '</div><div mxv="list" mx-change="' + $viewId + 'select()" mx-view="mx-secradio/index?list=' + $i($$ref, list) + '&selected=' + $eu(selected) + '&parentPrefix=%E8%AE%A1%E5%88%92&prefix=%E5%8D%95%E5%85%83"></div></div><div mxa="_zs_galleryc%:c" class="_zs_galleryl"><div mxs="_zs_galleryc%:b" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryc%:d" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryc%:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-secradio \n    list="&#123;&#123;@list&#125;&#125;"\n    selected="&#123;&#123;=selected&#125;&#125;"\n    parent-prefix="计划"\n    prefix="单元"\n    mx-change="select()"/&gt;</pre></div><div mxa="_zs_galleryc%:e" class="_zs_galleryl"><div mxs="_zs_galleryc%:d" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_galleryc%:f" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_galleryc%:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@html.html\',\n    render() &#123;\n        let list = [&#123;\n            text: \'单品推广计划1\',\n            subs: [&#123;\n                value: 11,\n                text: \'单品推广计划1_单元1\'\n            &#125;, &#123;\n                value: 12,\n                text: \'单品推广计划1_单元2\'\n            &#125;]\n        &#125;, &#123;\n            text: \'单品推广计划2\',\n            subs: [&#123;\n                value: 21,\n                text: \'单品推广计划2_单元1\'\n            &#125;, &#123;\n                value: 22,\n                text: \'单品推广计划2_单元2\'\n            &#125;]\n        &#125;]\n        this.updater.digest(&#123;\n            list,\n            selected: 21\n        &#125;);\n    &#125;,\n    \'select&lt;change&gt;\'(event)&#123;\n        // $(event.eventTarget) 当前组件\n        this.updater.digest(&#123;\n            selected: $(event.eventTarget).val()\n        &#125;);\n    &#125;\n&#125;);</pre></div></div>'; return $p; },
    render: function () {
        var list = [{
                text: '单品推广计划1',
                subs: [{
                        value: 11,
                        text: '单品推广计划1_单元1'
                    }, {
                        value: 12,
                        text: '单品推广计划1_单元2'
                    }]
            }, {
                text: '单品推广计划2',
                subs: [{
                        value: 21,
                        text: '单品推广计划2_单元1'
                    }, {
                        value: 22,
                        text: '单品推广计划2_单元2'
                    }]
            }];
        this.updater.digest({
            selected: 21,
            list: list
        });
    },
    'select<change>': function (event) {
        this.updater.digest({
            selected: $(event.eventTarget).val()
        });
    }
});

});