/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-checkbox/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
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
} ; var $g = '', $_temp, $p = '', list = $$.list, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxa="_zs_gallery::_" class="_zs_galleryh"><div mxa="_zs_gallery::a" class="_zs_galleryk">'; for (var groupIndex = 0, $art_cftemxoaao$art_c = list.length; groupIndex < $art_cftemxoaao$art_c; groupIndex++) {
    var group = list[groupIndex];
    $p += '<div><label mxa="_zs_gallery::b" class="mr20 mb20"><span mx-change="' + $viewId + 'toggle({groupIndex:' + $e(groupIndex) + ',subIndex:\'all\'})" mx-view="mx-checkbox/index?value=' + $eu(group.value) + '&checked=' + $eu((group.type == 3)) + '&indeterminate=' + $eu((group.type == 2)) + '"></span>组' + $e(group.value) + '</label></div><div>';
    for (var subIndex = 0, $art_objkmitcyuud$art_obj = group.subs, $art_cfpwzpzbbo$art_c = $art_objkmitcyuud$art_obj.length; subIndex < $art_cfpwzpzbbo$art_c; subIndex++) {
        var sub = $art_objkmitcyuud$art_obj[subIndex];
        $p += '<label mxa="_zs_gallery::c" class="mr20 mb20"><span mx-change="' + $viewId + 'toggle({groupIndex:' + $e(groupIndex) + ',subIndex:' + $e(subIndex) + '})" mx-view="mx-checkbox/index?value=' + $eu(sub.value) + '&checked=' + $eu(sub.checked) + '"></span>' + $e(sub.value) + '</label>';
    }
    ;
    $p += '</div>';
} ; $p += '</div><div mxa="_zs_gallery::d" class="_zs_galleryl"><div mxs="_zs_gallery::_" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallery::e" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallery::a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&#123;&#123;each list as group groupIndex&#125;&#125;\n&lt;div&gt;\n    &lt;label class="mr20 mb20"&gt;\n        &lt;mx-checkbox value="&#123;&#123;=group.value&#125;&#125;"\n            checked="&#123;&#123;=(group.type==3)&#125;&#125;" \n            indeterminate="&#123;&#123;=(group.type==2)&#125;&#125;" \n            mx-change="toggle(&#123;groupIndex:&#123;&#123;=groupIndex&#125;&#125;,subIndex:\'all\'&#125;)"/&gt;组&#123;&#123;=group.value&#125;&#125;\n    &lt;/label&gt;\n&lt;/div&gt;\n&lt;div&gt;\n    &#123;&#123;each group.subs as sub subIndex&#125;&#125;\n    &lt;label class="mr20 mb20"&gt;\n        &lt;mx-checkbox value="&#123;&#123;=sub.value&#125;&#125;"\n            checked="&#123;&#123;=sub.checked&#125;&#125;" \n            mx-change="toggle(&#123;groupIndex:&#123;&#123;=groupIndex&#125;&#125;,subIndex:&#123;&#123;=subIndex&#125;&#125;&#125;)"/&gt;&#123;&#123;=sub.value&#125;&#125;\n    &lt;/label&gt;\n    &#123;&#123;/each&#125;&#125;\n&lt;/div&gt;\n&#123;&#123;/each&#125;&#125;\n        </pre></div><div mxa="_zs_gallery::f" class="_zs_galleryl"><div mxs="_zs_gallery::b" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_gallery::g" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_gallery::a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let list = [&#123;\n            value: 1,\n            subs: [&#123;\n                value: 11\n            &#125;,&#123;\n                value: 12\n            &#125;,&#123;\n                value: 13\n            &#125;]\n        &#125;,&#123;\n            value: 2,\n            subs: [&#123;\n                value: 21\n            &#125;,&#123;\n                value: 22\n            &#125;,&#123;\n                value: 23\n            &#125;]\n        &#125;]\n        this.updater.digest(&#123;\n            list\n        &#125;);\n    &#125;,\n    \'toggle&lt;change&gt;\'(e) &#123;\n        let checked = e.target.checked;\n        let groupIndex = e.params.groupIndex,\n            subIndex = e.params.subIndex;\n\n        let list = this.updater.get(\'list\');\n        list.forEach((group, gi) =&gt; &#123;\n            let checkes = [];\n            group.subs.forEach((sub, si) =&gt; &#123;\n                if((groupIndex == gi) && \n                    (subIndex == \'all\' || subIndex == si))&#123;\n                    sub.checked = checked;\n                &#125;\n\n                if(sub.checked)&#123;\n                    checkes.push(sub.value);\n                &#125;\n            &#125;)\n\n            // 1：全不选\n            // 2：部分选\n            // 3：全选\n            group.type = (checkes.length &gt; 0) ? ((checkes.length == group.subs.length) ? 3 : 2) : 1;\n        &#125;)\n\n        this.updater.digest(&#123;\n            list\n        &#125;)\n    &#125;\n&#125;);\n        </pre></div></div>'; return $p; },
    render: function () {
        var list = [{
                value: 1,
                subs: [{
                        value: 11
                    }, {
                        value: 12
                    }, {
                        value: 13
                    }]
            }, {
                value: 2,
                subs: [{
                        value: 21
                    }, {
                        value: 22
                    }, {
                        value: 23
                    }]
            }];
        this.updater.digest({
            list: list
        });
    },
    'toggle<change>': function (e) {
        var checked = e.target.checked;
        var groupIndex = e.params.groupIndex, subIndex = e.params.subIndex;
        var list = this.updater.get('list');
        list.forEach(function (group, gi) {
            var checkes = [];
            group.subs.forEach(function (sub, si) {
                if ((groupIndex == gi) &&
                    (subIndex == 'all' || subIndex == si)) {
                    sub.checked = checked;
                }
                if (sub.checked) {
                    checkes.push(sub.value);
                }
            });
            // 1：全不选
            // 2：部分选
            // 3：全选
            group.type = (checkes.length > 0) ? ((checkes.length == group.subs.length) ? 3 : 2) : 1;
        });
        this.updater.digest({
            list: list
        });
    }
});

});