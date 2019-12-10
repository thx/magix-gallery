/*
    generate by magix-combine@3.11.31: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-cascade/examples/5",["magix","examples/example","mx-form/index","mx-form/validator","$","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,Form,Validator,$*/
require("../index");
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Vframe = Magix.Vframe;
var Base = require("examples/example");
var Form = require("mx-form/index");
var Validator = require("mx-form/validator");
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
} ; var $g = '', $_temp, $p = '', selected = $$.selected, list = $$.list, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryap:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxv mxa="_zs_galleryap:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxa="_zs_galleryap:b" class="mb15 clearfix"><div mxs="_zs_galleryap:_" class="fl color-9">使用场景：</div><div mxa="_zs_galleryap:c" class="fl"><div mxs="_zs_galleryap:a">hover展开子项</div><div>当前选中值（';
    $line = 7;
    $art = '=selected';
    ;
    $p += ($expr = '<%=selected%>', $e(selected)) + '）</div></div></div><div mxv="selected,list" mxe="' + $viewId + '_0" mxc="[';
    $line = 12;
    $art = ':selected{required:true,refresh:true}';
    ;
    $p += '{p:\'selected\',f:{required:true,refresh:true},a:\'selected\'}]" class="w200 mb40" mx-view="mx-cascade/index?triggerType=hover&selected=';
    $line = 12;
    $art = ':selected{required:true,refresh:true}';
    ;
    $p += ($expr = '<%@selected%>', $i($$ref, selected)) + '&list=';
    $line = 13;
    $art = '@list';
    ;
    $p += ($expr = '<%@list%>', $i($$ref, list)) + '"></div></div><div mxa="_zs_galleryap:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryap:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 17;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryap:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 19;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryap:c" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 22;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-cascade class="w200"\n    trigger-type="hover"\n    selected="&#123;&#123;:selected&#123;required:true,refresh:true&#125;&#125;&#125;"\n    list="&#123;&#123;@list&#125;&#125;" /&gt;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-cascade/examples/5.html';
    throw msg;
} return $p; },
    mixins: [Form, Validator],
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
            selected: ''
        });
    }
});

});