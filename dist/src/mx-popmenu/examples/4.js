/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popmenu/examples/4",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-popmenu_examples_index_","._zs_gallery_mx-popmenu_examples_index_-left,\n._zs_gallery_mx-popmenu_examples_index_-right {\n  margin-right: 20px;\n  padding-top: 32px;\n}\n._zs_gallery_mx-popmenu_examples_index_-center {\n  position: relative;\n  margin-right: 20px;\n}\n._zs_gallery_mx-popmenu_examples_index_-center ._zs_gallery_mx-popmenu_examples_index_-center-top {\n  margin-bottom: 136px;\n}\n._zs_gallery_mx-popmenu_examples_index_-center ._zs_gallery_mx-popmenu_examples_index_-center-tip {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  height: 30px;\n  margin-top: -15px;\n  line-height: 30px;\n  text-align: center;\n}\n");
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
} ; var $g = '', $_temp, $p = '', selected = $$.selected, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerydB:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxa="_zs_gallerydB:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxa="_zs_gallerydB:b" class="mb20"><span mxs="_zs_gallerydB:_" class="color-9">trigger：</span><span class="color-brand" mx-change="' + $viewId + 'select()" mx-view="mx-popmenu/index?menus=';
    $line = 6;
    $art = '@[{\n                    value: 1,\n                    text: \'操作1\'\n                }, {\n                    value: 2,\n                    text: \'操作2\'\n                }, {\n                    value: 3,\n                    text: \'操作3\'\n                }]';
    ;
    $p += ($expr = '<%@[{            value: 1,            text: \'操作1\'        }, {            value: 2,            text: \'操作2\'        }, {            value: 3,            text: \'操作3\'        }]%>', $i($$ref, [{ value: 1, text: '操作1' }, { value: 2, text: '操作2' }, { value: 3, text: '操作3' }])) + '&triggerType=contextmenu">右键显示菜单</span><span mxs="_zs_gallerydB:a" class="color-9 ml40">当前选中：</span><span>';
    $line = 20;
    $art = 'if selected';
    ;
    $expr = '<%if (selected) {%>';
    if (selected) {
        ;
        $p += '操作';
        $line = 20;
        $art = '=selected';
        ;
        $p += ($expr = '<%=selected%>', $e(selected)) + '';
        $line = 20;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</span></div></div><div mxa="_zs_gallerydB:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallerydB:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 25;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerydB:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 27;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerydB:c" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 30;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-popmenu class="color-brand"\n    menus="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'操作1\'\n    &#125;, &#123;\n        value: 2,\n        text: \'操作2\'\n    &#125;, &#123;\n        value: 3,\n        text: \'操作3\'\n    &#125;]&#125;&#125;"\n    trigger-type="contextmenu"&gt;右键显示菜单&lt;/mx-popmenu&gt;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-popmenu/examples/4.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            menus: [{
                    value: 1,
                    text: '操作1'
                }, {
                    value: 2,
                    text: '操作2'
                }, {
                    value: 3,
                    text: '操作3'
                }]
        });
    },
    'select<change>': function (e) {
        var text = e.params.text;
        var selected = e.selected;
        this.updater.digest({
            text: text,
            selected: selected
        });
    }
});

});