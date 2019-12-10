/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/examples/index-inner4",["magix","$","mx-form/index","mx-form/validator"],(require,exports,module)=>{
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
    $p += '<form mxv mxa="_zs_gallerydt:_" class="form mb40"><div mxv mxa="_zs_gallerydt:a" class="form-item"><div mxs="_zs_gallerydt:_" class="form-label">请输入</div><div mxv mxa="_zs_gallerydt:b" class="form-content"><input mxe="' + $viewId + '_0" mxc="[';
    $line = 6;
    $art = ':int{required:true,int:true}';
    ;
    $p += '{p:\'int\',f:{required:true,int:true}}]" class="input w200" placeholder="整数" value="';
    $line = 6;
    $art = ':int{required:true,int:true}';
    ;
    $p += ($expr = '<%=int%>', $e(int)) + '"/></div></div></form><div mxs="_zs_gallerydt:a" class="lh22 mb10"><div>页面功能说明：</div></div><div mxs="_zs_gallerydt:b" class="tip-content mb40"><div>1. 当前步骤只要一个子步骤，侧边导航不显示子步骤</div><div>2. 右侧边是个自定义view，配置sideView</div><div>3. 完全自定义按钮，第一步没有返回上一步，自定义保存草稿按钮，预置下一步按钮</div><div>4. 点击下一步，当前所有子view的返回值并集到nextFn，处理成功返回一个promise告知组件跳转到下一步，rersolve(params)，params为需要保留到地址栏的参数</div><div>5. 当前步骤提交的时候保留参数campaignId，初始化的时候判断是否有campaignId，有的话则表示第一步已完成，直接展开到第二步</div></div><div mxs="_zs_gallerydt:c" class="lh22 mb10"><div>当前页面配置信息：</div></div><pre mxs="_zs_gallerydt:d" class="tip-content mb40">\n&#123;\n    label: \'设置计划\',\n    sideView: \'@./tip\',  // 自定义侧边提示view\n    subs: [&#123;\n        label: \'基本信息\',\n        icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe612;&lt;/i&gt;\',\n        view: \'@./index-inner4\'\n    &#125;],\n    btns: [&#123;\n        text: \'保存为草稿\',\n        check: true,\n        callback: (remains) =&gt; &#123;\n            // remains：当前步骤保留的信息，提交处理\n            return new Promise(resolve =&gt; &#123;\n                let dlg = that.alert(\'系统提示\', \'保存成功\');\n                dlg.afterClose(resolve);\n            &#125;)\n        &#125;\n    &#125;, &#123;\n        type: \'next\',\n        callback: (remains) =&gt; &#123;\n            // remains：当前步骤保留的信息，提交处理\n            return new Promise(resolve =&gt; &#123;\n                // 返回值为保留到地址栏的参数\n                resolve(&#123;\n                    campaignId: 1\n                &#125;)\n            &#125;)\n        &#125;\n    &#125;]\n&#125;\n</pre><div mxs="_zs_gallerydt:e" class="lh22 mb10"><div>当前view源码：</div></div><pre mxs="_zs_gallerydt:f" class="tip-content">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    init(extra) &#123;\n        // extra.info：当前步骤完整信息\n    &#125;,\n    render() &#123;\n        this.updater.digest(&#123;\n            int: \'\'\n        &#125;);\n    &#125;,\n    /**\n      * 子view实现该方法\n      */\n    check() &#123;\n        let ok = this.isValid();\n        let &#123; int &#125; = this.updater.get();\n\n        return new Promise((resolve) =&gt; &#123;\n            // 此处返回promise，防止有接口提交校验等\n            resolve(&#123;\n                ok,\n                msg: \'请按照要求填写完成信息再提交\',\n                remain: &#123;\n                    int\n                &#125;\n            &#125;)\n        &#125;)\n    &#125;\n&#125;);\n</pre>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-main/examples/index-inner4.html';
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