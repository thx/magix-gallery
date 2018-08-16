/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/__test__/7",["magix","__test__/example","$","../multiple","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../multiple");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, selected = $$.selected, first = $$.first, second = $$.second, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallery::_" class="_zs_gallery___test___base_-example"><div mxa="_zs_gallery::a" class="_zs_gallery___test___base_-eg-content"><div mxs="_zs_gallery::_" class="color-9 mb20 clearfix"><div class="fl"><i class="mc-iconfont displacement-2 mr5">&#xe6ac;</i></div><div class="fl lh22"><div>带分组的只能用mx-dropdown.item节点实现</div><div>不需要全选功能，配置need-all="false"</div><div>组上面需要全选功能在mx-dropdown.item上配置all="true"</div></div></div><div mxa="_zs_gallery::b" class="clearfix"><div class="w200 fl" mx-view="mx-dropdown/multiple?needAll=false&searchbox=true&name=%E6%95%B0%E5%AD%97&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%95%B0%E5%AD%97&selected=';
    $line = 19;
    $art = '=selected';
    ;
    $p += '' + ($expr = '<%!$eu(selected)%>', $eu(selected)) + '"><i mxs="_zs_gallery::a" group="true" all="true" class="none">第一组</i>';
    $line = 21;
    $art = 'each first as i';
    ;
    $p += '';
    $expr = '<%for(var $art_iifhacw$art_i=0;$art_iifhacw$art_i<first.length;$art_iifhacw$art_i++){var i=first[$art_iifhacw$art_i]%>';
    for (var $art_iifhacw$art_i = 0; $art_iifhacw$art_i < first.length; $art_iifhacw$art_i++) {
        var i = first[$art_iifhacw$art_i];
        $p += '<i value="';
        $line = 22;
        $art = '=i';
        ;
        $p += '' + ($expr = '<%=i%>', $e(i)) + '" class="none">';
        $line = 22;
        $art = '=i';
        ;
        $p += '' + ($expr = '<%=i%>', $e(i)) + '</i>';
        $line = 23;
        $art = '/each';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '<i mxs="_zs_gallery::b" group="true" all="true" class="none">第二组</i>';
    $line = 25;
    $art = 'each second as i';
    ;
    $p += '';
    $expr = '<%for(var $art_ifaazqouquad$art_i=0;$art_ifaazqouquad$art_i<second.length;$art_ifaazqouquad$art_i++){var i=second[$art_ifaazqouquad$art_i]%>';
    for (var $art_ifaazqouquad$art_i = 0; $art_ifaazqouquad$art_i < second.length; $art_ifaazqouquad$art_i++) {
        var i = second[$art_ifaazqouquad$art_i];
        $p += '<i value="';
        $line = 26;
        $art = '=i';
        ;
        $p += '' + ($expr = '<%=i%>', $e(i)) + '" class="none">';
        $line = 26;
        $art = '=i';
        ;
        $p += '' + ($expr = '<%=i%>', $e(i)) + '</i>';
        $line = 27;
        $art = '/each';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</div><a mxs="_zs_gallery::c" href="javascript:;" class="btn btn-brand ml20 fl" mx-click="' + $viewId + 'changeData()">修改数据</a></div></div><div mxa="_zs_gallery::c" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallery::d" class="_zs_gallery___test___base_-eg-title">HTML Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 34;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallery::d" class="_zs_gallery___test___base_-desc-tip">';
    $line = 36;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallery::e" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 39;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;div class="clearfix"&gt;\n    &lt;mx-dropdown.multiple class="w200 mr20 fl"\n        need-all="false"\n        searchbox="true"\n        name="数字"\n        empty-text="请选择数字"\n        selected="&#123;&#123;=selected&#125;&#125;"&gt;\n        &lt;mx-dropdown.item group="true" all="true"&gt;\n            第一组\n        &lt;/mx-dropdown.item&gt;\n        &#123;&#123;each first as i&#125;&#125;\n        &lt;mx-dropdown.item value="&#123;&#123;=i&#125;&#125;"&gt;&#123;&#123;=i&#125;&#125;&lt;/mx-dropdown.item&gt;\n        &#123;&#123;/each&#125;&#125;\n        &lt;mx-dropdown.item group="true" all="true"&gt;\n            第二组\n        &lt;/mx-dropdown.item&gt;\n        &#123;&#123;each second as i&#125;&#125;\n        &lt;mx-dropdown.item value="&#123;&#123;=i&#125;&#125;"&gt;&#123;&#123;=i&#125;&#125;&lt;/mx-dropdown.item&gt;\n        &#123;&#123;/each&#125;&#125;\n    &lt;/mx-dropdown.multiple&gt;\n\n    &lt;a class="btn btn-brand fl" href="javascript:;" \n        mx-click="changeData()"&gt;修改数据&lt;/a&gt;\n&lt;/div&gt;</pre></div><div mxa="_zs_gallery::e" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallery::f" class="_zs_gallery___test___base_-eg-title">JS Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 67;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallery::f" class="_zs_gallery___test___base_-desc-tip">';
    $line = 69;
    $art = '!text2';
    ;
    $p += '' + ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallery::e" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 72;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let that = this;\n\n        let first = [],\n            second = [];\n        for (var i = 0; i &lt; 20; i++) &#123;\n            first.push(\'1\' + i);\n            second.push(\'2\' + i);\n        &#125;\n        that.updater.digest(&#123;\n            first,\n            second,\n            selected: [11, 12]\n        &#125;);\n    &#125;,\n    \'changeData&lt;click&gt;\' (e) &#123;\n        let first = [],\n            second = [];\n        for (var i = 0; i &lt; 20; i++) &#123;\n            first.push(\'3\' + i);\n            second.push(\'4\' + i);\n        &#125;\n\n        this.updater.digest(&#123;\n            first,\n            second,\n            selected: [31]\n        &#125;);\n    &#125;\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dropdown/__test__/7.html';
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