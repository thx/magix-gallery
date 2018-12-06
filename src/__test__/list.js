/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/list",["magix"],(require,exports,module)=>{
/*Magix*/

/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
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
    $p += '<a mxs="_a:_" href="#!/mx-calendar/index">mx-calendar/index(日历)</a><br mxs="_a:a"/><a mxs="_a:b" href="#!/mx-calendar/datepicker">mx-calendar/datepicker(日期选择)</a><br mxs="_a:a"/><a mxs="_a:c" href="#!/mx-calendar/rangepicker">mx-calendar/rangepicker(日期范围选择)</a><br mxs="_a:a"/><a mxs="_a:d" href="#!/mx-carousel/index">mx-carousel/index(轮播图)</a><br mxs="_a:a"/><a mxs="_a:e" href="#!/mx-checkbox/linkage">mx-checkbox/linkage(联动)</a><br mxs="_a:a"/><a mxs="_a:f" href="#!/mx-checkbox/storestate">mx-checkbox/storestate(保存状态)</a><br mxs="_a:a"/><a mxs="_a:g" href="#!/mx-color/index">mx-color/index(颜色)</a><br mxs="_a:a"/><a mxs="_a:h" href="#!/mx-color/picker">mx-color/picker(颜色选择)</a><br mxs="_a:a"/><a mxs="_a:i" href="#!/mx-copy/index">mx-copy/index(复制)</a><br mxs="_a:a"/><a mxs="_a:j" href="#!/mx-day/index">mx-day/index(快速日期选择)</a><br mxs="_a:a"/><a mxs="_a:k" href="#!/mx-dialog/alert">mx-dialog/alert(alert与confirm)</a><br mxs="_a:a"/><a mxs="_a:l" href="#!/mx-dialog/index">mx-dialog/index(加载普通view)</a><br mxs="_a:a"/><a mxs="_a:m" href="#!/mx-dragselect/index">mx-dragselect/index(拖动选取)</a><br mxs="_a:a"/><a mxs="_a:n" href="#!/mx-dragsort/index">mx-dragsort/index(拖动排序)</a><br mxs="_a:a"/><a mxs="_a:o" href="#!/mx-dropdown/index">mx-dropdown/index(单选下拉框)</a><br mxs="_a:a"/><a mxs="_a:p" href="#!/mx-dropdown/multiple">mx-dropdown/multiple(多选下拉框)</a><br mxs="_a:a"/><a mxs="_a:q" href="#!/mx-effect/count">mx-effect/count(效果库,数字动态改变)</a><br mxs="_a:a"/><a mxs="_a:r" href="#!/mx-effect/dance">mx-effect/dance(效果库,文字显示效果)</a><br mxs="_a:a"/><a mxs="_a:s" href="#!/mx-effect/scroll">mx-effect/scroll</a><br mxs="_a:a"/><a mxs="_a:t" href="#!/mx-footer/index">mx-footer/index(阿里妈妈通用页脚完整版)</a><br mxs="_a:a"/><a mxs="_a:u" href="#!/mx-footer/index?mode=simple">mx-footer/index?mode=simple(阿里妈妈通用页脚精简版)</a><br mxs="_a:a"/><a mxs="_a:v" href="#!/mx-form/index">mx-form/index(表单)</a><br mxs="_a:a"/><a mxs="_a:w" href="#!/mx-gtip/index">mx-gtip/index(提示)</a><br mxs="_a:a"/><a mxs="_a:x" href="#!/mx-hour/day">mx-hour/day(天小时)</a><br mxs="_a:a"/><a mxs="_a:y" href="#!/mx-hour/week">mx-hour/week(周小时)</a><br mxs="_a:a"/><a mxs="_a:z" href="#!/mx-linkage/index">mx-linkage/index(联动选择)</a><br mxs="_a:a"/><a mxs="_a:A" href="#!/mx-loading/mask">mx-loading/mask(加载动画)</a><br mxs="_a:a"/><a mxs="_a:B" href="#!/mx-menu/index">mx-menu/index</a><br mxs="_a:a"/><a mxs="_a:C" href="#!/mx-number/index">mx-number/index</a><br mxs="_a:a"/><a mxs="_a:D" href="#!/mx-pagination/index">mx-pagination/index(分页)</a><br mxs="_a:a"/><a mxs="_a:E" href="#!/mx-popconfirm/index">mx-popconfirm/index</a><br mxs="_a:a"/><a mxs="_a:F" href="#!/mx-popmenu/index">mx-popmenu/index</a><br mxs="_a:a"/><a mxs="_a:G" href="#!/mx-popover/index">mx-popover/index</a><br mxs="_a:a"/><a mxs="_a:H" href="#!/mx-progress/index">mx-progress/index</a><br mxs="_a:a"/><a mxs="_a:I" href="#!/mx-rating/index">mx-rating/index</a><br mxs="_a:a"/><a mxs="_a:J" href="#!/mx-sitenav/index">mx-sitenav/index(阿里妈妈站点通用吊顶)</a><br mxs="_a:a"/><a mxs="_a:K" href="#!/mx-sitenav/index?mode=simple">mx-sitenav/index?mode=simple(阿里妈妈站点通用吊顶简洁版)</a><br mxs="_a:a"/><a mxs="_a:L" href="#!/mx-slider/index">mx-slider/index(滑块)</a><br mxs="_a:a"/><a mxs="_a:M" href="#!/mx-slider/range">mx-slider/range(范围滑块)</a><br mxs="_a:a"/><a mxs="_a:N" href="#!/mx-speech/index">mx-speech/index(语音朗读)</a><br mxs="_a:a"/><a mxs="_a:O" href="#!/mx-suggest/index">mx-suggest/index</a><br mxs="_a:a"/><a mxs="_a:P" href="#!/mx-table/index">mx-table/index(表格)</a><br mxs="_a:a"/><a mxs="_a:Q" href="#!/mx-taginput/index">mx-taginput/index(标签输入)</a><br mxs="_a:a"/><a mxs="_a:R" href="#!/mx-time/index">mx-time/index(时间)</a><br mxs="_a:a"/><a mxs="_a:S" href="#!/mx-time/picker">mx-time/picker(时间选取)</a><br mxs="_a:a"/><a mxs="_a:T" href="#!/mx-tree/index">mx-tree/index(tree)</a><br mxs="_a:a"/><a mxs="_a:U" href="#!/mx-uploader/index">mx-uploader/index(上传)</a><br mxs="_a:a"/>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/list.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});