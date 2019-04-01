/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/init-dir",["magix","$"],(require,exports,module)=>{
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
    $p += '<div mxs="_zs_galleryn:_" class="pr20"><div class="tip-content mb20"><pre>- project（项目名）\n- src\n    - lib（magix + jquery + seajs）\n    - project\n        - assets\n            vars_override.less（组件变量覆盖文件，less变量）\n            group_override.less（css3变量，同vars_override，为跨项目mount view预留）\n            iconfont.less（项目iconfont库）\n            ...\n        - chartpark（同步到本地的图表配置文件）\n        - dataplus（埋点）\n        - gallery（同步线上组件，不建议改动，通用扩展可提需求至 @虞佳，其他特殊定制请在gallery-local中实现）\n        - gallery-local（本地组件，包括对图表的包装组件lg-chart，方便使用）\n        - services（接口统一处理）\n        - views\n            - pages（业务代码）\n            - partials（页面组织模块，侧导航，header等）\n            default\n        menu.ts\n        prepare.ts\n        view.ts\n    - lib\n    boot.ts</pre></div><div class="fontsize-14">细节说明：</div><div class="lh22 mb10">1. boot.ts</div><div class="pl15 lh22 mb10"><div class="mx-notice mx-notice-border mx-notice-highlight mb10" style="text-align: left"><div class="mx-notice-inner mx-notice-inner-with"><i class="mc-iconfont mx-notice-icon">&#xe6ad;</i>注意：请保持项目间的boot.ts加载的通用模块的一致性，基本上从mx init初始化项目之后，就不要再动boot.ts文件了，有自己特殊逻辑的东西请在各自的prepare.ts文件里加载</div></div><div>1.1 准备通用环境，如加载jquery,underscore,accouting等</div><div>1.2 应用自己品牌色的通用样式</div><div>1.3 加载其它项目中的project/prepare.ts文件</div></div><div class="lh22 mb10">2. project/prepare.ts</div><div class="pl15 lh22 mb10"><div class="mx-notice mx-notice-border mx-notice-highlight mb10" style="text-align: left"><div class="mx-notice-inner mx-notice-inner-with"><i class="mc-iconfont mx-notice-icon">&#xe6ad;</i>prepare.ts可以算做boot.ts的本地化扩展，各自项目的特殊的逻辑可以在这里定义</div></div><div>2.1 异步加载用户信息、字典文件等</div><div>2.2 使用Magix.config方法把相关信息放到Magix.config({\'prject.xx\':\'yy\'})里，不挂载在window上，避免跨项目mount冲突</div><div>2.3 导出返回值是promise的方法供外部调用</div></div><div class="lh22 mb10">3. project/view.ts</div><div class="pl15 lh22 mb10"><div class="mx-notice mx-notice-border mx-notice-highlight mb10" style="text-align: left"><div class="mx-notice-inner mx-notice-inner-with"><i class="mc-iconfont mx-notice-icon">&#xe6ad;</i>view.ts各自项目都保留一份，本质上是为了保持各自项目的一些特有非通用配置，比如 Magix.config(\'zs_scaffold.user\') 等配置</div></div><div>3.1 项目中所有view的基类为该文件，而不再是原来的Magix.View</div><div>3.2 该文件继承Magix.View，然后挂载项目中常用的方法等，如接口请求fetch、save等</div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/pro/init-dir.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id
        });
    }
});

});