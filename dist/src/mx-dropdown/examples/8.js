/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/examples/8",["magix","examples/example","$","../multiple","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../multiple");
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
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
} ; var $g = '', $_temp, $p = '', list = $$.list, selectedArr = $$.selectedArr, selectedStr = $$.selectedStr, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerybd:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxv mxa="_zs_gallerybd:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_gallerybd:_" class="mb20 clearfix lh22"><div class="fl color-9">说明：</div><div class="fl"><div>选项支持html片段</div><div>选中项传入支持传入数组或者逗号分隔</div><div>以下两个下拉框选中项保持一致</div></div></div><div mxv mxa="_zs_gallerybd:b" class="mb20"><div mxv="list,selectedArr" class="w200" mx-change="' + $viewId + 'select()" mx-view="mx-dropdown/multiple?list=';
    $line = 13;
    $art = '@list';
    ;
    $p += ($expr = '<%@list%>', $i($$ref, list)) + '&selected=';
    $line = 14;
    $art = '@selectedArr';
    ;
    $p += ($expr = '<%@selectedArr%>', $i($$ref, selectedArr)) + '"></div></div><div mxv mxa="_zs_gallerybd:c" class="mb20"><div mxv="list,selectedStr" class="w200" mx-change="' + $viewId + 'select()" mx-view="mx-dropdown/multiple?list=';
    $line = 19;
    $art = '@list';
    ;
    $p += ($expr = '<%@list%>', $i($$ref, list)) + '&selected=';
    $line = 20;
    $art = '@selectedStr';
    ;
    $p += ($expr = '<%@selectedStr%>', $i($$ref, selectedStr)) + '"></div></div><div><span mxs="_zs_gallerybd:a" class="color-9">当前选中值：</span><span>';
    $line = 25;
    $art = '=selectedArr';
    ;
    $p += ($expr = '<%=selectedArr%>', $e(selectedArr)) + '</span></div></div><div mxa="_zs_gallerybd:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallerybd:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 30;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerybd:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 32;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerybd:c" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 35;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-dropdown.multiple class="w200"\n    list="&#123;&#123;@list&#125;&#125;"\n    selected="&#123;&#123;@selectedArr&#125;&#125;"\n    mx-change="select()"/&gt;\n\n&lt;mx-dropdown.multiple class="w200"\n    list="&#123;&#123;@list&#125;&#125;"\n    selected="&#123;&#123;@selectedStr&#125;&#125;"\n    mx-change="select()"/&gt;</pre></div><div mxa="_zs_gallerybd:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallerybd:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 48;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerybd:g" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 50;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerybd:c" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 53;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let list = [];\n        for (let index = 0; index &lt; 6; index++) &#123;\n            list.push(&#123;\n                text: (index == 0 ? \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe670;&lt;/i&gt;\' : \'\') + \'多选\' + (index + 1),\n                value: index + 1\n            &#125;)\n        &#125;\n        this.updater.digest(&#123;\n            list,\n            selectedArr: [1, 2, 3],\n            selectedStr: \'1,2,3\'\n        &#125;);\n    &#125;,\n    \n    \'select&lt;change&gt;\'(e) &#123;\n        // e.values [array] 当前选中值\n        // e.texts [array] 当前选中文案\n        let values = e.values;\n        this.updater.digest(&#123;\n            selectedArr: values,\n            selectedStr: values.join(\',\')\n        &#125;);\n    &#125;\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dropdown/examples/8.html';
    throw msg;
} return $p; },
    render: function () {
        var list = [];
        for (var index = 0; index < 6; index++) {
            list.push({
                text: (index == 0 ? '<i class="mc-iconfont">&#xe670;</i>' : '') + '多选' + (index + 1),
                value: index + 1
            });
        }
        this.updater.digest({
            list: list,
            selectedArr: [1, 2, 3],
            selectedStr: '1,2,3'
        });
    },
    'select<change>': function (e) {
        // e.values [array] 当前选中值
        // e.texts [array] 当前选中文案
        var values = e.values;
        this.updater.digest({
            selectedArr: values,
            selectedStr: values.join(',')
        });
    }
});

});