/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/__test__/15",["magix","__test__/example","mx-checkbox/storestate","mx-checkbox/linkage","$","../index","mx-pagination/index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,StoreState,Linkage,$*/
require("../index");
require("mx-pagination/index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var StoreState = require("mx-checkbox/storestate");
var Linkage = require("mx-checkbox/linkage");
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
} ; var $g = '', $_temp, $p = '', selected = $$.selected, list = $$.list, total = $$.total, size = $$.size, page = $$.page, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxv mxa="_zs_gallerydI:_" class="_zs_galleryh"><div mxv mxa="_zs_gallerydI:a" class="_zs_galleryk"><div mxs="_zs_gallerydI:_" class="mb20"><span class="color-9">以下示例：</span>实时反馈当前选中项</div><div mxa="_zs_gallerydI:b" class="mb20"><a mxs="_zs_gallerydI:a" href="javascript:;" mx-click="' + $viewId + 'clear()" class="btn btn-brand mr20">清空所有选中</a><span mxs="_zs_gallerydI:b" class="color-9">当前选中：</span>' + $e(selected) + '</div><div mxv mxa="_zs_gallerydI:c" mx-view="mx-table/index?sticky=true"><div mxv><table mxv mxa="_zs_gallerydI:d" class="table"><thead mxv><tr mxv><th mxv mxa="_zs_gallerydI:e" width="50"><input mxs="_zs_gallerydI:c" type="checkbox" class="checkbox" linkage="example" mx-change="' + $viewId + 'get()"/></th><th mxs="_zs_gallerydI:d" width="200">列1</th><th mxs="_zs_gallerydI:e" width="200">列2</th><th mxs="_zs_gallerydI:f" width="200">列3</th></tr></thead><tbody mxv>'; for (var index = 0, $art_cxrlga$art_c = list.length; index < $art_cxrlga$art_c; index++) {
    var item = list[index];
    $p += '<tr mxv class="' + $e((index + 1 == list.length) ? 'last-tr' : '') + '"><td mxv><input type="checkbox" class="checkbox" linkage-parent="example" value="' + $e(item.id) + '" mx-change="' + $viewId + 'get()"/></td><td>' + $e(item.content1) + '</td><td>' + $e(item.content2) + '</td><td>' + $e(item.content3) + '</td></tr>';
} ; $p += '</tbody></table></div></div><div mxa="_zs_gallerydI:f" class="table-pager-wrapper"><div mx-change="' + $viewId + 'changePager()" mx-view="mx-pagination/index?total=' + $eu(total) + '&size=' + $eu(size) + '&page=' + $eu(page) + '"></div></div></div><div mxa="_zs_gallerydI:g" class="clearfix"><div mxa="_zs_gallerydI:h" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_gallerydI:g" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerydI:i" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerydI:h" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;div class="mb20"&gt;\n    &lt;a href="javascript:;" class="btn btn-brand mr20"\n        mx-click="clear()"&gt;清空所有选中&lt;/a&gt;\n\n    &lt;span class="color-9"&gt;当前选中：&lt;/span&gt;&#123;&#123;=selected&#125;&#125;\n&lt;/div&gt;\n&lt;mx-table sticky="true"&gt;\n    &lt;table class="table"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th width="50"&gt;\n                    &lt;input type="checkbox" class="checkbox" linkage="example" mx-change="get()"/&gt;\n                &lt;/th&gt;\n                &lt;th width="200"&gt;列1&lt;/th&gt;\n                &lt;th width="200"&gt;列2&lt;/th&gt;\n                &lt;th width="200"&gt;列3&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;each list as item index&#125;&#125;\n            &lt;tr class="&#123;&#123;= (index+1==list.length) ? \'last-tr\' : \'\'&#125;&#125;"&gt;\n                &lt;td&gt;\n                    &lt;input type="checkbox" class="checkbox" \n                        linkage-parent="example" \n                        value="&#123;&#123;=item.id&#125;&#125;" mx-change="get()"/&gt;\n                &lt;/td&gt;\n                &lt;td&gt;&#123;&#123;=item.content1&#125;&#125;&lt;/td&gt;\n                &lt;td&gt;&#123;&#123;=item.content2&#125;&#125;&lt;/td&gt;\n                &lt;td&gt;&#123;&#123;=item.content3&#125;&#125;&lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/each&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;\n&lt;div class="table-pager-wrapper"&gt;\n    &lt;mx-pagination \n        total="&#123;&#123;=total&#125;&#125;" \n        size="&#123;&#123;=size&#125;&#125;" \n        page="&#123;&#123;=page&#125;&#125;"\n        mx-change="changePager()"/&gt;\n&lt;/div&gt;</pre></div><div mxa="_zs_gallerydI:j" class="_zs_galleryl _zs_gallerye _zs_galleryf"><div mxs="_zs_gallerydI:i" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_gallerydI:k" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_gallerydI:h" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\nlet Magix = require(\'magix\');\nlet StoreState = require(\'@../../mx-checkbox/storestate\');\nlet Linkage = require(\'@../../mx-checkbox/linkage\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [StoreState, Linkage],\n    render() &#123;\n        let that = this;\n        let allList = [];\n        for (var i = 0; i &lt; 20; i++) &#123;\n            allList.push(&#123;\n                id: i,\n                content1: i + \'_列1\',\n                content2: i + \'_列2\',\n                content3: i + \'_列3\'\n            &#125;)\n        &#125;\n        let size = 5,\n            total = allList.length,\n            page = 1;\n        let list = allList.slice(0, 5);\n        that.updater.digest(&#123;\n            allList,\n            list,\n            size,\n            page,\n            total,\n            selected: []\n        &#125;);\n    &#125;,\n\n    \'changePager&lt;change&gt;\' (e) &#123;\n        // e.page 当前第几页\n        // e.size 每页多少条\n        let that = this;\n        let page = +e.page;\n        let allList = that.updater.get(\'allList\');\n        let list = allList.slice((page - 1) * 5, page * 5);\n        that.updater.digest(&#123;\n            list,\n            page\n        &#125;)\n    &#125;,\n\n    \'get&lt;change&gt;\' (e) &#123;\n        let selected = this.getStoreState(\'example\');\n        this.updater.digest(&#123;\n            selected: selected\n        &#125;)\n    &#125;,\n\n    \'clear&lt;click&gt;\' (e) &#123;\n        this.clearStoreState(\'example\');\n        this.updater.digest(&#123;\n            selected: \'\'\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>'; return $p; },
    mixins: [StoreState, Linkage],
    render: function () {
        var that = this;
        var allList = [];
        for (var i = 0; i < 20; i++) {
            allList.push({
                id: i,
                content1: i + '_列1',
                content2: i + '_列2',
                content3: i + '_列3'
            });
        }
        var size = 5, total = allList.length, page = 1;
        var list = allList.slice(0, 5);
        that.updater.digest({
            allList: allList,
            list: list,
            size: size,
            page: page,
            total: total,
            selected: []
        });
    },
    'changePager<change>': function (e) {
        // e.page 当前第几页
        // e.size 每页多少条
        var that = this;
        var page = +e.page;
        var allList = that.updater.get('allList');
        var list = allList.slice((page - 1) * 5, page * 5);
        that.updater.digest({
            list: list,
            page: page
        });
    },
    'get<change>': function (e) {
        var selected = this.getStoreState('example');
        this.updater.digest({
            selected: selected
        });
    },
    'clear<click>': function (e) {
        this.clearStoreState('example');
        this.updater.digest({
            selected: ''
        });
    }
});

});