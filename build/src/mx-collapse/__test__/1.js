/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-collapse/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', list = $$.list, expands = $$.expands, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryad:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_galleryad:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryad:_" class="mb20 clearfix"><div class="fl color-9">以下示例：</div><div class="fl"><div>默认展开非禁止操作的第一个 + 只展示一个 + 每次只打开一个tab</div><div>完整事件处理示例</div></div></div><div mxa="_zs_galleryad:b" class="mb20 clearfix"><div mxs="_zs_galleryad:a" class="fl color-9">模块展开收起状态：</div><div mxa="_zs_galleryad:c" class="fl">';
    $line = 13;
    $art = 'each list as item index';
    ;
    $expr = '<%for (var index = 0, $art_cfyxevopbc$art_c = list.length; index < $art_cfyxevopbc$art_c; index++) {    var item = list[index]%>';
    for (var index = 0, $art_cfyxevopbc$art_c = list.length; index < $art_cfyxevopbc$art_c; index++) {
        var item = list[index];
        $p += '<div>第';
        $line = 14;
        $art = '=index';
        ;
        $p += ($expr = '<%=index%>', $e(index)) + '个模块：';
        $line = 14;
        $art = 'if expands[index]';
        ;
        $expr = '<%if (expands[index]) {%>';
        if (expands[index]) {
            ;
            $p += ' 展开 ';
            $line = 14;
            $art = 'else';
            ;
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $p += ' 收起 ';
            $line = 14;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 15;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div><div mxv="list" class="mb20" mx-change="' + $viewId + 'change()" mx-view="mx-collapse/index?list=';
    $line = 19;
    $art = '@list';
    ;
    $p += ($expr = '<%@list%>', $i($$ref, list)) + '"></div></div><div mxa="_zs_galleryad:d" class="clearfix"><div mxa="_zs_galleryad:e" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half"><div mxs="_zs_galleryad:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 25;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryad:f" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 27;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryad:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 30;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;div class="mb20 clearfix"&gt;\n    &lt;div class="fl color-9"&gt;模块展开收起状态：&lt;/div&gt;\n    &lt;div class="fl"&gt;\n        &#123;&#123;each list as item index&#125;&#125;\n        &lt;div&gt;第&#123;&#123;=index&#125;&#125;个模块：&#123;&#123;if expands[index]&#125;&#125; 展开 &#123;&#123;else&#125;&#125; 收起 &#123;&#123;/if&#125;&#125;&lt;/div&gt;\n        &#123;&#123;/each&#125;&#125;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;mx-collapse class="mb20"\n    list="&#123;&#123;@list&#125;&#125;"\n    mx-change="change()"/&gt;\n            </pre></div><div mxa="_zs_galleryad:g" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-right"><div mxs="_zs_galleryad:d" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 46;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryad:h" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 48;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryad:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 51;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            list: [&#123;\n                title: \'笑一笑，十年少\',\n                content: \'1、岁月磨平了你的棱角，其实就是你被生活盘了。&lt;br/&gt;2、你不是真的胖，只是女娲捏土造你的时候土用多了。&lt;br/&gt;3、当员工好累埃平时做牛做马，到年底了还要表演节目给领导逗乐子。\'\n            &#125;, &#123;\n                title: \'是幽默的深刻，还是深刻的幽默\',\n                content: \'1、人生，总有不得不走的回头路：比如出门上班走到楼下才发现没带手机。&lt;br/&gt;2、为什么经常看见妻子吊打小三，却很少看见丈夫痛殴奸夫？因为小三一般比妻子瘦弱，而奸夫一般比较丈夫健硕。&lt;br/&gt;3、怕开宝马的同学认出没戴头盔骑摩托车的你，真的想多了。人家工作、购物、居注娱乐去的地方，走的是和你一条线吗？\'\n            &#125;, &#123;\n                title: \'冷段一组，凉意浓\',\n                content: \'1、过夜的叫酒店，喝酒的却叫夜店。&lt;br/&gt;2、打呼噜的人能在自己的呼噜声中睡着也太不公平了。&lt;br/&gt;3、友谊其实很简单，就是在自己吃到好吃的食物的时候想着对方，然后拍下来发给他。\'\n            &#125;],\n            expands: []\n        &#125;);\n    &#125;,\n    \'change&lt;change&gt;\'(event)&#123;\n        this.updater.digest(&#123;\n            expands: event.expands\n        &#125;)\n    &#125;\n&#125;);\n            </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-collapse/__test__/1.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            list: [{
                    title: '笑一笑，十年少',
                    content: '1、岁月磨平了你的棱角，其实就是你被生活盘了。<br/>2、你不是真的胖，只是女娲捏土造你的时候土用多了。<br/>3、当员工好累埃平时做牛做马，到年底了还要表演节目给领导逗乐子。'
                }, {
                    title: '是幽默的深刻，还是深刻的幽默',
                    content: '1、人生，总有不得不走的回头路：比如出门上班走到楼下才发现没带手机。<br/>2、为什么经常看见妻子吊打小三，却很少看见丈夫痛殴奸夫？因为小三一般比妻子瘦弱，而奸夫一般比较丈夫健硕。<br/>3、怕开宝马的同学认出没戴头盔骑摩托车的你，真的想多了。人家工作、购物、居注娱乐去的地方，走的是和你一条线吗？'
                }, {
                    title: '冷段一组，凉意浓',
                    content: '1、过夜的叫酒店，喝酒的却叫夜店。<br/>2、打呼噜的人能在自己的呼噜声中睡着也太不公平了。<br/>3、友谊其实很简单，就是在自己吃到好吃的食物的时候想着对方，然后拍下来发给他。'
                }],
            expands: []
        });
    },
    'change<change>': function (event) {
        this.updater.digest({
            expands: event.expands
        });
    }
});

});