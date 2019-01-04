/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/__test__/1",["magix","__test__/example","moment","$","../datepicker","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,Moment,$*/
require("../datepicker");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var Moment = require("moment");
var $ = require("$");
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
} ; var $g = '', $_temp, $p = '', selected = $$.selected, min = $$.min, max = $$.max, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxa="_zs_galleryW:_" class="_zs_galleryh"><div mxa="_zs_galleryW:a" class="_zs_galleryk"><div mxs="_zs_galleryW:_" class="mb20"><span class="color-9">以下示例：</span><span>限制最大最小值 + 右对齐 + 提示文案前缀 + 事件处理</span></div><div mxa="_zs_galleryW:b" class="mb20"><span mxs="_zs_galleryW:a" class="color-9">当前日期：</span><span>' + $e(selected) + '</span></div><div mxa="_zs_galleryW:c" class="clearfix"><div class="w200" mx-change="' + $viewId + 'select()" mx-view="mx-calendar/datepicker?min=' + $eu(min) + '&max=' + $eu(max) + '&align=right&prefix=%E6%88%AA%E6%AD%A2%E8%87%B3&selected=' + $eu(selected) + '"></div><a mxs="_zs_galleryW:b" href="javascript:;" class="btn btn-brand ml20" mx-click="' + $viewId + 'changeDate()">修改时间</a></div></div><div mxa="_zs_galleryW:d" class="_zs_galleryl"><div mxs="_zs_galleryW:c" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryW:e" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryW:d" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-calendar.datepicker class="w200" \n    min="&#123;&#123;=min&#125;&#125;"\n    max="&#123;&#123;=max&#125;&#125;"\n    align="right"\n    prefix="截止至"\n    selected="&#123;&#123;=selected&#125;&#125;"\n    mx-change="select()"/&gt;\n\n&lt;a href="javascript:;" class="btn btn-brand ml20" mx-click="changeDate()"&gt;修改时间&lt;/a&gt;</pre></div><div mxa="_zs_galleryW:f" class="_zs_galleryl"><div mxs="_zs_galleryW:e" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_galleryW:g" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_galleryW:d" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\nlet Magix = require(\'magix\');\nlet Moment = require(\'moment\');\nlet $ = require(\'$\');\nlet Formater = \'YYYY-MM-DD\';\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let formater = \'YYYY-MM-DD\';\n        this.updater.digest(&#123;\n            max: Moment().add(12, \'days\').format(Formater),\n            min: Moment().subtract(12, \'days\').format(Formater),\n            selected: Moment().add(2, \'days\').format(Formater)\n        &#125;);\n    &#125;,\n\n    \'changeDate&lt;click&gt;\'(event)&#123;\n        this.updater.digest(&#123;\n            selected: Moment().format(Formater)\n        &#125;)\n    &#125;,\n    \n    \'select&lt;change&gt;\' (event) &#123;\n        // event.date 当前选择日期\n        // event.time 时分秒\n        this.updater.digest(&#123;\n            selected: event.date\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest({
            max: Moment().add(12, 'days').format(Formater),
            min: Moment().subtract(12, 'days').format(Formater),
            selected: Moment().add(2, 'days').format(Formater)
        });
    },
    'changeDate<click>': function (event) {
        this.updater.digest({
            selected: Moment().format(Formater)
        });
    },
    'select<change>': function (event) {
        // event.date 当前选择日期
        // event.time 时分秒
        this.updater.digest({
            selected: event.date
        });
    }
});

});