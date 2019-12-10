/*
    generate by magix-combine@3.11.31: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-cascade/examples/6",["magix","examples/example","$","../card","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../card");
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
    $p += '<div mxv mxa="_zs_galleryaq:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxv mxa="_zs_galleryaq:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxa="_zs_galleryaq:b" class="mb20 clearfix"><div mxs="_zs_galleryaq:_" class="fl color-9">当前选中：</div><div mxa="_zs_galleryaq:c" class="fl">';
    $line = 5;
    $art = '!items';
    ;
    $p += ($expr = '<%!items%>', $n(items)) + '</div></div><div mxv="list" mx-change="' + $viewId + 'select()" mx-view="mx-cascade/card?headerTitle=%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB&headerTip=%E6%8F%90%E7%A4%BA%E4%BF%A1%E6%81%AF&selected=';
    $line = 10;
    $art = '=selected';
    ;
    $p += ($expr = '<%!$eu(selected)%>', $eu(selected)) + '&list=';
    $line = 11;
    $art = '@list';
    ;
    $p += ($expr = '<%@list%>', $i($$ref, list)) + '"></div></div><div mxa="_zs_galleryaq:d" class="clearfix"><div mxa="_zs_galleryaq:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-third1"><div mxs="_zs_galleryaq:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 17;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryaq:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 19;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryaq:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 22;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;div class="mb20"&gt;当前选中：&#123;&#123;!items&#125;&#125;&lt;/div&gt;\n&lt;mx-cascade.card \n    header-title="精选分类"\n    header-tip="提示信息"\n    selected="&#123;&#123;=selected&#125;&#125;"\n    list="&#123;&#123;@list&#125;&#125;" \n    mx-change="select()"/&gt;\n            </pre></div><div mxa="_zs_galleryaq:g" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-third2 _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-right"><div mxs="_zs_galleryaq:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 34;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryaq:h" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 36;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryaq:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 39;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Vframe = Magix.Vframe;\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let list = [&#123;\n            value: 11,\n            pValue: \'\',\n            text: \'直通车\',\n            img: \'//img.alicdn.com/tfs/TB1HrXVkbH1gK0jSZFwXXc7aXXa-92-92.png\',\n            tip: \'关键词搜索推广营销工具\'\n        &#125;, &#123;\n            value: 12,\n            pValue: \'\',\n            text: \'超级推荐\',\n            img: \'//img.alicdn.com/tfs/TB1a3dUkeL2gK0jSZFmXXc7iXXa-92-92.png\',\n            tip: \'关键词搜索推广营销工具\'\n        &#125;, &#123;\n            value: 13,\n            pValue: \'\',\n            text: \'智钻\',\n            img: \'//img.alicdn.com/tfs/TB1hYNTki_1gK0jSZFqXXcpaXXa-92-92.png\',\n            tip: \'关键词搜索推广营销工具\'\n        &#125;, &#123;\n            value: 14,\n            pValue: \'\',\n            text: \'淘宝客\',\n            img: \'//img.alicdn.com/tfs/TB1JbtSkmf2gK0jSZFPXXXsopXa-92-92.png\',\n            tip: \'关键词搜索推广营销工具\'\n        &#125;, &#123;\n            value: 111,\n            pValue: 11,\n            text: \'新手入门\'\n        &#125;, &#123;\n            value: 112,\n            pValue: 11,\n            text: \'提升流量\'\n        &#125;, &#123;\n            value: 113,\n            pValue: 11,\n            text: \'提升转化\'\n        &#125;, &#123;\n            value: 114,\n            pValue: 11,\n            text: \'提升店铺成交\'\n        &#125;, &#123;\n            value: 115,\n            pValue: 11,\n            text: \'推广规则\'\n        &#125;, &#123;\n            value: 1151,\n            pValue: 115,\n            text: \'标准推广\'\n        &#125;, &#123;\n            value: 1152,\n            pValue: 115,\n            text: \'智能推广\'\n        &#125;, &#123;\n            value: 121,\n            pValue: 12,\n            text: \'新手入门\'\n        &#125;, &#123;\n            value: 122,\n            pValue: 12,\n            text: \'提升流量\'\n        &#125;, &#123;\n            value: 123,\n            pValue: 12,\n            text: \'提升转化\'\n        &#125;, &#123;\n            value: 124,\n            pValue: 12,\n            text: \'提升店铺成交\'\n        &#125;, &#123;\n            value: 131,\n            pValue: 13,\n            text: \'产品新功能\'\n        &#125;, &#123;\n            value: 132,\n            pValue: 13,\n            text: \'数据分析\'\n        &#125;, &#123;\n            value: 133,\n            pValue: 13,\n            text: \'其他\'\n        &#125;]\n\n        this.updater.digest(&#123;\n            list,\n            selected: \'\',\n            items: \'\'\n        &#125;);\n    &#125;,\n    \'select&lt;change&gt;\'(event)&#123;\n        // 选中的叶子节点数据\n        // event.selected：value值\n        // event.item：当前选中叶子节点完整对象\n        // event.items：当前选中项完整的父子关系，数组顺序为父子关系\n        let items = event.items;\n        this.updater.digest(&#123;\n            selected: event.selected,\n            items: items.map(item =&gt; &#123;\n                return `$&#123;item.text&#125;（$&#123;item.value&#125;）`;\n            &#125;).join(\'=&gt; \')\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-cascade/examples/6.html';
    throw msg;
} return $p; },
    render: function () {
        var list = [{
                value: 11,
                pValue: '',
                text: '直通车',
                img: '//img.alicdn.com/tfs/TB1HrXVkbH1gK0jSZFwXXc7aXXa-92-92.png',
                tip: '关键词搜索推广营销工具'
            }, {
                value: 12,
                pValue: '',
                text: '超级推荐',
                img: '//img.alicdn.com/tfs/TB1a3dUkeL2gK0jSZFmXXc7iXXa-92-92.png',
                tip: '关键词搜索推广营销工具'
            }, {
                value: 13,
                pValue: '',
                text: '智钻',
                img: '//img.alicdn.com/tfs/TB1hYNTki_1gK0jSZFqXXcpaXXa-92-92.png',
                tip: '关键词搜索推广营销工具'
            }, {
                value: 14,
                pValue: '',
                text: '淘宝客',
                img: '//img.alicdn.com/tfs/TB1JbtSkmf2gK0jSZFPXXXsopXa-92-92.png',
                tip: '关键词搜索推广营销工具'
            }, {
                value: 111,
                pValue: 11,
                text: '新手入门'
            }, {
                value: 112,
                pValue: 11,
                text: '提升流量'
            }, {
                value: 113,
                pValue: 11,
                text: '提升转化'
            }, {
                value: 114,
                pValue: 11,
                text: '提升店铺成交'
            }, {
                value: 115,
                pValue: 11,
                text: '推广规则'
            }, {
                value: 1151,
                pValue: 115,
                text: '标准推广'
            }, {
                value: 1152,
                pValue: 115,
                text: '智能推广'
            }, {
                value: 121,
                pValue: 12,
                text: '新手入门'
            }, {
                value: 122,
                pValue: 12,
                text: '提升流量'
            }, {
                value: 123,
                pValue: 12,
                text: '提升转化'
            }, {
                value: 124,
                pValue: 12,
                text: '提升店铺成交'
            }, {
                value: 131,
                pValue: 13,
                text: '产品新功能'
            }, {
                value: 132,
                pValue: 13,
                text: '数据分析'
            }, {
                value: 133,
                pValue: 13,
                text: '其他'
            }];
        this.updater.digest({
            list: list,
            selected: '',
            items: ''
        });
    },
    'select<change>': function (event) {
        // 选中的叶子节点数据
        // event.selected：value值
        // event.item：当前选中叶子节点完整对象
        // event.items：当前选中项完整的父子关系，数组顺序为父子关系
        var items = event.items;
        this.updater.digest({
            selected: event.selected,
            items: items.map(function (item) {
                return item.text + "\uFF08" + item.value + "\uFF09";
            }).join('=&gt; ')
        });
    }
});

});