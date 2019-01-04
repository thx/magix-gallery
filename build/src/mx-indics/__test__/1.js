/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-indics/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', parents = $$.parents, fields = $$.fields, defaults = $$.defaults, custom = $$.custom, customs = $$.customs, triggerType = $$.triggerType, map = $$.map, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxv mxa="_zs_galleryb#:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryb#:a" class="_zs_galleryk"><div mxs="_zs_galleryb#:_" class="clearfix lh22 mb20"><div class="fl color-9">以下示例：</div><div class="fl"><div>限制指标选择上限4 + 指标可排序，选择指标超过上限的时候，未选择指标禁止选择</div><div>切换为默认显示默认指标，切换自定义显示用户的自定义配置；当自定义配置为 [] 时，等于默认配置，确保每次操作都是有指标的</div></div></div><div mxv mxa="_zs_galleryb#:b" class="clearfix"><div mxv="parents,fields,defaults,customs" class="fl mr20" mx-change="' + $viewId + 'change()" mx-view="mx-indics/index?parents=' + $i($$ref, parents) + '&fields=' + $i($$ref, fields) + '&defaults=' + $i($$ref, defaults) + '&custom=' + $eu(custom) + '&customs=' + $i($$ref, customs) + '&sortable=true&limit=4"></div><div mxa="_zs_galleryb#:c" class="fl"><div mxa="_zs_galleryb#:d" class="clearfix"><span mxs="_zs_galleryb#:a" class="fl color-9">当前操作：</span><span mxa="_zs_galleryb#:e" class="fl">' + $e(triggerType) + '</span></div><div mxa="_zs_galleryb#:f" class="clearfix"><span mxs="_zs_galleryb#:b" class="color-9 fl">指标类型：</span>'; if (custom) {
    ;
    $p += '<span mxs="_zs_galleryb#:c" class="fl">自定义指标</span>';
}
else {
    ;
    $p += '<span mxs="_zs_galleryb#:d" class="fl">默认指标</span>';
} ; $p += '</div><div mxa="_zs_galleryb#:g" class="clearfix"><span mxs="_zs_galleryb#:e" class="color-9 fl">选中指标：</span>'; if (custom) {
    ;
    $p += ' ';
    for (var $art_izzaplyktq$art_i = 0, $art_cavnd$art_c = customs.length; $art_izzaplyktq$art_i < $art_cavnd$art_c; $art_izzaplyktq$art_i++) {
        var key = customs[$art_izzaplyktq$art_i];
        $p += '<span mxa="_zs_galleryb#:h" class="fl mr10">' + $e(map[key]) + '（' + $e(key) + '）</span>';
    }
    ;
    $p += ' ';
}
else {
    ;
    $p += ' ';
    for (var $art_iuexpes$art_i = 0, $art_cdbnxvslko$art_c = defaults.length; $art_iuexpes$art_i < $art_cdbnxvslko$art_c; $art_iuexpes$art_i++) {
        var key = defaults[$art_iuexpes$art_i];
        $p += '<span mxa="_zs_galleryb#:i" class="fl mr10">' + $e(map[key]) + '（' + $e(key) + '）</span>';
    }
    ;
    $p += ' ';
} ; $p += '</div></div></div></div><div mxa="_zs_galleryb#:j" class="clearfix"><div mxa="_zs_galleryb#:k" class="_zs_galleryl _zs_gallerya"><div mxs="_zs_galleryb#:f" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryb#:l" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryb#:g" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-indics \n    parents="&#123;&#123;@parents&#125;&#125;" \n    fields="&#123;&#123;@fields&#125;&#125;" \n    defaults="&#123;&#123;@defaults&#125;&#125;"\n    custom="&#123;&#123;=custom&#125;&#125;"\n    customs="&#123;&#123;@customs&#125;&#125;"\n    sortable="true" \n    limit="4"\n    mx-change="change()"/&gt;</pre></div><div mxa="_zs_galleryb#:m" class="_zs_galleryl _zs_galleryb _zs_galleryf"><div mxs="_zs_galleryb#:h" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_galleryb#:n" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_galleryb#:g" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let fields = [&#123;\n            value: 1, text: \'消耗\', pValue: 1, tip: \'消耗提示文案\'\n        &#125;, &#123;\n            value: 2, text: \'展现量\', pValue: 1\n        &#125;, &#123;\n            value: 3, text: \'点击量\', pValue: 1\n        &#125;, &#123;\n            value: 4, text: \'点击率\', pValue: 1\n        &#125;, &#123;\n            value: 5, text: \'平均点击单价\', pValue: 1, tip: \'平均点击单价提示文案\'\n        &#125;, &#123;\n            value: 6, text: \'点击转化率\', pValue: 2\n        &#125;, &#123;\n            value: 7, text: \'成交笔数\', pValue: 2\n        &#125;, &#123;\n            value: 8, text: \'千次展现成本\', pValue: 2\n        &#125;, &#123;\n            value: 9, text: \'投资回报率\', pValue: 2\n        &#125;, &#123;\n            value: 10, text: \'访问页面数\', pValue: 2\n        &#125;]\n\n        let parents = [&#123;\n            value: 1, text: \'组1\'\n        &#125;, &#123;\n            value: 2, text: \'组2\'\n        &#125;]\n        \n        this.updater.digest(&#123;\n            parents,\n            fields,\n            custom: false, //当前是为默认数据\n            customs: [2,3,4,5],\n            defaults: [2,3]\n        &#125;);\n    &#125;,\n    \'change&lt;change&gt;\'(e)&#123;\n        // e.custom：true or false，是否为自定义指标\n        // e.customs：用户自定义的指标，当前用的的配置\n        // e.defaults：默认指标，不变\n        // e.triggerType：操作类型\n        //      btn-switch 切换自定义和默认设置\n        //      dialog-setting 浮层编辑指标\n    &#125;\n&#125;);</pre></div></div></div>'; return $p; },
    render: function () {
        var fields = [{
                text: '消耗',
                value: 1,
                pValue: 1,
                tip: '消耗提示文案'
            }, {
                text: '展现量',
                value: 2,
                pValue: 1
            }, {
                text: '点击量',
                value: 3,
                pValue: 1
            }, {
                text: '点击率',
                value: 4,
                pValue: 1
            }, {
                text: '平均点击单价',
                value: 5,
                pValue: 1,
                tip: '平均点击单价提示文案'
            }, {
                text: '点击转化率',
                value: 6,
                pValue: 2
            }, {
                text: '成交笔数',
                value: 7,
                pValue: 2
            }, {
                text: '千次展现成本',
                value: 8,
                pValue: 2
            }, {
                text: '投资回报率',
                value: 9,
                pValue: 2
            }, {
                text: '访问页面数',
                value: 10,
                pValue: 2
            }];
        var parents = [{
                text: '组1',
                value: 1
            }, {
                text: '组2',
                value: 2
            }];
        var map = {};
        fields.forEach(function (item) {
            map[item.value] = item.text;
        });
        this.updater.digest({
            parents: parents,
            fields: fields,
            custom: false,
            customs: [2, 3, 4, 5],
            defaults: [2, 3],
            map: map
        });
    },
    'change<change>': function (e) {
        // e.custom：true or false，是否为自定义指标
        // e.customs：用户自定义的指标，当前用的的配置
        // e.defaults：默认指标，不变
        // e.triggerType：
        //      btn-switch 切换自定义和默认设置
        //      dialog-setting 浮层编辑指标
        this.updater.digest({
            custom: e.custom,
            customs: e.customs,
            triggerType: e.triggerType
        });
    }
});

});