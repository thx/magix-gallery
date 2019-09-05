/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/examples/7",["magix","examples/example","$","../multiple","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../multiple");
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
var $ = require("$");
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
} ; var $g = '', $_temp, $p = '', selected = $$.selected, first = $$.first, second = $$.second, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerybf:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxa="_zs_gallerybf:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_gallerybf:_" class="mb20 clearfix lh22"><div class="fl color-9">以下示例：</div><div class="fl"><div>带分组的只能用mx-dropdown.item节点实现</div><div>不需要全选功能，配置need-all="false"</div><div>组上面需要全选功能在mx-dropdown.item上配置all="true"</div><div>展开选择浮层时会修正浮层到可视范围之内</div></div></div><div mxa="_zs_gallerybf:b" class="clearfix"><div class="w200 fl" mx-view="mx-dropdown/multiple?needAll=false&searchbox=true&name=%E6%95%B0%E5%AD%97&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%95%B0%E5%AD%97&selected=';
    $line = 18;
    $art = '=selected';
    ;
    $p += ($expr = '<%!$eu(selected)%>', $eu(selected)) + '"><i mxs="_zs_gallerybf:a" group="true" all="true" class="none">第一组</i>';
    $line = 20;
    $art = 'each first as i';
    ;
    $expr = '<%for (var $art_irilwkqhl$art_i = 0, $art_cvuxwlqojika$art_c = first.length; $art_irilwkqhl$art_i < $art_cvuxwlqojika$art_c; $art_irilwkqhl$art_i++) {    var i = first[$art_irilwkqhl$art_i]%>';
    for (var $art_irilwkqhl$art_i = 0, $art_cvuxwlqojika$art_c = first.length; $art_irilwkqhl$art_i < $art_cvuxwlqojika$art_c; $art_irilwkqhl$art_i++) {
        var i = first[$art_irilwkqhl$art_i];
        $p += '<i value="';
        $line = 21;
        $art = '=i';
        ;
        $p += ($expr = '<%=i%>', $e(i)) + '" class="none">';
        $line = 21;
        $art = '=i';
        ;
        $p += ($expr = '<%=i%>', $e(i)) + '</i>';
        $line = 22;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '<i mxs="_zs_gallerybf:b" group="true" all="true" class="none">第二组</i>';
    $line = 24;
    $art = 'each second as i';
    ;
    $expr = '<%for (var $art_imugvppjeyai$art_i = 0, $art_cdypnwm$art_c = second.length; $art_imugvppjeyai$art_i < $art_cdypnwm$art_c; $art_imugvppjeyai$art_i++) {    var i = second[$art_imugvppjeyai$art_i]%>';
    for (var $art_imugvppjeyai$art_i = 0, $art_cdypnwm$art_c = second.length; $art_imugvppjeyai$art_i < $art_cdypnwm$art_c; $art_imugvppjeyai$art_i++) {
        var i = second[$art_imugvppjeyai$art_i];
        $p += '<i value="';
        $line = 25;
        $art = '=i';
        ;
        $p += ($expr = '<%=i%>', $e(i)) + '" class="none">';
        $line = 25;
        $art = '=i';
        ;
        $p += ($expr = '<%=i%>', $e(i)) + '</i>';
        $line = 26;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><a mxs="_zs_gallerybf:c" href="javascript:;" class="btn btn-brand ml20 fl" mx-click="' + $viewId + 'changeData()">修改数据</a></div></div><div mxa="_zs_gallerybf:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallerybf:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 33;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerybf:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 35;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerybf:e" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 38;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;div class="clearfix"&gt;\n    &lt;mx-dropdown.multiple class="w200 mr20 fl"\n        need-all="false"\n        searchbox="true"\n        name="数字"\n        empty-text="请选择数字"\n        selected="&#123;&#123;=selected&#125;&#125;"&gt;\n        &lt;mx-dropdown.item group="true" all="true"&gt;\n            第一组\n        &lt;/mx-dropdown.item&gt;\n        &#123;&#123;each first as i&#125;&#125;\n        &lt;mx-dropdown.item value="&#123;&#123;=i&#125;&#125;"&gt;&#123;&#123;=i&#125;&#125;&lt;/mx-dropdown.item&gt;\n        &#123;&#123;/each&#125;&#125;\n        &lt;mx-dropdown.item group="true" all="true"&gt;\n            第二组\n        &lt;/mx-dropdown.item&gt;\n        &#123;&#123;each second as i&#125;&#125;\n        &lt;mx-dropdown.item value="&#123;&#123;=i&#125;&#125;"&gt;&#123;&#123;=i&#125;&#125;&lt;/mx-dropdown.item&gt;\n        &#123;&#123;/each&#125;&#125;\n    &lt;/mx-dropdown.multiple&gt;\n\n    &lt;a class="btn btn-brand fl" href="javascript:;" \n        mx-click="changeData()"&gt;修改数据&lt;/a&gt;\n&lt;/div&gt;</pre></div><div mxa="_zs_gallerybf:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallerybf:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 66;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerybf:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 68;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerybf:e" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 71;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let that = this;\n\n        let first = [],\n            second = [];\n        for (var i = 0; i &lt; 20; i++) &#123;\n            first.push(\'1\' + i);\n            second.push(\'2\' + i);\n        &#125;\n        that.updater.digest(&#123;\n            first,\n            second,\n            selected: [11, 12]\n        &#125;);\n    &#125;,\n    \'changeData&lt;click&gt;\' (e) &#123;\n        let first = [],\n            second = [];\n        for (var i = 0; i &lt; 20; i++) &#123;\n            first.push(\'3\' + i);\n            second.push(\'4\' + i);\n        &#125;\n\n        this.updater.digest(&#123;\n            first,\n            second,\n            selected: [31]\n        &#125;);\n    &#125;\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dropdown/examples/7.html';
    throw msg;
} return $p; },
    render: function () {
        var that = this;
        var first = [], second = [];
        for (var i = 0; i < 20; i++) {
            first.push('1' + i);
            second.push('2' + i);
        }
        that.updater.digest({
            first: first,
            second: second,
            selected: [11, 12]
        });
    },
    'changeData<click>': function (e) {
        var first = [], second = [];
        for (var i = 0; i < 20; i++) {
            first.push('3' + i);
            second.push('4' + i);
        }
        this.updater.digest({
            first: first,
            second: second,
            selected: [31]
        });
    }
});

});