/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/__test__/21",["magix","__test__/example","moment","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,Moment,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var Moment = require("moment");
var $ = require("$");
var Formater = 'YYYY-MM-DD';
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
} ; var $g = '', $_temp, $p = '', configs = $$.configs, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallery%:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_gallery%:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallery%:_" class="lh28"><span class="color-9">以下示例：</span><span>直接使用日历面板</span></div><div mxa="_zs_gallery%:b" class="lh28 mb20"><span mxs="_zs_gallery%:a" class="color-9">当前日期：</span><span>';
    $line = 9;
    $art = '=configs.selected';
    ;
    $p += ($expr = '<%=configs.selected%>', $e(configs.selected)) + '</span></div><div mxv="configs" mx-change="' + $viewId + 'change()" mx-view="mx-calendar/index?configs=';
    $line = 12;
    $art = '@configs';
    ;
    $p += ($expr = '<%@configs%>', $i($$ref, configs)) + '"></div></div><div mxa="_zs_gallery%:c" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallery%:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 17;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallery%:d" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 19;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallery%:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 22;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;div class="lh28 mb20"&gt;\n    &lt;span class="color-9"&gt;当前日期：&lt;/span&gt;\n    &lt;span&gt;&#123;&#123;=configs.selected&#125;&#125;&lt;/span&gt;\n&lt;/div&gt;\n&lt;mx-calendar\n    configs="&#123;&#123;@configs&#125;&#125;"\n    mx-change="change()"/&gt;</pre></div><div mxa="_zs_gallery%:e" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallery%:d" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 33;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallery%:f" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 35;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallery%:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 38;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Moment = require(\'moment\');\nlet $ = require(\'$\');\nlet Formater = \'YYYY-MM-DD\';\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            configs: &#123;\n                min: Moment().subtract(10, \'days\').format(Formater),\n                max: Moment().add(10, \'days\').format(Formater),\n                selected: Moment().add(2, \'days\').format(Formater)\n            &#125;\n        &#125;);\n    &#125;,\n    \'change&lt;change&gt;\'(e)&#123;\n        // e.date\n        // e.time\n        let configs = this.updater.get(\'configs\');\n        configs.selected = e.date;\n        this.updater.digest(&#123;\n            configs\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/__test__/21.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            configs: {
                min: Moment().subtract(10, 'days').format(Formater),
                max: Moment().add(10, 'days').format(Formater),
                selected: Moment().add(2, 'days').format(Formater)
            }
        });
    },
    'change<change>': function (e) {
        // e.date
        // e.time
        var configs = this.updater.get('configs');
        configs.selected = e.date;
        this.updater.digest({
            configs: configs
        });
    }
});

});