/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-cascade/examples/1",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Vframe = Magix.Vframe;
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
} ; var $g = '', $_temp, $p = '', items = $$.items, selected = $$.selected, list = $$.list, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryal:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxv mxa="_zs_galleryal:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_galleryal:_" class="mb15 clearfix"><div class="fl color-9">使用场景：</div><div class="fl"><div>省市县区的选择</div><div>返回选中的叶子节点数据selected（value值），item（完整数据对象）</div><div>默认点击展开子项</div></div></div><div mxa="_zs_galleryal:b" class="mb15 clearfix"><div mxs="_zs_galleryal:a" class="fl color-9">当前选中：</div><div mxa="_zs_galleryal:c" class="fl">';
    $line = 14;
    $art = 'each items as item';
    ;
    $expr = '<%for (var $art_iegmmeibmc$art_i = 0, $art_cgomsujcqak$art_c = items.length; $art_iegmmeibmc$art_i < $art_cgomsujcqak$art_c; $art_iegmmeibmc$art_i++) {    var item = items[$art_iegmmeibmc$art_i]%>';
    for (var $art_iegmmeibmc$art_i = 0, $art_cgomsujcqak$art_c = items.length; $art_iegmmeibmc$art_i < $art_cgomsujcqak$art_c; $art_iegmmeibmc$art_i++) {
        var item = items[$art_iegmmeibmc$art_i];
        $p += '<div>';
        $line = 15;
        $art = '=item.text';
        ;
        $p += ($expr = '<%=item.text%>', $e(item.text)) + '（';
        $line = 15;
        $art = '=item.value';
        ;
        $p += ($expr = '<%=item.value%>', $e(item.value)) + '）</div>';
        $line = 16;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div><div mxv="list" class="w200" mx-change="' + $viewId + 'select()" mx-view="mx-cascade/index?selected=';
    $line = 20;
    $art = '=selected';
    ;
    $p += ($expr = '<%!$eu(selected)%>', $eu(selected)) + '&list=';
    $line = 21;
    $art = '@list';
    ;
    $p += ($expr = '<%@list%>', $i($$ref, list)) + '"></div></div><div mxa="_zs_galleryal:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryal:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryal:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 28;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryal:c" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 31;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-cascade class="w200"\n    selected="&#123;&#123;=selected&#125;&#125;"\n    list="&#123;&#123;@list&#125;&#125;"\n    mx-change="select()"&gt;&lt;/mx-cascade&gt;\n        </pre></div><div mxa="_zs_galleryal:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryal:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 40;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryal:g" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 42;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryal:c" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 45;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Vframe = Magix.Vframe;\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let list = [&#123;\n            value: 11,\n            pValue: \'\',\n            text: \'上海\'\n        &#125;, &#123;\n            value: 12,\n            pValue: \'\',\n            text: \'江苏\'\n        &#125;, &#123;\n            value: 13,\n            pValue: \'\',\n            text: \'浙江\'\n        &#125;, &#123;\n            value: 14,\n            pValue: \'\',\n            text: \'北京\'\n        &#125;, &#123;\n            value: 15,\n            pValue: \'\',\n            text: \'四川\'\n        &#125;, &#123;\n            value: 121,\n            pValue: 12,\n            text: \'南京\'\n        &#125;, &#123;\n            value: 122,\n            pValue: 12,\n            text: \'苏州\'\n        &#125;, &#123;\n            value: 123,\n            pValue: 12,\n            text: \'南通\'\n        &#125;, &#123;\n            value: 131,\n            pValue: 13,\n            text: \'杭州\'\n        &#125;, &#123;\n            value: 132,\n            pValue: 13,\n            text: \'宁波\'\n        &#125;, &#123;\n            value: 133,\n            pValue: 13,\n            text: \'温州\'\n        &#125;, &#123;\n            value: 134,\n            pValue: 13,\n            text: \'嘉兴\'\n        &#125;, &#123;\n            value: 135,\n            pValue: 13,\n            text: \'舟山\'\n        &#125;, &#123;\n            value: 136,\n            pValue: 13,\n            text: \'台州\'\n        &#125;, &#123;\n            value: 137,\n            pValue: 13,\n            text: \'湖州\'\n        &#125;, &#123;\n            value: 151,\n            pValue: 15,\n            text: \'成都\'\n        &#125;, &#123;\n            value: 152,\n            pValue: 15,\n            text: \'乐山\'\n        &#125;, &#123;\n            value: 153,\n            pValue: 15,\n            text: \'广元\'\n        &#125;, &#123;\n            value: 154,\n            pValue: 15,\n            text: \'南充\'\n        &#125;, &#123;\n            value: 155,\n            pValue: 15,\n            text: \'德阳\'\n        &#125;, &#123;\n            value: 156,\n            pValue: 15,\n            text: \'绵阳\'\n        &#125;, &#123;\n            value: 157,\n            pValue: 15,\n            text: \'眉山\'\n        &#125;, &#123;\n            value: 158,\n            pValue: 15,\n            text: \'宜宾\'\n        &#125;, &#123;\n            value: 1311,\n            pValue: 131,\n            text: \'余杭区\'\n        &#125;, &#123;\n            value: 1312,\n            pValue: 131,\n            text: \'西湖区\'\n        &#125;, &#123;\n            value: 1313,\n            pValue: 131,\n            text: \'上城区\'\n        &#125;, &#123;\n            value: 1314,\n            pValue: 131,\n            text: \'下城区\'\n        &#125;, &#123;\n            value: 1315,\n            pValue: 131,\n            text: \'江干区\'\n        &#125;, &#123;\n            value: 1316,\n            pValue: 131,\n            text: \'拱墅区\'\n        &#125;, &#123;\n            value: 1317,\n            pValue: 131,\n            text: \'萧山区\'\n        &#125;, &#123;\n            value: 1318,\n            pValue: 131,\n            text: \'滨江区\'\n        &#125;, &#123;\n            value: 1319,\n            pValue: 131,\n            text: \'富阳市\'\n        &#125;, &#123;\n            value: 1371,\n            pValue: 137,\n            text: \'吴兴区\'\n        &#125;, &#123;\n            value: 1372,\n            pValue: 137,\n            text: \'安吉县\'\n        &#125;, &#123;\n            value: 1373,\n            pValue: 137,\n            text: \'长兴区\'\n        &#125;, &#123;\n            value: 1374,\n            pValue: 137,\n            text: \'德清县\'\n        &#125;, &#123;\n            value: 1375,\n            pValue: 137,\n            text: \'南浔区\'\n        &#125;]\n\n        this.updater.digest(&#123;\n            list\n        &#125;);\n    &#125;,\n    \'select&lt;change&gt;\'(event)&#123;\n        // 选中的叶子节点数据\n        // event.selected：value值\n        // event.item：当前选中叶子节点完整对象\n        // event.items：当前选中项完整的父子关系，数组顺序为父子关系\n        this.updater.digest(&#123;\n            selected: event.selected\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-cascade/examples/1.html';
    throw msg;
} return $p; },
    render: function () {
        var list = [{
                value: 11,
                pValue: '',
                text: '上海'
            }, {
                value: 12,
                pValue: '',
                text: '江苏'
            }, {
                value: 13,
                pValue: '',
                text: '浙江'
            }, {
                value: 14,
                pValue: '',
                text: '北京'
            }, {
                value: 15,
                pValue: '',
                text: '四川'
            }, {
                value: 121,
                pValue: 12,
                text: '南京'
            }, {
                value: 122,
                pValue: 12,
                text: '苏州'
            }, {
                value: 123,
                pValue: 12,
                text: '南通'
            }, {
                value: 131,
                pValue: 13,
                text: '杭州'
            }, {
                value: 132,
                pValue: 13,
                text: '宁波'
            }, {
                value: 133,
                pValue: 13,
                text: '温州'
            }, {
                value: 134,
                pValue: 13,
                text: '嘉兴'
            }, {
                value: 135,
                pValue: 13,
                text: '舟山'
            }, {
                value: 136,
                pValue: 13,
                text: '台州'
            }, {
                value: 137,
                pValue: 13,
                text: '湖州'
            }, {
                value: 151,
                pValue: 15,
                text: '成都'
            }, {
                value: 152,
                pValue: 15,
                text: '乐山'
            }, {
                value: 153,
                pValue: 15,
                text: '广元'
            }, {
                value: 154,
                pValue: 15,
                text: '南充'
            }, {
                value: 155,
                pValue: 15,
                text: '德阳'
            }, {
                value: 156,
                pValue: 15,
                text: '绵阳'
            }, {
                value: 157,
                pValue: 15,
                text: '眉山'
            }, {
                value: 158,
                pValue: 15,
                text: '宜宾'
            }, {
                value: 1311,
                pValue: 131,
                text: '余杭区'
            }, {
                value: 1312,
                pValue: 131,
                text: '西湖区'
            }, {
                value: 1313,
                pValue: 131,
                text: '上城区'
            }, {
                value: 1314,
                pValue: 131,
                text: '下城区'
            }, {
                value: 1315,
                pValue: 131,
                text: '江干区'
            }, {
                value: 1316,
                pValue: 131,
                text: '拱墅区'
            }, {
                value: 1317,
                pValue: 131,
                text: '萧山区'
            }, {
                value: 1318,
                pValue: 131,
                text: '滨江区'
            }, {
                value: 1319,
                pValue: 131,
                text: '富阳市'
            }, {
                value: 1371,
                pValue: 137,
                text: '吴兴区'
            }, {
                value: 1372,
                pValue: 137,
                text: '安吉县'
            }, {
                value: 1373,
                pValue: 137,
                text: '长兴区'
            }, {
                value: 1374,
                pValue: 137,
                text: '德清县'
            }, {
                value: 1375,
                pValue: 137,
                text: '南浔区'
            }];
        this.updater.digest({
            list: list,
            selected: '',
            items: []
        });
    },
    'select<change>': function (event) {
        // 选中的叶子节点数据
        // event.selected：value值
        // event.item：当前选中叶子节点完整对象
        // event.items：当前选中项完整的父子关系，数组顺序为父子关系
        this.updater.digest({
            selected: event.selected,
            items: event.items
        });
    }
});

});