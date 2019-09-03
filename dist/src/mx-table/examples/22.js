/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/examples/22",["magix","examples/example","$","mx-table/sort","../index"],(require,exports,module)=>{
/*Magix,Base,$,Sort*/
require("../index");
var Magix = require("magix");
var Base = require("examples/example");
var $ = require("$");
var Sort = require("mx-table/sort");
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
} ; var $g = '', $_temp, $p = '', selected = $$.selected, groups = $$.groups, list = $$.list, format = $$.format; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryeL:_" class="pt10 pb10">';
    $line = 1;
    $art = '=selected';
    ;
    $p += ($expr = '<%=selected%>', $e(selected)) + '</div><div mxa="_zs_galleryeL:a" mx-view="mx-table/index?sticky=true" class="mb40"><div><table mxa="_zs_galleryeL:b" class="table"><thead><tr><th mxs="_zs_galleryeL:_" rowspan="2">固定1</th><th mxs="_zs_galleryeL:a" rowspan="2">固定2</th><th mxs="_zs_galleryeL:b" rowspan="2">固定3</th>';
    $line = 10;
    $art = 'each groups as group';
    ;
    $expr = '<%for (var $art_inrbsj$art_i = 0, $art_cykjqqtyzt$art_c = groups.length; $art_inrbsj$art_i < $art_cykjqqtyzt$art_c; $art_inrbsj$art_i++) {    var group = groups[$art_inrbsj$art_i]%>';
    for (var $art_inrbsj$art_i = 0, $art_cykjqqtyzt$art_c = groups.length; $art_inrbsj$art_i < $art_cykjqqtyzt$art_c; $art_inrbsj$art_i++) {
        var group = groups[$art_inrbsj$art_i];
        $p += '<th class="field-group" colspan="';
        $line = 11;
        $art = '=group.fields.length';
        ;
        $p += ($expr = '<%=group.fields.length%>', $e(group.fields.length)) + '"><div mxa="_zs_galleryeL:c" class="group-name">';
        $line = 12;
        $art = '=group.name';
        ;
        $p += ($expr = '<%=group.name%>', $e(group.name)) + '</div></th>';
        $line = 14;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tr><tr>';
    $line = 17;
    $art = 'each groups as group';
    ;
    $expr = '<%for (var $art_ispucqqvin$art_i = 0, $art_chhxlkdinr$art_c = groups.length; $art_ispucqqvin$art_i < $art_chhxlkdinr$art_c; $art_ispucqqvin$art_i++) {    var group = groups[$art_ispucqqvin$art_i]%>';
    for (var $art_ispucqqvin$art_i = 0, $art_chhxlkdinr$art_c = groups.length; $art_ispucqqvin$art_i < $art_chhxlkdinr$art_c; $art_ispucqqvin$art_i++) {
        var group = groups[$art_ispucqqvin$art_i];
        $p += ' ';
        $line = 18;
        $art = 'each group.fields as field';
        ;
        $expr = '<%for (var $art_irlovitgal$art_i = 0, $art_objjyouwrj$art_obj = group.fields, $art_cmtbsnqwnp$art_c = $art_objjyouwrj$art_obj.length; $art_irlovitgal$art_i < $art_cmtbsnqwnp$art_c; $art_irlovitgal$art_i++) {        var field = $art_objjyouwrj$art_obj[$art_irlovitgal$art_i]%>';
        for (var $art_irlovitgal$art_i = 0, $art_objjyouwrj$art_obj = group.fields, $art_cmtbsnqwnp$art_c = $art_objjyouwrj$art_obj.length; $art_irlovitgal$art_i < $art_cmtbsnqwnp$art_c; $art_irlovitgal$art_i++) {
            var field = $art_objjyouwrj$art_obj[$art_irlovitgal$art_i];
            $p += '<th mxa="_zs_galleryeL:d" class="field-item">';
            $line = 20;
            $art = '=field.name';
            ;
            $p += ($expr = '<%=field.name%>', $e(field.name)) + '<span sort-trigger="';
            $line = 21;
            $art = '=field.key';
            ;
            $p += ($expr = '<%=field.key%>', $e(field.key)) + '"></span></th>';
            $line = 23;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 24;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody>';
    $line = 28;
    $art = 'each list as item index';
    ;
    $expr = '<%for (var index = 0, $art_cijgwrjyef$art_c = list.length; index < $art_cijgwrjyef$art_c; index++) {    var item = list[index]%>';
    for (var index = 0, $art_cijgwrjyef$art_c = list.length; index < $art_cijgwrjyef$art_c; index++) {
        var item = list[index];
        $p += '<tr><td>';
        $line = 30;
        $art = '=item.fixed1';
        ;
        $p += ($expr = '<%=item.fixed1%>', $e(item.fixed1)) + '</td><td>';
        $line = 31;
        $art = '=item.fixed2';
        ;
        $p += ($expr = '<%=item.fixed2%>', $e(item.fixed2)) + '</td><td>';
        $line = 32;
        $art = '=item.fixed3';
        ;
        $p += ($expr = '<%=item.fixed3%>', $e(item.fixed3)) + '</td>';
        $line = 33;
        $art = 'each groups as group';
        ;
        $expr = '<%for (var $art_ielpca$art_i = 0, $art_czkejiyrgeur$art_c = groups.length; $art_ielpca$art_i < $art_czkejiyrgeur$art_c; $art_ielpca$art_i++) {        var group = groups[$art_ielpca$art_i]%>';
        for (var $art_ielpca$art_i = 0, $art_czkejiyrgeur$art_c = groups.length; $art_ielpca$art_i < $art_czkejiyrgeur$art_c; $art_ielpca$art_i++) {
            var group = groups[$art_ielpca$art_i];
            $p += ' ';
            $line = 34;
            $art = 'each group.fields as field';
            ;
            $expr = '<%for (var $art_iacqhzlccl$art_i = 0, $art_objrrjmrvdy$art_obj = group.fields, $art_cukgysdn$art_c = $art_objrrjmrvdy$art_obj.length; $art_iacqhzlccl$art_i < $art_cukgysdn$art_c; $art_iacqhzlccl$art_i++) {            var field = $art_objrrjmrvdy$art_obj[$art_iacqhzlccl$art_i]%>';
            for (var $art_iacqhzlccl$art_i = 0, $art_objrrjmrvdy$art_obj = group.fields, $art_cukgysdn$art_c = $art_objrrjmrvdy$art_obj.length; $art_iacqhzlccl$art_i < $art_cukgysdn$art_c; $art_iacqhzlccl$art_i++) {
                var field = $art_objrrjmrvdy$art_obj[$art_iacqhzlccl$art_i];
                $p += '<td>';
                $line = 35;
                $art = '=format(item[field.key])';
                ;
                $p += ($expr = '<%=format(item[field.key])%>', $e(format(item[field.key]))) + '</td>';
                $line = 36;
                $art = '/each';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 37;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</tr>';
        $line = 39;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-table/examples/22.html';
    throw msg;
} return $p; },
    mixins: [Sort],
    init: function (extra) {
        this.updater.set({
            selected: extra.selected
        });
        this.observeLocation(['orderField', 'orderBy']);
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
        setTimeout(function () {
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
        }, 1000);
    }
});

});