/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/17",["magix","__test__/example","mx-form/index","mx-form/validator","$","moment","mx-dropdown/index","mx-dropdown/multiple","mx-calendar/datepicker","mx-calendar/rangepicker","mx-switch/index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,Form,Validator,$,Moment*/
require("mx-dropdown/index");
require("mx-dropdown/multiple");
require("mx-calendar/datepicker");
require("mx-calendar/rangepicker");
require("mx-switch/index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var Form = require("mx-form/index");
var Validator = require("mx-form/validator");
var $ = require("$");
var Moment = require("moment");
var Formater = 'YYYY-MM-DD';
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
} ; var $g = '', $_temp, $p = '', checkboxes = $$.checkboxes, selected = $$.selected, radioes = $$.radioes, tip = $$.tip, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxv mxa="_zs_gallerybt:_" class="_zs_galleryh"><div mxv mxa="_zs_gallerybt:a" class="_zs_galleryk clearfix"><form mxv mxa="_zs_gallerybt:b" class="form mb20 fl w440"><div mxv mxa="_zs_gallerybt:c" class="form-item"><div mxs="_zs_gallerybt:_" class="form-label">checkbox</div><div mxv mxa="_zs_gallerybt:d" class="form-content">'; for (var $art_iyzjvprgc$art_i = 0, $art_comtaxybb$art_c = checkboxes.length; $art_iyzjvprgc$art_i < $art_comtaxybb$art_c; $art_iyzjvprgc$art_i++) {
    var c = checkboxes[$art_iyzjvprgc$art_i];
    $p += '<label mxv mxa="_zs_gallerybt:e" class="mr30"><input mxe="' + $viewId + '_0" mxc="[{p:\'selected.checkboxes\',f:{refresh:true,required:[true,\'必选\']}}]" type="checkbox" class="checkbox" name="cb" value="' + $e(c) + '"/>' + $e(c) + '</label>';
} ; $p += '</div></div><div mxv mxa="_zs_gallerybt:f" class="form-item"><div mxs="_zs_gallerybt:a" class="form-label">radio</div><div mxv mxa="_zs_gallerybt:g" class="form-content">'; for (var $art_iwnpuxgkfbo$art_i = 0, $art_cbxibhr$art_c = radioes.length; $art_iwnpuxgkfbo$art_i < $art_cbxibhr$art_c; $art_iwnpuxgkfbo$art_i++) {
    var r = radioes[$art_iwnpuxgkfbo$art_i];
    $p += '<label mxv mxa="_zs_gallerybt:h" class="mr30"><input mxe="' + $viewId + '_1" mxc="[{p:\'selected.radio\',f:{refresh:true}}]" type="radio" class="radio" name="magix" value="' + $e(r) + '"/>' + $e(r) + '</label>';
} ; $p += '</div></div><div mxv mxa="_zs_gallerybt:i" class="form-item"><div mxs="_zs_gallerybt:b" class="form-label">下拉框单选</div><div mxv mxa="_zs_gallerybt:j" class="form-content"><div mxv="selected" mxe="' + $viewId + '_2" mxc="[{p:\'selected.single\',f:{refresh:true,required:[true,\'必选\']},a:\'selected\'}]" class="w200" mx-view="mx-dropdown/index?emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9&selected=' + $i($$ref, selected.single) + '&list=' + $i($$ref, [1, 2, 3]) + '"></div></div></div><div mxv mxa="_zs_gallerybt:k" class="form-item"><div mxs="_zs_gallerybt:c" class="form-label">多选逗号分隔</div><div mxv mxa="_zs_gallerybt:l" class="form-content"><div mxv="selected" mxe="' + $viewId + '_3" mxc="[{p:\'selected.multiComma\',f:{refresh:true,required:[true,\'必选\']},a:\'selected\'}]" class="w200 mr20" mx-view="mx-dropdown/multiple?emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9&selected=' + $i($$ref, selected.multiComma) + '&list=' + $i($$ref, [1, 2, 3]) + '"></div></div></div><div mxv mxa="_zs_gallerybt:m" class="form-item"><div mxs="_zs_gallerybt:d" class="form-label">多选数组</div><div mxv mxa="_zs_gallerybt:n" class="form-content"><div mxv="selected" mxe="' + $viewId + '_4" mxc="[{p:\'selected.multiArr\',f:{refresh:true,required:[true,\'必选\']},a:\'selected\'}]" class="w200" mx-view="mx-dropdown/multiple?emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9&selected=' + $i($$ref, selected.multiArr) + '&list=' + $i($$ref, [1, 2, 3]) + '"></div></div></div><div mxv mxa="_zs_gallerybt:o" class="form-item"><div mxs="_zs_gallerybt:e" class="form-label">输入框</div><div mxv mxa="_zs_gallerybt:p" class="form-content"><input mxe="' + $viewId + '_5" mxc="[{p:\'selected.str\',f:{refresh:true,required:true,pattern:\'^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$\'}}]" class="input w200" placeholder="正则：汉字/字母/数字/下划线" value="' + $e(selected.str) + '"/></div></div><div mxv mxa="_zs_gallerybt:q" class="form-item"><div mxs="_zs_gallerybt:f" class="form-label">选择单个时间</div><div mxv mxa="_zs_gallerybt:r" class="form-content"><div mxv="selected" mxe="' + $viewId + '_6" mxc="[{p:\'selected.date\',f:{refresh:true},a:\'selected\'}]" class="w200" mx-view="mx-calendar/datepicker?selected=' + $i($$ref, selected.date) + '"></div></div></div><div mxv mxa="_zs_gallerybt:s" class="form-item"><div mxs="_zs_gallerybt:g" class="form-label">选择时间段</div><div mxv mxa="_zs_gallerybt:t" class="form-content"><div mxv="selected" mxe="' + $viewId + '_7" mxc="[{p:\'selected.vs\',f:{refresh:true},a:\'vs\'},{p:\'selected.start\',f:{refresh:true},a:\'start\'},{p:\'selected.end\',f:{refresh:true},a:\'end\'}]" class="w200" mx-view="mx-calendar/rangepicker?vsenable=true&vs=' + $i($$ref, selected.vs) + '&start=' + $i($$ref, selected.start) + '&end=' + $i($$ref, selected.end) + '"></div></div></div><div mxv mxa="_zs_gallerybt:u" class="form-item"><div mxs="_zs_gallerybt:h" class="form-label">radio + 输入框</div><div mxv mxa="_zs_gallerybt:v" class="form-content clearfix"><label mxv mxa="_zs_gallerybt:w" class="mr30 fl"><input mxs="_zs_gallerybt:i" mxe="' + $viewId + '_8" mxc="[{p:\'selected.type\',f:{refresh:true}}]" type="radio" class="radio" name="type" value="def"/> 默认情况</label><label mxv mxa="_zs_gallerybt:x" class="mr10 fl"><input mxs="_zs_gallerybt:j" mxe="' + $viewId + '_9" mxc="[{p:\'selected.type\',f:{refresh:true}}]" type="radio" class="radio" name="type" value="custom"/> 自定义</label>'; if (selected.type == 'custom') {
    ;
    $p += '<input mxe="' + $viewId + '_a" mxc="[{p:\'selected.int\',f:{refresh:true,required:true,int:true}}]" class="input fl" placeholder="整数" value="' + $e(selected.int) + '"/>';
} ; $p += '</div></div><div mxa="_zs_gallerybt:y" class="form-item"><div mxs="_zs_gallerybt:k" class="form-label">开关</div><div mxa="_zs_gallerybt:z" class="form-content"><span mxe="' + $viewId + '_b_' + $e("switch") + '" mxc="[{p:\'selected.' + $e("switch") + '\',f:{refresh:true},a:\'state\'}]" class="mr20 mt5" mx-view="mx-switch/index?state=' + $i($$ref, selected["switch"]) + '"></span></div></div><div mxa="_zs_gallerybt:A" class="form-item"><a mxs="_zs_gallerybt:l" href="javascript:;" class="btn w80 btn-brand mr20" mx-click="' + $viewId + 'confirm()">确定</a><a mxs="_zs_gallerybt:m" href="javascript:;" class="btn w80">取消</a>'; if (tip) {
    ;
    $p += '<span mxa="_zs_gallerybt:B" class="ml10">' + $n(tip) + '</span>';
} ; $p += '</div></form><div mxa="_zs_gallerybt:C" class="fl"><div mxa="_zs_gallerybt:D" class="lh32 mb30"><span mxs="_zs_gallerybt:n" class="color-9">当前值：</span>[' + $e(selected.checkboxes) + ']</div><div mxa="_zs_gallerybt:E" class="lh32 mb30"><span mxs="_zs_gallerybt:n" class="color-9">当前值：</span>' + $e(selected.radio) + '</div><div mxa="_zs_gallerybt:F" class="lh32 mb30"><span mxs="_zs_gallerybt:n" class="color-9">当前值：</span>' + $e(selected.single) + '</div><div mxa="_zs_gallerybt:G" class="lh32 mb30"><span mxs="_zs_gallerybt:n" class="color-9">当前值：</span>' + $e(selected.multiComma) + '</div><div mxa="_zs_gallerybt:H" class="lh32 mb30"><span mxs="_zs_gallerybt:n" class="color-9">当前值：</span>[' + $e(selected.multiArr) + ']</div><div mxa="_zs_gallerybt:I" class="lh32 mb30"><span mxs="_zs_gallerybt:n" class="color-9">当前值：</span>' + $e(selected.str) + '</div><div mxa="_zs_gallerybt:J" class="lh32 mb30"><span mxs="_zs_gallerybt:n" class="color-9">当前值：</span>' + $e(selected.date) + '</div><div mxa="_zs_gallerybt:K" class="lh32 mb30"><span mxs="_zs_gallerybt:n" class="color-9">当前值：</span><span mxa="_zs_gallerybt:L" class="mr5">对比（' + $e(selected.vs) + '）</span><span mxa="_zs_gallerybt:M" class="mr5">开始时间（' + $e(selected.start) + '）</span><span>结束时间（' + $e(selected.end) + '）</span></div><div mxa="_zs_gallerybt:N" class="lh32 mb30"><span mxs="_zs_gallerybt:n" class="color-9">当前值：</span><span mxa="_zs_gallerybt:O" class="mr5">类型（' + $e(selected.type) + '）</span><span>输入框（' + $e(selected.int) + '）</span></div><div mxa="_zs_gallerybt:P" class="lh32 mb30"><span mxs="_zs_gallerybt:n" class="color-9">当前值：</span>' + $e(selected["switch"]) + '</div></div></div><div mxa="_zs_gallerybt:Q" class="clearfix"><div mxa="_zs_gallerybt:R" class="_zs_galleryl _zs_gallerye _zs_galleryg"><div mxs="_zs_gallerybt:o" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerybt:S" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerybt:p" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;form class="form"&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;checkbox&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &#123;&#123;each checkboxes as c&#125;&#125;\n            &lt;label class="mr30"&gt;\n                &lt;input type="checkbox" class="checkbox" \n                    name="cb" \n                    value="&#123;&#123;=c&#125;&#125;" \n                    &#123;&#123;:selected.checkboxes&#123;required:[true,\'必选\']&#125;&#125;&#125; /&gt;\n                &#123;&#123;=c&#125;&#125;\n            &lt;/label&gt;\n            &#123;&#123;/each&#125;&#125;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;radio&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &#123;&#123;each radioes as r&#125;&#125;\n            &lt;label class="mr30"&gt;\n                &lt;input type="radio" class="radio" \n                    name="magix" \n                    value="&#123;&#123;=r&#125;&#125;" \n                    &#123;&#123;:selected.radio&#125;&#125; /&gt;\n                &#123;&#123;=r&#125;&#125;\n            &lt;/label&gt;\n            &#123;&#123;/each&#125;&#125;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;下拉框单选&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;mx-dropdown class="w200"\n                empty-text="请选择"\n                selected="&#123;&#123;:selected.single&#123;required:[true,\'必选\']&#125;&#125;&#125;"\n                list="&#123;&#123;@[1,2,3]&#125;&#125;"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;多选逗号分隔&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;mx-dropdown.multiple class="w200 mr20"\n                empty-text="请选择"\n                selected="&#123;&#123;:selected.multiComma&#123;required:[true,\'必选\']&#125;&#125;&#125;"\n                list="&#123;&#123;@[1,2,3]&#125;&#125;"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;多选数组&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;mx-dropdown.multiple class="w200"\n                empty-text="请选择"\n                selected="&#123;&#123;:selected.multiArr&#123;required:[true,\'必选\']&#125;&#125;&#125;"\n                list="&#123;&#123;@[1,2,3]&#125;&#125;"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;输入框&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;input class="input w200" placeholder="正则：汉字/字母/数字/下划线"         \n                value="&#123;&#123;:selected.str&#123;required:true,pattern:\'^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$\'&#125;&#125;&#125;"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;选择单个时间&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;mx-calendar.datepicker class="w200" \n                selected="&#123;&#123;:selected.date&#125;&#125;"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;选择时间段&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;mx-calendar.rangepicker class="w200"\n                vsenable="true"\n                vs="&#123;&#123;:selected.vs&#125;&#125;"\n                start="&#123;&#123;:selected.start&#125;&#125;"\n                end="&#123;&#123;:selected.end&#125;&#125;"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;radio + 输入框&lt;/div&gt;\n        &lt;div class="form-content clearfix"&gt;\n            &lt;label class="mr30 fl"&gt;\n                &lt;input type="radio" class="radio" \n                    name="type" \n                    value="def" \n                    &#123;&#123;:selected.type&#123;refresh:true&#125;&#125;&#125; /&gt;\n                默认情况\n            &lt;/label&gt;\n            &lt;label class="mr10 fl"&gt;\n                &lt;input type="radio" class="radio" \n                    name="type" \n                    value="custom" \n                    &#123;&#123;:selected.type&#123;refresh:true&#125;&#125;&#125; /&gt;\n                自定义\n            &lt;/label&gt;\n            &#123;&#123;if (selected.type == \'custom\')&#125;&#125;\n            &lt;input class="input fl" placeholder="整数" \n                value="&#123;&#123;:selected.int&#123;required:true,int:true&#125;&#125;&#125;"/&gt;\n            &#123;&#123;/if&#125;&#125;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;a href="javascript:;" class="btn w80 btn-brand mr20"\n            mx-click="confirm()"&gt;确定&lt;/a&gt;\n        &lt;a href="javascript:;" class="btn w80"&gt;取消&lt;/a&gt;\n    &lt;/div&gt;\n&lt;/form&gt;</pre></div><div mxa="_zs_gallerybt:T" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_gallerybt:q" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_gallerybt:U" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_gallerybt:p" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\nlet Magix = require(\'magix\');\nlet Form = require(\'@../index\');\nlet Validator = require(\'@../validator\');\nlet $ = require(\'$\');\nlet Moment = require(\'moment\');\nlet Formater = \'YYYY-MM-DD\';\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [Form, Validator],\n    render() &#123;\n        this.updater.digest(&#123;\n            viewId: this.id,\n            checkboxes: [\'checkbox1\', \'checkbox2\', \'checkbox3\'],\n            radioes: [\'radio1\', \'radio2\', \'radio3\'],\n            selected: &#123;\n                checkboxes: [\'checkbox1\'],\n                radio: \'radio2\',\n                single: \'\',  //下拉框单选\n                multiComma: \'\', //下拉框多选逗号分隔\n                multiArr: [], //下拉框多选数组\n                str: \'\', //汉字/字母/数字/下划线\n                date: Moment().format(Formater), //单个日期\n                vs: true,\n                start: Moment().subtract(1, \'days\').format(Formater), //时间段开始时间\n                end: Moment().add(1, \'days\').format(Formater), //时间段结束时间\n                type: \'custom\', //默认还是自定义（自定义带输入框）\n                int: 10\n            &#125;\n        &#125;);\n    &#125;,\n    \'confirm&lt;click&gt;\'(e)&#123;\n        let that = this;\n        let valid = that.isValid();\n\n        if(valid)&#123;\n            // 校验通过\n            // 双向绑定的数据，继续执行后续操作\n            let selected = that.updater.get(\'selected\');\n            \n        &#125;else&#123;\n            // 校验失败\n            \n        &#125;\n    &#125;\n&#125;);</pre></div></div></div>'; return $p; },
    mixins: [Form, Validator],
    render: function () {
        this.updater.digest({
            viewId: this.id,
            checkboxes: ['checkbox1', 'checkbox2', 'checkbox3'],
            radioes: ['radio1', 'radio2', 'radio3'],
            selected: {
                checkboxes: ['checkbox1'],
                radio: 'radio2',
                single: '',
                multiComma: '',
                multiArr: [],
                str: '',
                date: Moment().format(Formater),
                vs: true,
                start: Moment().subtract(1, 'days').format(Formater),
                end: Moment().add(1, 'days').format(Formater),
                type: 'custom',
                int: 10,
                "switch": true //开关
            }
        });
    },
    'confirm<click>': function (e) {
        var that = this;
        var valid = that.isValid();
        if (valid) {
            // 校验通过
            // 双向绑定的数据，继续执行后续操作
            var selected = that.updater.get('selected');
            that.updater.digest({
                tip: '<span class="color-green"><i class="mc-iconfont displacement-2">&#xe6ad;</i>校验失败</span>'
            });
        }
        else {
            // 校验失败
            that.updater.digest({
                tip: '<span class="color-red"><i class="mc-iconfont displacement-2">&#xe6ad;</i>校验通过</span>'
            });
        }
    }
});

});