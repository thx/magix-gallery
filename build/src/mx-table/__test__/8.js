/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/__test__/8",["magix","__test__/example","mx-table/sort","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,Sort,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var Sort = require("mx-table/sort");
var $ = require("$");
var CopyText = '复制代码';
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
} ; var $g = '', $_temp, $p = '', groups = $$.groups, list = $$.list, format = $$.format, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryd+:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_galleryd+:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryd+:h" class="mb20 clearfix lh22"><div class="fl color-9">以下示例：</div><div class="fl"><div>需要排序的表头上加上<span class="color-brand">&lt;span sort-trigger="需要排序的字段key值"&gt;&lt;/span&gt;</span>；</div><div class="mt10 mb10"><pre class="tip-content">\n&lt;th class="field-item"&gt;\n    指标&#123;&#123;=field&#125;&#125;\n    &lt;span sort-trigger="&#123;&#123;=field&#125;&#125;"&gt;&lt;/span&gt;\n&lt;/th&gt;\n</pre></div><div>排序参数反应在路由上，orderField（按哪个字段排序），orderBy（desc降序，asc升序）；</div><div>mixins中this.sort为本页排序方法（<span class="color-brand">数字排序+字符串排序</span>），如果从接口获取排序则忽略此方法</div></div></div><div mxa="_zs_galleryd+:p" mx-view="mx-table/index?sticky=true" class="mb40"><div><table mxa="_zs_galleryd+:q" class="table"><thead><tr><th mxs="_zs_galleryd+:e" rowspan="2">固定1</th><th mxs="_zs_galleryd+:f" rowspan="2">固定2</th><th mxs="_zs_galleryd+:g" rowspan="2">固定3</th>';
    $line = 27;
    $art = 'each groups as group';
    ;
    $expr = '<%for (var $art_iyeyieus$art_i = 0, $art_cgztwqsyb$art_c = groups.length; $art_iyeyieus$art_i < $art_cgztwqsyb$art_c; $art_iyeyieus$art_i++) {    var group = groups[$art_iyeyieus$art_i]%>';
    for (var $art_iyeyieus$art_i = 0, $art_cgztwqsyb$art_c = groups.length; $art_iyeyieus$art_i < $art_cgztwqsyb$art_c; $art_iyeyieus$art_i++) {
        var group = groups[$art_iyeyieus$art_i];
        $p += '<th class="field-group" colspan="';
        $line = 28;
        $art = '=group.fields.length';
        ;
        $p += ($expr = '<%=group.fields.length%>', $e(group.fields.length)) + '"><div mxa="_zs_galleryd+:r" class="group-name">';
        $line = 29;
        $art = '=group.name';
        ;
        $p += ($expr = '<%=group.name%>', $e(group.name)) + '</div></th>';
        $line = 31;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tr><tr>';
    $line = 34;
    $art = 'each groups as group';
    ;
    $expr = '<%for (var $art_ibxwztdkjv$art_i = 0, $art_covumxwyd$art_c = groups.length; $art_ibxwztdkjv$art_i < $art_covumxwyd$art_c; $art_ibxwztdkjv$art_i++) {    var group = groups[$art_ibxwztdkjv$art_i]%>';
    for (var $art_ibxwztdkjv$art_i = 0, $art_covumxwyd$art_c = groups.length; $art_ibxwztdkjv$art_i < $art_covumxwyd$art_c; $art_ibxwztdkjv$art_i++) {
        var group = groups[$art_ibxwztdkjv$art_i];
        $p += ' ';
        $line = 35;
        $art = 'each group.fields as field';
        ;
        $expr = '<%for (var $art_igsmqfdjo$art_i = 0, $art_objcdiftnr$art_obj = group.fields, $art_cfuzuryyydf$art_c = $art_objcdiftnr$art_obj.length; $art_igsmqfdjo$art_i < $art_cfuzuryyydf$art_c; $art_igsmqfdjo$art_i++) {        var field = $art_objcdiftnr$art_obj[$art_igsmqfdjo$art_i]%>';
        for (var $art_igsmqfdjo$art_i = 0, $art_objcdiftnr$art_obj = group.fields, $art_cfuzuryyydf$art_c = $art_objcdiftnr$art_obj.length; $art_igsmqfdjo$art_i < $art_cfuzuryyydf$art_c; $art_igsmqfdjo$art_i++) {
            var field = $art_objcdiftnr$art_obj[$art_igsmqfdjo$art_i];
            $p += '<th mxa="_zs_galleryd+:s" class="field-item">';
            $line = 37;
            $art = '=field.name';
            ;
            $p += ($expr = '<%=field.name%>', $e(field.name)) + '<span sort-trigger="';
            $line = 38;
            $art = '=field.key';
            ;
            $p += ($expr = '<%=field.key%>', $e(field.key)) + '"></span></th>';
            $line = 40;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 41;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody>';
    $line = 45;
    $art = 'each list as item index';
    ;
    $expr = '<%for (var index = 0, $art_ctpmoeuapsz$art_c = list.length; index < $art_ctpmoeuapsz$art_c; index++) {    var item = list[index]%>';
    for (var index = 0, $art_ctpmoeuapsz$art_c = list.length; index < $art_ctpmoeuapsz$art_c; index++) {
        var item = list[index];
        $p += '<tr><td>';
        $line = 47;
        $art = '=item.fixed1';
        ;
        $p += ($expr = '<%=item.fixed1%>', $e(item.fixed1)) + '</td><td>';
        $line = 48;
        $art = '=item.fixed2';
        ;
        $p += ($expr = '<%=item.fixed2%>', $e(item.fixed2)) + '</td><td>';
        $line = 49;
        $art = '=item.fixed3';
        ;
        $p += ($expr = '<%=item.fixed3%>', $e(item.fixed3)) + '</td>';
        $line = 50;
        $art = 'each groups as group';
        ;
        $expr = '<%for (var $art_ippeohnxhhwp$art_i = 0, $art_cffkixqbh$art_c = groups.length; $art_ippeohnxhhwp$art_i < $art_cffkixqbh$art_c; $art_ippeohnxhhwp$art_i++) {        var group = groups[$art_ippeohnxhhwp$art_i]%>';
        for (var $art_ippeohnxhhwp$art_i = 0, $art_cffkixqbh$art_c = groups.length; $art_ippeohnxhhwp$art_i < $art_cffkixqbh$art_c; $art_ippeohnxhhwp$art_i++) {
            var group = groups[$art_ippeohnxhhwp$art_i];
            $p += ' ';
            $line = 51;
            $art = 'each group.fields as field';
            ;
            $expr = '<%for (var $art_iuxere$art_i = 0, $art_objgbsipxjt$art_obj = group.fields, $art_cotpcgcs$art_c = $art_objgbsipxjt$art_obj.length; $art_iuxere$art_i < $art_cotpcgcs$art_c; $art_iuxere$art_i++) {            var field = $art_objgbsipxjt$art_obj[$art_iuxere$art_i]%>';
            for (var $art_iuxere$art_i = 0, $art_objgbsipxjt$art_obj = group.fields, $art_cotpcgcs$art_c = $art_objgbsipxjt$art_obj.length; $art_iuxere$art_i < $art_cotpcgcs$art_c; $art_iuxere$art_i++) {
                var field = $art_objgbsipxjt$art_obj[$art_iuxere$art_i];
                $p += '<td>';
                $line = 52;
                $art = '=format(item[field.key])';
                ;
                $p += ($expr = '<%=format(item[field.key])%>', $e(format(item[field.key]))) + '</td>';
                $line = 53;
                $art = '/each';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 54;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</tr>';
        $line = 56;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div></div></div><div mxa="_zs_galleryd+:f" class="clearfix"><div mxa="_zs_galleryd+:t" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half"><div mxs="_zs_galleryd+:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 64;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryd+:u" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 66;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryd+:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 69;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-table sticky="true" class="mb40"&gt;\n    &lt;table class="table" left="true" width="400"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th&gt;固定1&lt;/th&gt;\n                &lt;th&gt;固定2&lt;/th&gt;\n                &lt;th&gt;固定3&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;each list as item index&#125;&#125;\n                &lt;tr&gt;\n                    &lt;td&gt;&#123;&#123;=item.fixed1&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=item.fixed2&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=item.fixed3&#125;&#125;&lt;/td&gt;\n                &lt;/tr&gt;\n            &#123;&#123;/each&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n    &lt;!-- 滚动列 --&gt;\n    &lt;table class="table" center="true" width="1200"&gt; \n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;each groups as group&#125;&#125;\n                    &lt;th class="field-group" \n                        colspan="&#123;&#123;=group.fields.length&#125;&#125;"&gt;\n                        &lt;div class="group-name"&gt;\n                            &#123;&#123;=group.name&#125;&#125;\n                        &lt;/div&gt;\n                    &lt;/th&gt;\n                &#123;&#123;/each&#125;&#125;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &#123;&#123;each groups as group&#125;&#125;\n                    &#123;&#123;each group.fields as field&#125;&#125;\n                    &lt;th class="field-item"&gt;\n                        指标&#123;&#123;=field&#125;&#125;\n                        &lt;span sort-trigger="&#123;&#123;=field&#125;&#125;"&gt;&lt;/span&gt;\n                    &lt;/th&gt;\n                    &#123;&#123;/each&#125;&#125;\n                &#123;&#123;/each&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;each list as item index&#125;&#125;\n                &lt;tr class="&#123;&#123;= (index+1==list.length) ? \'last-tr\' : \'\'&#125;&#125;"&gt;\n                    &#123;&#123;each groups as group&#125;&#125;\n                        &#123;&#123;each group.fields as field&#125;&#125;\n                        &lt;td&gt;&#123;&#123;=format(item[field])&#125;&#125;&lt;/td&gt;\n                        &#123;&#123;/each&#125;&#125;\n                    &#123;&#123;/each&#125;&#125;\n                &lt;/tr&gt;\n            &#123;&#123;/each&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;</pre></div><div mxa="_zs_galleryd+:v" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-right"><div mxs="_zs_galleryd+:d" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 129;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryd+:w" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 131;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryd+:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 134;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Sort = require(\'@../gallery/mx-table/sort\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [Sort],\n    init() &#123;\n        this.observeLocation([\'orderField\', \'orderBy\']);\n    &#125;,\n    render() &#123;\n        let that = this;\n\n        let groups = [&#123;\n            name: \'组1\',\n            fields: [\'field1\', \'field2\']\n        &#125;, &#123;\n            name: \'组2\',\n            fields: [\'field3\', \'field4\', \'field5\', \'field6\']\n        &#125;, &#123;\n            name: \'组3\',\n            fields: [\'field7\', \'field8\', \'field9\']\n        &#125;]\n        let len = 0;\n        groups.forEach(group =&gt; &#123;\n            len += group.fields.length;\n        &#125;)\n\n        that.updater.digest(&#123;\n            list: that.sort(that.getList()),\n            groups,\n            len,\n            format: (val) =&gt; &#123;\n                if (!val) &#123;\n                    return \'-\';\n                &#125;\n                return val;\n            &#125;\n        &#125;);\n    &#125;,\n    getList() &#123;\n        let list = [];\n        for (var i = 0; i &lt; 5; i++) &#123;\n            let empty = (i == 2 || i == 4);\n            let origin = &#123;\n                fixed1: i + \'_1\',\n                fixed2: i + \'_2\',\n                fixed3: i + \'_3\',\n                field1: empty ? 0 : (i + 9000),\n                field2: empty ? 0 : (i + 3000),\n                field3: empty ? 0 : (i + 1000),\n                field4: i + 412,\n                field5: i + 512,\n                field6: i + 612,\n                field7: i + 7,\n                field8: i + 8,\n                field9: i + 2\n            &#125;\n\n            let item = $.extend(true, &#123;&#125;, origin);\n            list.push(item);\n        &#125;\n        return list;\n    &#125;\n&#125;);\n            </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-table/__test__/8.html';
    throw msg;
} return $p; },
    mixins: [Sort],
    init: function () {
        var that = this;
        that.updater.set({
            viewId: that.id,
            text1: CopyText,
            text2: CopyText
        });
        that.observeLocation(['orderField', 'orderBy']);
    },
    render: function () {
        var that = this;
        var groups = [{
                name: '数字（忽略无值行）',
                fields: [{
                        name: '数字列1',
                        key: 'field1'
                    }, {
                        name: '数字列2',
                        key: 'field2'
                    }]
            }, {
                name: '字符串排序（忽略无值行 + 忽略大小写）',
                fields: [{
                        name: '英文',
                        key: 'field3'
                    }, {
                        name: '中文',
                        key: 'field4'
                    }]
            }];
        var len = 0;
        groups.forEach(function (group) {
            len += group.fields.length;
        });
        var list = [{
                fixed1: '1_1',
                fixed2: '1_2',
                fixed3: '1_3',
                field1: 9000,
                field2: 3000,
                field3: 'Abc',
                field4: '中文'
            }, {
                fixed1: '2_1',
                fixed2: '2_2',
                fixed3: '2_3',
                field1: 9001,
                field2: undefined,
                field3: 'dsas',
                field4: '测试'
            }, {
                fixed1: '3_1',
                fixed2: '3_2',
                fixed3: '3_3',
                field1: 9004,
                field2: 2990,
                field3: 'acc',
                field4: ''
            }, {
                fixed1: '4_1',
                fixed2: '4_2',
                fixed3: '4_3',
                field1: null,
                field2: 3010,
                field3: 'GSBa',
                field4: '你好'
            }, {
                fixed1: '5_1',
                fixed2: '5_2',
                fixed3: '5_3',
                field1: 9051,
                field2: 3000,
                field3: '',
                field4: '随机'
            }];
        that.updater.digest({
            list: that.sort(list),
            groups: groups,
            len: len,
            format: function (val) {
                if (!val) {
                    return '-';
                }
                return val;
            }
        });
    }
});

});