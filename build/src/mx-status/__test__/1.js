/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-status/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, cur = $$.cur, list = $$.list, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerybY:_" class="_zs_gallery___test___base_-example"><div mxv mxa="_zs_gallerybY:a" class="_zs_gallery___test___base_-eg-content"><div mxa="_zs_gallerybY:b" class="mb20"><span mxs="_zs_gallerybY:_"><span class="color-9">以下示例：</span>当前选中项排在第一个</span><span mxa="_zs_gallerybY:c" class="ml40"><span mxs="_zs_gallerybY:a" class="color-9">当前选中项：</span>';
    $line = 10;
    $art = '=cur.text';
    ;
    $p += '' + ($expr = '<%=cur.text%>', $e(cur.text)) + '（';
    $line = 10;
    $art = '=cur.value';
    ;
    $p += '' + ($expr = '<%=cur.value%>', $e(cur.value)) + '）</span></div><div mxv="list" mx-change="' + $viewId + 'change()" mx-view="mx-status/index?list=';
    $line = 14;
    $art = '@list';
    ;
    $p += '' + ($expr = '<%@list%>', $i(list)) + '&selected=';
    $line = 15;
    $art = '=cur.value';
    ;
    $p += '' + ($expr = '<%!$eu(cur.value)%>', $eu(cur.value)) + '"></div></div><div mxa="_zs_gallerybY:d" class="clearfix"><div mxa="_zs_gallerybY:e" class="_zs_gallery___test___base_-eg-desc _zs_gallery___test___base_-third1"><div mxs="_zs_gallerybY:b" class="_zs_gallery___test___base_-eg-title">HTML Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 21;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerybY:f" class="_zs_gallery___test___base_-desc-tip">';
    $line = 23;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerybY:c" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 26;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-status \n    list="&#123;&#123;@list&#125;&#125;" \n    selected="&#123;&#123;=cur.value&#125;&#125;"\n    mx-change="change()"/&gt;</pre></div><div mxa="_zs_gallerybY:g" class="_zs_gallery___test___base_-eg-desc _zs_gallery___test___base_-third2 _zs_gallery___test___base_-half-right"><div mxs="_zs_gallerybY:d" class="_zs_gallery___test___base_-eg-title">JS Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 34;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerybY:h" class="_zs_gallery___test___base_-desc-tip">';
    $line = 36;
    $art = '!text2';
    ;
    $p += '' + ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerybY:c" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 39;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let list = [&#123;\n            value: 0,\n            text: \'暂停投放\',\n            icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe67f;&lt;/i&gt;\',\n            color: \'#a40100\'\n        &#125;, &#123;\n            value: 1,\n            text: \'正在投放\',\n            icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe683;&lt;/i&gt;\',\n            color: \'#51a300\'\n        &#125;, &#123;\n            value: 9,\n            text: \'结束投放\',\n            icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe682;&lt;/i&gt;\',\n            color: \'#999999\'\n        &#125;]\n\n        this.updater.digest(&#123;\n            list,\n            cur: list[1]\n        &#125;);\n    &#125;,\n    \'change&lt;change&gt;\'(e)&#123;\n        // e.status 完整的对象\n        //      value\n        //      text\n        this.updater.digest(&#123;\n            cur: e.status\n        &#125;);\n    &#125;\n&#125;);</pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-status/__test__/1.html';
    throw msg;
} return $p; },
    render: function () {
        var list = [{
                value: 0,
                text: '暂停投放',
                icon: '<i class="mc-iconfont">&#xe67f;</i>',
                color: '#a40100'
            }, {
                value: 1,
                text: '正在投放',
                icon: '<i class="mc-iconfont">&#xe683;</i>',
                color: '#51a300'
            }, {
                value: 9,
                text: '结束投放',
                icon: '<i class="mc-iconfont">&#xe682;</i>',
                color: '#999999'
            }];
        this.updater.digest({
            list: list,
            cur: list[1]
        });
    },
    'change<change>': function (e) {
        // e.status 完整的对象
        //      value
        //      text
        this.updater.digest({
            cur: e.status
        });
    }
});

});