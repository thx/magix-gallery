/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/__test__/rangepicker",["magix","mx-gtip/index","../rangepicker","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../rangepicker");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("mx-gtip/index");
module.exports = Magix.View.extend({
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
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<h2 mxs="_d:_">mx-calendar.rangepicker</h2><h3 mxs="_d:a">默认情形</h3><div mxs="_d:b" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/rangepicker?placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F%E8%8C%83%E5%9B%B4"></div></div><div mxs="_d:c" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.rangepicker\n    class="input"\n    placeholder="请选择日期范围"/&gt;</pre></div><h3 mxs="_d:d" class="__mx-style_index_-mt30">指定开始结束日期</h3><div mxs="_d:e" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/rangepicker?placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F%E8%8C%83%E5%9B%B4&start=2018-01-01&end=2019-01-01"></div></div><div mxs="_d:f" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.rangepicker\n    class="input"\n    placeholder="请选择日期范围"\n    start="2018-01-01"\n    end="2019-01-01"/&gt;</pre></div><h3 mxs="_d:g" class="__mx-style_index_-mt30">不显示快捷日期</h3><div mxs="_d:h" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/rangepicker?placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F%E8%8C%83%E5%9B%B4&shortcuts=false"></div></div><div mxs="_d:i" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.rangepicker\n    class="input"\n    placeholder="请选择日期范围"\n    shortcuts="false"/&gt;</pre></div><h3 mxs="_d:j" class="__mx-style_index_-mt30">设置可选择的范围</h3><div mxs="_d:k" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/rangepicker?min=2017-08-05&max=2017-08-22&start=2017-08-08&end=2017-08-20&shortcuts=false"></div></div><div mxs="_d:l" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.rangepicker\n    min="2017-08-05"\n    max="2017-08-22"\n    start="2017-08-08"\n    end="2017-08-20"\n    shortcuts="false"\n    class="input"/&gt;</pre></div><h3 mxs="_d:m" class="__mx-style_index_-mt30">右上对齐</h3><div mxs="_d:n" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/rangepicker?align=right&placement=top"></div></div><div mxs="_d:o" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.rangepicker\n    align="right"\n    placement="top"\n    class="input"/&gt;</pre></div><h3 mxs="_d:p" class="__mx-style_index_-mt30">带时分秒</h3><div mxs="_d:q" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/rangepicker?timeType=all"></div></div><div mxs="_d:r" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.rangepicker\n    time-type="all"\n    class="input"/&gt;</pre></div><h3 mxs="_d:s" class="__mx-style_index_-mt30">带时分秒的选中</h3><div mxs="_d:t" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/rangepicker?timeType=all&start=2017-07-07%2018%3A08%3A08&end=2017-12-30%2015%3A15%3A15"></div></div><div mxs="_d:u" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.rangepicker\n    time-type="all"\n    start="2017-07-07 18:08:08"\n    end="2017-12-30 15:15:15"\n    class="input"/&gt;</pre></div><h3 mxs="_d:v" class="__mx-style_index_-mt30">change事件</h3><div mxs="_d:w" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-change="' + $viewId + 'showDatetime()" class="__mx-style_index_-input" mx-view="mx-calendar/rangepicker?timeType=all"></div></div><div mxs="_d:x" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.rangepicker\n    time-type="all"\n    mx-change="showDatetime()"\n    class="input"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet GTip = require(\'mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@rangepicker.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'showDatetime&lt;change&gt;\' (e) {\n        console.log(e.dates);\n        this.gtipRT(\'日期：\' + JSON.stringify(e.dates));\n    }\n});</pre></div><h3 mxs="_d:y" class="__mx-style_index_-mt30">只有年月</h3><div mxs="_d:z" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/rangepicker?dateType=year%2Cmonth&start=2017-07&end=2017-12&formatter=YYYY-MM&shortcuts=false"></div></div><div mxs="_d:A" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.rangepicker\n    class="input"\n    date-type="year,month"\n    start="2017-07"\n    end="2017-12"\n    formatter="YYYY-MM"\n    shortcuts="false" /&gt;</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/__test__/rangepicker.html';
    throw msg;
} return $p; },
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'showDatetime<change>': function (e) {
        console.log(e.dates);
        this.gtipRT('日期：' + JSON.stringify(e.dates));
    }
});

});