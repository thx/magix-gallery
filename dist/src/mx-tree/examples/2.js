/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-tree/examples/2",["magix","examples/example","mx-form/index","mx-form/validator","$","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,Form,Validator,$*/
require("../index");
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
var Form = require("mx-form/index");
var Validator = require("mx-form/validator");
var Vframe = Magix.Vframe;
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-tree_examples_index_","._zs_gallery_mx-tree_examples_index_-wrapper {\n  width: 300px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--border-radius);\n}\n._zs_gallery_mx-tree_examples_index_-wrapper ._zs_gallery_mx-tree_examples_index_-content {\n  padding: 20px 20px 5px 20px;\n}\n");
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
} ; var $g = '', $_temp, $p = '', selected = $$.selected, viewId = $$.viewId, list = $$.list, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryfd:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxv mxa="_zs_galleryfd:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_galleryfd:_" class="mb10 clearfix"><div class="color-9 fl">使用场景：</div><div class="fl"><div>双向绑定，实时反馈选中结果，每次操作都响应事件</div><div>默认选中某些选项</div><div>可展开收起子选项</div></div></div><div mxa="_zs_galleryfd:b" class="mb20"><span mxs="_zs_galleryfd:a" class="color-9">当前已选中：</span><span>';
    $line = 13;
    $art = '=selected';
    ;
    $p += ($expr = '<%=selected%>', $e(selected)) + '</span></div><div mxs="_zs_galleryfd:b" class="mb20"><span class="color-9">说明：</span><span class="color-brand mr10">修改数据时保留历史选中数据+展开收起状态</span><a href="javascript:;" mx-click="' + $viewId + 'changeData()" class="btn btn-brand">修改数据</a></div><div mxv mxa="_zs_galleryfd:c" class="_zs_gallery_mx-tree_examples_index_-wrapper"><div mxv mxa="_zs_galleryfd:d" class="_zs_gallery_mx-tree_examples_index_-content"><div mxv="list,selected" mxe="' + $viewId + '_0" mxc="[';
    $line = 26;
    $art = ':selected{refresh:true}';
    ;
    $p += '{p:\'selected\',f:{refresh:true},a:\'bottom-values\'}]" id="';
    $line = 22;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_tree" mx-view="mx-tree/index?needExpand=true&hasLine=true&list=';
    $line = 25;
    $art = '@list';
    ;
    $p += ($expr = '<%@list%>', $i($$ref, list)) + '&bottomValues=';
    $line = 26;
    $art = ':selected{refresh:true}';
    ;
    $p += ($expr = '<%@selected%>', $i($$ref, selected)) + '"></div></div></div></div><div mxa="_zs_galleryfd:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryfd:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 32;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryfd:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 34;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryfd:d" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 37;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;div class="mb20"&gt;\n    &lt;span class="color-9"&gt;当前已选中：&lt;/span&gt;\n    &lt;span&gt;&#123;&#123;=selected&#125;&#125;&lt;/span&gt;\n&lt;/div&gt;\n\n&lt;mx-tree id="&#123;&#123;=viewId&#125;&#125;_tree"\n    need-expand="true"\n    has-line="true"\n    list="&#123;&#123;@list&#125;&#125;"\n    bottom-values="&#123;&#123;:selected&#123;refresh:true&#125;&#125;&#125;"&gt;&lt;/mx-tree&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-tree/examples/2.html';
    throw msg;
} return $p; },
    mixins: [Form, Validator],
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
                value: 3,
                pValue: '',
                text: '3'
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
                value: 211,
                pValue: 21,
                text: '2-1-1'
            }, {
                value: 212,
                pValue: 21,
                text: '2-1-2'
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
            selected: [211, 23, 3],
            index: 3
        });
    },
    'changeData<click>': function (e) {
        var list = this.updater.get('list');
        var index = this.updater.get('index');
        var next = index + 1;
        list.push({
            value: '2' + next,
            pValue: 2,
            text: '2-' + next
        });
        this.updater.digest({
            index: next,
            list: list
        });
    }
});

});