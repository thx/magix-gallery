/*
    generate by magix-combine@3.11.31: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/examples/index-inner2",["magix","$","mx-form/index","mx-form/validator"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', int = $$.int; var $expr, $art, $line; try {
    $p += '<form mxv mxa="_zs_gallerydr:_" class="form mb40"><div mxv mxa="_zs_gallerydr:a" class="form-item"><div mxs="_zs_gallerydr:_" class="form-label">请输入</div><div mxv mxa="_zs_gallerydr:b" class="form-content"><input mxe="' + $viewId + '_0" mxc="[';
    $line = 6;
    $art = ':int{required:true,int:true}';
    ;
    $p += '{p:\'int\',f:{required:true,int:true}}]" class="input w200" placeholder="整数" value="';
    $line = 6;
    $art = ':int{required:true,int:true}';
    ;
    $p += ($expr = '<%=int%>', $e(int)) + '"/></div></div></form><div mxs="_zs_gallerydr:a" class="lh22 mb10"><div>页面功能说明：</div></div><div mxs="_zs_gallerydr:b" class="tip-content mb40"><div>1. 侧导航子标题有几个对应当前页面有几个子view，以该页面为例，子标题有推广宝贝 + 出价方式，则对应有两个子view</div><div>2. 所有子模块共用一个侧标提示区域，配置sideTip + sideTitle使用组件默认样式</div><div>3. 子view实现check方法完成当前模块的校验</div><div>4. 自定义返回上一步文案（prevTip），下一步按钮文案（nextTip）</div><div>5. 点击下一步，当前所有子view的返回值并集到nextFn，处理成功返回一个promise告知组件跳转到下一步，rersolve(params)，params为需要保留到地址栏的参数</div><div>6. 当前步骤提交的时候保留参数adgroupId，初始化的时候判断是否有dgroupId，有的话则表示第一步第二步已完成，直接展开到第三步</div></div><div mxs="_zs_gallerydr:c" class="lh22 mb10"><div>当前页面配置信息：</div></div><pre mxs="_zs_gallerydr:d" class="tip-content mb40">\n&#123;\n    label: \'设置单元\',\n    sideTitle: \'单元说明\', // 使用默认侧边样式\n    sideTip: `&lt;div&gt;说明：&lt;/div&gt;\n            &lt;div&gt;1、条件1&lt;/div&gt;\n            &lt;div&gt;2、条件2&lt;/div&gt;\n            &lt;div&gt;3、条件3&lt;/div&gt;`,\n    subs: [&#123;\n        label: \'推广宝贝\',\n        icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe613;&lt;/i&gt;\',\n        view: \'@./index-inner2\'\n    &#125;, &#123;\n        label: \'出价方式\',\n        icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe731;&lt;/i&gt;\',\n        view: \'@./index-inner\'\n    &#125;],\n    prevTip: \'返回计划设置\',\n    nextTip: \'下一步，完成\',\n    nextFn: (remains) =&gt; &#123;\n        // remains：当前步骤保留的信息，提交处理\n        return new Promise(resolve =&gt; &#123;\n            // 返回值为保留到地址栏的参数\n            resolve(&#123;\n                adgroupId: 1\n            &#125;)\n        &#125;)\n    &#125;\n&#125;\n</pre><div mxs="_zs_gallerydr:e" class="lh22 mb10"><div>当前view源码：</div></div><pre mxs="_zs_gallerydr:f" class="tip-content">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    init(extra) &#123;\n        // extra.info：当前步骤完整信息\n    &#125;,\n    render() &#123;\n        this.updater.digest(&#123;\n            int: \'\'\n        &#125;);\n    &#125;,\n    /**\n        * 子view实现该方法\n        */\n    check() &#123;\n        let ok = this.isValid();\n        let &#123; int &#125; = this.updater.get();\n\n        return new Promise((resolve) =&gt; &#123;\n            // 此处返回promise，防止有接口提交校验等\n            resolve(&#123;\n                ok,\n                msg: \'请按照要求填写完成信息再提交\',\n                remain: &#123;\n                    int\n                &#125;\n            &#125;)\n        &#125;)\n    &#125;\n&#125;);\n</pre>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-main/examples/index-inner2.html';
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