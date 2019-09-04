/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/examples/1",["magix","mx-form/index","mx-form/validator","examples/example","$","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Form,Validator,Base,$*/
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Form = require("mx-form/index");
var Validator = require("mx-form/validator");
var Base = require("examples/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-form_examples_1_","._zs_gallery_mx-form_examples_1_-table-wrapper {\n  margin-bottom: 20px;\n  border: 1px solid var(--color-border);\n}\n._zs_gallery_mx-form_examples_1_-fixed-head tr._zs_gallery_mx-form_examples_1_-batch-oper th {\n  height: 68px;\n  background-color: #fff;\n  border-bottom: 1px solid var(--color-border);\n}\n._zs_gallery_mx-form_examples_1_-fixed-head tr._zs_gallery_mx-form_examples_1_-batch-oper th ._zs_gallery_mx-form_examples_1_-batch-input {\n  position: relative;\n}\n._zs_gallery_mx-form_examples_1_-fixed-head tr._zs_gallery_mx-form_examples_1_-batch-oper th ._zs_gallery_mx-form_examples_1_-batch-input ._zs_gallery_mx-form_examples_1_-batch-input-text {\n  position: absolute;\n  top: 0;\n  left: -80px;\n  width: 70px;\n  height: 28px;\n  line-height: 28px;\n  text-align: right;\n}\n");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, batchDiscount = $$.batchDiscount, batRules = $$.batRules, list = $$.list, rules = $$.rules, text1 = $$.text1, text3 = $$.text3, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryb~:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxv mxa="_zs_galleryb~:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_galleryb~:_" class="clearfix mb20 lh22"><div class="fl color-9">以下示例：</div><div class="fl"><div>填写1-300的整数，小于50给警告提示</div><div>双向绑定可以用&传递完整对象&#123;&#123;:value&rules&#125;&#125;，rules：object</div></div></div><div mxv mxa="_zs_galleryb~:b" class="_zs_gallery_mx-form_examples_1_-table-wrapper"><table mxv mxa="_zs_galleryb~:c" class="table"><thead mxv mxa="_zs_galleryb~:d" class="_zs_gallery_mx-form_examples_1_-fixed-head"><tr mxs="_zs_galleryb~:a"><th>name</th><th width="200">出价</th><th width="200">link</th><th width="200">value</th></tr><tr mxv mxa="_zs_galleryb~:e" class="_zs_gallery_mx-form_examples_1_-batch-oper"><th mxs="_zs_galleryb~:b"></th><th mxv mxa="_zs_galleryb~:f" colspan="4"><div mxv mxa="_zs_galleryb~:g" class="_zs_gallery_mx-form_examples_1_-batch-input"><span mxs="_zs_galleryb~:c" class="_zs_gallery_mx-form_examples_1_-batch-input-text">批量出价</span><input mxe="' + $viewId + '_0" mxc="[';
    $line = 26;
    $art = ':batchDiscount&batRules';
    ;
    $p += '{p:\'batchDiscount\',f:\'' + ($expr = '<%@ batRules%>', $i($$ref, batRules)) + '\'}]" class="input input-small w80" id="';
    $line = 25;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_batch_input" value="';
    $line = 26;
    $art = ':batchDiscount&batRules';
    ;
    $p += ($expr = '<%=batchDiscount%>', $e(batchDiscount)) + '" mx-focusout="' + $viewId + 'batch()"/><a mxs="_zs_galleryb~:d" href="javascript:;" class="btn btn-small ml10" mx-click="' + $viewId + 'batch()">应用</a></div></th></tr></thead><tbody mxv>';
    $line = 34;
    $art = 'each list as item index';
    ;
    $expr = '<%for (var index = 0, $art_cmttcp$art_c = list.length; index < $art_cmttcp$art_c; index++) {    var item = list[index]%>';
    for (var index = 0, $art_cmttcp$art_c = list.length; index < $art_cmttcp$art_c; index++) {
        var item = list[index];
        $p += '<tr mxv><td>';
        $line = 36;
        $art = '=item.name';
        ;
        $p += ($expr = '<%=item.name%>', $e(item.name)) + '</td><td mxv><input mxe="' + $viewId + '_1_' + ($expr = '<%=index%>', $e(index)) + '" mxc="[';
        $line = 39;
        $art = ':item.discount&rules';
        ;
        $p += '{p:\'list.' + ($expr = '<%=index%>', $e(index)) + '.discount\',f:\'' + ($expr = '<%@ rules%>', $i($$ref, rules)) + '\'}]" class="input input-small w80" value="';
        $line = 39;
        $art = ':item.discount&rules';
        ;
        $p += ($expr = '<%=item.discount%>', $e(item.discount)) + '"/></td><td>';
        $line = 41;
        $art = '=item.link';
        ;
        $p += ($expr = '<%=item.link%>', $e(item.link)) + '</td><td>';
        $line = 42;
        $art = '=item.value';
        ;
        $p += ($expr = '<%=item.value%>', $e(item.value)) + '</td></tr>';
        $line = 44;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div></div><div mxa="_zs_galleryb~:h" class="clearfix"><div mxa="_zs_galleryb~:i" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mxa="_zs_galleryb~:j" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryb~:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 53;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryb~:k" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 55;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryb~:f" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 58;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;table class="table"&gt;\n    &lt;thead class="fixed-head"&gt;\n        &lt;tr&gt;\n            &lt;th&gt;name&lt;/th&gt;\n            &lt;th width="200"&gt;出价&lt;/th&gt;\n            &lt;th width="200"&gt;link&lt;/th&gt;\n            &lt;th width="200"&gt;value&lt;/th&gt;\n        &lt;/tr&gt;\n        &lt;tr class="batch-oper"&gt;\n            &lt;th&gt;&lt;/th&gt;\n            &lt;th colspan="4"&gt;\n                &lt;div class="batch-input"&gt;\n                    &lt;span class="batch-input-text"&gt;批量出价&lt;/span&gt;\n                    &lt;input type="text" class="input input-small w80"\n                        id="&#123;&#123;=viewId&#125;&#125;_batch_input" \n                        value="&#123;&#123;:batchDiscount&batRules&#125;&#125;"\n                        mx-focusout="batch()"/&gt;\n                    &lt;a href="javascript:;" class="btn btn-small ml10" mx-click="batch()"&gt;应用&lt;/a&gt;\n                &lt;/div&gt;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody&gt;\n        &#123;&#123;each list as item index&#125;&#125;\n            &lt;tr&gt;\n                &lt;td&gt;&#123;&#123;=item.name&#125;&#125;&lt;/td&gt;\n                &lt;td&gt;\n                    &lt;input type="text" class="input input-small w80"\n                        value="&#123;&#123;:item.discount&rules&#125;&#125;"/&gt;\n                &lt;/td&gt;\n                &lt;td&gt;&#123;&#123;=item.link&#125;&#125;&lt;/td&gt;\n                &lt;td&gt;&#123;&#123;=item.value&#125;&#125;&lt;/td&gt;\n            &lt;/tr&gt;\n        &#123;&#123;/each&#125;&#125;\n    &lt;/tbody&gt;\n&lt;/table&gt;</pre></div><div mxa="_zs_galleryb~:l" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryb~:g" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">CSS</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:3})" mx-view="mx-copy/index?copyNode=';
    $line = 98;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_3"><span mxa="_zs_galleryb~:m" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 100;
    $art = '!text3';
    ;
    $p += ($expr = '<%!text3%>', $n(text3)) + '</span><i mxs="_zs_galleryb~:f" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 103;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_3">\n.fixed-head &#123;\n    tr.batch-oper &#123;\n        th &#123;\n            height: 68px;\n            background-color: #fff;\n            border-bottom: 1px solid #e6e6e6;\n\n            .batch-input &#123;\n                position: relative;\n\n                .batch-input-text &#123;\n                    position: absolute;\n                    top: 0;\n                    left: -80px;\n                    width: 70px;\n                    height: 28px;\n                    line-height: 28px;\n                    text-align: right;\n                &#125;\n            &#125;\n        &#125;\n    &#125;\n&#125;</pre></div></div><div mxa="_zs_galleryb~:n" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-right"><div mxs="_zs_galleryb~:h" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 131;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryb~:o" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 133;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryb~:f" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 136;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Form = require(\'@../mx-form/index\');\nlet Validator = require(\'@../mx-form/validator\');\nlet $ = require(\'$\');\nMagix.applyStyle(\'@index.less\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [Form, Validator],\n    render() &#123;\n        let that = this;\n        let list = [];\n        for (var i = 0; i &lt; 3; i++) &#123;\n            list.push(&#123;\n                name: Magix.guid(\'name-\'),\n                link: Magix.guid(\'link-\'),\n                value: Magix.guid(\'value-\')\n            &#125;)\n        &#125;\n\n        let tip = \'请填写1-300之间的整数\';\n        that.updater.digest(&#123;\n            viewId: that.id,\n            list,\n            batRules: &#123;\n                posint: true,\n                min: [1, tip],\n                max: [300, tip]\n            &#125;,\n            rules: &#123;\n                warn: &#123;\n                    min: [50, \'低于50可能影响效果，建议提高\']\n                &#125;,\n                required: [true, tip],\n                posint: true,\n                min: [1, tip],\n                max: [300, tip]\n            &#125;\n        &#125;);\n    &#125;,\n    \'batch&lt;focusout,click&gt;\'(e) &#123;\n        let that = this;\n\n        // 校验批量的按钮是否符合规则\n        // 符合规则再往下走\n        let check = that.isValid(&#123;\n            element: \'#\' + that.id + \'_batch_input\'\n        &#125;)\n\n        if (!check) &#123;\n            return;\n        &#125;\n\n        let data = that.updater.get();\n        let remain = that.fromKeys(data, \'batchDiscount\');\n        let batchDiscount = remain.batchDiscount;\n        if (!batchDiscount) &#123;\n            return;\n        &#125;\n\n        let list = that.updater.get(\'list\');\n        list.forEach(item =&gt; &#123;\n            item.discount = batchDiscount;\n        &#125;)\n        that.updater.digest(&#123;\n            list\n        &#125;)\n\n        // 可能批量校验的规则和单个的不一致\n        // 此处调用isValid校验整个view\n        that.isValid();\n    &#125;\n&#125;);</pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-form/examples/1.html';
    throw msg;
} return $p; },
    mixins: [Form, Validator],
    render: function () {
        var that = this;
        var list = [];
        for (var i = 0; i < 3; i++) {
            list.push({
                name: Magix.guid('name-'),
                link: Magix.guid('link-'),
                value: Magix.guid('value-')
            });
        }
        var tip = '请填写1-300之间的整数';
        that.updater.digest({
            viewId: that.id,
            list: list,
            batRules: {
                posint: true,
                min: [1, tip],
                max: [300, tip]
            },
            rules: {
                warn: {
                    min: [50, '低于50可能影响效果，建议提高']
                },
                required: [true, tip],
                posint: true,
                min: [1, tip],
                max: [300, tip]
            }
        });
    },
    'batch<focusout,click>': function (e) {
        var that = this;
        // 校验批量的按钮是否符合规则
        // 符合规则再往下走
        var check = that.isValid({
            element: '#' + that.id + '_batch_input'
        });
        if (!check) {
            return;
        }
        var data = that.updater.get();
        var remain = that.fromKeys(data, 'batchDiscount');
        var batchDiscount = remain.batchDiscount;
        if (!batchDiscount) {
            return;
        }
        var list = that.updater.get('list');
        list.forEach(function (item) {
            item.discount = batchDiscount;
        });
        that.updater.digest({
            list: list
        });
        // 可能批量校验的规则和单个的不一致
        // 此处调用isValid校验整个view
        that.isValid();
    }
});

});