/*
    generate by magix-combine@3.11.31: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/examples/index-inner6",["magix","$","mx-form/index","mx-form/validator"],(require,exports,module)=>{
/*Magix,$,Form,Validator*/

var Magix = require("magix");
var $ = require("$");
var Form = require("mx-form/index");
var Validator = require("mx-form/validator");
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
    $p += '<div mxs="_zs_gallerydv:_" class="lh22 mb10"><div>页面功能说明：</div></div><div mxs="_zs_gallerydv:a" class="tip-content mb40"><div>1. 自定义按钮，无需调用子view的check</div></div><div mxs="_zs_gallerydv:b" class="lh22 mb10"><div>当前页面配置信息：</div></div><pre mxs="_zs_gallerydv:c" class="tip-content mb40">\n&#123;\n    label: \'完成创建\',\n    subs: [&#123;\n        label: \'完成标题\',\n        icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe7be;&lt;/i&gt;\',\n        view: \'@./index-inner6\'\n    &#125;],\n    btns: [&#123;\n        text: \'查看已创建的\',\n        callback: () =&gt; &#123;\n            Router.to(\'/main/index\');\n        &#125;\n    &#125;, &#123;\n        text: \'再次新建\',\n        brand: true,\n        callback: () =&gt; &#123;\n            Router.to(\'/main/index-custom\');\n        &#125;\n    &#125;]\n&#125;\n</pre>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-main/examples/index-inner6.html';
    throw msg;
} return $p; },
    mixins: [Form, Validator],
    init: function (extra) {
        // extra.info：当前步骤完整信息
    },
    render: function () {
        this.updater.digest({
            int: ''
        });
    },
    /**
     * 子view实现该方法
     */
    check: function () {
        var ok = this.isValid();
        var int = this.updater.get().int;
        return new Promise(function (resolve) {
            // 此处返回promise，防止有接口提交校验等
            resolve({
                ok: ok,
                msg: '请按照要求填写完成信息再提交',
                remain: {
                    int: int
                }
            });
        });
    }
});

});