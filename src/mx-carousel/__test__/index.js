/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-carousel/__test__/index",["magix","mx-gtip/index","../index","../panel","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../index");
require("../panel");
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
    $p += '<h2 mxs="_e:_">mx-carousel</h2><h3 mxs="_e:a">默认情形</h3><div mxs="_e:b" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div style="height:200px;background-color:#f96447;color:white" mx-view="mx-carousel/index"><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>1</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>2</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>3</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>4</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>5</h1></div></div></div><div mxs="_e:c" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-carousel style="height:200px;background-color:#f96447;color:white"&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;1&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;2&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;3&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;4&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;5&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n&lt;/mx-carousel&gt;</pre></div><h3 mxs="_e:d" class="__mx-style_index_-mt20">初始显示第二帧并自动播放</h3><div mxs="_e:e" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div style="height:200px;background-color:#2e6859;color:white;width:500px;" mx-view="mx-carousel/index?active=1&autoplay=true"><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>1</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>2</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>3</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>4</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>5</h1></div></div></div><div mxs="_e:f" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-carousel style="height:200px;background-color:#2e6859;color:white;width:500px;"　active="1" autoplay="true"&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;1&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;2&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;3&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;4&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;5&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n&lt;/mx-carousel&gt;</pre></div><h3 mxs="_e:g" class="__mx-style_index_-mt20">不显示缩略点</h3><div mxs="_e:h" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div style="height:200px;background-color:#f96447;color:white;width:500px;" mx-view="mx-carousel/index?dots=false&autoplay=true&timing=cubic-bezier%28.57%2C-0.81%2C.22%2C1.76%29&duration=1s"><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>1</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>2</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>3</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>4</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>5</h1></div></div></div><div mxs="_e:i" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-carousel\n        style="height:200px;background-color:#f96447;color:white;width:500px;"\n        dots="false"\n        autoplay="true"\n        timing="cubic-bezier(.57,-0.81,.22,1.76)"\n        duration="1s"&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;1&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;2&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;3&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;4&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;5&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n&lt;/mx-carousel&gt;</pre></div><h3 mxs="_e:j" class="__mx-style_index_-mt20">垂直模式</h3><div mxs="_e:k" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div style="height:200px;background-color:#f96447;color:white;width:500px;" mx-view="mx-carousel/index?vertical=true&autoplay=true"><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>1</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>2</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>3</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>4</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>5</h1></div></div></div><div mxs="_e:l" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-carousel style="height:200px;background-color:#f96447;color:white;width:500px;" vertical="true" autoplay="true"&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;1&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;2&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;3&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;4&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;5&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n&lt;/mx-carousel&gt;</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-carousel/__test__/index.html';
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