/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-taginput/examples/7",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryfc:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxa="_zs_galleryfc:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_galleryfc:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>动态刷新列表已选中的传入完整的items:array[object]</div><div>用户输入关键词，动态更新提示数据</div><div>动态刷的列表只选择一个</div><div>请求数据有延时，可加loading</div></div></div><div mxa="_zs_galleryfc:b" class="mb20"><div class="w280" id="';
    $line = 22;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_taginput" mx-show="' + $viewId + 'update()" mx-view="mx-taginput/index?dynamicList=true&items=';
    $line = 15;
    $art = '@[{\n                    text: \'one\',\n                    value: 1\n                },{\n                    text: \'two\',\n                    value: 2\n                }]';
    ;
    $p += ($expr = '<%@[{            text: \'one\',            value: 1        }, {            text: \'two\',            value: 2        }]%>', $i($$ref, [{ text: 'one', value: 1 }, { text: 'two', value: 2 }])) + '&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E9%9C%80%E8%A6%81%E7%9A%84%E5%80%BC"></div></div></div><div mxa="_zs_galleryfc:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryfc:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 29;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryfc:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 31;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryfc:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 34;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-taginput class="w280"\n    dynamic-list="true"\n    items="&#123;&#123;@[&#123;\n        text: \'one\',\n        value: 1\n    &#125;,&#123;\n        text: \'two\',\n        value: 2\n    &#125;]&#125;&#125;"\n    id="&#123;&#123;=viewId&#125;&#125;_taginput"\n    placeholder="请选择需要的值"\n    mx-show="update()"/&gt;\n        </pre></div><div mxa="_zs_galleryfc:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryfc:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 51;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryfc:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 53;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryfc:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 56;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\nlet Vframe = Magix.Vframe;\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    \'update&lt;show&gt;\'(e)&#123;\n        // e.keyword 用户输入的关键词\n        // 用户无输入的情况下不响应\n        let keyword = e.keyword;\n        if(!keyword)&#123;\n            return;\n        &#125;\n\n        let instance = Vframe.get(this.id + \'_taginput\');\n\n        // 请求接口有延时，加loading动画\n        instance.invoke(\'showLoading\');\n        setTimeout(() =&gt; &#123;\n            let suggest = [1, 2, 3].map(v =&gt; &#123;\n                return &#123;\n                    text: Magix.guid(\'dynamic_\'),\n                    value: Magix.guid(\'dynamic_\')\n                &#125;;\n            &#125;)\n\n            // 更新下拉框提示数据\n            instance.invoke(\'update\', [suggest]);\n\n            // 结束loading\n            instance.invoke(\'hideLoading\');\n        &#125;, 1500);\n    &#125;\n&#125;);\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-taginput/examples/7.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    },
    'update<show>': function (e) {
        var keyword = e.keyword;
        if (!keyword) {
            return;
        }
        var instance = Vframe.get(this.id + '_taginput');
        instance.invoke('showLoading');
        setTimeout(function () {
            var suggest = [1, 2, 3].map(function (v) {
                return {
                    text: Magix.guid('dynamic_'),
                    value: Magix.guid('dynamic_')
                };
            });
            instance.invoke('update', [suggest]);
            instance.invoke('hideLoading');
        }, 1500);
    }
});

});