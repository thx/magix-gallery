/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-tree/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var Vframe = Magix.Vframe;
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-tree___test___index_","/* @dependent: ./index.less */\n._zs_gallery_mx-tree___test___index_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-tree___test___index_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-tree___test___index_-wrapper {\n  width: 300px;\n  border: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-tree___test___index_-wrapper ._zs_gallery_mx-tree___test___index_-content {\n  padding: 20px 20px 5px 20px;\n}\n");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, selected = $$.selected, viewId = $$.viewId, list = $$.list, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerycy:_" class="_zs_gallery___test___base_-example"><div mxv mxa="_zs_gallerycy:a" class="_zs_gallery___test___base_-eg-content"><div mxs="_zs_gallerycy:_" class="mb10 clearfix"><div class="color-9 fl">使用场景：</div><div class="fl"><div>实时反馈选中结果，每次操作都响应事件</div><div>可展开收起子选项</div></div></div><div mxa="_zs_gallerycy:b" class="mb20"><span mxs="_zs_gallerycy:a" class="color-9">当前已选中：</span>';
    $line = 12;
    $art = '=selected.length';
    ;
    $p += '' + ($expr = '<%=selected.length%>', $e(selected.length)) + '</div><div mxv mxa="_zs_gallerycy:c" class="_zs_gallery_mx-tree___test___index_-wrapper"><div mxv mxa="_zs_gallerycy:d" class="_zs_gallery_mx-tree___test___index_-content"><div mxv="list" id="';
    $line = 16;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_tree" mx-change="' + $viewId + 'change()" mx-view="mx-tree/index?list=';
    $line = 17;
    $art = '@list';
    ;
    $p += '' + ($expr = '<%@list%>', $i(list)) + '"></div></div></div></div><div mxa="_zs_gallerycy:e" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallerycy:b" class="_zs_gallery___test___base_-eg-title">HTML Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 24;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerycy:f" class="_zs_gallery___test___base_-desc-tip">';
    $line = 26;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerycy:c" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 29;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-tree id="&#123;&#123;=viewId&#125;&#125;_tree"\n    list="&#123;&#123;@list&#125;&#125;"\n    mx-change="change()"&gt;&lt;/mx-tree&gt;</pre></div><div mxa="_zs_gallerycy:g" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallerycy:d" class="_zs_gallery___test___base_-eg-title">JS Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 36;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerycy:h" class="_zs_gallery___test___base_-desc-tip">';
    $line = 38;
    $art = '!text2';
    ;
    $p += '' + ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerycy:c" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 41;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Vframe = Magix.Vframe;\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let list = [&#123;\n            value: 1,\n            pValue: \'\',\n            text: \'1\'\n        &#125;, &#123;\n            value: 2,\n            pValue: \'\',\n            text: \'2\'\n        &#125;, &#123;\n            value: 11,\n            pValue: 1,\n            text: \'1-1\'\n        &#125;, &#123;\n            value: 12,\n            pValue: 1,\n            text: \'1-2\'\n        &#125;, &#123;\n            value: 21,\n            pValue: 2,\n            text: \'2-1\'\n        &#125;, &#123;\n            value: 22,\n            pValue: 2,\n            text: \'2-2\'\n        &#125;, &#123;\n            value: 23,\n            pValue: 2,\n            text: \'2-3\'\n        &#125;]\n\n        this.updater.digest(&#123;\n            viewId: this.id,\n            list,\n            selected: []\n        &#125;);\n    &#125;,\n    \'change&lt;change&gt;\'(e) &#123;\n        let tree = Vframe.get(this.id + \'_tree\');\n\n        this.updater.digest(&#123;\n            selected: tree.invoke(\'getBottomValues\')\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-tree/__test__/2.html';
    throw msg;
} return $p; },
    render: function () {
        var list = [{
                value: 1,
                pValue: '',
                text: '1'
            }, {
                value: 2,
                pValue: '',
                text: '2'
            }, {
                value: 11,
                pValue: 1,
                text: '1-1'
            }, {
                value: 12,
                pValue: 1,
                text: '1-2'
            }, {
                value: 21,
                pValue: 2,
                text: '2-1'
            }, {
                value: 22,
                pValue: 2,
                text: '2-2'
            }, {
                value: 23,
                pValue: 2,
                text: '2-3'
            }];
        this.updater.digest({
            list: list,
            selected: []
        });
    },
    'change<change>': function (e) {
        var tree = Vframe.get(this.id + '_tree');
        this.updater.digest({
            selected: tree.invoke('getBottomValues')
        });
    }
});

});