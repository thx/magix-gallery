/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/__test__/12",["magix","__test__/example","$","mx-table/sub","../index","mx-pagination/index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$,Sub*/
require("../index");
require("mx-pagination/index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
var Sub = require("mx-table/sub");
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
} ; var $g = '', $_temp, $p = '', list = $$.list, count = $$.count, page = $$.page, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryd$:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_galleryd$:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryd$:_" class="mb20 clearfix lh22"><div class="fl color-9">以下示例：</div><div class="fl"><div>trigger上配置sub-toggle，<span class="color-brand">以sub-toggle作为主键，请保证sub-toggle唯一（包括翻页的情况下）</span></div><div>被展开项配置sub-toggle-parent指向对应的sub-toggle</div><div>数组操作（改值或翻页等）digest数据之后，保持原先的展开逻辑</div><div>翻页和数据改动，保留原先的展开逻辑</div><div>需要默认展开某一行配置data-expand="true"，示例中默认展开name2</div></div></div><div mxa="_zs_galleryd$:b" class="mb20"><div mxa="_zs_galleryd$:c" mx-view="mx-table/index"><div><table mxa="_zs_galleryd$:d" class="table"><thead mxs="_zs_galleryd$:a"><tr><th width="40"></th><th width="200">name</th><th width="200">link</th><th width="200">value</th><th width="200">test</th></tr></thead><tbody>';
    $line = 26;
    $art = 'each list as item';
    ;
    $expr = '<%for (var $art_iezecatkr$art_i = 0, $art_chvcn$art_c = list.length; $art_iezecatkr$art_i < $art_chvcn$art_c; $art_iezecatkr$art_i++) {    var item = list[$art_iezecatkr$art_i]%>';
    for (var $art_iezecatkr$art_i = 0, $art_chvcn$art_c = list.length; $art_iezecatkr$art_i < $art_chvcn$art_c; $art_iezecatkr$art_i++) {
        var item = list[$art_iezecatkr$art_i];
        $p += '<tr><td><span sub-toggle="toggle_';
        $line = 30;
        $art = '=item.id';
        ;
        $p += ($expr = '<%=item.id%>', $e(item.id)) + '" data-expand="';
        $line = 31;
        $art = '=item.expand';
        ;
        $p += ($expr = '<%=item.expand%>', $e(item.expand)) + '"></span></td><td>';
        $line = 33;
        $art = '=item.name';
        ;
        $p += ($expr = '<%=item.name%>', $e(item.name)) + '</td><td>';
        $line = 34;
        $art = '=item.link';
        ;
        $p += ($expr = '<%=item.link%>', $e(item.link)) + '</td><td>';
        $line = 35;
        $art = '=item.value';
        ;
        $p += ($expr = '<%=item.value%>', $e(item.value)) + '</td><td>';
        $line = 36;
        $art = '=item.test';
        ;
        $p += ($expr = '<%=item.test%>', $e(item.test)) + '</td></tr><tr mxa="_zs_galleryd$:e" class="operation-tr"><td mxa="_zs_galleryd$:f" colspan="5"><a href="javascript:;" class="btn btn-white btn-small mr10" mx-click="' + $viewId + 'change({id:';
        $line = 40;
        $art = '=item.id';
        ;
        $p += ($expr = '<%=item.id%>', $e(item.id)) + '})">改变数据后digest</a></td></tr>';
        $line = 43;
        $art = 'each item.subs as sub subIndex';
        ;
        $expr = '<%for (var subIndex = 0, $art_objbrpfit$art_obj = item.subs, $art_czvalmfqk$art_c = $art_objbrpfit$art_obj.length; subIndex < $art_czvalmfqk$art_c; subIndex++) {        var sub = $art_objbrpfit$art_obj[subIndex]%>';
        for (var subIndex = 0, $art_objbrpfit$art_obj = item.subs, $art_czvalmfqk$art_c = $art_objbrpfit$art_obj.length; subIndex < $art_czvalmfqk$art_c; subIndex++) {
            var sub = $art_objbrpfit$art_obj[subIndex];
            $p += '<tr class="hide" sub-toggle-parent="toggle_';
            $line = 46;
            $art = '=item.id';
            ;
            $p += ($expr = '<%=item.id%>', $e(item.id)) + '"><td class="sub-mask ';
            $line = 48;
            $art = 'if item.subs.length==subIndex+1';
            ;
            $expr = '<%if (item.subs.length == subIndex + 1) {%>';
            if (item.subs.length == subIndex + 1) {
                ;
                $p += ' sub-mask-last ';
                $line = 48;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '"></td><td>';
            $line = 49;
            $art = '=sub.name';
            ;
            $p += ($expr = '<%=sub.name%>', $e(sub.name)) + '</td><td>';
            $line = 50;
            $art = '=sub.link';
            ;
            $p += ($expr = '<%=sub.link%>', $e(sub.link)) + '</td><td>';
            $line = 51;
            $art = '=sub.value';
            ;
            $p += ($expr = '<%=sub.value%>', $e(sub.value)) + '</td><td>';
            $line = 52;
            $art = '=sub.test';
            ;
            $p += ($expr = '<%=sub.test%>', $e(sub.test)) + '</td></tr><tr class="hide operation-tr" sub-toggle-parent="toggle_';
            $line = 55;
            $art = '=item.id';
            ;
            $p += ($expr = '<%=item.id%>', $e(item.id)) + '"><td class="sub-mask ';
            $line = 57;
            $art = 'if item.subs.length==subIndex+1';
            ;
            $expr = '<%if (item.subs.length == subIndex + 1) {%>';
            if (item.subs.length == subIndex + 1) {
                ;
                $p += ' sub-mask-last ';
                $line = 57;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '"></td><td mxs="_zs_galleryd$:b" colspan="4"><a href="javascript:;" class="btn btn-white btn-small mr10">操作</a></td></tr>';
            $line = 62;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 63;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div></div><div mxa="_zs_galleryd$:g" class="table-pager-wrapper mb20"><div mx-change="' + $viewId + 'changePager()" mx-view="mx-pagination/index?total=';
    $line = 69;
    $art = '=count';
    ;
    $p += ($expr = '<%!$eu(count)%>', $eu(count)) + '&size=5&page=';
    $line = 71;
    $art = '=page';
    ;
    $p += ($expr = '<%!$eu(page)%>', $eu(page)) + '"></div></div></div></div><div mxa="_zs_galleryd$:h" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryd$:c" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 79;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryd$:i" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 81;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryd$:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><div id="';
    $line = 84;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1"><pre mxs="_zs_galleryd$:e">\n&lt;mx-table&gt;\n    &lt;table class="table"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th width="40"&gt;&lt;/th&gt;\n                &lt;th width="200"&gt;name&lt;/th&gt;\n                &lt;th width="200"&gt;link&lt;/th&gt;\n                &lt;th width="200"&gt;value&lt;/th&gt;\n                &lt;th width="200"&gt;test&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;each list as item&#125;&#125;\n                &lt;tr&gt;\n                    &lt;td&gt;\n                        &lt;!-- data-expand="是否需要默认展开" sub-toggle="展开icon的id" --&gt;</pre><pre mxs="_zs_galleryd$:f" class="color-brand">\n                        &lt;span sub-toggle="toggle_&#123;&#123;=item.id&#125;&#125;" data-expand="&#123;&#123;=item.expand&#125;&#125;"&gt;&lt;/span&gt; </pre><pre mxs="_zs_galleryd$:g">\n                    &lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=item.name&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=item.link&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=item.value&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=item.test&#125;&#125;&lt;/td&gt;\n                &lt;/tr&gt;\n                &lt;tr class="operation-tr"&gt;  \n                    &lt;td colspan="5"&gt;\n                        &lt;a href="javascript:;" class="btn btn-white btn-small mr10" mx-click="change(&#123;id:&#123;&#123;=item.id&#125;&#125;&#125;)"&gt;改变数据后digest&lt;/a&gt;\n                    &lt;/td&gt;\n                &lt;/tr&gt;\n                &#123;&#123;each item.subs as sub subIndex&#125;&#125;\n                &lt;!-- sub-toggle-parent="指向控制的sub-toggle" --&gt;</pre><pre mxs="_zs_galleryd$:h" class="color-brand">\n                &lt;tr class="hide" sub-toggle-parent="toggle_&#123;&#123;=item.id&#125;&#125;"&gt;</pre><pre mxs="_zs_galleryd$:i">\n                    &lt;!-- td个数保持一致，占位符+className sub-mask --&gt;\n                    &lt;td class="sub-mask &#123;&#123;if item.subs.length==subIndex+1&#125;&#125; sub-mask-last &#123;&#123;/if&#125;&#125; "&gt;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=sub.name&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=sub.link&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=sub.value&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=sub.test&#125;&#125;&lt;/td&gt;\n                &lt;/tr&gt;\n                &lt;tr class="hide operation-tr"\n                    sub-toggle-parent="toggle_&#123;&#123;=item.id&#125;&#125;"&gt;\n                    &lt;!-- td个数保持一致，占位符+className sub-mask --&gt;\n                    &lt;td class="sub-mask &#123;&#123;if item.subs.length==subIndex+1&#125;&#125; sub-mask-last &#123;&#123;/if&#125;&#125; "&gt;&lt;/td&gt;\n                    &lt;td colspan="4"&gt;\n                        &lt;a href="javascript:;" class="btn btn-white btn-small mr10"&gt;操作&lt;/a&gt;\n                    &lt;/td&gt;\n                &lt;/tr&gt;\n                &#123;&#123;/each&#125;&#125;\n            &#123;&#123;/each&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;\n&lt;div class="table-pager-wrapper"&gt;\n    &lt;mx-pagination \n        total="&#123;&#123;=count&#125;&#125;" \n        size="5" \n        page="&#123;&#123;=page&#125;&#125;"\n        mx-change="changePager()"/&gt;\n&lt;/div&gt;</pre></div></div><div mxa="_zs_galleryd$:j" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryd$:j" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 148;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryd$:k" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 150;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryd$:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 153;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Base = require(\'__test__/example\');\nlet $ = require(\'$\');\nlet Sub = require(\'@../gallery/mx-table/sub\');\n\nmodule.exports = Base.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [Sub],\n    render() &#123;\n        let that = this;\n        let allList = [];\n        for (var i = 0; i &lt; 15; i++) &#123;\n            allList.push(&#123;\n                id: i,\n                expand: (i == 2),\n                name: \'name\' + i,\n                link: \'link\' + i,\n                value: \'value\' + i,\n                test: \'test\' + i,\n                subs: [&#123;\n                    name: \'subname1\',\n                    link: \'sublink1\',\n                    value: \'subvalue1\',\n                    test: \'subtest1\',\n                &#125;, &#123;\n                    name: \'subname2\',\n                    link: \'sublink2\',\n                    value: \'subvalue2\',\n                    test: \'subtest2\',\n                &#125;]\n            &#125;)\n        &#125;\n\n        that.updater.digest(&#123;\n            count: allList.length,\n            page: 1,\n            allList,\n            list: allList.slice(0, 5)\n        &#125;);\n    &#125;,\n    \'change&lt;click&gt;\' (e) &#123;\n        let id = e.params.id;\n        let list = this.updater.get(\'list\');\n        for (let index = 0; index &lt; list.length; index++) &#123;\n            if(list[index].id == id)&#123;\n                list[index].name = Magix.guid(\'测试数据变化\');\n                break;\n            &#125;\n        &#125;\n        \n        this.updater.digest(&#123;\n            list\n        &#125;)\n    &#125;,\n    \'changePager&lt;change&gt;\' (e) &#123;\n        // e.page 当前第几页\n        // e.size 每页多少条\n        let that = this;\n        let page = e.page;\n        let allList = that.updater.get(\'allList\');\n        let list = allList.slice((page - 1) * 5, page * 5);\n        that.updater.digest(&#123;\n            list,\n            page\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-table/__test__/12.html';
    throw msg;
} return $p; },
    mixins: [Sub],
    render: function () {
        var that = this;
        var allList = [];
        for (var i = 0; i < 15; i++) {
            allList.push({
                id: i,
                expand: (i == 2),
                name: 'name' + i,
                link: 'link' + i,
                value: 'value' + i,
                test: 'test' + i,
                subs: [{
                        name: 'subname1',
                        link: 'sublink1',
                        value: 'subvalue1',
                        test: 'subtest1'
                    }, {
                        name: 'subname2',
                        link: 'sublink2',
                        value: 'subvalue2',
                        test: 'subtest2'
                    }]
            });
        }
        that.updater.digest({
            count: allList.length,
            page: 1,
            allList: allList,
            list: allList.slice(0, 5)
        });
    },
    'change<click>': function (e) {
        var id = e.params.id;
        var list = this.updater.get('list');
        for (var index = 0; index < list.length; index++) {
            if (list[index].id == id) {
                list[index].name = Magix.guid('测试数据变化');
                break;
            }
        }
        this.updater.digest({
            list: list
        });
    },
    'changePager<change>': function (e) {
        // e.page 当前第几页
        // e.size 每页多少条
        var that = this;
        var page = e.page;
        var allList = that.updater.get('allList');
        var list = allList.slice((page - 1) * 5, page * 5);
        that.updater.digest({
            list: list,
            page: page
        });
    }
});

});