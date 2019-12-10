/*
    generate by magix-combine@3.11.31: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("examples/config",["magix","$"],(require,exports,module)=>{
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
    $p += '<div mxs="_zs_galleryd:_" class="mb20 lh22">1. 组件内包含一个配置文件 _config，导出一个对象（前面的//#gallery-config是为了防止该文件被当成普通js编译），内容如下：</div><div mxs="_zs_galleryd:a" class="mb20 pl15"><div class="tip-content has-border"><pre>//#gallery-config\nmodule.exports = &#123;\n    \'mx-checkbox\': &#123;\n        tag: \'input\',\n        type: \'checkbox\'\n    &#125;\n&#125;</pre></div></div><div mxs="_zs_galleryd:b" class="mb20 lh22"><div>2. 该配置文件的作用是告诉 magix-combine 用 &lt;input type="checkbox"/&gt; 来生成组件 mx-checkbox</div><div class="pl15"><div>2.1 tag表示生成该组件的 html 标签，标签的所有自有属性都可配置</div><div>2.2 可配置额外的以下划线开头的追加属性内容，常用的如_class，表示默认给标签加上className</div><div class="mb10">2.3 具体示例如下：</div><div class="clearfix"><div class="tip-content has-border fl" style="height: 210px;"><div class="mb20">配置文件的内容：</div><pre>//#gallery-config\nmodule.exports = &#123;\n    \'mx-checkbox\': &#123;\n        tag: \'input\',\n        type: \'checkbox\',\n        _class: \'none\'\n    &#125;\n&#125;</pre></div><div class="fl color-9 text-center" style="width: 40px; height: 210px; line-height: 210px;">=&gt;</div><div class="tip-content has-border fl" style="height: 210px;"><div class="mb20">组件：</div><pre>&lt;mx-checkbox/&gt;</pre></div><div class="fl color-9 text-center" style="width: 40px; height: 210px; line-height: 210px;">=&gt;</div><div class="tip-content has-border fl" style="height: 210px;"><div class="mb20">编译后的节点：</div><pre>&lt;input type="checkbox" class="none"/&gt;</pre></div></div></div></div><div mxs="_zs_galleryd:c" class="lh22"><div>3. 关于可配参数加上 view- 而不是直接使用原生属性的说明</div><div class="pl15"><div>组件本质上也是 magix view，而 magix view 的设计是只有参数及 innerHTML 变化才会通知 view 更新，属性并不会</div><div class="mb10">直接使用原生属性时</div><div class="clearfix mb10"><div class="tip-content has-border fl" style="height: 90px;"><div class="mb20">组件：</div><pre>&lt;mx-checkbox disabled="true"/&gt;</pre></div><div class="fl color-9 text-center" style="width: 40px; height: 90px; line-height: 90px;">=&gt;</div><div class="tip-content has-border fl" style="height: 90px;"><div class="mb20">编译后的节点：</div><pre>&lt;input type="checkbox" disabled="true"/&gt;</pre></div></div><div>若此时动态改变了disabled的值，属于属性的变化，组件层面是监听不到该变化的，也就不能更新组件的显示状态，故而采用 view-option 的参数配置方式</div><div class="mb10">当前实现的具体展现如下，配置项作为参数传入组件</div><div class="clearfix mb10"><div class="tip-content has-border fl" style="height: 120px;"><div class="mb20">组件：</div><pre>&lt;mx-checkbox \n    view-disabled="true"\n    view-indeterminate="true"/&gt;</pre></div><div class="fl color-9 text-center" style="width: 40px; height: 120px; line-height: 120px;">=&gt;</div><div class="tip-content has-border fl" style="height: 120px;"><div class="mb20">编译后的节点：</div><pre>&lt;input type="checkbox" \n    mx-view="mx-checkbox/index?disabled=true&indeterminate=true" /&gt;</pre></div></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:examples/config.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});