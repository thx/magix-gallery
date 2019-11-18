/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popmenu/examples/3",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-popmenu_examples_3_","._zs_gallery_mx-popmenu_examples_3_-icon {\n  width: 24px;\n  height: 24px;\n  border-radius: 4px;\n  text-align: center;\n  line-height: 22px;\n  cursor: pointer;\n  color: #ccc;\n  border: 1px solid var(--color-border);\n}\n");
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
} ; var $g = '', $_temp, $p = '', selected = $$.selected, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerydN:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxa="_zs_gallerydN:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxa="_zs_gallerydN:b" class="mb20"><span mxs="_zs_gallerydN:_" class="color-9">trigger：</span><span class="_zs_gallery_mx-popmenu_examples_3_-icon mc-iconfont" mx-change="' + $viewId + 'select()" mx-view="mx-popmenu/index?menus=';
    $line = 6;
    $art = '@[{\n                    value: 1,\n                    text: \'操作1\'\n                }, {\n                    value: 2,\n                    text: \'操作2\'\n                }, {\n                    value: 3,\n                    text: \'操作3\'\n                }]';
    ;
    $p += ($expr = '<%@[{            value: 1,            text: \'操作1\'        }, {            value: 2,            text: \'操作2\'        }, {            value: 3,            text: \'操作3\'        }]%>', $i($$ref, [{ value: 1, text: '操作1' }, { value: 2, text: '操作2' }, { value: 3, text: '操作3' }])) + '">&#xe7be;</span><span mxs="_zs_gallerydN:a" class="color-9 ml40">当前选中：</span><span>';
    $line = 19;
    $art = 'if selected';
    ;
    $expr = '<%if (selected) {%>';
    if (selected) {
        ;
        $p += '操作';
        $line = 19;
        $art = '=selected';
        ;
        $p += ($expr = '<%=selected%>', $e(selected)) + '';
        $line = 19;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</span></div></div><div mxa="_zs_gallerydN:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallerydN:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 24;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerydN:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 26;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerydN:c" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 29;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-popmenu \n    class="icon mc-iconfont"\n    menus="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'操作1\'\n    &#125;, &#123;\n        value: 2,\n        text: \'操作2\'\n    &#125;, &#123;\n        value: 3,\n        text: \'操作3\'\n    &#125;]&#125;&#125;"&gt;&#38;&#35;xe7be;&lt;/mx-popmenu&gt;\n        </pre></div><div mxa="_zs_gallerydN:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallerydN:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">CSS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 46;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerydN:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 48;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerydN:c" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 51;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\n.icon&#123;\n    width: 24px;\n    height: 24px;\n    border-radius: 4px;\n    text-align: center;\n    line-height: 22px;\n    cursor: pointer;\n    color: #ccc;\n    border: 1px solid #e6e6e6;\n&#125;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-popmenu/examples/3.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    },
    'select<change>': function (e) {
        var selected = e.selected;
        this.updater.digest({
            selected: selected
        });
    }
});

});