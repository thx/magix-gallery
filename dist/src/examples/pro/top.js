/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("examples/pro/top",["magix","../example","mx-effects/notice","mx-title/second","mx-pagination/index","mx-copy/index","../hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', list = $$.list, count = $$.count, pageSize = $$.pageSize, currentPage = $$.currentPage, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_galleryN:_" class="mb20 mr20" mx-view="mx-effects/notice?type=highlight&border=true&content=%E8%84%9A%E6%89%8B%E6%9E%B6%20boot.ts%20%E4%B8%AD%20merge%20%E6%96%87%E4%BB%B6%20lib%2Fscroll.js%EF%BC%8Cview%20%E4%B8%8A%E6%8C%82%E8%BD%BD%20scrollIfNeed%EF%BC%8C%E8%AF%A5%E6%96%B9%E5%BC%8F%E7%9B%91%E5%90%AC%E5%8F%82%E6%95%B0%E5%8F%98%E5%8A%A8%E8%BF%94%E5%9B%9E%E5%AE%B9%E5%99%A8%E9%A1%B6%E9%83%A8%3Cbr%2F%3Ethis.scrollIfNeed%28%27%E7%9B%B8%E5%AF%B9%E6%BB%9A%E5%AE%9A%E7%9A%84%E8%8A%82%E7%82%B9%EF%BC%8C%E5%A6%82body%27%2C%5B%27%E5%8F%82%E6%95%B01%27%2C%20%27%E5%8F%82%E6%95%B02%27%5D%29%3B"></div><div mxs="_zs_galleryN:a" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryN:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxa="_zs_galleryN:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_galleryN:b" class="clearfix mb20"><div class="fl color-9">以下示例：</div><div class="fl">翻页的时候返回顶部</div></div><table mxa="_zs_galleryN:b" class="table"><thead mxs="_zs_galleryN:c"><tr><th>name</th><th>text</th></tr></thead><tbody>';
    $line = 22;
    $art = 'each list as item';
    ;
    $expr = '<%for (var $art_ifkqkdythm$art_i = 0, $art_ckankzbm$art_c = list.length; $art_ifkqkdythm$art_i < $art_ckankzbm$art_c; $art_ifkqkdythm$art_i++) {    var item = list[$art_ifkqkdythm$art_i]%>';
    for (var $art_ifkqkdythm$art_i = 0, $art_ckankzbm$art_c = list.length; $art_ifkqkdythm$art_i < $art_ckankzbm$art_c; $art_ifkqkdythm$art_i++) {
        var item = list[$art_ifkqkdythm$art_i];
        $p += '<tr><td>';
        $line = 24;
        $art = '=item.name';
        ;
        $p += ($expr = '<%=item.name%>', $e(item.name)) + '</td><td>';
        $line = 25;
        $art = '=item.text';
        ;
        $p += ($expr = '<%=item.text%>', $e(item.text)) + '</td></tr>';
        $line = 27;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table><div mxa="_zs_galleryN:c" class="table-pager-wrapper"><div mx-change="' + $viewId + 'changePager()" mx-view="mx-pagination/index?total=';
    $line = 32;
    $art = '=count';
    ;
    $p += ($expr = '<%!$eu(count)%>', $eu(count)) + '&size=';
    $line = 33;
    $art = '=pageSize';
    ;
    $p += ($expr = '<%!$eu(pageSize)%>', $eu(pageSize)) + '&page=';
    $line = 34;
    $art = '=currentPage';
    ;
    $p += ($expr = '<%!$eu(currentPage)%>', $eu(currentPage)) + '"></div></div></div><div mxa="_zs_galleryN:d" class="clearfix"><div mxa="_zs_galleryN:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-third1"><div mxs="_zs_galleryN:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 41;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryN:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 43;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryN:e" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 46;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;table class="table"&gt;\n    &lt;thead&gt;\n        &lt;tr&gt;\n            &lt;th&gt;name&lt;/th&gt;\n            &lt;th&gt;text&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody&gt;\n        &#123;&#123;each list as item&#125;&#125;\n        &lt;tr&gt;\n            &lt;td&gt;&#123;&#123;=item.name&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;=item.text&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n        &#123;&#123;/each&#125;&#125;\n    &lt;/tbody&gt;\n&lt;/table&gt;\n&lt;div class="table-pager-wrapper"&gt;\n    &lt;mx-pagination \n        total="&#123;&#123;=count&#125;&#125;" \n        size="&#123;&#123;=pageSize&#125;&#125;" \n        page="&#123;&#123;=currentPage&#125;&#125;" \n        mx-change="changePager()" /&gt;\n&lt;/div&gt;</pre></div><div mxa="_zs_galleryN:g" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-third2 _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-right"><div mxs="_zs_galleryN:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 73;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryN:h" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 75;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryN:e" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 78;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Router = Magix.Router;\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    init() &#123;\n        let that = this;\n        that.observeLocation([\'currentPage\', \'pageSize\']);\n        that.scrollIfNeed(\'body\', [\'currentPage\', \'pageSize\']);\n\n        let list = [], count = 100;\n        for (let index = 0; index &lt; count; index++) &#123;\n            list.push(&#123;\n                name: \'name\' + (index + 1),\n                text: \'text\' + (index + 1)\n            &#125;)\n        &#125;\n\n        that.updater.set(&#123;\n            allList: list,\n            count: count\n        &#125;)\n    &#125;,\n    render() &#123;\n        let that = this;\n        let data = that.updater.get();\n        let locParams = Router.parse().params;\n        let allList = data.allList;\n        let currentPage = locParams.currentPage || 1,\n            pageSize = locParams.pageSize || 20;\n\n        let list = allList.slice((currentPage - 1) * pageSize, currentPage * pageSize);\n        that.updater.digest(&#123;\n            list,\n            currentPage,\n            pageSize\n        &#125;);\n    &#125;,\n    \'changePager&lt;change&gt;\'(e) &#123;\n        // e.page 当前第几页\n        // e.size 每页多少条\n        Router.to(&#123;\n            currentPage: e.page,\n            pageSize: e.size\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:examples/pro/top.html';
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
            count: count
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