/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/init-steps",["magix","$"],(require,exports,module)=>{
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
    $p += '<div mxs="_zs_galleryl:_" class="mb20"><div class="mb20">1. 全局安装tnpm，magix-cli工具：</div><div class="pl15"><pre class="tip-content">\nnpm install -g tnpm --registry=http://registry.npm.alibaba-inc.com\n\ntnpm install -g @ali/magix-cli</pre></div></div><div mxs="_zs_galleryl:a" class="mb40 lh22"><div>2. 在工作目录执行 mx init 初始化</div><div class="pl15"><div>2.1 输入域账号/密码登录gitlab</div><div>2.2 选择脚手架类型zs-scaffold</div><div>2.3 选择你的项目要创建在哪个groups下（gitlab）</div><div>2.4 输入项目名称 (会以该名称在gitlab平台上创建仓库，并在当前目录下创建以项目名称为名的文件夹)</div><div>2.5 输入你在RAP上创建好的项目的projectId [非必填，需要你先在RAP上面创建好项目]</div><div>2.6 输入你在黄金令箭上创建好的场景ID [非必填，需要你先在黄金令箭上创建好项目]</div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/pro/init-steps.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id
        });
    }
});

});