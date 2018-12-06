/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/__test__/datepicker",["magix","mx-gtip/index","../datepicker","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../datepicker");
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
    $p += '<h2 mxs="_c:_">mx-calendar.datepicker</h2><h3 mxs="_c:a">默认情形</h3><div mxs="_c:b" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/datepicker?placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F"></div></div><div mxs="_c:c" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.datepicker class="input" placeholder="请选择日期"/&gt;</pre></div><h3 mxs="_c:d" class="__mx-style_index_-mt30">默认选中某天</h3><div mxs="_c:e" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/datepicker?placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F&selected=2018-01-01"></div></div><div mxs="_c:f" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.datepicker class="input" placeholder="请选择日期"\n    selected="2018-01-01"&gt;</pre></div><h3 mxs="_c:g" class="__mx-style_index_-mt30">从input中读取日期</h3><div mxs="_c:h" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/datepicker?placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F&value=2018-03-02"></div></div><div mxs="_c:i" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.datepicker class="input" placeholder="请选择日期"\n    value="2018-03-02"&gt;</pre></div><h3 mxs="_c:j" class="__mx-style_index_-mt30">设置可选择的范围</h3><div mxs="_c:k" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/datepicker?min=2017-08-05&max=2017-08-22&value=2017-08-12"></div></div><div mxs="_c:l" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.datepicker\n    min="2017-08-05"\n    max="2017-08-22"\n    value="2017-08-12"\n    class="input"/&gt;</pre></div><h3 mxs="_c:m" class="__mx-style_index_-mt30">设置周二为一周的开始</h3><div mxs="_c:n" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/datepicker?weekStart=2"></div></div><div mxs="_c:o" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.datepicker\n    week-start="2"\n    class="input"/&gt;</pre></div><h3 mxs="_c:p" class="__mx-style_index_-mt30">右下对齐</h3><div mxs="_c:q" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/datepicker?align=right"></div></div><div mxs="_c:r" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.datepicker\n    align="right"\n    class="input"/&gt;</pre></div><h3 mxs="_c:s" class="__mx-style_index_-mt30">右上对齐</h3><div mxs="_c:t" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/datepicker?align=right&placement=top"></div></div><div mxs="_c:u" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.datepicker\n    align="right"\n    placement="top"\n    class="input"/&gt;</pre></div><h3 mxs="_c:v" class="__mx-style_index_-mt30">带时分秒</h3><div mxs="_c:w" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/datepicker?timeType=all"></div></div><div mxs="_c:x" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.datepicker\n    time-type="all"\n    class="input"/&gt;</pre></div><h3 mxs="_c:y" class="__mx-style_index_-mt30">带时分秒的选中</h3><div mxs="_c:z" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/datepicker?timeType=all&value=2018-08-08%2018%3A08%3A20"></div></div><div mxs="_c:A" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.datepicker\n    time-type="all"\n    value="2018-08-08 18:08:20"\n    class="input"/&gt;</pre></div><h3 mxs="_c:B" class="__mx-style_index_-mt30">带时分秒,只能选择小时</h3><div mxs="_c:C" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/datepicker?timeType=hour&value=2018-08-08%2018%3A08%3A20"></div></div><div mxs="_c:D" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.datepicker\n    time-type="hour"\n    value="2018-08-08 18:08:20"\n    class="input"/&gt;</pre></div><h3 mxs="_c:E" class="__mx-style_index_-mt30">change事件</h3><div mxs="_c:F" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-change="' + $viewId + 'showDatetime()" class="__mx-style_index_-input" mx-view="mx-calendar/datepicker?timeType=all&selected=2018-08-08%2018%3A08%3A20"></div></div><div mxs="_c:G" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.datepicker\n    time-type="all"\n    selected="2018-08-08 18:08:20"\n    mx-change="showDatetime()"\n    class="input"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet GTip = require(\'mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'showDatetime&lt;change&gt;\' (e) {\n        this.gtipRT(\'日期：\' + e.date + \'，时间：\' + e.time);\n    }\n});</pre></div><h3 mxs="_c:H" class="__mx-style_index_-mt30">只选择年月</h3><div mxs="_c:I" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/datepicker?dateType=year%2Cmonth&selected=2010-02&placement=top"></div></div><div mxs="_c:J" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.datepicker\n    class="input"\n    date-type="year,month"\n    selected="2010-02"\n    placement="top" /&gt;</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/__test__/datepicker.html';
    throw msg;
} return $p; },
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'showDatetime<change>': function (e) {
        this.gtipRT('日期：' + e.date + '，时间：' + e.time);
    }
});

});