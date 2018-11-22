/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-indics/__test__/5",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerybw:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallerybw:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerybw:_" class="clearfix lh22 mb20"><div class="fl color-9">以下示例：</div><div class="fl">不限制可选择个数 + 不排序</div></div><div mxa="_zs_gallerybw:b" class="mb20"><div mx-view="mx-indics/index?fields=';
    $line = 9;
    $art = '@[{\n                    name: \'消耗\', id: \'cost\'\n                }, {\n                    name: \'展现量\', id: \'impression\'\n                }, {\n                    name: \'点击量\', id: \'click\', \n                }, {\n                    name: \'点击率\', id: \'ctr\'\n                }, {\n                    name: \'平均点击单价\', id: \'cpc\'\n                }, {\n                    name: \'点击转化率\', id: \'coverage\'\n                }, {\n                    name: \'成交笔数\', id: \'transaction\'\n                }]';
    ;
    $p += ($expr = '<%@[{            name: \'消耗\', id: \'cost\'        }, {            name: \'展现量\', id: \'impression\'        }, {            name: \'点击量\', id: \'click\'        }, {            name: \'点击率\', id: \'ctr\'        }, {            name: \'平均点击单价\', id: \'cpc\'        }, {            name: \'点击转化率\', id: \'coverage\'        }, {            name: \'成交笔数\', id: \'transaction\'        }]%>', $i($$ref, [{ name: '消耗', id: 'cost' }, { name: '展现量', id: 'impression' }, { name: '点击量', id: 'click' }, { name: '点击率', id: 'ctr' }, { name: '平均点击单价', id: 'cpc' }, { name: '点击转化率', id: 'coverage' }, { name: '成交笔数', id: 'transaction' }])) + '&textKey=name&valueKey=id&defaults=';
    $line = 26;
    $art = '@[\'click\', \'ctr\', \'coverage\']';
    ;
    $p += ($expr = '<%@[\'click\', \'ctr\', \'coverage\']%>', $i($$ref, ['click', 'ctr', 'coverage'])) + '&custom=false&customs=';
    $line = 28;
    $art = '@[\'click\', \'coverage\']';
    ;
    $p += ($expr = '<%@[\'click\', \'coverage\']%>', $i($$ref, ['click', 'coverage'])) + '"></div></div></div><div mxa="_zs_gallerybw:c" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybw:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 33;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerybw:d" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 35;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerybw:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 38;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-indics \n    fields="&#123;&#123;@[&#123;\n        name: \'消耗\', id: \'cost\'\n    &#125;, &#123;\n        name: \'展现量\', id: \'impression\'\n    &#125;, &#123;\n        name: \'点击量\', id: \'click\', \n    &#125;, &#123;\n        name: \'点击率\', id: \'ctr\'\n    &#125;, &#123;\n        name: \'平均点击单价\', id: \'cpc\'\n    &#125;, &#123;\n        name: \'点击转化率\', id: \'coverage\'\n    &#125;, &#123;\n        name: \'成交笔数\', id: \'transaction\'\n    &#125;]&#125;&#125;"\n    text-key="name"\n    value-key="id" \n    defaults="&#123;&#123;@[\'click\', \'ctr\', \'coverage\']&#125;&#125;"\n    custom="false"\n    customs="&#123;&#123;@[\'click\', \'coverage\']&#125;&#125;"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-indics/__test__/5.html';
    throw msg;
} return $p; },
    render: function () {
        var fields = [{
                text: '消耗', value: 'cost', tip: '提示文案'
            }, {
                text: '展现量', value: 'impression'
            }, {
                text: '点击量', value: 'click'
            }, {
                text: '点击率', value: 'ctr'
            }, {
                text: '平均点击单价', value: 'cpc'
            }, {
                text: '点击转化率', value: 'coverage'
            }, {
                text: '成交笔数', value: 'transaction'
            }];
        var map = {};
        fields.forEach(function (item) {
            map[item.value] = item.text;
        });
        this.updater.digest({
            map: map,
            defaults: ['click', 'ctr', 'coverage']
        });
    },
    'change<change>': function (e) {
        // defaults：默认指标
        // custom：true or false，是否为自定义指标
        // customs：用户自定义的指标
        this.updater.digest({
            custom1: e.custom,
            customs1: e.customs
        });
    }
});

});