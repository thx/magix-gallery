/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/init-dir",["magix","$","mx-effects/notice"],(require,exports,module)=>{
/*Magix,$*/
require("mx-effects/notice");
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
    $p += '<div mxs="_zs_galleryr:_" class="pr20"><div class="tip-content mb20"><pre>- project（项目名）\n- src\n    - lib（magix + jquery + seajs）\n    - project\n        - assets\n            vars_override.less（组件变量覆盖文件，less变量）\n            group_override.less（css3变量，同vars_override，为跨项目mount view预留）\n            iconfont.less（项目iconfont库）\n            ...\n        - chartpark（同步到本地的图表配置文件）\n        - dataplus（埋点）\n        - gallery（同步线上组件，不建议改动，通用扩展可提需求至 @虞佳，其他特殊定制请在gallery-local中实现）\n        - gallery-local（本地组件，包括对图表的包装组件lg-chart，方便使用）\n        - services（接口统一处理）\n        - views\n            - pages（业务代码）\n            - partials（页面组织模块，侧导航，header等）\n            default\n        menu.ts\n        prepare.ts\n        view.ts\n    - lib\n    boot.ts</pre></div><div class="fontsize-14">细节说明：</div><div class="lh22 mb10">1. boot.ts</div><div class="pl15 lh22 mb10"><div class="mb10" mx-view="mx-effects/notice?type=highlight&border=true&content=%E6%B3%A8%E6%84%8F%EF%BC%9A%E8%AF%B7%E4%BF%9D%E6%8C%81%E9%A1%B9%E7%9B%AE%E9%97%B4%E7%9A%84boot.ts%E5%8A%A0%E8%BD%BD%E7%9A%84%E9%80%9A%E7%94%A8%E6%A8%A1%E5%9D%97%E7%9A%84%E4%B8%80%E8%87%B4%E6%80%A7%EF%BC%8C%E5%9F%BA%E6%9C%AC%E4%B8%8A%E4%BB%8Emx%20init%E5%88%9D%E5%A7%8B%E5%8C%96%E9%A1%B9%E7%9B%AE%E4%B9%8B%E5%90%8E%EF%BC%8C%E5%B0%B1%E4%B8%8D%E8%A6%81%E5%86%8D%E5%8A%A8boot.ts%E6%96%87%E4%BB%B6%E4%BA%86%EF%BC%8C%E6%9C%89%E8%87%AA%E5%B7%B1%E7%89%B9%E6%AE%8A%E9%80%BB%E8%BE%91%E7%9A%84%E4%B8%9C%E8%A5%BF%E8%AF%B7%E5%9C%A8%E5%90%84%E8%87%AA%E7%9A%84prepare.ts%E6%96%87%E4%BB%B6%E9%87%8C%E5%8A%A0%E8%BD%BD"></div><div>1.1 准备通用环境，如加载jquery,underscore,accouting等</div><div>1.2 应用自己品牌色的通用样式</div></div><div class="lh22 mb10">2. project/prepare.ts</div><div class="pl15 lh22 mb10"><div class="mb10" mx-view="mx-effects/notice?type=highlight&border=true&content=prepare.ts%E5%8F%AF%E4%BB%A5%E7%AE%97%E5%81%9Aboot.ts%E7%9A%84%E6%9C%AC%E5%9C%B0%E5%8C%96%E6%89%A9%E5%B1%95%EF%BC%8C%E5%90%84%E8%87%AA%E9%A1%B9%E7%9B%AE%E7%9A%84%E7%89%B9%E6%AE%8A%E7%9A%84%E9%80%BB%E8%BE%91%E5%8F%AF%E4%BB%A5%E5%9C%A8%E8%BF%99%E9%87%8C%E5%AE%9A%E4%B9%89"></div><div>2.1 异步加载用户信息、字典文件等</div><div>2.2 使用Magix.config方法把相关信息放到Magix.config({\'prject.xx\':\'yy\'})里，不挂载在window上，避免跨项目mount冲突</div><div>2.3 导出返回值是promise的方法供外部调用</div></div><div class="lh22 mb10">3. project/view.ts</div><div class="pl15 lh22 mb10"><div class="mb10" mx-view="mx-effects/notice?type=highlight&border=true&content=view.ts%E5%90%84%E8%87%AA%E9%A1%B9%E7%9B%AE%E9%83%BD%E4%BF%9D%E7%95%99%E4%B8%80%E4%BB%BD%EF%BC%8C%E6%9C%AC%E8%B4%A8%E4%B8%8A%E6%98%AF%E4%B8%BA%E4%BA%86%E4%BF%9D%E6%8C%81%E5%90%84%E8%87%AA%E9%A1%B9%E7%9B%AE%E7%9A%84%E4%B8%80%E4%BA%9B%E7%89%B9%E6%9C%89%E9%9D%9E%E9%80%9A%E7%94%A8%E9%85%8D%E7%BD%AE%EF%BC%8C%E6%AF%94%E5%A6%82%20Magix.config%28%27zs_scaffold.user%27%29%20%E7%AD%89%E9%85%8D%E7%BD%AE"></div><div>3.1 项目中所有view的基类为该文件，而不再是原来的Magix.View</div><div>3.2 该文件继承Magix.View，然后挂载项目中常用的方法等，如接口请求fetch、save等</div></div></div>';
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