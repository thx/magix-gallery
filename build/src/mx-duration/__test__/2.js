/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-duration/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Vframe = Magix.Vframe;
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
} ; var $g = '', $_temp, $p = '', ok = $$.ok, result = $$.result, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxa="_zs_gallerya1:_" class="_zs_galleryh"><div mxa="_zs_gallerya1:a" class="_zs_galleryk"><div mxs="_zs_gallerya1:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>可选时间间隔为1小时</div><div>宽度随容器自适应，最小780</div><div>清空时获取选中值，提示未选择内容不可提交</div></div></div><div mxa="_zs_gallerya1:b" class="mb20"><a mxs="_zs_gallerya1:a" href="javascript:;" mx-click="' + $viewId + 'get()" class="btn btn-brand mr20">获取当前选中值</a>'; if (ok) {
    ;
    $p += '<span>' + $e(result) + '</span>';
}
else {
    ;
    $p += '<span mxs="_zs_gallerya1:b" class="color-red">请至少选择一个时段</span>';
} ; $p += '</div><div id="' + $e(viewId) + '_duration" mx-view="mx-duration/index?width=900&half=true&selected=' + $eu(result) + '"></div></div><div mxa="_zs_gallerya1:c" class="clearfix"><div mxa="_zs_gallerya1:d" class="_zs_galleryl _zs_gallerya"><div mxs="_zs_gallerya1:c" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerya1:e" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerya1:d" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-duration id="&#123;&#123;=viewId&#125;&#125;_duration"\n    width="900"\n    half="true"\n    selected="&#123;&#123;=result&#125;&#125;"/&gt;</pre></div><div mxa="_zs_gallerya1:f" class="_zs_galleryl _zs_galleryb _zs_galleryf"><div mxs="_zs_gallerya1:e" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_gallerya1:g" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_gallerya1:d" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\nlet Magix = require(\'magix\');\nlet Vframe = Magix.Vframe;\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            viewId: this.id,\n            ok: true,\n            result: \'00:00-12:00:100,12:00-24:00:220;0;0;0;0;0;00:00-24:00:100\'\n        &#125;);\n    &#125;,\n    \'get&lt;click&gt;\'(event) &#123;\n        let vf = Vframe.get(this.id + \'_duration\');\n        let result = vf.invoke(\'submit\');\n\n        // ok：\n        //      false 未选择任何时段\n        //      true 已选择时段\n        // result.val 当前选中值，ok = true时\n        this.updater.digest(&#123;\n            ok: result.ok,\n            result: result.val\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>'; return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id,
            ok: true,
            result: '00:00-12:00:100,12:00-24:00:220;0;0;0;0;0;00:00-24:00:100'
        });
    },
    'get<click>': function (event) {
        var vf = Vframe.get(this.id + '_duration');
        var result = vf.invoke('submit');
        // ok：
        //      false 未选择任何时段
        //      true 已选择时段
        // result.val 当前选中值，ok = true时
        this.updater.digest({
            ok: result.ok,
            result: result.val
        });
    }
});

});