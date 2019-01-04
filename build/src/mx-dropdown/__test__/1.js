/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', selected = $$.selected, first = $$.first, second = $$.second, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxa="_zs_galleryay:_" class="_zs_galleryh"><div mxa="_zs_galleryay:a" class="_zs_galleryk"><div mxs="_zs_galleryay:_" class="mb20 clearfix"><div class="fl color-9">以下示例：</div><div class="fl"><div>带分组的只能用mx-dropdown.item节点实现</div><div>点击展开下拉选项</div></div></div><div mxa="_zs_galleryay:b" class="clearfix"><div class="w200 fl" mx-view="mx-dropdown/index?selected=' + $eu(selected) + '"><i mxs="_zs_galleryay:a" group="true" class="none">第一组</i>'; for (var $art_ieusqorp$art_i = 0, $art_cigkiktq$art_c = first.length; $art_ieusqorp$art_i < $art_cigkiktq$art_c; $art_ieusqorp$art_i++) {
    var i = first[$art_ieusqorp$art_i];
    $p += '<i value="' + $e(i) + '" class="none">' + $e(i) + '</i>';
} ; $p += '<i mxs="_zs_galleryay:b" group="true" class="none">第二组</i>'; for (var $art_ijfxmcsupw$art_i = 0, $art_cxsmdzrqwo$art_c = second.length; $art_ijfxmcsupw$art_i < $art_cxsmdzrqwo$art_c; $art_ijfxmcsupw$art_i++) {
    var i = second[$art_ijfxmcsupw$art_i];
    $p += '<i value="' + $e(i) + '" class="none">' + $e(i) + '</i>';
} ; $p += '</div><a mxs="_zs_galleryay:c" href="javascript:;" class="btn btn-brand ml20 fl" mx-click="' + $viewId + 'changeData()">修改数据</a></div></div><div mxa="_zs_galleryay:c" class="_zs_galleryl"><div mxs="_zs_galleryay:d" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryay:d" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryay:e" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;div class="clearfix"&gt;\n    &lt;mx-dropdown class="w200 mr20 fl"\n        selected="&#123;&#123;=selected&#125;&#125;"&gt;\n        &lt;mx-dropdown.item group="true"&gt;第一组&lt;/mx-dropdown.item&gt;\n        &#123;&#123;each first as i&#125;&#125;\n        &lt;mx-dropdown.item value="&#123;&#123;=i&#125;&#125;"&gt;&#123;&#123;=i&#125;&#125;&lt;/mx-dropdown.item&gt;\n        &#123;&#123;/each&#125;&#125;\n        &lt;mx-dropdown.item group="true"&gt;第二组&lt;/mx-dropdown.item&gt;\n        &#123;&#123;each second as i&#125;&#125;\n        &lt;mx-dropdown.item value="&#123;&#123;=i&#125;&#125;"&gt;&#123;&#123;=i&#125;&#125;&lt;/mx-dropdown.item&gt;\n        &#123;&#123;/each&#125;&#125;\n    &lt;/mx-dropdown&gt;\n    &lt;a class="btn btn-brand fl" href="javascript:;" \n        mx-click="changeData()"&gt;修改数据&lt;/a&gt;\n&lt;/div&gt;</pre></div><div mxa="_zs_galleryay:e" class="_zs_galleryl"><div mxs="_zs_galleryay:f" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_galleryay:f" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_galleryay:e" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let that = this;\n\n        let first = [],\n            second = [];\n        for (var i = 0; i &lt; 2; i++) &#123;\n            first.push(\'1\' + i);\n            second.push(\'2\' + i);\n        &#125;\n        that.updater.digest(&#123;\n            first,\n            second,\n            selected: 11\n        &#125;);\n    &#125;,\n    \'changeData&lt;click&gt;\' (e) &#123;\n        let first = [],\n            second = [];\n        for (var i = 0; i &lt; 2; i++) &#123;\n            first.push(\'3\' + i);\n            second.push(\'4\' + i);\n        &#125;\n\n        this.updater.digest(&#123;\n            first,\n            second,\n            selected: 31\n        &#125;);\n    &#125;\n&#125;);</pre></div></div>'; return $p; },
    render: function () {
        var that = this;
        var first = [], second = [];
        for (var i = 0; i < 2; i++) {
            first.push('1' + i);
            second.push('2' + i);
        }
        that.updater.digest({
            first: first,
            second: second,
            selected: 11
        });
    },
    'changeData<click>': function (e) {
        var first = [], second = [];
        for (var i = 0; i < 2; i++) {
            first.push('3' + i);
            second.push('4' + i);
        }
        this.updater.digest({
            first: first,
            second: second,
            selected: 31
        });
    }
});

});