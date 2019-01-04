/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/__test__/18",["magix","__test__/example","mx-table/sort","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,Sort,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var Sort = require("mx-table/sort");
var $ = require("$");
var CopyText = '复制代码';
var Router = Magix.Router;
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
} ; var $g = '', $_temp, $p = '', list = $$.list, groups = $$.groups, sortField = $$.sortField, sortBy = $$.sortBy, orderFieldKey = $$.orderFieldKey, orderByKey = $$.orderByKey, format = $$.format, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxa="_zs_gallerydL:_" class="_zs_galleryh"><div mxa="_zs_gallerydL:a" class="_zs_galleryk"><div mxs="_zs_gallerydL:_" class="mb20"><div class="mb5">1. 默认使用 “指标field1” + “升序” 进行排序：sort-field（当前排序字段）；sort-orderby（当前排序方式）</div><div class="mb5 pl15"><pre class="tip-content">\n&lt;th class="field-item"&gt;\n    指标&#123;&#123;=field&#125;&#125;\n    &lt;span sort-trigger="&#123;&#123;=field&#125;&#125;"\n        sort-field="&#123;&#123;=sortField&#125;&#125;"\n        sort-orderby="&#123;&#123;=sortBy&#125;&#125;"&gt;&lt;/span&gt;\n&lt;/th&gt;\n                </pre></div><div class="mb5">2. 自定义路由参数：当前页面有两个表格，都需要排序，如果都用默认的路由参数（orderField 和 orderBy）会存在冲突，需要自定义路由参数</div><div class="mb5 pl15"><pre class="tip-content mb5">\n&lt;th class="field-item"&gt;\n指标&#123;&#123;=field&#125;&#125;\n&lt;span sort-trigger="&#123;&#123;=field&#125;&#125;"\n    order-field-key="&#123;&#123;=orderFieldKey&#125;&#125;"\n    order-by-key="&#123;&#123;=orderByKey&#125;&#125;"&gt;&lt;/span&gt;\n&lt;/th&gt;\n                </pre><div class="mb5">最终路由上显示为：</div><pre class="tip-content">\n{\n    [order-field-key]: sort-trigger,\n    [order-by-key]: desc or asc\n}\n                </pre></div></div><div mxa="_zs_gallerydL:b" mx-view="mx-table/index?sticky=true" class="mb40"><div><table mxa="_zs_gallerydL:c" class="table" left="true" width="400"><thead mxs="_zs_gallerydL:a"><tr><th>固定1</th><th>固定2</th><th>固定3</th></tr></thead><tbody>'; for (var index = 0, $art_cktnzmoi$art_c = list.length; index < $art_cktnzmoi$art_c; index++) {
    var item = list[index];
    $p += '<tr><td>' + $e(item.fixed1) + '</td><td>' + $e(item.fixed2) + '</td><td>' + $e(item.fixed3) + '</td></tr>';
} ; $p += '</tbody></table></div><div><table mxa="_zs_gallerydL:d" class="table" center="true" width="1200"><thead><tr>'; for (var $art_idlqwslfaca$art_i = 0, $art_crmmvufju$art_c = groups.length; $art_idlqwslfaca$art_i < $art_crmmvufju$art_c; $art_idlqwslfaca$art_i++) {
    var group = groups[$art_idlqwslfaca$art_i];
    $p += '<th class="field-group" colspan="' + $e(group.fields.length) + '"><div mxa="_zs_gallerydL:e" class="group-name">' + $e(group.name) + '</div></th>';
} ; $p += '</tr><tr>'; for (var $art_ipiweb$art_i = 0, $art_cuombbwv$art_c = groups.length; $art_ipiweb$art_i < $art_cuombbwv$art_c; $art_ipiweb$art_i++) {
    var group = groups[$art_ipiweb$art_i];
    $p += ' ';
    for (var $art_iisxbgcaj$art_i = 0, $art_objwjerefzn$art_obj = group.fields, $art_chdfmeytq$art_c = $art_objwjerefzn$art_obj.length; $art_iisxbgcaj$art_i < $art_chdfmeytq$art_c; $art_iisxbgcaj$art_i++) {
        var field = $art_objwjerefzn$art_obj[$art_iisxbgcaj$art_i];
        $p += '<th mxa="_zs_gallerydL:f" class="field-item">指标' + $e(field) + '<span sort-trigger="' + $e(field) + '" sort-field="' + $e(sortField) + '" sort-orderby="' + $e(sortBy) + '" order-field-key="' + $e(orderFieldKey) + '" order-by-key="' + $e(orderByKey) + '"></span></th>';
    }
    ;
    $p += ' ';
} ; $p += '</tr></thead><tbody>'; for (var index = 0, $art_cehhyllquog$art_c = list.length; index < $art_cehhyllquog$art_c; index++) {
    var item = list[index];
    $p += '<tr class="' + $e((index + 1 == list.length) ? 'last-tr' : '') + '">';
    for (var $art_iqblqsqwaynf$art_i = 0, $art_cbtaqobr$art_c = groups.length; $art_iqblqsqwaynf$art_i < $art_cbtaqobr$art_c; $art_iqblqsqwaynf$art_i++) {
        var group = groups[$art_iqblqsqwaynf$art_i];
        $p += ' ';
        for (var $art_ifmqhf$art_i = 0, $art_objzvhjya$art_obj = group.fields, $art_cyqwfroo$art_c = $art_objzvhjya$art_obj.length; $art_ifmqhf$art_i < $art_cyqwfroo$art_c; $art_ifmqhf$art_i++) {
            var field = $art_objzvhjya$art_obj[$art_ifmqhf$art_i];
            $p += '<td>' + $e(format(item[field])) + '</td>';
        }
        ;
        $p += ' ';
    }
    ;
    $p += '</tr>';
} ; $p += '</tbody></table></div></div></div><div mxa="_zs_gallerydL:g" class="clearfix"><div mxa="_zs_gallerydL:h" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_gallerydL:b" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerydL:i" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerydL:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-table sticky="true" class="mb40"&gt;\n    &lt;table class="table" left="true" width="400"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th&gt;固定1&lt;/th&gt;\n                &lt;th&gt;固定2&lt;/th&gt;\n                &lt;th&gt;固定3&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;each list as item index&#125;&#125;\n                &lt;tr&gt;\n                    &lt;td&gt;&#123;&#123;=item.fixed1&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=item.fixed2&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=item.fixed3&#125;&#125;&lt;/td&gt;\n                &lt;/tr&gt;\n            &#123;&#123;/each&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n    &lt;table class="table" center="true" width="1200"&gt; \n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;each groups as group&#125;&#125;\n                    &lt;th class="field-group" colspan="&#123;&#123;=group.fields.length&#125;&#125;"&gt;\n                        &lt;div class="group-name"&gt;&#123;&#123;=group.name&#125;&#125;&lt;/div&gt;\n                    &lt;/th&gt;\n                &#123;&#123;/each&#125;&#125;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &#123;&#123;each groups as group&#125;&#125;\n                    &#123;&#123;each group.fields as field&#125;&#125;\n                    &lt;th class="field-item"&gt;\n                        指标&#123;&#123;=field&#125;&#125;\n                        &lt;span sort-trigger="&#123;&#123;=field&#125;&#125;"\n                            sort-field="&#123;&#123;=sortField&#125;&#125;"\n                            sort-orderby="&#123;&#123;=sortBy&#125;&#125;"\n                            order-field-key="&#123;&#123;=orderFieldKey&#125;&#125;"\n                            order-by-key="&#123;&#123;=orderByKey&#125;&#125;"&gt;&lt;/span&gt;\n                    &lt;/th&gt;\n                    &#123;&#123;/each&#125;&#125;\n                &#123;&#123;/each&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;each list as item index&#125;&#125;\n                &lt;tr class="&#123;&#123;= (index+1==list.length) ? \'last-tr\' : \'\'&#125;&#125;"&gt;\n                    &#123;&#123;each groups as group&#125;&#125;\n                        &#123;&#123;each group.fields as field&#125;&#125;\n                        &lt;td&gt;&#123;&#123;=format(item[field])&#125;&#125;&lt;/td&gt;\n                        &#123;&#123;/each&#125;&#125;\n                    &#123;&#123;/each&#125;&#125;\n                &lt;/tr&gt;\n            &#123;&#123;/each&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;\n            </pre></div><div mxa="_zs_gallerydL:j" class="_zs_galleryl _zs_gallerye _zs_galleryf"><div mxs="_zs_gallerydL:d" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_gallerydL:k" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_gallerydL:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\nlet Magix = require(\'magix\');\nlet Sort = require(\'@../sort\');\nlet $ = require(\'$\');\nlet Router = Magix.Router;\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [Sort],\n    init() &#123;\n        this.observeLocation([\'customOrderField\', \'customOrderBy\']);\n    &#125;,\n    render() &#123;\n        let that = this;\n\n        let groups = [&#123;\n            name: \'组1\',\n            fields: [\'field1\', \'field2\']\n        &#125;, &#123;\n            name: \'组2\',\n            fields: [\'field3\', \'field4\', \'field5\', \'field6\']\n        &#125;, &#123;\n            name: \'组3\',\n            fields: [\'field7\', \'field8\', \'field9\']\n        &#125;]\n        let len = 0;\n        groups.forEach(group =&gt; &#123;\n            len += group.fields.length;\n        &#125;)\n\n        let locParams = Router.parse().params;\n        let orderFieldKey = \'customOrderField\',\n            orderByKey = \'customOrderBy\';\n\n        that.updater.digest(&#123;\n            list: that.getList(),\n            orderFieldKey,\n            orderByKey,\n            sortField: locParams[orderFieldKey] || \'field1\',\n            sortBy: locParams[orderByKey] || \'asc\',\n            groups,\n            len,\n            format: (val) =&gt; &#123;\n                if (!val) &#123;\n                    return \'-\';\n                &#125;\n                return val;\n            &#125;\n        &#125;);\n    &#125;\n&#125;);\n            </pre></div></div></div>'; return $p; },
    mixins: [Sort],
    init: function () {
        var that = this;
        that.updater.set({
            viewId: that.id,
            text1: CopyText,
            text2: CopyText
        });
        that.observeLocation(['customOrderField', 'customOrderBy']);
    },
    render: function () {
        var that = this;
        var groups = [{
                name: '组1',
                fields: ['field1', 'field2']
            }, {
                name: '组2',
                fields: ['field3', 'field4', 'field5', 'field6']
            }, {
                name: '组3',
                fields: ['field7', 'field8', 'field9']
            }];
        var len = 0;
        groups.forEach(function (group) {
            len += group.fields.length;
        });
        var locParams = Router.parse().params;
        var orderFieldKey = 'customOrderField', orderByKey = 'customOrderBy';
        var list = that.getList();
        that.updater.digest({
            list: list,
            orderFieldKey: orderFieldKey,
            orderByKey: orderByKey,
            sortField: locParams[orderFieldKey] || 'field1',
            sortBy: locParams[orderByKey] || 'asc',
            groups: groups,
            len: len,
            format: function (val) {
                if (!val) {
                    return '-';
                }
                return val;
            }
        });
        // 重新排序
        that.updater.digest({
            list: that.sort(list)
        });
    },
    getList: function () {
        var list = [];
        for (var i = 0; i < 5; i++) {
            var empty = (i == 2 || i == 4);
            var origin = {
                fixed1: Magix.guid('fixed1-'),
                fixed2: Magix.guid('fixed2-'),
                fixed3: Magix.guid('fixed3-'),
                field1: empty ? 0 : (i + 9000),
                field2: empty ? 0 : (i + 3000),
                field3: empty ? 0 : (i + 1000),
                field4: i + 412,
                field5: i + 512,
                field6: i + 612,
                field7: i + 7,
                field8: i + 8,
                field9: i + 2
            };
            var item = $.extend(true, {}, origin);
            list.push(item);
        }
        return list;
    }
});

});