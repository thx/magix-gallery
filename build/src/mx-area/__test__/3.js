/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-area/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_galleryr","._zs_gallerybw{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerybx,._zs_galleryby{padding:20px 20px 0;border:1px solid #e6e6e6;border-radius:4px}._zs_gallerybx{width:740px}._zs_galleryby{width:600px}._zs_gallerybz{width:740px;border:1px solid #e6e6e6;border-radius:4px;padding:20px 0}");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, types = $$.types, selected = $$.selected, arrs = $$.arrs, text1 = $$.text1, text2 = $$.text2; $p += '<div mxv mxa="_zs_galleryS:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryS:a" class="_zs_galleryk"><div mxs="_zs_galleryS:_" class="clearfix lh22 mb20"><div class="fl color-9">以下示例：</div><div class="fl"><div>自定义省份城市数据，example[{id,name,cities:[{id,name}]}]</div><div>平铺展示所有分组</div><div>可以选择城市</div><div>每个省份和城市都有各自的id，若选择了省份，则获取选中值时只有省份的id（不包含该省份下所有城市id）</div><div>宽度由容器宽度决定，自适应</div></div></div><div mxv mxa="_zs_galleryS:b" class="clearfix mb20"><div mxv mxa="_zs_galleryS:c" class="_zs_gallerybx fl mr20"><div mxv="types,selected" id="' + $e(viewId) + '_area" mx-view="mx-area/index?city=true&data=' + $i($$ref, types) + '&selected=' + $i($$ref, selected) + '"></div></div><div mxa="_zs_galleryS:d" class="fl"><div mxs="_zs_galleryS:a" class="mb10"><a href="javascript:;" class="btn btn-brand" mx-click="' + $viewId + 'get()">获取选中值</a></div><div mxa="_zs_galleryS:e" class="clearfix lh22"><div mxs="_zs_galleryS:b" class="fl color-9">当前选中值：</div><div mxa="_zs_galleryS:f" class="fl">'; for (var $art_ifeefoakxmw$art_i = 0, $art_chwiusuupc$art_c = arrs.length; $art_ifeefoakxmw$art_i < $art_chwiusuupc$art_c; $art_ifeefoakxmw$art_i++) {
    var item = arrs[$art_ifeefoakxmw$art_i];
    $p += '<div>' + $e(item.name) + '（' + $e(item.id) + '）</div>';
} ; $p += '</div></div></div></div></div><div mxa="_zs_galleryS:g" class="clearfix"><div mxa="_zs_galleryS:h" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_galleryS:c" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryS:i" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryS:d" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-area id="&#123;&#123;=viewId&#125;&#125;_area"\n    city="true" \n    data="&#123;&#123;@types&#125;&#125;"\n    selected="&#123;&#123;@selected&#125;&#125;"/&gt;</pre></div><div mxa="_zs_galleryS:j" class="_zs_galleryl _zs_gallerye _zs_galleryf"><div mxs="_zs_galleryS:e" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_galleryS:k" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_galleryS:d" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let types = [&#123;\n            "name": "组1",\n            "provinces": [&#123;\n                "id": 461,\n                "name": "天津"\n            &#125;, &#123;\n                "id": 508,\n                "name": "浙江",\n                "cities": [&#123;\n                    "id": 509,\n                    "name": "杭州"\n                &#125;, &#123;\n                    "id": 511,\n                    "name": "湖州"\n                &#125;, &#123;\n                    "id": 512,\n                    "name": "嘉兴"\n                &#125;]\n            &#125;]\n        &#125;, &#123;\n            "name": "组2",\n            "provinces": [&#123;\n                "id": 471,\n                "name": "新疆",\n                "cities": [&#123;\n                    "id": 472,\n                    "name": "阿克苏",\n                &#125;, &#123;\n                    "id": 473,\n                    "name": "阿勒泰",\n                &#125;]\n            &#125;, &#123;\n                "id": 577,\n                "name": "北京",\n            &#125;]\n        &#125;]\n\n        this.updater.digest(&#123;\n            viewId: this.id,\n            types,\n            selected: [509],\n            arrs: [&#123;\n                "id": 509,\n                "name": "杭州"\n            &#125;]\n        &#125;);\n    &#125;,\n    \'get&lt;click&gt;\' (event) &#123;\n        let id = this.id + \'_area\';\n        let vf = Magix.Vframe.get(id);\n\n        // 完整的选中信息\n        let arrs = vf.invoke(\'getSelected\');\n        // 选中的id值\n        let selected = vf.invoke(\'val\');\n        this.updater.digest(&#123;\n            selected,\n            arrs\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>'; return $p; },
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