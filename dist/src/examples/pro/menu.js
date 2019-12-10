/*
    generate by magix-combine@3.11.31: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("examples/pro/menu",["magix","$","../subs","mx-title/second","./menu-desc","./menu1","./menu3","./menu2","./menu5","./menu4","./menu-custom-desc","./menu-custom1","./menu-custom3","./menu-custom5","./menu-custom2","./menu-custom4"],(require,exports,module)=>{
/*Magix,$*/
require("../subs");
require("mx-title/second");
require("./menu-desc");
require("./menu1");
require("./menu3");
require("./menu2");
require("./menu5");
require("./menu4");
require("./menu-custom-desc");
require("./menu-custom1");
require("./menu-custom3");
require("./menu-custom5");
require("./menu-custom2");
require("./menu-custom4");
var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryH:_" class="pr pr120"><div mx-view="examples/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'导航可见菜单\',\n        key: viewId + \'_menu\',\n        subs: [{\n            name: \'侧边二级\',\n            key: viewId + \'_menu1\',\n        },{\n            name: \'侧边三级\',\n            key: viewId + \'_menu2\',\n        },{\n            name: \'自定义侧边\',\n            key: viewId + \'_menu3\',\n        },{\n            name: \'无侧边深底\',\n            key: viewId + \'_menu4\',\n        },{\n            name: \'无侧边白底\',\n            key: viewId + \'_menu5\',\n        }]\n    }, {\n        name: \'自定义菜单\',\n        key: viewId + \'_custom\',\n        subs: [{\n            name: \'映射三级\',\n            key: viewId + \'_custom3\',\n        },{\n            name: \'一级+自定义侧边\',\n            key: viewId + \'_custom5\',\n        },{\n            name: \'一级+无侧边\',\n            key: viewId + \'_custom2\',\n        },{\n            name: \'自定义容器\',\n            key: viewId + \'_custom4\',\n        }]\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'导航可见菜单\',            key: viewId + \'_menu\',            subs: [{                    name: \'侧边二级\',                    key: viewId + \'_menu1\'                }, {                    name: \'侧边三级\',                    key: viewId + \'_menu2\'                }, {                    name: \'自定义侧边\',                    key: viewId + \'_menu3\'                }, {                    name: \'无侧边深底\',                    key: viewId + \'_menu4\'                }, {                    name: \'无侧边白底\',                    key: viewId + \'_menu5\'                }]        }, {            name: \'自定义菜单\',            key: viewId + \'_custom\',            subs: [{                    name: \'映射三级\',                    key: viewId + \'_custom3\'                }, {                    name: \'一级+自定义侧边\',                    key: viewId + \'_custom5\'                }, {                    name: \'一级+无侧边\',                    key: viewId + \'_custom2\'                }, {                    name: \'自定义容器\',                    key: viewId + \'_custom4\'                }]        }]%>', $i($$ref, [{ name: '导航可见菜单', key: viewId + '_menu', subs: [{ name: '侧边二级', key: viewId + '_menu1' }, { name: '侧边三级', key: viewId + '_menu2' }, { name: '自定义侧边', key: viewId + '_menu3' }, { name: '无侧边深底', key: viewId + '_menu4' }, { name: '无侧边白底', key: viewId + '_menu5' }] }, { name: '自定义菜单', key: viewId + '_custom', subs: [{ name: '映射三级', key: viewId + '_custom3' }, { name: '一级+自定义侧边', key: viewId + '_custom5' }, { name: '一级+无侧边', key: viewId + '_custom2' }, { name: '自定义容器', key: viewId + '_custom4' }] }])) + '"></div><div id="';
    $line = 39;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_menu" mx-view="mx-title/second?content=%E5%AF%BC%E8%88%AA%E5%8F%AF%E8%A7%81%E8%8F%9C%E5%8D%95%E9%85%8D%E7%BD%AE&tip=%E5%85%A5%E5%8F%A3%E5%9C%A8%E5%AF%BC%E8%88%AA%E4%B8%8A%E7%9A%84%E9%A1%B5%E9%9D%A2%EF%BC%8C%E5%8F%AF%E4%BB%A5%E4%B8%BA%E5%A4%B4%E9%83%A8%E4%B8%80%E7%BA%A7%EF%BC%8C%E6%88%96%E8%80%85%E4%B8%BA%E4%BE%A7%E8%BE%B9%E4%BA%8C%E7%BA%A7%E6%88%96%E8%80%85%E4%B8%89%E7%BA%A7%EF%BC%8C%E4%B8%BA%E4%BA%86%E5%A4%84%E7%90%86%E6%96%B9%E4%BE%BF%E4%BE%A7%E8%BE%B9%E5%8F%AF%E7%82%B9%E9%83%BD%E6%98%AF%E4%B8%89%E7%BA%A7"></div><div mxs="_zs_galleryH:_" mx-view="examples/pro/menu-desc" class="mb20"></div><div mxa="_zs_galleryH:a" class="clearfix mb20"><div mxa="_zs_galleryH:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mx-view="examples/pro/menu1" id="';
    $line = 45;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_menu1"></div><div mx-view="examples/pro/menu3" id="';
    $line = 46;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_menu3"></div></div><div mxa="_zs_galleryH:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mx-view="examples/pro/menu2" id="';
    $line = 49;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_menu2"></div><div mx-view="examples/pro/menu5" id="';
    $line = 50;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_menu5"></div><div mx-view="examples/pro/menu4" id="';
    $line = 51;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_menu4"></div></div></div><div id="';
    $line = 55;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_custom" mx-view="mx-title/second?content=%E8%87%AA%E5%AE%9A%E4%B9%89%E8%8F%9C%E5%8D%95%E9%85%8D%E7%BD%AE&tip=%E5%85%A5%E5%8F%A3%E5%9C%A8%E4%B8%8D%E5%9C%A8%E5%AF%BC%E8%88%AA%E4%B8%8A%EF%BC%8C%E4%BB%8E%E5%85%B7%E4%BD%93%E7%9A%84%E6%9F%90%E4%B8%AA%E9%A1%B5%E9%9D%A2%E7%82%B9%E5%87%BB%E8%BF%9B%E5%85%A5%EF%BC%8C%E5%8F%AF%E8%83%BD%E9%9C%80%E8%A6%81%E6%98%A0%E5%B0%84%E5%88%B0%E5%AF%BC%E8%88%AA%E7%9A%84%E6%9F%90%E4%B8%AA%E4%BD%8D%E7%BD%AE%E4%B8%8A"></div><div mxs="_zs_galleryH:a" mx-view="examples/pro/menu-custom-desc" class="mb20"></div><div mx-view="examples/pro/menu-custom1?parentId=';
    $line = 59;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '" class="mb20"></div><div mx-view="examples/pro/menu-custom3" id="';
    $line = 60;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_custom3"></div><div mx-view="examples/pro/menu-custom5" id="';
    $line = 61;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_custom5"></div><div mx-view="examples/pro/menu-custom2" id="';
    $line = 62;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_custom2"></div><div mx-view="examples/pro/menu-custom4" id="';
    $line = 63;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_custom4"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:examples/pro/menu.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id
        });
    }
});

});