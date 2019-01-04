/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-tabs/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', list = $$.list, selected = $$.selected, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxv mxa="_zs_galleryd8:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryd8:a" class="_zs_galleryk"><div mxv="list" mx-change="' + $viewId + 'changeTab()" mx-view="mx-tabs/index?list=' + $i($$ref, list) + '&selected=' + $eu(selected) + '"></div><div mxa="_zs_galleryd8:b" class="mt20"><a mxs="_zs_galleryd8:_" href="javascript:;" class="btn btn-brand" mx-click="' + $viewId + 'changeData()">改变数据</a><span mxs="_zs_galleryd8:a" class="ml20 color-9">当前选中：</span><span>' + $e(selected) + '</span></div></div><div mxa="_zs_galleryd8:c" class="clearfix"><div mxa="_zs_galleryd8:d" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_galleryd8:b" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryd8:e" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryd8:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-tabs \n    list="&#123;&#123;@list&#125;&#125;" \n    selected="&#123;&#123;=selected&#125;&#125;"\n    mx-change="changeTab()"&gt;&lt;/mx-tabs&gt;\n\n&lt;a href="javascript:;" class="btn btn-brand" \n    mx-click="changeData()"&gt;改变数据&lt;/a&gt;</pre></div><div mxa="_zs_galleryd8:f" class="_zs_galleryl _zs_gallerye _zs_galleryf"><div mxs="_zs_galleryd8:d" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_galleryd8:g" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_galleryd8:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let list = [&#123;\n            value: 1,\n            text: \'模块1\',\n            tag: \'New\'\n        &#125;, &#123;\n            value: 2,\n            text: \'模块2\'\n        &#125;, &#123;\n            value: 3,\n            text: \'模块3\',\n            tag: \'内容上新\'\n        &#125;];\n\n        this.updater.digest(&#123;\n            list,\n            selected: list[1].value\n        &#125;);\n    &#125;,\n    \'changeData&lt;click&gt;\' (e) &#123;\n        let list = [&#123;\n            value: 4,\n            text: \'新模块1\',\n            tag: \'New\'\n        &#125;, &#123;\n            value: 5,\n            text: \'新模块2\'\n        &#125;];\n        let selected = list[0].value;\n        this.updater.digest(&#123;\n            list,\n            selected\n        &#125;)\n    &#125;,\n    \'changeTab&lt;change&gt;\' (e) &#123;\n        // e.value 当前选中的key值\n        // e.text 当前选中的文案\n        this.updater.digest(&#123;\n            selected: e.value\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>'; return $p; },
    render: function () {
        var list = [{
                value: 1,
                text: '模块1',
                tag: 'New'
            }, {
                value: 2,
                text: '模块2'
            }, {
                value: 3,
                text: '模块3',
                tag: '内容上新'
            }];
        this.updater.digest({
            list: list,
            selected: list[1].value
        });
    },
    'changeData<click>': function (e) {
        var list = [{
                value: 4,
                text: '新模块1',
                tag: 'New'
            }, {
                value: 5,
                text: '新模块2'
            }];
        var selected = list[0].value;
        this.updater.digest({
            list: list,
            selected: selected
        });
    },
    'changeTab<change>': function (e) {
        // e.value 当前选中的key值
        // e.text 当前选中的文案
        this.updater.digest({
            selected: e.value
        });
    }
});

});