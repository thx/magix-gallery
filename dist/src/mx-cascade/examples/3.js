/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-cascade/examples/3",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryaj:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxa="_zs_galleryaj:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_galleryaj:_" class="mb15 clearfix"><div class="fl color-9">以下示例：</div><div class="fl">禁止选中</div></div><div class="w200" mx-view="mx-cascade/index?disabled=true&list=';
    $line = 9;
    $art = '@[{\n                value: 11,\n                pValue: \'\',\n                text: \'上海\'\n            }, {\n                value: 12,\n                pValue: \'\',\n                text: \'江苏\'\n            }, {\n                value: 13,\n                pValue: \'\',\n                text: \'浙江\'\n            }, {\n                value: 14,\n                pValue: \'\',\n                text: \'北京\'\n            }, {\n                value: 15,\n                pValue: \'\',\n                text: \'四川\'\n            }, {\n                value: 121,\n                pValue: 12,\n                text: \'南京\'\n            }, {\n                value: 122,\n                pValue: 12,\n                text: \'苏州\'\n            }, {\n                value: 123,\n                pValue: 12,\n                text: \'南通\'\n            }, {\n                value: 131,\n                pValue: 13,\n                text: \'杭州\'\n            }, {\n                value: 132,\n                pValue: 13,\n                text: \'宁波\'\n            }, {\n                value: 133,\n                pValue: 13,\n                text: \'温州\'\n            }, {\n                value: 134,\n                pValue: 13,\n                text: \'嘉兴\'\n            }, {\n                value: 135,\n                pValue: 13,\n                text: \'舟山\'\n            }, {\n                value: 136,\n                pValue: 13,\n                text: \'台州\'\n            }, {\n                value: 137,\n                pValue: 13,\n                text: \'湖州\'\n            }, {\n                value: 1311,\n                pValue: 131,\n                text: \'余杭区\'\n            }, {\n                value: 1312,\n                pValue: 131,\n                text: \'西湖区\'\n            }, {\n                value: 1313,\n                pValue: 131,\n                text: \'上城区\'\n            }, {\n                value: 1314,\n                pValue: 131,\n                text: \'下城区\'\n            }, {\n                value: 1315,\n                pValue: 131,\n                text: \'江干区\'\n            }, {\n                value: 1316,\n                pValue: 131,\n                text: \'拱墅区\'\n            }]';
    ;
    $p += ($expr = '<%@[{            value: 11,            pValue: \'\',            text: \'上海\'        }, {            value: 12,            pValue: \'\',            text: \'江苏\'        }, {            value: 13,            pValue: \'\',            text: \'浙江\'        }, {            value: 14,            pValue: \'\',            text: \'北京\'        }, {            value: 15,            pValue: \'\',            text: \'四川\'        }, {            value: 121,            pValue: 12,            text: \'南京\'        }, {            value: 122,            pValue: 12,            text: \'苏州\'        }, {            value: 123,            pValue: 12,            text: \'南通\'        }, {            value: 131,            pValue: 13,            text: \'杭州\'        }, {            value: 132,            pValue: 13,            text: \'宁波\'        }, {            value: 133,            pValue: 13,            text: \'温州\'        }, {            value: 134,            pValue: 13,            text: \'嘉兴\'        }, {            value: 135,            pValue: 13,            text: \'舟山\'        }, {            value: 136,            pValue: 13,            text: \'台州\'        }, {            value: 137,            pValue: 13,            text: \'湖州\'        }, {            value: 1311,            pValue: 131,            text: \'余杭区\'        }, {            value: 1312,            pValue: 131,            text: \'西湖区\'        }, {            value: 1313,            pValue: 131,            text: \'上城区\'        }, {            value: 1314,            pValue: 131,            text: \'下城区\'        }, {            value: 1315,            pValue: 131,            text: \'江干区\'        }, {            value: 1316,            pValue: 131,            text: \'拱墅区\'        }]%>', $i($$ref, [{ value: 11, pValue: '', text: '上海' }, { value: 12, pValue: '', text: '江苏' }, { value: 13, pValue: '', text: '浙江' }, { value: 14, pValue: '', text: '北京' }, { value: 15, pValue: '', text: '四川' }, { value: 121, pValue: 12, text: '南京' }, { value: 122, pValue: 12, text: '苏州' }, { value: 123, pValue: 12, text: '南通' }, { value: 131, pValue: 13, text: '杭州' }, { value: 132, pValue: 13, text: '宁波' }, { value: 133, pValue: 13, text: '温州' }, { value: 134, pValue: 13, text: '嘉兴' }, { value: 135, pValue: 13, text: '舟山' }, { value: 136, pValue: 13, text: '台州' }, { value: 137, pValue: 13, text: '湖州' }, { value: 1311, pValue: 131, text: '余杭区' }, { value: 1312, pValue: 131, text: '西湖区' }, { value: 1313, pValue: 131, text: '上城区' }, { value: 1314, pValue: 131, text: '下城区' }, { value: 1315, pValue: 131, text: '江干区' }, { value: 1316, pValue: 131, text: '拱墅区' }])) + '&selected=1312"></div></div><div mxa="_zs_galleryaj:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryaj:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 98;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryaj:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 100;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryaj:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 103;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-cascade class="w200"\n    disabled="true"\n    list="&#123;&#123;@[&#123;\n        value: 11,\n        pValue: \'\',\n        text: \'上海\'\n    &#125;, &#123;\n        value: 12,\n        pValue: \'\',\n        text: \'江苏\'\n    &#125;, &#123;\n        value: 13,\n        pValue: \'\',\n        text: \'浙江\'\n    &#125;, &#123;\n        value: 14,\n        pValue: \'\',\n        text: \'北京\'\n    &#125;, &#123;\n        value: 15,\n        pValue: \'\',\n        text: \'四川\'\n    &#125;, &#123;\n        value: 121,\n        pValue: 12,\n        text: \'南京\'\n    &#125;, &#123;\n        value: 122,\n        pValue: 12,\n        text: \'苏州\'\n    &#125;, &#123;\n        value: 123,\n        pValue: 12,\n        text: \'南通\'\n    &#125;, &#123;\n        value: 131,\n        pValue: 13,\n        text: \'杭州\'\n    &#125;, &#123;\n        value: 132,\n        pValue: 13,\n        text: \'宁波\'\n    &#125;, &#123;\n        value: 133,\n        pValue: 13,\n        text: \'温州\'\n    &#125;, &#123;\n        value: 134,\n        pValue: 13,\n        text: \'嘉兴\'\n    &#125;, &#123;\n        value: 135,\n        pValue: 13,\n        text: \'舟山\'\n    &#125;, &#123;\n        value: 136,\n        pValue: 13,\n        text: \'台州\'\n    &#125;, &#123;\n        value: 137,\n        pValue: 13,\n        text: \'湖州\'\n    &#125;, &#123;\n        value: 1311,\n        pValue: 131,\n        text: \'余杭区\'\n    &#125;, &#123;\n        value: 1312,\n        pValue: 131,\n        text: \'西湖区\'\n    &#125;, &#123;\n        value: 1313,\n        pValue: 131,\n        text: \'上城区\'\n    &#125;, &#123;\n        value: 1314,\n        pValue: 131,\n        text: \'下城区\'\n    &#125;, &#123;\n        value: 1315,\n        pValue: 131,\n        text: \'江干区\'\n    &#125;, &#123;\n        value: 1316,\n        pValue: 131,\n        text: \'拱墅区\'\n    &#125;]&#125;&#125;"\n    selected="1312"&gt;&lt;/mx-cascade&gt;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-cascade/examples/3.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});