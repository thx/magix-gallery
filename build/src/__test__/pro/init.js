/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/init",["magix","$","../subs","mx-title/second","./init-steps","./init-dir"],(require,exports,module)=>{
/*Magix,$*/
require("../subs");
require("mx-title/second");
require("./init-steps");
require("./init-dir");
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_galleryk:_" class="tip-content mr20 mb20 has-border has-highlight"><div>1. 依赖<a class="link-brand" href="https://thx.github.io/magix-cli-book/#/" target="_blank" rel="noopener noreferrer">magix-cli</a>命令行工具快速创建magix项目</div><div>2. 脚手架中的通用吊底数据配置在alp，Lego2渲染层对jsonp进行referer校验，本地测试的时候需要绑个类似于 xxx.taobao.com 的host，否则不会正常返回。</div></div><div mxa="_zs_galleryk:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 7;
    $art = '@[{\n        name: \'创建步骤\',\n        key: viewId + \'_steps\'\n    }, {\n        name: \'目录结构说明\',\n        key: viewId + \'_dir\'\n    }]';
    ;
    $p += '' + ($expr = '<%@[{            name: \'创建步骤\',            key: viewId + \'_steps\'        }, {            name: \'目录结构说明\',            key: viewId + \'_dir\'        }]%>', $i($$ref, [{ name: '创建步骤', key: viewId + '_steps' }, { name: '目录结构说明', key: viewId + '_dir' }])) + '"></div><div id="';
    $line = 15;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_steps" mx-view="mx-title/second?content=%E5%88%9B%E5%BB%BA%E6%AD%A5%E9%AA%A4&tip=magix-cli%E5%B7%A5%E5%85%B7%3Ca%20rel%3D%27noopener%20noreferrer%27%20href%3D%27https%3A%2F%2Fthx.github.io%2Fmagix-cli-book%2F%23%2F%27%20target%3D%27_blank%27%20class%3D%27color-brand%27%3Ehttps%3A%2F%2Fthx.github.io%2Fmagix-cli-book%2F%23%2F%3C%2Fa%3E"></div><div mxs="_zs_galleryk:a" mx-view="__test__/pro/init-steps" class="pr20"></div><div id="';
    $line = 20;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_dir" mx-view="mx-title/second?content=%E8%84%9A%E6%89%8B%E6%9E%B6%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84%E8%AF%B4%E6%98%8E&tip=%E4%BA%91%E9%9B%80%E6%96%87%E6%A1%A3%E5%9C%B0%E5%9D%80%3Ca%20rel%3D%27noopener%20noreferrer%27%20href%3D%27https%3A%2F%2Flark.alipay.com%2Fchongzhi.ldq%2Fez0zq4%2Fluqazk%27%20target%3D%27_blank%27%20class%3D%27color-brand%27%3Ehttps%3A%2F%2Flark.alipay.com%2Fchongzhi.ldq%2Fez0zq4%2Fluqazk%3C%2Fa%3E"></div><div mxs="_zs_galleryk:b" mx-view="__test__/pro/init-dir"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/pro/init.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id
        });
    }
});

});