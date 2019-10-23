/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-area/examples/3",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-area_examples_index_","._zs_gallery_mx-area_examples_index_-area-wrapper1,\n._zs_gallery_mx-area_examples_index_-area-wrapper2 {\n  padding: 20px 20px 0;\n  border: 1px solid var(--color-border);\n  border-radius: var(--border-radius);\n}\n._zs_gallery_mx-area_examples_index_-area-wrapper1 {\n  width: 740px;\n}\n._zs_gallery_mx-area_examples_index_-area-wrapper2 {\n  width: 600px;\n}\n._zs_gallery_mx-area_examples_index_-area-wrapper3 {\n  width: 740px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--border-radius);\n  padding: 20px 0;\n}\n");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, types = $$.types, selected = $$.selected, arrs = $$.arrs, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryU:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxv mxa="_zs_galleryU:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_galleryU:_" class="clearfix lh22 mb20"><div class="fl color-9">以下示例：</div><div class="fl"><div>自定义省份城市数据，example[{id,name,cities:[{id,name}]}]</div><div>平铺展示所有分组</div><div>可以选择城市</div><div>每个省份和城市都有各自的id，若选择了省份，则获取选中值时只有省份的id（不包含该省份下所有城市id）</div><div>宽度由容器宽度决定，自适应</div></div></div><div mxv mxa="_zs_galleryU:b" class="clearfix mb20"><div mxv mxa="_zs_galleryU:c" class="_zs_gallery_mx-area_examples_index_-area-wrapper1 fl mr20"><div mxv="types,selected" id="';
    $line = 15;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_area" mx-view="mx-area/index?city=true&data=';
    $line = 17;
    $art = '@types';
    ;
    $p += ($expr = '<%@types%>', $i($$ref, types)) + '&selected=';
    $line = 18;
    $art = '@selected';
    ;
    $p += ($expr = '<%@selected%>', $i($$ref, selected)) + '"></div></div><div mxa="_zs_galleryU:d" class="fl"><div mxs="_zs_galleryU:a" class="mb10"><a href="javascript:;" class="btn btn-brand" mx-click="' + $viewId + 'get()">获取选中值</a></div><div mxa="_zs_galleryU:e" class="clearfix lh22"><div mxs="_zs_galleryU:b" class="fl color-9">当前选中值：</div><div mxa="_zs_galleryU:f" class="fl">';
    $line = 25;
    $art = 'each arrs as item';
    ;
    $expr = '<%for (var $art_iimvbad$art_i = 0, $art_cdsqymmddp$art_c = arrs.length; $art_iimvbad$art_i < $art_cdsqymmddp$art_c; $art_iimvbad$art_i++) {    var item = arrs[$art_iimvbad$art_i]%>';
    for (var $art_iimvbad$art_i = 0, $art_cdsqymmddp$art_c = arrs.length; $art_iimvbad$art_i < $art_cdsqymmddp$art_c; $art_iimvbad$art_i++) {
        var item = arrs[$art_iimvbad$art_i];
        $p += '<div>';
        $line = 26;
        $art = '=item.name';
        ;
        $p += ($expr = '<%=item.name%>', $e(item.name)) + '（';
        $line = 26;
        $art = '=item.id';
        ;
        $p += ($expr = '<%=item.id%>', $e(item.id)) + '）</div>';
        $line = 27;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div></div></div></div><div mxa="_zs_galleryU:g" class="clearfix"><div mxa="_zs_galleryU:h" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mxs="_zs_galleryU:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 36;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryU:i" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 38;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryU:d" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 41;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-area id="&#123;&#123;=viewId&#125;&#125;_area"\n    city="true" \n    data="&#123;&#123;@types&#125;&#125;"\n    selected="&#123;&#123;@selected&#125;&#125;"/&gt;</pre></div><div mxa="_zs_galleryU:j" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-right"><div mxs="_zs_galleryU:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 49;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryU:k" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 51;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryU:d" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 54;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let types = [&#123;\n            "name": "组1",\n            "provinces": [&#123;\n                "id": 461,\n                "name": "天津"\n            &#125;, &#123;\n                "id": 508,\n                "name": "浙江",\n                "cities": [&#123;\n                    "id": 509,\n                    "name": "杭州"\n                &#125;, &#123;\n                    "id": 511,\n                    "name": "湖州"\n                &#125;, &#123;\n                    "id": 512,\n                    "name": "嘉兴"\n                &#125;]\n            &#125;]\n        &#125;, &#123;\n            "name": "组2",\n            "provinces": [&#123;\n                "id": 471,\n                "name": "新疆",\n                "cities": [&#123;\n                    "id": 472,\n                    "name": "阿克苏",\n                &#125;, &#123;\n                    "id": 473,\n                    "name": "阿勒泰",\n                &#125;]\n            &#125;, &#123;\n                "id": 577,\n                "name": "北京",\n            &#125;]\n        &#125;]\n\n        this.updater.digest(&#123;\n            viewId: this.id,\n            types,\n            selected: [509],\n            arrs: [&#123;\n                "id": 509,\n                "name": "杭州"\n            &#125;]\n        &#125;);\n    &#125;,\n    \'get&lt;click&gt;\' (event) &#123;\n        let id = this.id + \'_area\';\n        let vf = Magix.Vframe.get(id);\n\n        // 完整的选中信息\n        let arrs = vf.invoke(\'getSelected\');\n        // 选中的id值\n        let selected = vf.invoke(\'val\');\n        this.updater.digest(&#123;\n            selected,\n            arrs\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-area/examples/3.html';
    throw msg;
} return $p; },
    render: function () {
        var types = [{
                "name": "组1",
                "provinces": [{
                        "id": 461,
                        "name": "天津"
                    }, {
                        "id": 508,
                        "name": "浙江",
                        "cities": [{
                                "id": 509,
                                "name": "杭州"
                            }, {
                                "id": 511,
                                "name": "湖州"
                            }, {
                                "id": 512,
                                "name": "嘉兴"
                            }]
                    }]
            }, {
                "name": "组2",
                "provinces": [{
                        "id": 471,
                        "name": "新疆",
                        "cities": [{
                                "id": 472,
                                "name": "阿克苏"
                            }, {
                                "id": 473,
                                "name": "阿勒泰"
                            }]
                    }, {
                        "id": 577,
                        "name": "北京"
                    }]
            }];
        this.updater.digest({
            viewId: this.id,
            types: types,
            selected: [509],
            arrs: [{
                    "id": 509,
                    "name": "杭州"
                }]
        });
    },
    'get<click>': function (event) {
        var id = this.id + '_area';
        var vf = Magix.Vframe.get(id);
        // 完整的选中信息
        var arrs = vf.invoke('getSelected');
        // 选中的id值
        var selected = vf.invoke('val');
        this.updater.digest({
            selected: selected,
            arrs: arrs
        });
    }
});

});