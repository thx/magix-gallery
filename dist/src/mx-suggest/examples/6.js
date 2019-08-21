/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-suggest/examples/6",["magix","examples/example","mx-form/index","mx-form/validator","$","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,Form,Validator,$*/
require("../index");
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
var Form = require("mx-form/index");
var Validator = require("mx-form/validator");
var $ = require("$");
var Vframe = Magix.Vframe;
module.exports = Base.extend({
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
} ; var $g = '', $_temp, $p = '', selected = $$.selected, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryej:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxv mxa="_zs_galleryej:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_galleryej:_" class="mb20 clearfix"><div class="fl color-9">以下示例：</div><div class="fl"><div class="color-brand">支持双向绑定</div><div>输入关键词动态获取提示数据；请求数据有延时，加loading</div><div>回车默认选中第一个</div></div></div><div mxa="_zs_galleryej:b" class="mb10"><span mxs="_zs_galleryej:a" class="color-9">当前选中：</span>';
    $line = 12;
    $art = '=selected';
    ;
    $p += ($expr = '<%=selected%>', $e(selected)) + '</div><div mxv mxa="_zs_galleryej:c" class="mb20"><div mxv="selected" mxe="' + $viewId + '_0" mxc="[';
    $line = 17;
    $art = ':selected{refresh:true}';
    ;
    $p += '{p:\'selected\',f:{refresh:true},a:\'selected\'}]" class="w200" id="';
    $line = 16;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_test" mx-show="' + $viewId + 'show()" mx-focusout="' + $viewId + 'hide()" mx-view="mx-suggest/index?selected=';
    $line = 17;
    $art = ':selected{refresh:true}';
    ;
    $p += ($expr = '<%@selected%>', $i($$ref, selected)) + '"></div></div></div><div mxa="_zs_galleryej:d" class="clearfix"><div mxa="_zs_galleryej:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mxs="_zs_galleryej:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 25;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryej:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 27;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryej:c" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 30;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-suggest class="w200"\n    id="&#123;&#123;=viewId&#125;&#125;_test"\n    selected="&#123;&#123;:selected&#123;refresh:true&#125;&#125;&#125;"\n    mx-show="show()"\n    mx-focusout="hide()"/&gt;\n                </pre></div><div mxa="_zs_galleryej:g" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-right"><div mxs="_zs_galleryej:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 40;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryej:h" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 42;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryej:c" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 45;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Form = require(\'@../../mx-form/index\');\nlet Validator = require(\'@../../mx-form/validator\');\nlet $ = require(\'$\');\nlet Vframe = Magix.Vframe;\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [Form, Validator],\n    render() &#123;\n        this.updater.digest(&#123;\n            selected: \'\'\n        &#125;);\n    &#125;,\n    /**\n     * 显示下拉框时\n     */\n    \'show&lt;show&gt;\'(e) &#123;\n        let that = this;\n\n        // 输入框输入关键词时触发show\n        // 当前输入框输入的值\n        let keyword = e.keyword;\n        \n        let instance = Vframe.get(this.id + \'_test\');\n        instance.invoke(\'showLoading\');\n\n        that[\'hide&lt;focusout&gt;\']();\n        that.delayTimer = setTimeout(that.wrapAsync(() =&gt; &#123;\n            let list = [1, 2, 3].map(v =&gt; &#123;\n                return &#123;\n                    text: \'测试\' + v,\n                    value: v\n                &#125;;\n            &#125;)\n            instance.invoke(\'update\', [list]);\n            instance.invoke(\'hideLoading\');\n        &#125;), 1000);\n    &#125;,\n    /**\n     * 关闭下拉框时，包括输入框失去焦点时\n     */\n    \'hide&lt;focusout&gt;\'(e)&#123;\n        if (this.delayTimer) &#123;\n            clearTimeout(this.delayTimer);\n        &#125;\n    &#125;\n&#125;);\n                </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-suggest/examples/6.html';
    throw msg;
} return $p; },
    mixins: [Form, Validator],
    render: function () {
        this.updater.digest({
            selected: ''
        });
    },
    /**
     * 显示下拉框时
     */
    'show<show>': function (e) {
        var that = this;
        // 输入框输入关键词时触发show
        // 当前输入框输入的值
        var keyword = e.keyword;
        var instance = Vframe.get(this.id + '_test');
        instance.invoke('showLoading');
        that['hide<focusout>']();
        that.delayTimer = setTimeout(that.wrapAsync(function () {
            var list = [1, 2, 3].map(function (v) {
                return {
                    text: '测试' + v,
                    value: v
                };
            });
            instance.invoke('update', [list]);
            instance.invoke('hideLoading');
        }), 1000);
    },
    /**
     * 关闭下拉框时，包括输入框失去焦点时
     */
    'hide<focusout>': function (e) {
        if (this.delayTimer) {
            clearTimeout(this.delayTimer);
        }
    }
});

});