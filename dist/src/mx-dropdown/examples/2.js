/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/examples/2",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', keyword = $$.keyword, selectedValue = $$.selectedValue, list = $$.list, selectedText = $$.selectedText, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerya?:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxv mxa="_zs_gallerya?:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_gallerya?:_" class="mb10"><span class="color-9">说明：</span>选项支持html片段</div><div mxv mxa="_zs_gallerya?:b" class="mb20"><div mxv="list" class="w200" mx-change="' + $viewId + 'select()" mx-view="mx-dropdown/index?searchbox=true&keyword=';
    $line = 10;
    $art = '=keyword';
    ;
    $p += ($expr = '<%!$eu(keyword)%>', $eu(keyword)) + '&selected=';
    $line = 11;
    $art = '=selectedValue';
    ;
    $p += ($expr = '<%!$eu(selectedValue)%>', $eu(selectedValue)) + '&list=';
    $line = 12;
    $art = '@list';
    ;
    $p += ($expr = '<%@list%>', $i($$ref, list)) + '"></div></div><div><span mxs="_zs_gallerya?:a" class="color-9">当前选中名：</span><span mxa="_zs_gallerya?:c" class="mr20">';
    $line = 17;
    $art = '!selectedText';
    ;
    $p += ($expr = '<%!selectedText%>', $n(selectedText)) + '</span><span mxs="_zs_gallerya?:b" class="color-9">当前选中值：</span><span>';
    $line = 19;
    $art = '=selectedValue';
    ;
    $p += ($expr = '<%=selectedValue%>', $e(selectedValue)) + '</span></div></div><div mxa="_zs_gallerya?:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallerya?:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">搜索不区分大小写</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 24;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerya?:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 26;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerya?:d" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 29;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-dropdown class="w200" \n    searchbox="true" \n    selected="&#123;&#123;=selectedValue&#125;&#125;"\n    list="&#123;&#123;@list&#125;&#125;"\n    mx-change="select()"&gt;\n&lt;/mx-dropdown&gt;</pre></div><div mxa="_zs_gallerya?:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallerya?:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 39;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerya?:g" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 41;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerya?:d" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 44;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let list = [&#123;\n            value: 1,\n            text: \'&lt;i class="mc-iconfont mr5"&gt;&#38;&#35;xe670;&lt;/i&gt;测试Logo\'\n        &#125;, &#123;\n            value: 2,\n            text: \'logo\'\n        &#125;, &#123;\n            value: 3,\n            text: \'123456\'\n        &#125;];\n        this.updater.digest(&#123;\n            list: list,\n            selectedValue: list[1].value\n        &#125;);\n    &#125;,\n    \'select&lt;change&gt;\' (e) &#123;\n        // e.value 当前选中值\n        // e.text 当前选中文案\n        // e.keyword 当前搜索关键词\n    &#125;\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dropdown/examples/2.html';
    throw msg;
} return $p; },
    render: function () {
        var list = [{
                value: 1,
                text: '<i class="mc-iconfont mr5">&#xe670;</i>测试Logo'
            }, {
                value: 2,
                text: 'logo'
            }, {
                value: 3,
                text: '123456'
            }];
        var item = list[1];
        this.updater.digest({
            list: list,
            selectedValue: item.value,
            selectedText: item.text
        });
    },
    'select<change>': function (event) {
        // event.value 当前选中值
        // event.text 当前选中文案
        // event.keyword 当前搜索关键词
        this.updater.digest({
            selectedValue: event.value,
            selectedText: event.text,
            keyword: event.keyword
        });
    }
});

});