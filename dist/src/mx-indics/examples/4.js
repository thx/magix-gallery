/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-indics/examples/4",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryc2:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxa="_zs_galleryc2:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxa="_zs_galleryc2:b" class="clearfix mb20"><div mxa="_zs_galleryc2:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mxs="_zs_galleryc2:_" class="clearfix lh22 mb20"><div class="fl color-9">以下示例：</div><div class="fl">自定义key + 无分组</div></div><div mx-view="mx-indics/index?fields=';
    $line = 10;
    $art = '@[{\n                        id: 1, name: \'消耗\'\n                    }, {\n                        id: 2, name: \'展现量\'\n                    }, {\n                        id: 3, name: \'点击量\'\n                    }, {\n                        id: 4, name: \'点击率\'\n                    }, {\n                        id: 5, name: \'平均点击单价\'\n                    }, {\n                        id: 6, name: \'点击转化率\'\n                    }]';
    ;
    $p += ($expr = '<%@[{            id: 1, name: \'消耗\'        }, {            id: 2, name: \'展现量\'        }, {            id: 3, name: \'点击量\'        }, {            id: 4, name: \'点击率\'        }, {            id: 5, name: \'平均点击单价\'        }, {            id: 6, name: \'点击转化率\'        }]%>', $i($$ref, [{ id: 1, name: '消耗' }, { id: 2, name: '展现量' }, { id: 3, name: '点击量' }, { id: 4, name: '点击率' }, { id: 5, name: '平均点击单价' }, { id: 6, name: '点击转化率' }])) + '&valueKey=id&textKey=name&defaults=';
    $line = 25;
    $art = '@[1,2,3]';
    ;
    $p += ($expr = '<%@[1, 2, 3]%>', $i($$ref, [1, 2, 3])) + '"></div></div><div mxa="_zs_galleryc2:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mxs="_zs_galleryc2:a" class="clearfix lh22 mb20"><div class="fl color-9">以下示例：</div><div class="fl">自定义key + 有分组（parents的key，value跟fields保持一致）</div></div><div mx-view="mx-indics/index?parents=';
    $line = 34;
    $art = '@[{\n                        id: 1, name: \'组1\'\n                    }, {\n                        id: 2, name: \'组2\'\n                    }]';
    ;
    $p += ($expr = '<%@[{            id: 1, name: \'组1\'        }, {            id: 2, name: \'组2\'        }]%>', $i($$ref, [{ id: 1, name: '组1' }, { id: 2, name: '组2' }])) + '&fields=';
    $line = 39;
    $art = '@[{\n                        id: 1, name: \'消耗\', pId: 1\n                    }, {\n                        id: 2, name: \'展现量\', pId: 1\n                    }, {\n                        id: 3, name: \'点击量\', pId: 1\n                    }, {\n                        id: 4, name: \'点击率\', pId: 1\n                    }, {\n                        id: 5, name: \'平均点击单价\', pId: 2\n                    }, {\n                        id: 6, name: \'点击转化率\', pId: 2\n                    }]';
    ;
    $p += ($expr = '<%@[{            id: 1, name: \'消耗\', pId: 1        }, {            id: 2, name: \'展现量\', pId: 1        }, {            id: 3, name: \'点击量\', pId: 1        }, {            id: 4, name: \'点击率\', pId: 1        }, {            id: 5, name: \'平均点击单价\', pId: 2        }, {            id: 6, name: \'点击转化率\', pId: 2        }]%>', $i($$ref, [{ id: 1, name: '消耗', pId: 1 }, { id: 2, name: '展现量', pId: 1 }, { id: 3, name: '点击量', pId: 1 }, { id: 4, name: '点击率', pId: 1 }, { id: 5, name: '平均点击单价', pId: 2 }, { id: 6, name: '点击转化率', pId: 2 }])) + '&parentKey=pId&valueKey=id&textKey=name&defaults=';
    $line = 55;
    $art = '@[1,2,3]';
    ;
    $p += ($expr = '<%@[1, 2, 3]%>', $i($$ref, [1, 2, 3])) + '"></div></div></div></div><div mxa="_zs_galleryc2:e" class="clearfix"><div mxa="_zs_galleryc2:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mxs="_zs_galleryc2:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 62;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryc2:g" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 64;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryc2:c" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 67;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-indics \n    fields="&#123;&#123;@[&#123;\n        id: 1, name: \'消耗\'\n    &#125;, &#123;\n        id: 2, name: \'展现量\'\n    &#125;, &#123;\n        id: 3, name: \'点击量\'\n    &#125;, &#123;\n        id: 4, name: \'点击率\'\n    &#125;, &#123;\n        id: 5, name: \'平均点击单价\'\n    &#125;, &#123;\n        id: 6, name: \'点击转化率\'\n    &#125;]&#125;&#125;" \n    value-key="id"\n    text-key="name"\n    defaults="&#123;&#123;@[1,2,3]&#125;&#125;"/&gt;\n            </pre></div><div mxa="_zs_galleryc2:h" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-right"><div mxs="_zs_galleryc2:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 89;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryc2:i" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 91;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryc2:c" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 94;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\n&lt;mx-indics \n    parents="&#123;&#123;@[&#123;\n        id: 1, name: \'组1\'\n    &#125;, &#123;\n        id: 2, name: \'组2\'\n    &#125;]&#125;&#125;" \n    fields="&#123;&#123;@[&#123;\n        id: 1, name: \'消耗\', pId: 1\n    &#125;, &#123;\n        id: 2, name: \'展现量\', pId: 1\n    &#125;, &#123;\n        id: 3, name: \'点击量\', pId: 1\n    &#125;, &#123;\n        id: 4, name: \'点击率\', pId: 1\n    &#125;, &#123;\n        id: 5, name: \'平均点击单价\', pId: 2\n    &#125;, &#123;\n        id: 6, name: \'点击转化率\', pId: 2\n    &#125;]&#125;&#125;" \n    parent-key="pId"\n    value-key="id"\n    text-key="name"\n    defaults="&#123;&#123;@[1,2,3]&#125;&#125;"/&gt;\n            </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-indics/examples/4.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({});
    }
});

});