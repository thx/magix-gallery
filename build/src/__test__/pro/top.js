/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/top",["magix","../example","mx-effects/notice","mx-title/second","mx-pagination/index","mx-copy/index","../hl"],(require,exports,module)=>{
/*Magix,Base*/
require("mx-effects/notice");
require("mx-title/second");
require("mx-pagination/index");
require("mx-copy/index");
require("../hl");
var Magix = require("magix");
var Router = Magix.Router;
var Base = require("../example");
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
} ; var $g = '', $_temp, $p = '', contents = $$.contents, list = $$.list, count = $$.count, pageSize = $$.pageSize, currentPage = $$.currentPage, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div class="mb20 mr20" mx-view="mx-effects/notice?border=true&content=';
    $line = 3;
    $art = '=contents';
    ;
    $p += ($expr = '<%!$eu(contents)%>', $eu(contents)) + '"></div><div mxs="_zs_galleryO:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryO:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_galleryO:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryO:a" class="clearfix mb20"><div class="fl color-9">以下示例：</div><div class="fl">翻页的时候返回顶部</div></div><table mxa="_zs_galleryO:b" class="table"><thead mxs="_zs_galleryO:b"><tr><th>name</th><th>text</th></tr></thead><tbody>';
    $line = 21;
    $art = 'each list as item';
    ;
    $expr = '<%for (var $art_ikotpqszq$art_i = 0, $art_criildivb$art_c = list.length; $art_ikotpqszq$art_i < $art_criildivb$art_c; $art_ikotpqszq$art_i++) {    var item = list[$art_ikotpqszq$art_i]%>';
    for (var $art_ikotpqszq$art_i = 0, $art_criildivb$art_c = list.length; $art_ikotpqszq$art_i < $art_criildivb$art_c; $art_ikotpqszq$art_i++) {
        var item = list[$art_ikotpqszq$art_i];
        $p += '<tr><td>';
        $line = 23;
        $art = '=item.name';
        ;
        $p += ($expr = '<%=item.name%>', $e(item.name)) + '</td><td>';
        $line = 24;
        $art = '=item.text';
        ;
        $p += ($expr = '<%=item.text%>', $e(item.text)) + '</td></tr>';
        $line = 26;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table><div mxa="_zs_galleryO:c" class="table-pager-wrapper"><div mx-change="' + $viewId + 'changePager()" mx-view="mx-pagination/index?total=';
    $line = 31;
    $art = '=count';
    ;
    $p += ($expr = '<%!$eu(count)%>', $eu(count)) + '&size=';
    $line = 32;
    $art = '=pageSize';
    ;
    $p += ($expr = '<%!$eu(pageSize)%>', $eu(pageSize)) + '&page=';
    $line = 33;
    $art = '=currentPage';
    ;
    $p += ($expr = '<%!$eu(currentPage)%>', $eu(currentPage)) + '"></div></div></div><div mxa="_zs_galleryO:d" class="clearfix"><div mxa="_zs_galleryO:e" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-third1"><div mxs="_zs_galleryO:c" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 40;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryO:f" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 42;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryO:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 45;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;table class="table"&gt;\n    &lt;thead&gt;\n        &lt;tr&gt;\n            &lt;th&gt;name&lt;/th&gt;\n            &lt;th&gt;text&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody&gt;\n        &#123;&#123;each list as item&#125;&#125;\n        &lt;tr&gt;\n            &lt;td&gt;&#123;&#123;=item.name&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;=item.text&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n        &#123;&#123;/each&#125;&#125;\n    &lt;/tbody&gt;\n&lt;/table&gt;\n&lt;div class="table-pager-wrapper"&gt;\n    &lt;mx-pagination \n        total="&#123;&#123;=count&#125;&#125;" \n        size="&#123;&#123;=pageSize&#125;&#125;" \n        page="&#123;&#123;=currentPage&#125;&#125;" \n        mx-change="changePager()" /&gt;\n&lt;/div&gt;</pre></div><div mxa="_zs_galleryO:g" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-third2 _zs_gallery___test___layout_-half-right"><div mxs="_zs_galleryO:e" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 72;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryO:h" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 74;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryO:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 77;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Router = Magix.Router;\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    init() &#123;\n        let that = this;\n        that.observeLocation([\'currentPage\', \'pageSize\']);\n        that.scrollIfNeed(\'body\', [\'currentPage\', \'pageSize\']);\n\n        let list = [], count = 100;\n        for (let index = 0; index &lt; count; index++) &#123;\n            list.push(&#123;\n                name: \'name\' + (index + 1),\n                text: \'text\' + (index + 1)\n            &#125;)\n        &#125;\n\n        that.updater.set(&#123;\n            allList: list,\n            count: count\n        &#125;)\n    &#125;,\n    render() &#123;\n        let that = this;\n        let data = that.updater.get();\n        let locParams = Router.parse().params;\n        let allList = data.allList;\n        let currentPage = locParams.currentPage || 1,\n            pageSize = locParams.pageSize || 20;\n\n        let list = allList.slice((currentPage - 1) * pageSize, currentPage * pageSize);\n        that.updater.digest(&#123;\n            list,\n            currentPage,\n            pageSize\n        &#125;);\n    &#125;,\n    \'changePager&lt;change&gt;\'(e) &#123;\n        // e.page 当前第几页\n        // e.size 每页多少条\n        Router.to(&#123;\n            currentPage: e.page,\n            pageSize: e.size\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/pro/top.html';
    throw msg;
} return $p; },
    init: function () {
        var that = this;
        that.observeLocation(['currentPage', 'pageSize']);
        that.scrollIfNeed('body', ['currentPage', 'pageSize']);
        var list = [], count = 100;
        for (var index = 0; index < count; index++) {
            list.push({
                name: 'name' + (index + 1),
                text: 'text' + (index + 1)
            });
        }
        that.updater.set({
            allList: list,
            count: count,
            contents: [
                '脚手架 boot.ts 中 merge 文件 lib/scroll.js，view 上挂载 scrollIfNeed，该方式监听参数变动返回容器顶部',
                'this.scrollIfNeed(\'相对滚定的节点，如body\',[\'参数1\', \'参数2\']);'
            ].join('<br />')
        });
    },
    render: function () {
        var that = this;
        var data = that.updater.get();
        var locParams = Router.parse().params;
        var allList = data.allList;
        var currentPage = locParams.currentPage || 1, pageSize = locParams.pageSize || 20;
        var list = allList.slice((currentPage - 1) * pageSize, currentPage * pageSize);
        that.updater.digest({
            list: list,
            currentPage: currentPage,
            pageSize: pageSize
        });
    },
    'changePager<change>': function (e) {
        // e.page 当前第几页
        // e.size 每页多少条
        Router.to({
            currentPage: e.page,
            pageSize: e.size
        });
    }
});

});