/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/examples/18",["magix","examples/example","mx-table/sort","$","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,Sort,$*/
require("../index");
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
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
} ; var $g = '', $_temp, $p = '', list = $$.list, groups = $$.groups, sortField = $$.sortField, sortBy = $$.sortBy, orderFieldKey = $$.orderFieldKey, orderByKey = $$.orderByKey, format = $$.format, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryex:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxa="_zs_galleryex:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_galleryex:_" class="mb20"><div class="mb5">1. 默认使用 “指标field1” + “升序” 进行排序：sort-field（当前排序字段）；sort-orderby（当前排序方式）</div><div class="mb5 pl15"><pre class="tip-content">\n&lt;th class="field-item"&gt;\n    指标&#123;&#123;=field&#125;&#125;\n    &lt;span sort-trigger="&#123;&#123;=field&#125;&#125;"\n        sort-field="&#123;&#123;=sortField&#125;&#125;"\n        sort-orderby="&#123;&#123;=sortBy&#125;&#125;"&gt;&lt;/span&gt;\n&lt;/th&gt;\n                </pre></div><div class="mb5">2. 自定义路由参数：当前页面有两个表格，都需要排序，如果都用默认的路由参数（orderField 和 orderBy）会存在冲突，需要自定义路由参数</div><div class="mb5 pl15"><pre class="tip-content mb5">\n&lt;th class="field-item"&gt;\n    指标&#123;&#123;=field&#125;&#125;\n    &lt;span sort-trigger="&#123;&#123;=field&#125;&#125;"\n        order-field-key="&#123;&#123;=orderFieldKey&#125;&#125;"\n        order-by-key="&#123;&#123;=orderByKey&#125;&#125;"&gt;&lt;/span&gt;\n&lt;/th&gt;\n                </pre><div class="mb5">最终路由上显示为：</div><pre class="tip-content">\n{\n    [order-field-key]: sort-trigger,\n    [order-by-key]: desc or asc\n}\n                </pre></div></div><div mxa="_zs_galleryex:b" mx-view="mx-table/index?sticky=true" class="mb40"><div><table mxa="_zs_galleryex:c" class="table" left="true" width="400"><thead mxs="_zs_galleryex:a"><tr><th>固定1</th><th>固定2</th><th>固定3</th></tr></thead><tbody>';
    $line = 45;
    $art = 'each list as item index';
    ;
    $expr = '<%for (var index = 0, $art_culbrrye$art_c = list.length; index < $art_culbrrye$art_c; index++) {    var item = list[index]%>';
    for (var index = 0, $art_culbrrye$art_c = list.length; index < $art_culbrrye$art_c; index++) {
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
        $p += ($expr = '<%=item.fixed3%>', $e(item.fixed3)) + '</td></tr>';
        $line = 51;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div><div><table mxa="_zs_galleryex:d" class="table" center="true" width="1200"><thead><tr>';
    $line = 58;
    $art = 'each groups as group';
    ;
    $expr = '<%for (var $art_ihmotlahop$art_i = 0, $art_cynhwxw$art_c = groups.length; $art_ihmotlahop$art_i < $art_cynhwxw$art_c; $art_ihmotlahop$art_i++) {    var group = groups[$art_ihmotlahop$art_i]%>';
    for (var $art_ihmotlahop$art_i = 0, $art_cynhwxw$art_c = groups.length; $art_ihmotlahop$art_i < $art_cynhwxw$art_c; $art_ihmotlahop$art_i++) {
        var group = groups[$art_ihmotlahop$art_i];
        $p += '<th class="field-group" colspan="';
        $line = 59;
        $art = '=group.fields.length';
        ;
        $p += ($expr = '<%=group.fields.length%>', $e(group.fields.length)) + '"><div mxa="_zs_galleryex:e" class="group-name">';
        $line = 60;
        $art = '=group.name';
        ;
        $p += ($expr = '<%=group.name%>', $e(group.name)) + '</div></th>';
        $line = 62;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tr><tr>';
    $line = 65;
    $art = 'each groups as group';
    ;
    $expr = '<%for (var $art_ijxfejqicg$art_i = 0, $art_cnxlcowvyan$art_c = groups.length; $art_ijxfejqicg$art_i < $art_cnxlcowvyan$art_c; $art_ijxfejqicg$art_i++) {    var group = groups[$art_ijxfejqicg$art_i]%>';
    for (var $art_ijxfejqicg$art_i = 0, $art_cnxlcowvyan$art_c = groups.length; $art_ijxfejqicg$art_i < $art_cnxlcowvyan$art_c; $art_ijxfejqicg$art_i++) {
        var group = groups[$art_ijxfejqicg$art_i];
        $p += ' ';
        $line = 66;
        $art = 'each group.fields as field';
        ;
        $expr = '<%for (var $art_iklcdqzmj$art_i = 0, $art_objovserf$art_obj = group.fields, $art_coucivpfr$art_c = $art_objovserf$art_obj.length; $art_iklcdqzmj$art_i < $art_coucivpfr$art_c; $art_iklcdqzmj$art_i++) {        var field = $art_objovserf$art_obj[$art_iklcdqzmj$art_i]%>';
        for (var $art_iklcdqzmj$art_i = 0, $art_objovserf$art_obj = group.fields, $art_coucivpfr$art_c = $art_objovserf$art_obj.length; $art_iklcdqzmj$art_i < $art_coucivpfr$art_c; $art_iklcdqzmj$art_i++) {
            var field = $art_objovserf$art_obj[$art_iklcdqzmj$art_i];
            $p += '<th mxa="_zs_galleryex:f" class="field-item">指标';
            $line = 68;
            $art = '=field';
            ;
            $p += ($expr = '<%=field%>', $e(field)) + '<span sort-trigger="';
            $line = 69;
            $art = '=field';
            ;
            $p += ($expr = '<%=field%>', $e(field)) + '" sort-field="';
            $line = 70;
            $art = '=sortField';
            ;
            $p += ($expr = '<%=sortField%>', $e(sortField)) + '" sort-orderby="';
            $line = 71;
            $art = '=sortBy';
            ;
            $p += ($expr = '<%=sortBy%>', $e(sortBy)) + '" order-field-key="';
            $line = 72;
            $art = '=orderFieldKey';
            ;
            $p += ($expr = '<%=orderFieldKey%>', $e(orderFieldKey)) + '" order-by-key="';
            $line = 73;
            $art = '=orderByKey';
            ;
            $p += ($expr = '<%=orderByKey%>', $e(orderByKey)) + '"></span></th>';
            $line = 75;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 76;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody>';
    $line = 80;
    $art = 'each list as item index';
    ;
    $expr = '<%for (var index = 0, $art_cobcvsbu$art_c = list.length; index < $art_cobcvsbu$art_c; index++) {    var item = list[index]%>';
    for (var index = 0, $art_cobcvsbu$art_c = list.length; index < $art_cobcvsbu$art_c; index++) {
        var item = list[index];
        $p += '<tr>';
        $line = 82;
        $art = 'each groups as group';
        ;
        $expr = '<%for (var $art_iyupxaqvcj$art_i = 0, $art_cfjqpfnnp$art_c = groups.length; $art_iyupxaqvcj$art_i < $art_cfjqpfnnp$art_c; $art_iyupxaqvcj$art_i++) {        var group = groups[$art_iyupxaqvcj$art_i]%>';
        for (var $art_iyupxaqvcj$art_i = 0, $art_cfjqpfnnp$art_c = groups.length; $art_iyupxaqvcj$art_i < $art_cfjqpfnnp$art_c; $art_iyupxaqvcj$art_i++) {
            var group = groups[$art_iyupxaqvcj$art_i];
            $p += ' ';
            $line = 83;
            $art = 'each group.fields as field';
            ;
            $expr = '<%for (var $art_irtbyzucoop$art_i = 0, $art_objwxmipne$art_obj = group.fields, $art_crxgufnlyg$art_c = $art_objwxmipne$art_obj.length; $art_irtbyzucoop$art_i < $art_crxgufnlyg$art_c; $art_irtbyzucoop$art_i++) {            var field = $art_objwxmipne$art_obj[$art_irtbyzucoop$art_i]%>';
            for (var $art_irtbyzucoop$art_i = 0, $art_objwxmipne$art_obj = group.fields, $art_crxgufnlyg$art_c = $art_objwxmipne$art_obj.length; $art_irtbyzucoop$art_i < $art_crxgufnlyg$art_c; $art_irtbyzucoop$art_i++) {
                var field = $art_objwxmipne$art_obj[$art_irtbyzucoop$art_i];
                $p += '<td>';
                $line = 84;
                $art = '=format(item[field])';
                ;
                $p += ($expr = '<%=format(item[field])%>', $e(format(item[field]))) + '</td>';
                $line = 85;
                $art = '/each';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 86;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</tr>';
        $line = 88;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div></div></div><div mxa="_zs_galleryex:g" class="clearfix"><div mxa="_zs_galleryex:h" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-left"><div mxs="_zs_galleryex:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 152;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryex:i" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 154;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryex:c" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 157;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-table sticky="true" class="mb40"&gt;\n    &lt;table class="table" left="true" width="400"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th&gt;固定1&lt;/th&gt;\n                &lt;th&gt;固定2&lt;/th&gt;\n                &lt;th&gt;固定3&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;each list as item index&#125;&#125;\n                &lt;tr&gt;\n                    &lt;td&gt;&#123;&#123;=item.fixed1&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=item.fixed2&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=item.fixed3&#125;&#125;&lt;/td&gt;\n                &lt;/tr&gt;\n            &#123;&#123;/each&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n    &lt;table class="table" center="true" width="1200"&gt; \n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;each groups as group&#125;&#125;\n                    &lt;th class="field-group" colspan="&#123;&#123;=group.fields.length&#125;&#125;"&gt;\n                        &lt;div class="group-name"&gt;&#123;&#123;=group.name&#125;&#125;&lt;/div&gt;\n                    &lt;/th&gt;\n                &#123;&#123;/each&#125;&#125;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &#123;&#123;each groups as group&#125;&#125;\n                    &#123;&#123;each group.fields as field&#125;&#125;\n                    &lt;th class="field-item"&gt;\n                        指标&#123;&#123;=field&#125;&#125;\n                        &lt;span sort-trigger="&#123;&#123;=field&#125;&#125;"\n                            sort-field="&#123;&#123;=sortField&#125;&#125;"\n                            sort-orderby="&#123;&#123;=sortBy&#125;&#125;"\n                            order-field-key="&#123;&#123;=orderFieldKey&#125;&#125;"\n                            order-by-key="&#123;&#123;=orderByKey&#125;&#125;"&gt;&lt;/span&gt;\n                    &lt;/th&gt;\n                    &#123;&#123;/each&#125;&#125;\n                &#123;&#123;/each&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;each list as item index&#125;&#125;\n                &lt;tr&gt;\n                    &#123;&#123;each groups as group&#125;&#125;\n                        &#123;&#123;each group.fields as field&#125;&#125;\n                        &lt;td&gt;&#123;&#123;=format(item[field])&#125;&#125;&lt;/td&gt;\n                        &#123;&#123;/each&#125;&#125;\n                    &#123;&#123;/each&#125;&#125;\n                &lt;/tr&gt;\n            &#123;&#123;/each&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;\n            </pre></div><div mxa="_zs_galleryex:j" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mxs="_zs_galleryex:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 218;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryex:k" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 220;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryex:c" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 223;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Sort = require(\'@../gallery/mx-table/sort\');\nlet $ = require(\'$\');\nlet Router = Magix.Router;\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [Sort],\n    init() &#123;\n        this.observeLocation([\'customOrderField\', \'customOrderBy\']);\n    &#125;,\n    render() &#123;\n        let that = this;\n\n        let groups = [&#123;\n            name: \'组1\',\n            fields: [\'field1\', \'field2\']\n        &#125;, &#123;\n            name: \'组2\',\n            fields: [\'field3\', \'field4\', \'field5\', \'field6\']\n        &#125;, &#123;\n            name: \'组3\',\n            fields: [\'field7\', \'field8\', \'field9\']\n        &#125;]\n        let len = 0;\n        groups.forEach(group =&gt; &#123;\n            len += group.fields.length;\n        &#125;)\n\n        let locParams = Router.parse().params;\n        let orderFieldKey = \'customOrderField\',\n            orderByKey = \'customOrderBy\';\n\n        that.updater.digest(&#123;\n            list: that.getList(),\n            orderFieldKey,\n            orderByKey,\n            sortField: locParams[orderFieldKey] || \'field1\',\n            sortBy: locParams[orderByKey] || \'asc\',\n            groups,\n            len,\n            format: (val) =&gt; &#123;\n                if (!val) &#123;\n                    return \'-\';\n                &#125;\n                return val;\n            &#125;\n        &#125;);\n    &#125;\n&#125;);\n            </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-table/examples/18.html';
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
        that.observeLocation(['customOrderField', 'customOrderBy', 'customOrderField2', 'customOrderBy2']);
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
        var orderFieldKey = 'customOrderField', orderByKey = 'customOrderBy', orderFieldKey2 = 'customOrderField2', orderByKey2 = 'customOrderBy2';
        var list = that.getList();
        var list2 = that.getList();
        that.updater.digest({
            list: that.sort(list, orderFieldKey, orderByKey),
            orderFieldKey: orderFieldKey,
            orderByKey: orderByKey,
            sortField: locParams[orderFieldKey] || 'field1',
            sortBy: locParams[orderByKey] || 'asc',
            list2: that.sort(list2, orderFieldKey2, orderByKey2),
            orderFieldKey2: orderFieldKey2,
            orderByKey2: orderByKey2,
            sortField2: locParams[orderFieldKey2] || 'field1',
            sortBy2: locParams[orderByKey2] || 'asc',
            groups: groups,
            len: len,
            format: function (val) {
                if (!val) {
                    return '-';
                }
                return val;
            }
        });
    },
    getList: function () {
        var list = [];
        for (var i = 0; i < 5; i++) {
            var empty = (i == 2 || i == 4);
            var origin = {
                fixed1: i + '_1',
                fixed2: i + '_2',
                fixed3: i + '_3',
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