/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/examples/error",["magix","$","mx-form/index","mx-form/validator","./error-inner","examples/hl"],(require,exports,module)=>{
/*Magix,$,Form,Validator*/
require("./error-inner");
require("examples/hl");
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
} ; var $g = '', $_temp, $p = '', name = $$.name, viewId = $$.viewId; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerycq:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxv mxa="_zs_gallerycq:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content clearfix"><div mxs="_zs_gallerycq:_" class="mb20 clearfix"><div class="fl color-9">异常情况复现：</div><div class="fl"><div>父子view分别存在校验逻辑</div><div>子view的以父view的id为前缀加下划线进行命名，如果 &#123;&#123;=viewId&#125;&#125;_inner 这种</div><div>子view双向绑定radio或者checkbox，并且挂载在data上数据为对象 info: &#123;age: 1&#125;</div></div></div><div mxs="_zs_gallerycq:a" class="mb20 clearfix"><div class="fl color-9">异常原因说明：</div><div class="fl"><div>关于radio和checkbox的双向绑定，组件获取当前view中input[mxe="本viewid开头"]进行处理</div><div>复现情况中的子view id和magix本身处理mxe属性的规则一致，则父view处理时也获取到了子view的节点</div><div>由于子view的数据挂在info对象上，而父view上没有info对象</div></div></div><div mxs="_zs_gallerycq:b" class="mb20 clearfix"><div class="fl color-9">解决方案说明：</div><div class="fl">组件已兼容该情况</div></div><form mxv mxa="_zs_gallerycq:b" class="form form-4 mb20"><div mxv mxa="_zs_gallerycq:c" class="form-item"><div mxs="_zs_gallerycq:c" class="form-label">姓名</div><div mxv mxa="_zs_gallerycq:d" class="form-content"><input mxe="' + $viewId + '_0" mxc="[';
    $line = 29;
    $art = ':name{required:true}';
    ;
    $p += '{p:\'name\',f:{required:true}}]" class="input" placeholder="必填项" value="';
    $line = 29;
    $art = ':name{required:true}';
    ;
    $p += ($expr = '<%=name%>', $e(name)) + '"/></div></div><div mxa="_zs_gallerycq:e" class="form-item"><div mxs="_zs_gallerycq:d" class="form-label">年龄</div><div mxa="_zs_gallerycq:f" class="form-content"><div mx-view="mx-form/examples/error-inner" id="';
    $line = 35;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_inner"></div></div></div></form></div><div mxs="_zs_gallerycq:e" class="clearfix"><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-left"><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">父view HTML Code</div><pre mx-view="examples/hl">\n&lt;form class="form form-4"&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;姓名&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;input class="input" placeholder="必填项" \n                value="&#123;&#123;:name&#123;required:true&#125;&#125;&#125;"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;年龄&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;div mx-view="./error-inner" </pre><pre class="color-brand inline-block">\n                id="&#123;&#123;=viewId&#125;&#125;_inner"</pre><pre class="inline-block"> &gt;&lt;/div&gt;</pre><pre>\n        &lt;/div&gt;\n    &lt;/div&gt;\n&lt;/form&gt;</pre></div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">父view JS Code</div><pre mx-view="examples/hl">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\nlet Form = require(\'@../mx-form/index\');\nlet Validator = require(\'@../mx-form/validator\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@error.html\',\n    mixins: [Form, Validator],\n    render() &#123;\n        let that = this;\n        that.updater.digest(&#123;\n            viewId: that.id,\n            name: \'test\'\n        &#125;);\n    &#125;\n&#125;);</pre></div></div><div mxs="_zs_gallerycq:f" class="clearfix"><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">子view HTML Code</div><pre mx-view="examples/hl">\n&#123;&#123;each list as item&#125;&#125;\n    &lt;label class="mr30"&gt;\n        &lt;input type="radio" class="radio" \n            name="&#123;&#123;=viewId&#125;&#125;_radio" \n            value="&#123;&#123;=item.value&#125;&#125;" \n            &#123;&#123;:info.age&#123;required:[true,\'必选\']&#125;&#125;&#125; /&gt;\n        &#123;&#123;=item.text&#125;&#125;\n    &lt;/label&gt;\n&#123;&#123;/each&#125;&#125;</pre></div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-right"><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">子view JS Code</div><pre mx-view="examples/hl">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\nlet Form = require(\'@../mx-form/index\');\nlet Validator = require(\'@../mx-form/validator\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@error-inner.html\',\n    mixins: [Form, Validator],\n    render() &#123;\n        let that = this;\n        that.updater.digest(&#123;\n            viewId: that.id,\n            list: [&#123;\n                text: \'10~20岁\',\n                value: 1\n            &#125;, &#123;\n                text: \'20~30岁\',\n                value: 2\n            &#125;, &#123;\n                text: \'30~40岁\',\n                value: 3\n            &#125;],\n            info: &#123;\n                age: 2\n            &#125;\n        &#125;);\n    &#125;\n&#125;);</pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-form/examples/error.html';
    throw msg;
} return $p; },
    mixins: [Form, Validator],
    render: function () {
        var that = this;
        that.updater.digest({
            viewId: that.id,
            name: 'test'
        });
    }
});

});