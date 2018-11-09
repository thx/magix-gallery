/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-indics/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', fields = $$.fields, defaults = $$.defaults, custom = $$.custom, customs = $$.customs, map = $$.map, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerybv:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_gallerybv:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerybv:_" class="clearfix lh22 mb20"><div class="fl color-9">以下示例：</div><div class="fl"><div>限制指标选择上限4 + 指标可排序</div><div>选择指标超过上限的时候，未选择指标禁止选择</div><div>切换为默认指标选择def=true的配置，切换自定义显示用户的自定义配置</div><div>初次进行自定义配置时显示指标为默认指标</div></div></div><div mxv><div mxv="fields,defaults,customs" mx-change="' + $viewId + 'change()" mx-view="mx-indics/index?fields=';
    $line = 14;
    $art = '@fields';
    ;
    $p += ($expr = '<%@fields%>', $i($$ref, fields)) + '&defaults=';
    $line = 15;
    $art = '@defaults';
    ;
    $p += ($expr = '<%@defaults%>', $i($$ref, defaults)) + '&custom=';
    $line = 16;
    $art = '=custom';
    ;
    $p += ($expr = '<%!$eu(custom)%>', $eu(custom)) + '&customs=';
    $line = 17;
    $art = '@customs';
    ;
    $p += ($expr = '<%@customs%>', $i($$ref, customs)) + '&sortable=true&limit=4"></div><span mxs="_zs_gallerybv:a" class="ml20 color-9">当前选中</span>';
    $line = 23;
    $art = 'if custom';
    ;
    $expr = '<%if (custom) {%>';
    if (custom) {
        ;
        $p += '<span mxs="_zs_gallerybv:b">自定义指标：</span>';
        $line = 25;
        $art = 'each customs as key';
        ;
        $expr = '<%for (var $art_ikqaijmhh$art_i = 0, $art_cghlepcwuw$art_c = customs.length; $art_ikqaijmhh$art_i < $art_cghlepcwuw$art_c; $art_ikqaijmhh$art_i++) {        var key = customs[$art_ikqaijmhh$art_i]%>';
        for (var $art_ikqaijmhh$art_i = 0, $art_cghlepcwuw$art_c = customs.length; $art_ikqaijmhh$art_i < $art_cghlepcwuw$art_c; $art_ikqaijmhh$art_i++) {
            var key = customs[$art_ikqaijmhh$art_i];
            $p += '<span mxa="_zs_gallerybv:b" class="ml10">';
            $line = 26;
            $art = '=map[key]';
            ;
            $p += ($expr = '<%=map[key]%>', $e(map[key])) + '（';
            $line = 26;
            $art = '=key';
            ;
            $p += ($expr = '<%=key%>', $e(key)) + '）</span>';
            $line = 27;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 28;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '<span mxs="_zs_gallerybv:c">默认指标：</span>';
        $line = 30;
        $art = 'each defaults as key';
        ;
        $expr = '<%for (var $art_ilstjzzst$art_i = 0, $art_cmvptloofd$art_c = defaults.length; $art_ilstjzzst$art_i < $art_cmvptloofd$art_c; $art_ilstjzzst$art_i++) {        var key = defaults[$art_ilstjzzst$art_i]%>';
        for (var $art_ilstjzzst$art_i = 0, $art_cmvptloofd$art_c = defaults.length; $art_ilstjzzst$art_i < $art_cmvptloofd$art_c; $art_ilstjzzst$art_i++) {
            var key = defaults[$art_ilstjzzst$art_i];
            $p += '<span mxa="_zs_gallerybv:c" class="ml10">';
            $line = 31;
            $art = '=map[key]';
            ;
            $p += ($expr = '<%=map[key]%>', $e(map[key])) + '（';
            $line = 31;
            $art = '=key';
            ;
            $p += ($expr = '<%=key%>', $e(key)) + '）</span>';
            $line = 32;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 33;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div><div mxa="_zs_gallerybv:d" class="clearfix"><div mxa="_zs_gallerybv:e" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-third1"><div mxs="_zs_gallerybv:d" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 39;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerybv:f" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 41;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerybv:e" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 44;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-indics \n    fields="&#123;&#123;@fields&#125;&#125;" \n    defaults="&#123;&#123;@defaults&#125;&#125;"\n    custom="&#123;&#123;=custom&#125;&#125;"\n    customs="&#123;&#123;@customs&#125;&#125;"\n    sortable="true" \n    limit="4"\n    mx-change="change()"/&gt;\n\n&lt;span class="ml20 color-9"&gt;当前选中&lt;/span&gt;\n&#123;&#123;if custom&#125;&#125;\n    &lt;span&gt;自定义指标：&lt;/span&gt;\n    &#123;&#123;each customs as key&#125;&#125;\n    &lt;span class="ml10"&gt;&#123;&#123;=map[key]&#125;&#125;（&#123;&#123;=key&#125;&#125;）&lt;/span&gt;\n    &#123;&#123;/each&#125;&#125;\n&#123;&#123;else&#125;&#125;\n    &lt;span&gt;默认指标：&lt;/span&gt;\n    &#123;&#123;each defaults as key&#125;&#125;\n    &lt;span class="ml10"&gt;&#123;&#123;=map[key]&#125;&#125;（&#123;&#123;=key&#125;&#125;）&lt;/span&gt;\n    &#123;&#123;/each&#125;&#125;\n&#123;&#123;/if&#125;&#125;</pre></div><div mxa="_zs_gallerybv:g" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-third2 _zs_gallery___test___layout_-half-right"><div mxs="_zs_gallerybv:f" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 69;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerybv:h" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 71;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerybv:e" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 74;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let fields = [&#123;\n            text: \'消耗\', value: \'cost\', tip: \'提示文案\'\n        &#125;, &#123;\n            text: \'展现量\', value: \'impression\'\n        &#125;, &#123;\n            text: \'点击量\', value: \'click\', \n        &#125;, &#123;\n            text: \'点击率\', value: \'ctr\'\n        &#125;, &#123;\n            text: \'平均点击单价\', value: \'cpc\'\n        &#125;, &#123;\n            text: \'点击转化率\', value: \'coverage\'\n        &#125;, &#123;\n            text: \'成交笔数\', value: \'transaction\'\n        &#125;]\n\n        let map = &#123;&#125;;\n        fields.forEach(item =&gt; &#123;\n            map[item.value] = item.text;\n        &#125;)\n        \n        this.updater.digest(&#123;\n            fields,\n            custom: false, //当前是为默认数据\n            defaults: [\'cost\', \'impression\', \'click\'],\n            customs: [],\n            map\n        &#125;);\n    &#125;,\n    \'change&lt;change&gt;\'(e)&#123;\n        // defaults：默认指标\n        // custom：true or false，是否为自定义指标\n        // customs：用户自定义的指标\n        this.updater.digest(&#123;\n            custom: e.custom,\n            customs: e.customs\n        &#125;);\n    &#125;\n&#125;);</pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-indics/__test__/1.html';
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
            fields: fields,
            custom: false,
            defaults: ['cost', 'impression', 'click'],
            customs: [],
            map: map
        });
    },
    'change<change>': function (e) {
        // defaults：默认指标
        // custom：true or false，是否为自定义指标
        // customs：用户自定义的指标
        this.updater.digest({
            custom: e.custom,
            customs: e.customs
        });
    }
});

});