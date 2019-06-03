/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-suggest/__test__/8",["magix","__test__/example","mx-form/index","mx-form/validator","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', selected = $$.selected, viewId = $$.viewId, item = $$.item, msg = $$.msg, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerye~:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_gallerye~:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerye~:f" class="mb20 clearfix"><div class="fl color-9">以下示例：</div><div class="fl"><div>动态更新list，初始化list为空，需要复现历史选中值，传入item = {text: \'\', value: \'\'} 完整对象</div><div>回车默认不选中第一个，直接搜索当前关键词</div></div></div><div mxa="_zs_gallerye~:j" class="mb10"><span mxs="_zs_gallerye~:a" class="color-9">当前选中：</span>';
    $line = 11;
    $art = '=selected';
    ;
    $p += ($expr = '<%=selected%>', $e(selected)) + '</div><div mxv mxa="_zs_gallerye~:d" class="mb20"><div mxv="selected,item" mxe="' + $viewId + '_0" mxc="[';
    $line = 16;
    $art = ':selected{required:true,refresh:true}';
    ;
    $p += '{p:\'selected\',f:{required:true,refresh:true},a:\'selected\'},';
    $line = 17;
    $art = ':item';
    ;
    $p += '{p:\'item\',a:\'item\'}]" id="';
    $line = 15;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_test" mx-show="' + $viewId + 'update()" mx-view="mx-suggest/index?selected=';
    $line = 16;
    $art = ':selected{required:true,refresh:true}';
    ;
    $p += ($expr = '<%@selected%>', $i($$ref, selected)) + '&item=';
    $line = 17;
    $art = ':item';
    ;
    $p += ($expr = '<%@item%>', $i($$ref, item)) + '&dynamicEnter=true"></div><a mxs="_zs_gallerye~:b" href="javascript:;" class="btn ml10" mx-click="' + $viewId + 'check()">校验选择项</a>';
    $line = 23;
    $art = 'if msg';
    ;
    $expr = '<%if (msg) {%>';
    if (msg) {
        ;
        $p += '<span mxa="_zs_gallerye~:k" class="ml10">';
        $line = 24;
        $art = '!msg';
        ;
        $p += ($expr = '<%!msg%>', $n(msg)) + '</span>';
        $line = 25;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div><div mxa="_zs_gallerye~:l" class="clearfix"><div mxa="_zs_gallerye~:g" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half"><div mxs="_zs_gallerye~:c" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 31;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerye~:h" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 33;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerye~:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 36;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-suggest \n    id="&#123;&#123;=viewId&#125;&#125;_test"\n    selected="&#123;&#123;:selected&#123;required:true&#125;&#125;&#125;"\n    item="&#123;&#123;:item&#125;&#125;"\n    dynamic-enter="true"\n    mx-show="update()"/&gt;\n            </pre></div><div mxa="_zs_gallerye~:i" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-right"><div mxs="_zs_gallerye~:e" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 47;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerye~:m" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 49;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerye~:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 52;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Form = require(\'@../../mx-form/index\');\nlet Validator = require(\'@../../mx-form/validator\');\nlet $ = require(\'$\');\nlet Vframe = Magix.Vframe;\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [Form, Validator],\n    render() &#123;\n        let item = &#123;\n            text: \'测试1\',\n            value: 1\n        &#125;\n        this.updater.digest(&#123;\n            item,\n            selected: item.value\n        &#125;);\n    &#125;,\n    \'update&lt;show&gt;\'(e) &#123;\n        // 当前输入框输入的值\n        let keyword = e.keyword;\n\n        let instance = Vframe.get(this.id + \'_test\');\n        instance.invoke(\'showLoading\');\n        setTimeout(() =&gt; &#123;\n            let list = [1, 2, 3].map(v =&gt; &#123;\n                return &#123;\n                    text: \'测试\' + v,\n                    value: v\n                &#125;;\n            &#125;)\n            instance.invoke(\'update\', [list]);\n            instance.invoke(\'hideLoading\');\n        &#125;, 1000);\n    &#125;,\n    \'check&lt;click&gt;\'(e)&#123;\n        let valid = this.isValid();\n        this.updater.digest(&#123;\n            msg: valid ? \'&lt;span class="color-green"&gt;校验通过&lt;/span&gt;\' : \'&lt;span class="color-red"&gt;校验失败&lt;/span&gt;\'\n        &#125;)\n    &#125;\n&#125;);\n            </pre></div></div></div>';
}
catch (ex) {
    var msg_1 = 'render view error:' + (ex.message || ex);
    if ($art)
        msg_1 += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg_1 += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg_1 += $expr + '\r\n\tat file:mx-suggest/__test__/8.html';
    throw msg_1;
} return $p; },
    mixins: [Form, Validator],
    render: function () {
        var item = {
            text: 'test',
            value: 'test'
        };
        this.updater.digest({
            item: item,
            selected: item.value
        });
    },
    'update<show>': function (e) {
        var that = this;
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