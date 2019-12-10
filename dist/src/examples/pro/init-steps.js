/*
    generate by magix-combine@3.11.31: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("examples/pro/init-steps",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
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
    $p += '<div mxs="_zs_galleryt:_" class="mb20"><div class="mb20">1. 全局安装tnpm，magix-cli工具：</div><div class="pl15"><pre class="tip-content">\nnpm install -g tnpm --registry=http://registry.npm.alibaba-inc.com\n\ntnpm install -g @ali/magix-cli</pre></div></div><div mxs="_zs_galleryt:a" class="mb40 lh22"><div>2. 在工作目录执行 mx init 初始化：自动生成相应的仓库 + iconfont库 + 接入云构建</div><div class="pl15"><div>2.1 域账号登录 + iconfont平台授权</div><div>2.2 考虑是否需要埋点，若需要，请提前申请spma和logkey[非必填，<a href="#!/all/pro/data" class="color-brand">查看如何埋点</a>]</div><div>2.3 选择脚手架类型zs-scaffold</div><div>2.4 选择你的项目要创建在哪个groups下（gitlab）</div><div>2.5 输入项目名称 (会以该名称在gitlab平台上创建仓库，并在当前目录下创建以项目名称为名的文件夹)</div><div>2.6 输入你在RAP上创建好的项目的projectId [非必填，需要你先在RAP上面创建好项目]</div><div>2.7 输入你在chartpark上创建好的项目的projectId [非必填，需要你先在chartpark上面创建好项目，<a href="#!/all/pro/chartpark" class="color-brand">查看如何使用chartpark</a>]</div><div>2.8 输入你在阿里日志上申请的spma字段 [非必填，<a href="#!/all/pro/data?to=spma" class="color-brand">查看如何申请</a>]</div><div class="mb20">2.9 输入你在黄金令箭上创建好的场景logkey [非必填，<a href="#!/all/pro/data?to=logkey" class="color-brand">查看如何申请</a>]</div><div><img src="https://img.alicdn.com/tfs/TB13vAlO7PoK1RjSZKbXXX1IXXa-1388-1173.jpg"/></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:examples/pro/init-steps.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id
        });
    }
});

});