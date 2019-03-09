/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/data",["magix","$","mx-title/second"],(require,exports,module)=>{
/*Magix,$*/
require("mx-title/second");
var Magix = require("magix");
var $ = require("$");
var Router = Magix.Router;
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_galleryn:_" mx-view="mx-title/second?content=%E6%8E%A5%E5%85%A5%E6%AD%A5%E9%AA%A4%E8%AF%B4%E6%98%8E"></div><div mxa="_zs_galleryn:_" class="pr20"><div class="mb40" id="';
    $line = 5;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_step_spma"><div mxs="_zs_galleryn:a" class="mb20">1. 基于集团spm埋点，需要申请项目spma（申请地址：<a href="http://spm.alibaba-inc.com/track/index.htm?#/apply/spmapply" target="_blank" rel="noopener noreferrer" class="color-brand">http://spm.alibaba-inc.com/track/index.htm?#/apply/spmapply</a>）：</div><div mxs="_zs_galleryn:b"><img src="https://img.alicdn.com/tfs/TB1Mi5QumzqK1RjSZPcXXbTepXa-2880-1510.jpg"/></div></div><div class="mb40" id="';
    $line = 11;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_step_logkey"><div mxs="_zs_galleryn:c" class="mb20">2. 申请黄金令箭logkey，新建业务 -> 新建场景 -> 获取logkey （申请地址：<a href="http://spm.alibaba-inc.com/track/index.htm?#/apply/gold" target="_blank" rel="noopener noreferrer" class="color-brand">http://spm.alibaba-inc.com/track/index.htm?#/apply/gold</a>）：</div><div mxs="_zs_galleryn:d"><img class="mb20" src="https://img.alicdn.com/tfs/TB1sSiPujTpK1RjSZKPXXa3UpXa-2878-1081.jpg"/> <img class="mb20" src="https://img.alicdn.com/tfs/TB1VMOVuXzqK1RjSZFoXXbfcXXa-2878-1491.jpg"/> <img class="mb20" src="https://img.alicdn.com/tfs/TB1lDKVukvoK1RjSZPfXXXPKFXa-2878-1496.jpg"/> <img src="https://img.alicdn.com/tfs/TB1vSqPujTpK1RjSZKPXXa3UpXa-2878-1314.jpg"/></div></div><div mxs="_zs_galleryn:e" class="mb40"><div class="mb20">3. mx init初始化项目的时候输入已申请的spma和logkey，也可在package.json中手动修改</div><div><img src="https://img.alicdn.com/tfs/TB1PGm6ukvoK1RjSZFwXXciCFXa-2628-1440.jpg"/></div></div><div mxs="_zs_galleryn:f" class="mb40">4. 联系<a class="mr5" href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=y8e7um3" class="ml5"><i class="mc-iconfont color-brand fontsize-18 displacement-2">&#xe677;</i>浩添</a>在数据小站中接入项目</div><div mxs="_zs_galleryn:g" class="mb40"><div class="mb20">5. 关于项目中如何埋点</div><div class="pl20"><div class="lh32">5.1 常见有以下三种类型：</div><div class="pl20"><div class="mb20">a) 整个页面的埋点（uv，pv），需要在小站中配置</div><div class="mb10"><img src="https://img.alicdn.com/tfs/TB1fum2umzqK1RjSZFLXXcn2XXa-2878-1386.jpg"/></div><div class="lh32">b) 有&nbsp;mx-&nbsp;事件的单点埋点</div><div class="lh32">c) 无事件的单点，也需要埋点的，在节点上配置 mx-spm-ph 属性即可</div></div><div class="lh32">5.2 在项目中执行&nbsp;<span class="color-brand">mx spmlog</span>&nbsp;即可完成埋点</div><div class="lh32">5.3 组件已对埋点进行处理，多选项可区分各自埋点，无需额外修改</div></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/pro/data.html';
    throw msg;
} return $p; },
    render: function () {
        var viewId = this.id;
        this.updater.digest({
            viewId: viewId
        });
        var locParams = Router.parse().params;
        if (locParams.to) {
            $(window).scrollTop($('#' + viewId + '_step_' + locParams.to).offset().top);
        }
    }
});

});