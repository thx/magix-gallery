/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-secradio/examples/2",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', selected = $$.selected, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerye_:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxa="_zs_gallerye_:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_gallerye_:_" class="clearfix lh22 mb10"><div class="color-9 fl">以下示例：</div><div class="fl"><div>node.val()获取选中值</div><div>不需要展开收起功能</div><div>自定义key和value</div></div></div><div mxa="_zs_gallerye_:b" class="mb15 lh22"><a mxs="_zs_gallerye_:a" href="javascript:;" mx-click="' + $viewId + 'get()" class="mr10 btn btn-brand">获取选中值</a><span mxs="_zs_gallerye_:b" class="color-9">当前选择：</span>';
    $line = 13;
    $art = '=selected';
    ;
    $p += ($expr = '<%=selected%>', $e(selected)) + '</div><div id="';
    $line = 15;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_comp" mx-view="mx-secradio/index?list=';
    $line = 16;
    $art = '@[{\n                name: \'单品推广计划1\',\n                list: [{\n                    id: 11,\n                    name: \'单品推广计划1_单元1\'\n                }, {\n                    id: 12,\n                    name: \'单品推广计划1_单元2\'\n                }]\n            }, {\n                name: \'单品推广计划2\',\n                list: [{\n                    id: 21,\n                    name: \'单品推广计划2_单元1\'\n                }, {\n                    id: 22,\n                    name: \'单品推广计划2_单元2\'\n                }]\n            }]';
    ;
    $p += ($expr = '<%@[{            name: \'单品推广计划1\',            list: [{                    id: 11,                    name: \'单品推广计划1_单元1\'                }, {                    id: 12,                    name: \'单品推广计划1_单元2\'                }]        }, {            name: \'单品推广计划2\',            list: [{                    id: 21,                    name: \'单品推广计划2_单元1\'                }, {                    id: 22,                    name: \'单品推广计划2_单元2\'                }]        }]%>', $i($$ref, [{ name: '单品推广计划1', list: [{ id: 11, name: '单品推广计划1_单元1' }, { id: 12, name: '单品推广计划1_单元2' }] }, { name: '单品推广计划2', list: [{ id: 21, name: '单品推广计划2_单元1' }, { id: 22, name: '单品推广计划2_单元2' }] }])) + '&selected=';
    $line = 35;
    $art = '=selected';
    ;
    $p += ($expr = '<%!$eu(selected)%>', $eu(selected)) + '&needExpand=false&subKey=list&parentTextKey=name&textKey=name&valueKey=id"></div></div><div mxa="_zs_gallerye_:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallerye_:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 44;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerye_:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 46;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerye_:d" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 49;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-secradio \n    list="&#123;&#123;@[&#123;\n        name: \'单品推广计划1\',\n        list: [&#123;\n            id: 11,\n            name: \'单品推广计划1_单元1\'\n        &#125;, &#123;\n            id: 12,\n            name: \'单品推广计划1_单元2\'\n        &#125;]\n    &#125;, &#123;\n        name: \'单品推广计划2\',\n        list: [&#123;\n            id: 21,\n            name: \'单品推广计划2_单元1\'\n        &#125;, &#123;\n            id: 22,\n            name: \'单品推广计划2_单元2\'\n        &#125;]\n    &#125;]&#125;&#125;"\n    selected="&#123;&#123;=selected&#125;&#125;"\n    need-expand="false"\n    sub-key="list"\n    parent-text-key="name"\n    text-key="name"\n    value-key="id"/&gt;</pre></div><div mxa="_zs_gallerye_:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallerye_:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 79;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerye_:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 81;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerye_:d" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 84;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            viewId: this.id,\n            selected: \'\'\n        &#125;);\n    &#125;,\n    \'get&lt;click&gt;\'(event)&#123;\n        let comp = $(\'#\' + this.id + \'_comp\');\n        this.updater.digest(&#123;\n            selected: comp.val()\n        &#125;)\n    &#125;\n&#125;);\n</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-secradio/examples/2.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id,
            selected: ''
        });
    },
    'get<click>': function (event) {
        var comp = $('#' + this.id + '_comp');
        this.updater.digest({
            selected: comp.val()
        });
    }
});

});