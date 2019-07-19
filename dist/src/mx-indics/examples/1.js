/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-indics/examples/1",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', parents = $$.parents, fields = $$.fields, defaults = $$.defaults, custom = $$.custom, customs = $$.customs, triggerType = $$.triggerType, map = $$.map, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerycO:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxv mxa="_zs_gallerycO:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_gallerycO:_" class="clearfix lh22 mb20"><div class="fl color-9">以下示例：</div><div class="fl"><div>限制指标选择上限4 + 指标可排序，选择指标超过上限的时候，未选择指标禁止选择</div><div>切换为默认显示默认指标，切换自定义显示用户的自定义配置；当自定义配置为 [] 时，等于默认配置，确保每次操作都是有指标的</div></div></div><div mxv mxa="_zs_gallerycO:b" class="clearfix"><div mxv="parents,fields,defaults,customs" class="fl mr20" mx-change="' + $viewId + 'change()" mx-view="mx-indics/index?parents=';
    $line = 12;
    $art = '@parents';
    ;
    $p += ($expr = '<%@parents%>', $i($$ref, parents)) + '&fields=';
    $line = 13;
    $art = '@fields';
    ;
    $p += ($expr = '<%@fields%>', $i($$ref, fields)) + '&defaults=';
    $line = 14;
    $art = '@defaults';
    ;
    $p += ($expr = '<%@defaults%>', $i($$ref, defaults)) + '&custom=';
    $line = 15;
    $art = '=custom';
    ;
    $p += ($expr = '<%!$eu(custom)%>', $eu(custom)) + '&customs=';
    $line = 16;
    $art = '@customs';
    ;
    $p += ($expr = '<%@customs%>', $i($$ref, customs)) + '&sortable=true&limit=4&lineNumber=3"></div><div mxa="_zs_gallerycO:c" class="fl"><div mxa="_zs_gallerycO:d" class="clearfix"><span mxs="_zs_gallerycO:a" class="fl color-9">当前操作：</span><span mxa="_zs_gallerycO:e" class="fl">';
    $line = 24;
    $art = '=triggerType';
    ;
    $p += ($expr = '<%=triggerType%>', $e(triggerType)) + '</span></div><div mxa="_zs_gallerycO:f" class="clearfix"><span mxs="_zs_gallerycO:b" class="color-9 fl">指标类型：</span>';
    $line = 28;
    $art = 'if custom';
    ;
    $expr = '<%if (custom) {%>';
    if (custom) {
        ;
        $p += '<span mxs="_zs_gallerycO:c" class="fl">自定义指标</span>';
        $line = 30;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '<span mxs="_zs_gallerycO:d" class="fl">默认指标</span>';
        $line = 32;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxa="_zs_gallerycO:g" class="clearfix"><span mxs="_zs_gallerycO:e" class="color-9 fl">选中指标：</span>';
    $line = 36;
    $art = 'if custom';
    ;
    $expr = '<%if (custom) {%>';
    if (custom) {
        ;
        $p += ' ';
        $line = 37;
        $art = 'each customs as key';
        ;
        $expr = '<%for (var $art_ihdueiwgh$art_i = 0, $art_cytjyqriao$art_c = customs.length; $art_ihdueiwgh$art_i < $art_cytjyqriao$art_c; $art_ihdueiwgh$art_i++) {        var key = customs[$art_ihdueiwgh$art_i]%>';
        for (var $art_ihdueiwgh$art_i = 0, $art_cytjyqriao$art_c = customs.length; $art_ihdueiwgh$art_i < $art_cytjyqriao$art_c; $art_ihdueiwgh$art_i++) {
            var key = customs[$art_ihdueiwgh$art_i];
            $p += '<span mxa="_zs_gallerycO:h" class="fl mr10">';
            $line = 38;
            $art = '=map[key]';
            ;
            $p += ($expr = '<%=map[key]%>', $e(map[key])) + '（';
            $line = 38;
            $art = '=key';
            ;
            $p += ($expr = '<%=key%>', $e(key)) + '）</span>';
            $line = 39;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 40;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' ';
        $line = 41;
        $art = 'each defaults as key';
        ;
        $expr = '<%for (var $art_izouxjmev$art_i = 0, $art_crcfywxmxl$art_c = defaults.length; $art_izouxjmev$art_i < $art_crcfywxmxl$art_c; $art_izouxjmev$art_i++) {        var key = defaults[$art_izouxjmev$art_i]%>';
        for (var $art_izouxjmev$art_i = 0, $art_crcfywxmxl$art_c = defaults.length; $art_izouxjmev$art_i < $art_crcfywxmxl$art_c; $art_izouxjmev$art_i++) {
            var key = defaults[$art_izouxjmev$art_i];
            $p += '<span mxa="_zs_gallerycO:i" class="fl mr10">';
            $line = 42;
            $art = '=map[key]';
            ;
            $p += ($expr = '<%=map[key]%>', $e(map[key])) + '（';
            $line = 42;
            $art = '=key';
            ;
            $p += ($expr = '<%=key%>', $e(key)) + '）</span>';
            $line = 43;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 44;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div></div></div><div mxa="_zs_gallerycO:j" class="clearfix"><div mxa="_zs_gallerycO:k" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-third1"><div mxs="_zs_gallerycO:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 52;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerycO:l" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 54;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerycO:g" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 57;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-indics \n    parents="&#123;&#123;@parents&#125;&#125;" \n    fields="&#123;&#123;@fields&#125;&#125;" \n    defaults="&#123;&#123;@defaults&#125;&#125;"\n    custom="&#123;&#123;=custom&#125;&#125;"\n    customs="&#123;&#123;@customs&#125;&#125;"\n    sortable="true" \n    limit="4"\n    mx-change="change()"/&gt;</pre></div><div mxa="_zs_gallerycO:m" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-third2 _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-right"><div mxs="_zs_gallerycO:h" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 70;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerycO:n" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 72;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerycO:g" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 75;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let fields = [&#123;\n            value: 1, text: \'消耗\', pValue: 1, tip: \'消耗提示文案\'\n        &#125;, &#123;\n            value: 2, text: \'展现量\', pValue: 1\n        &#125;, &#123;\n            value: 3, text: \'点击量\', pValue: 1\n        &#125;, &#123;\n            value: 4, text: \'点击率\', pValue: 1\n        &#125;, &#123;\n            value: 5, text: \'平均点击单价\', pValue: 1, tip: \'平均点击单价提示文案\'\n        &#125;, &#123;\n            value: 6, text: \'点击转化率\', pValue: 2\n        &#125;, &#123;\n            value: 7, text: \'成交笔数\', pValue: 2\n        &#125;, &#123;\n            value: 8, text: \'千次展现成本\', pValue: 2\n        &#125;, &#123;\n            value: 9, text: \'投资回报率\', pValue: 2\n        &#125;, &#123;\n            value: 10, text: \'访问页面数\', pValue: 2\n        &#125;]\n\n        let parents = [&#123;\n            value: 1, text: \'组1\'\n        &#125;, &#123;\n            value: 2, text: \'组2\'\n        &#125;]\n        \n        this.updater.digest(&#123;\n            parents,\n            fields,\n            custom: false, //当前是为默认数据\n            customs: [2,3,4,5],\n            defaults: [2,3]\n        &#125;);\n    &#125;,\n    \'change&lt;change&gt;\'(e)&#123;\n        // e.custom：true or false，是否为自定义指标\n        // e.customs：用户自定义的指标，当前用的的配置\n        // e.defaults：默认指标，不变\n        // e.triggerType：操作类型\n        //      btn-switch 切换自定义和默认设置\n        //      dialog-setting 浮层编辑指标\n    &#125;\n&#125;);</pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-indics/examples/1.html';
    throw msg;
} return $p; },
    render: function () {
        var fields = [{
                text: '消耗',
                value: 1,
                pValue: 1,
                tip: '消耗提示文案'
            }, {
                text: '展现量',
                value: 2,
                pValue: 1
            }, {
                text: '点击量',
                value: 3,
                pValue: 1
            }, {
                text: '点击率',
                value: 4,
                pValue: 1
            }, {
                text: '平均点击单价',
                value: 5,
                pValue: 1,
                tip: '平均点击单价提示文案'
            }, {
                text: '点击转化率',
                value: 6,
                pValue: 2
            }, {
                text: '成交笔数',
                value: 7,
                pValue: 2
            }, {
                text: '淘积木页面平均停留时长',
                value: 8,
                tip: '淘积木页面平均停留时长提示文案',
                pValue: 2
            }, {
                text: '投资回报率',
                value: 9,
                pValue: 2
            }, {
                text: '访问页面数',
                value: 10,
                pValue: 2
            }];
        var parents = [{
                text: '淘积木互动',
                value: 1
            }, {
                text: '粉丝获取',
                value: 2
            }];
        var map = {};
        fields.forEach(function (item) {
            map[item.value] = item.text;
        });
        this.updater.digest({
            parents: parents,
            fields: fields,
            custom: false,
            customs: [2, 3, 4, 5],
            defaults: [2, 3],
            map: map
        });
    },
    'change<change>': function (e) {
        // e.custom：true or false，是否为自定义指标
        // e.customs：用户自定义的指标，当前用的的配置
        // e.defaults：默认指标，不变
        // e.triggerType：
        //      btn-switch 切换自定义和默认设置
        //      dialog-setting 浮层编辑指标
        this.updater.digest({
            custom: e.custom,
            customs: e.customs,
            triggerType: e.triggerType
        });
    }
});

});