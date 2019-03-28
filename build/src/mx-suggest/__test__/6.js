/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-suggest/__test__/6",["magix","__test__/example","mx-form/index","mx-form/validator","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,Form,Validator,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
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
} ; var $g = '', $_temp, $p = '', selected = $$.selected, viewId = $$.viewId, msg = $$.msg, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryd@:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_galleryd@:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryd@:_" class="mb20 clearfix"><div class="fl color-9">以下示例：</div><div class="fl"><span class="color-brand">支持双向绑定</span>；动态更新提示数据；请求数据有延时，加loading</div></div><div mxa="_zs_galleryd@:b" class="mb10"><span mxs="_zs_galleryd@:a" class="color-9">当前选中：</span>';
    $line = 11;
    $art = '=selected';
    ;
    $p += ($expr = '<%=selected%>', $e(selected)) + '</div><div mxv mxa="_zs_galleryd@:c" class="mb20"><div mxv="selected" mxe="' + $viewId + '_0" mxc="[';
    $line = 16;
    $art = ':selected{required:true,refresh:true}';
    ;
    $p += '{p:\'selected\',f:{required:true,refresh:true},a:\'selected\'}]" id="';
    $line = 15;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_test" mx-show="' + $viewId + 'update()" mx-view="mx-suggest/index?selected=';
    $line = 16;
    $art = ':selected{required:true,refresh:true}';
    ;
    $p += ($expr = '<%@selected%>', $i($$ref, selected)) + '"></div><a mxs="_zs_galleryd@:b" href="javascript:;" class="btn ml10" mx-click="' + $viewId + 'check()">校验选择项</a>';
    $line = 21;
    $art = 'if msg';
    ;
    $expr = '<%if (msg) {%>';
    if (msg) {
        ;
        $p += '<span mxa="_zs_galleryd@:d" class="ml10">';
        $line = 22;
        $art = '!msg';
        ;
        $p += ($expr = '<%!msg%>', $n(msg)) + '</span>';
        $line = 23;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div><div mxa="_zs_galleryd@:e" class="clearfix"><div mxa="_zs_galleryd@:f" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half"><div mxs="_zs_galleryd@:c" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 29;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryd@:g" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 31;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryd@:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 34;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-suggest \n    id="&#123;&#123;=viewId&#125;&#125;_test"\n    selected="&#123;&#123;:selected&#123;required:true&#125;&#125;&#125;"\n    mx-show="update()"/&gt;\n                </pre></div><div mxa="_zs_galleryd@:h" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-right"><div mxs="_zs_galleryd@:e" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 43;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryd@:i" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 45;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryd@:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 48;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Form = require(\'@../../mx-form/index\');\nlet Validator = require(\'@../../mx-form/validator\');\nlet $ = require(\'$\');\nlet Vframe = Magix.Vframe;\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [Form, Validator],\n    render() &#123;\n        this.updater.digest(&#123;\n            selected: \'\'\n        &#125;);\n    &#125;,\n    \'update&lt;show&gt;\'(e) &#123;\n        // 当前输入框输入的值\n        let keyword = e.keyword;\n\n        let instance = Vframe.get(this.id + \'_test\');\n        instance.invoke(\'showLoading\');\n        setTimeout(() =&gt; &#123;\n            let list = [1, 2, 3].map(v =&gt; &#123;\n                return &#123;\n                    text: \'测试\' + v,\n                    value: v\n                &#125;;\n            &#125;)\n            instance.invoke(\'update\', [list]);\n            instance.invoke(\'hideLoading\');\n        &#125;, 1000);\n    &#125;,\n    \'check&lt;click&gt;\'(e)&#123;\n        let valid = this.isValid();\n        this.updater.digest(&#123;\n            msg: valid ? \'&lt;span class="color-green"&gt;校验通过&lt;/span&gt;\' : \'&lt;span class="color-red"&gt;校验失败&lt;/span&gt;\'\n        &#125;)\n    &#125;\n&#125;);\n                </pre></div></div></div>';
}
catch (ex) {
    var msg_1 = 'render view error:' + (ex.message || ex);
    if ($art)
        msg_1 += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg_1 += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg_1 += $expr + '\r\n\tat file:mx-suggest/__test__/6.html';
    throw msg_1;
} return $p; },
    mixins: [Form, Validator],
    render: function () {
        this.updater.digest({
            selected: ''
        });
    },
    'update<show>': function (e) {
        // 当前输入框输入的值
        var keyword = e.keyword;
        var instance = Vframe.get(this.id + '_test');
        instance.invoke('showLoading');
        setTimeout(function () {
            var list = [1, 2, 3].map(function (v) {
                return {
                    text: '测试' + v,
                    value: v
                };
            });
            instance.invoke('update', [list]);
            instance.invoke('hideLoading');
        }, 1000);
    },
    'check<click>': function (e) {
        var valid = this.isValid();
        this.updater.digest({
            msg: valid ? '<span class="color-green">校验通过</span>' : '<span class="color-red">校验失败</span>'
        });
    }
});

});