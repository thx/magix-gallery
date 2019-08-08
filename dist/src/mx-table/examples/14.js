/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/examples/14",["magix","examples/example","mx-checkbox/storestate","mx-checkbox/linkage","$","../index","mx-pagination/index","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,StoreState,Linkage,$*/
require("../index");
require("mx-pagination/index");
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
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
} ; var $g = '', $_temp, $p = '', selected = $$.selected, list = $$.list, total = $$.total, size = $$.size, page = $$.page, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryes:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxv mxa="_zs_galleryes:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_galleryes:_" class="clearfix lh22 mb20"><div class="fl color-9">以下示例：</div><div class="fl"><div>使用input value作为主键，<span class="color-brand">请保证input value的唯一性（包含翻页的情况），不要使用index</span></div><div>需要的时候调用<span class="color-brand">this.getStoreState(linkage:string)</span>获取选中值，其中linkage为父节点input.attr(\'linkage\')</div><div>部分禁止选择，翻页保存选中值</div></div></div><div mxa="_zs_galleryes:b" class="mb20"><a mxs="_zs_galleryes:a" href="javascript:;" mx-click="' + $viewId + 'clear()" class="btn btn-brand mr20">清空所有选中</a><a mxs="_zs_galleryes:b" href="javascript:;" mx-click="' + $viewId + 'get()" class="btn btn-brand mr20">获取选中值</a><span mxs="_zs_galleryes:c" class="color-9">当前选中：</span>';
    $line = 14;
    $art = '=selected';
    ;
    $p += ($expr = '<%=selected%>', $e(selected)) + '</div><div mxv mxa="_zs_galleryes:c" mx-view="mx-table/index?sticky=true"><div mxv><table mxv mxa="_zs_galleryes:d" class="table"><thead mxv><tr mxv><th mxv mxa="_zs_galleryes:e" width="50"><input mxs="_zs_galleryes:d" type="checkbox" class="checkbox" linkage="example"/></th><th mxs="_zs_galleryes:e" width="200">列1</th><th mxs="_zs_galleryes:f" width="200">列2</th><th mxs="_zs_galleryes:g" width="200">列3</th></tr></thead><tbody mxv>';
    $line = 29;
    $art = 'each list as item index';
    ;
    $expr = '<%for (var index = 0, $art_crbjtvikre$art_c = list.length; index < $art_crbjtvikre$art_c; index++) {    var item = list[index]%>';
    for (var index = 0, $art_crbjtvikre$art_c = list.length; index < $art_crbjtvikre$art_c; index++) {
        var item = list[index];
        $p += '<tr mxv><td mxv><input type="checkbox" class="checkbox" linkage-parent="example" value="';
        $line = 34;
        $art = '=item.id';
        ;
        $p += ($expr = '<%=item.id%>', $e(item.id)) + '" ';
        $line = 35;
        $art = 'if item.disabled';
        ;
        $expr = '<%if (item.disabled) {%>';
        if (item.disabled) {
            ;
            $p += ' disabled="true" ';
            $line = 35;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '/></td><td>';
        $line = 37;
        $art = '=item.content1';
        ;
        $p += ($expr = '<%=item.content1%>', $e(item.content1)) + '</td><td>';
        $line = 38;
        $art = '=item.content2';
        ;
        $p += ($expr = '<%=item.content2%>', $e(item.content2)) + '</td><td>';
        $line = 39;
        $art = '=item.content3';
        ;
        $p += ($expr = '<%=item.content3%>', $e(item.content3)) + '</td></tr>';
        $line = 41;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div></div><div class="table-pager-wrapper" mx-change="' + $viewId + 'changePager()" mx-view="mx-pagination/index?total=';
    $line = 46;
    $art = '=total';
    ;
    $p += ($expr = '<%!$eu(total)%>', $eu(total)) + '&size=';
    $line = 47;
    $art = '=size';
    ;
    $p += ($expr = '<%!$eu(size)%>', $eu(size)) + '&page=';
    $line = 48;
    $art = '=page';
    ;
    $p += ($expr = '<%!$eu(page)%>', $eu(page)) + '"></div></div><div mxa="_zs_galleryes:f" class="clearfix"><div mxa="_zs_galleryes:g" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mxs="_zs_galleryes:h" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 54;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryes:h" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 56;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryes:i" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 59;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;div class="mb20"&gt;\n    &lt;a href="javascript:;" class="btn btn-brand mr20"\n        mx-click="clear()"&gt;清空所有选中&lt;/a&gt;\n\n    &lt;a href="javascript:;" class="btn btn-brand mr20"\n        mx-click="get()"&gt;获取选中值&lt;/a&gt;\n\n    &lt;span class="color-9"&gt;当前选中：&lt;/span&gt;&#123;&#123;=selected&#125;&#125;\n&lt;/div&gt;\n\n&lt;mx-table sticky="true"&gt;\n    &lt;table class="table"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th width="50"&gt;\n                    &lt;input type="checkbox" class="checkbox" linkage="example" /&gt;\n                &lt;/th&gt;\n                &lt;th width="200"&gt;列1&lt;/th&gt;\n                &lt;th width="200"&gt;列2&lt;/th&gt;\n                &lt;th width="200"&gt;列3&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;each list as item index&#125;&#125;\n            &lt;tr&gt;\n                &lt;td&gt;\n                    &lt;input type="checkbox" class="checkbox" \n                        linkage-parent="example" \n                        value="&#123;&#123;=item.id&#125;&#125;" \n                        &#123;&#123;if item.disabled&#125;&#125; disabled="true" &#123;&#123;/if&#125;&#125;/&gt;\n                &lt;/td&gt;\n                &lt;td&gt;&#123;&#123;=item.content1&#125;&#125;&lt;/td&gt;\n                &lt;td&gt;&#123;&#123;=item.content2&#125;&#125;&lt;/td&gt;\n                &lt;td&gt;&#123;&#123;=item.content3&#125;&#125;&lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/each&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;\n&lt;mx-pagination class="table-pager-wrapper"\n    total="&#123;&#123;=total&#125;&#125;" \n    size="&#123;&#123;=size&#125;&#125;" \n    page="&#123;&#123;=page&#125;&#125;"\n    mx-change="changePager()"/&gt;</pre></div><div mxa="_zs_galleryes:i" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-right"><div mxs="_zs_galleryes:j" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 107;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryes:j" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 109;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryes:i" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 112;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet StoreState = require(\'@../../mx-checkbox/storestate\');\nlet Linkage = require(\'@../../mx-checkbox/linkage\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [StoreState, Linkage],\n    render() &#123;\n        let that = this;\n        let allList = [];\n        for (var i = 0; i &lt; 20; i++) &#123;\n            allList.push(&#123;\n                id: i,\n                disabled: (i % 2 == 0),\n                content1: i + \'_列1\',\n                content2: i + \'_列2\',\n                content3: i + \'_列3\'\n            &#125;)\n        &#125;\n        let size = 5,\n            total = allList.length,\n            page = 1;\n        let list = allList.slice(0, 5);\n        that.updater.digest(&#123;\n            allList,\n            list,\n            size,\n            page,\n            total,\n            selected: []\n        &#125;);\n    &#125;,\n\n    \'changePager&lt;change&gt;\' (e) &#123;\n        // e.page 当前第几页\n        // e.size 每页多少条\n        let that = this;\n        let page = +e.page;\n        let allList = that.updater.get(\'allList\');\n        let list = allList.slice((page - 1) * 5, page * 5);\n        that.updater.digest(&#123;\n            list,\n            page\n        &#125;)\n    &#125;,\n\n    \'get&lt;click&gt;\' (e) &#123;\n        let selected = this.getStoreState(\'example\');\n        this.updater.digest(&#123;\n            selected: selected\n        &#125;)\n    &#125;,\n\n    \'clear&lt;click&gt;\' (e) &#123;\n        this.clearStoreState(\'example\');\n        this.updater.digest(&#123;\n            selected: \'\'\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-table/examples/14.html';
    throw msg;
} return $p; },
    mixins: [StoreState, Linkage],
    render: function () {
        var that = this;
        var allList = [];
        for (var i = 0; i < 20; i++) {
            allList.push({
                id: i,
                disabled: (i % 2 == 0),
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
    'get<click>': function (e) {
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