/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/__test__/index",["magix","mx-gtip/index","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../index");
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
    $p += '<h2 mxs="_b:_">mx-calendar</h2><h3 mxs="_b:a">默认情形</h3><div mxs="_b:b" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-view="mx-calendar/index"></div></div><div mxs="_b:c" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar /&gt;</pre></div><h3 mxs="_b:d" class="__mx-style_index_-mt30">默认选中某天</h3><div mxs="_b:e" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-view="mx-calendar/index?selected=2018-01-01"></div></div><div mxs="_b:f" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar\n    selected="2018-01-01"/&gt;</pre></div><h3 mxs="_b:g" class="__mx-style_index_-mt30">设置可选择的范围</h3><div mxs="_b:h" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-view="mx-calendar/index?min=2017-08-05&max=2017-08-22&selected=2017-08-12"></div></div><div mxs="_b:i" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar\n    min="2017-08-05"\n    max="2017-08-22"\n    selected="2017-08-12"/&gt;</pre></div><h3 mxs="_b:j" class="__mx-style_index_-mt30">设置周二为一周的开始</h3><div mxs="_b:k" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-view="mx-calendar/index?weekStart=2"></div></div><div mxs="_b:l" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar\n    week-start="2"/&gt;</pre></div><h3 mxs="_b:m" class="__mx-style_index_-mt30">带时分秒</h3><div mxs="_b:n" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-view="mx-calendar/index?timeType=all"></div></div><div mxs="_b:o" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar\n    time-type="all"&gt;</pre></div><h3 mxs="_b:p" class="__mx-style_index_-mt30">带时分秒的选中</h3><div mxs="_b:q" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-view="mx-calendar/index?timeType=all&selected=2018-08-08%2018%3A08%3A20"></div></div><div mxs="_b:r" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar\n    time-type="all"\n    selected="2018-08-08 18:08:20"/&gt;</pre></div><h3 mxs="_b:s" class="__mx-style_index_-mt30">带时分秒,只能选择小时和分钟</h3><div mxs="_b:t" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-view="mx-calendar/index?timeType=hour%2Cminute"></div></div><div mxs="_b:u" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar\n    time-type="hour,minute"/&gt;</pre></div><h3 mxs="_b:v" class="__mx-style_index_-mt30">change事件</h3><div mxs="_b:w" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-change="' + $viewId + 'showDatetime()" mx-view="mx-calendar/index?timeType=all&selected=2018-08-08%2018%3A08%3A20"></div></div><div mxs="_b:x" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar\n    time-type="all"\n    selected="2018-08-08 18:08:20"\n    mx-change="showDatetime()"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet GTip = require(\'mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'showDatetime&lt;change&gt;\' (e) {\n        this.gtipRT(\'日期：\' + e.date + \'，时间：\' + e.time);\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/__test__/index.html';
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