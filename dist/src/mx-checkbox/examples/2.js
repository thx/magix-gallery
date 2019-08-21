/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-checkbox/examples/2",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', list = $$.list, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryao:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxa="_zs_galleryao:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content">';
    $line = 3;
    $art = 'each list as group groupIndex';
    ;
    $expr = '<%for (var groupIndex = 0, $art_clenama$art_c = list.length; groupIndex < $art_clenama$art_c; groupIndex++) {    var group = list[groupIndex]%>';
    for (var groupIndex = 0, $art_clenama$art_c = list.length; groupIndex < $art_clenama$art_c; groupIndex++) {
        var group = list[groupIndex];
        $p += '<div><label mxa="_zs_galleryao:b" class="mr20 mb20"><span mx-change="' + $viewId + 'toggle({groupIndex:';
        $line = 9;
        $art = '=groupIndex';
        ;
        $p += ($expr = '<%=groupIndex%>', $e(groupIndex)) + ',subIndex:\'all\'})" mx-view="mx-checkbox/index?value=';
        $line = 6;
        $art = '=group.value';
        ;
        $p += ($expr = '<%!$eu(group.value)%>', $eu(group.value)) + '&checked=';
        $line = 7;
        $art = '=(group.type==3)';
        ;
        $p += ($expr = '<%!$eu((group.type == 3))%>', $eu((group.type == 3))) + '&indeterminate=';
        $line = 8;
        $art = '=(group.type==2)';
        ;
        $p += ($expr = '<%!$eu((group.type == 2))%>', $eu((group.type == 2))) + '"></span>组';
        $line = 9;
        $art = '=group.value';
        ;
        $p += ($expr = '<%=group.value%>', $e(group.value)) + '</label></div><div>';
        $line = 13;
        $art = 'each group.subs as sub subIndex';
        ;
        $expr = '<%for (var subIndex = 0, $art_objwdabzktr$art_obj = group.subs, $art_csquphuj$art_c = $art_objwdabzktr$art_obj.length; subIndex < $art_csquphuj$art_c; subIndex++) {        var sub = $art_objwdabzktr$art_obj[subIndex]%>';
        for (var subIndex = 0, $art_objwdabzktr$art_obj = group.subs, $art_csquphuj$art_c = $art_objwdabzktr$art_obj.length; subIndex < $art_csquphuj$art_c; subIndex++) {
            var sub = $art_objwdabzktr$art_obj[subIndex];
            $p += '<label mxa="_zs_galleryao:c" class="mr20 mb20"><span mx-change="' + $viewId + 'toggle({groupIndex:';
            $line = 17;
            $art = '=groupIndex';
            ;
            $p += ($expr = '<%=groupIndex%>', $e(groupIndex)) + ',subIndex:';
            $line = 17;
            $art = '=subIndex';
            ;
            $p += ($expr = '<%=subIndex%>', $e(subIndex)) + '})" mx-view="mx-checkbox/index?value=';
            $line = 15;
            $art = '=sub.value';
            ;
            $p += ($expr = '<%!$eu(sub.value)%>', $eu(sub.value)) + '&checked=';
            $line = 16;
            $art = '=sub.checked';
            ;
            $p += ($expr = '<%!$eu(sub.checked)%>', $eu(sub.checked)) + '"></span>';
            $line = 17;
            $art = '=sub.value';
            ;
            $p += ($expr = '<%=sub.value%>', $e(sub.value)) + '</label>';
            $line = 19;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 21;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxa="_zs_galleryao:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryao:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 25;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryao:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 27;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryao:a" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 30;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&#123;&#123;each list as group groupIndex&#125;&#125;\n&lt;div&gt;\n    &lt;label class="mr20 mb20"&gt;\n        &lt;mx-checkbox value="&#123;&#123;=group.value&#125;&#125;"\n            checked="&#123;&#123;=(group.type==3)&#125;&#125;" \n            indeterminate="&#123;&#123;=(group.type==2)&#125;&#125;" \n            mx-change="toggle(&#123;groupIndex:&#123;&#123;=groupIndex&#125;&#125;,subIndex:\'all\'&#125;)"/&gt;组&#123;&#123;=group.value&#125;&#125;\n    &lt;/label&gt;\n&lt;/div&gt;\n&lt;div&gt;\n    &#123;&#123;each group.subs as sub subIndex&#125;&#125;\n    &lt;label class="mr20 mb20"&gt;\n        &lt;mx-checkbox value="&#123;&#123;=sub.value&#125;&#125;"\n            checked="&#123;&#123;=sub.checked&#125;&#125;" \n            mx-change="toggle(&#123;groupIndex:&#123;&#123;=groupIndex&#125;&#125;,subIndex:&#123;&#123;=subIndex&#125;&#125;&#125;)"/&gt;&#123;&#123;=sub.value&#125;&#125;\n    &lt;/label&gt;\n    &#123;&#123;/each&#125;&#125;\n&lt;/div&gt;\n&#123;&#123;/each&#125;&#125;\n        </pre></div><div mxa="_zs_galleryao:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryao:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 54;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryao:g" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 56;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryao:a" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 59;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let list = [&#123;\n            value: 1,\n            subs: [&#123;\n                value: 11\n            &#125;,&#123;\n                value: 12\n            &#125;,&#123;\n                value: 13\n            &#125;]\n        &#125;,&#123;\n            value: 2,\n            subs: [&#123;\n                value: 21\n            &#125;,&#123;\n                value: 22\n            &#125;,&#123;\n                value: 23\n            &#125;]\n        &#125;]\n        this.updater.digest(&#123;\n            list\n        &#125;);\n    &#125;,\n    \'toggle&lt;change&gt;\'(e) &#123;\n        let checked = e.target.checked;\n        let groupIndex = e.params.groupIndex,\n            subIndex = e.params.subIndex;\n\n        let list = this.updater.get(\'list\');\n        list.forEach((group, gi) =&gt; &#123;\n            let checkes = [];\n            group.subs.forEach((sub, si) =&gt; &#123;\n                if((groupIndex == gi) && \n                    (subIndex == \'all\' || subIndex == si))&#123;\n                    sub.checked = checked;\n                &#125;\n\n                if(sub.checked)&#123;\n                    checkes.push(sub.value);\n                &#125;\n            &#125;)\n\n            // 1：全不选\n            // 2：部分选\n            // 3：全选\n            group.type = (checkes.length &gt; 0) ? ((checkes.length == group.subs.length) ? 3 : 2) : 1;\n        &#125;)\n\n        this.updater.digest(&#123;\n            list\n        &#125;)\n    &#125;\n&#125;);\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-checkbox/examples/2.html';
    throw msg;
} return $p; },
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