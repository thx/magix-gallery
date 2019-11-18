/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-tabs/examples/1",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
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
} ; var $g = '', $_temp, $p = '', list = $$.list, selected = $$.selected, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerye~:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxv mxa="_zs_gallerye~:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_gallerye~:_" class="mb30"><span class="color-9">以下示例：</span>配置tagContent自定义右上角打标内容，配置tag展示右侧默认打标样式，优先级tagContent > tag</div><div mxv="list" mx-change="' + $viewId + 'changeTab()" mx-view="mx-tabs/index?list=';
    $line = 8;
    $art = '@list';
    ;
    $p += ($expr = '<%@list%>', $i($$ref, list)) + '&selected=';
    $line = 9;
    $art = '=selected';
    ;
    $p += ($expr = '<%!$eu(selected)%>', $eu(selected)) + '"></div><div mxa="_zs_gallerye~:b" class="mt20"><a mxs="_zs_gallerye~:a" href="javascript:;" class="btn btn-brand" mx-click="' + $viewId + 'changeData()">改变数据</a><span mxs="_zs_gallerye~:b" class="ml20 color-9">当前选中：</span><span>';
    $line = 14;
    $art = '=selected';
    ;
    $p += ($expr = '<%=selected%>', $e(selected)) + '</span></div></div><div mxa="_zs_gallerye~:c" class="clearfix"><div mxa="_zs_gallerye~:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mxs="_zs_gallerye~:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 20;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerye~:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 22;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerye~:d" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 25;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-tabs \n    list="&#123;&#123;@list&#125;&#125;" \n    selected="&#123;&#123;=selected&#125;&#125;"\n    mx-change="changeTab()"&gt;&lt;/mx-tabs&gt;\n\n&lt;a href="javascript:;" class="btn btn-brand" \n    mx-click="changeData()"&gt;改变数据&lt;/a&gt;</pre></div><div mxa="_zs_gallerye~:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-right"><div mxs="_zs_gallerye~:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 36;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerye~:g" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 38;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerye~:d" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 41;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let list = [&#123;\n            value: 1,\n            text: \'默认打标\',\n            tag: \'New\'\n        &#125;, &#123;\n            value: 2,\n            text: \'自定义标颜色\',\n            tag: \'New\',\n            color: \'#30ab66\'\n        &#125;, &#123;\n            value: 3,\n            text: \'无打标\'\n        &#125;, &#123;\n            value: 4,\n            text: \'自定义打标模块\',\n            tagContent: \'&lt;img src="https://img.alicdn.com/tfs/TB1pvD4dkP2gK0jSZPxXXacQpXa-100-34.png" style="max-width: none; width: 50px;"/&gt;\'\n        &#125;];\n\n        this.updater.digest(&#123;\n            list,\n            selected: list[1].value\n        &#125;);\n    &#125;,\n    \'changeData&lt;click&gt;\' (e) &#123;\n        let list = [&#123;\n            value: 4,\n            text: \'新模块1\',\n            tag: \'New\'\n        &#125;, &#123;\n            value: 5,\n            text: \'新模块2\'\n        &#125;];\n        let selected = list[0].value;\n        this.updater.digest(&#123;\n            list,\n            selected\n        &#125;)\n    &#125;,\n    \'changeTab&lt;change&gt;\' (e) &#123;\n        // e.value 当前选中的key值\n        // e.text 当前选中的文案\n        this.updater.digest(&#123;\n            selected: e.value\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-tabs/examples/1.html';
    throw msg;
} return $p; },
    render: function () {
        var list = [{
                value: 1,
                text: '默认打标',
                tag: 'NEW'
            }, {
                value: 2,
                text: '自定义标颜色',
                tag: 'NEW',
                color: '#30ab66'
            }, {
                value: 3,
                text: '无打标'
            }, {
                value: 4,
                text: '自定义打标模块',
                tagContent: '<img src="https://img.alicdn.com/tfs/TB1pvD4dkP2gK0jSZPxXXacQpXa-100-34.png" style="max-width: none; width: 50px;"/>'
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
                tag: 'NEW'
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