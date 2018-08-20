/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-duration/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Vframe = Magix.Vframe;
var Base = require("__test__/example");
var $ = require("$");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, ok = $$.ok, result = $$.result, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryaf:_" class="_zs_gallery___test___base_-example"><div mxa="_zs_galleryaf:a" class="_zs_gallery___test___base_-eg-content"><div mxs="_zs_galleryaf:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>可选时间间隔为1小时</div><div>宽度随容器自适应，最小780</div><div>清空时获取选中值，提示未选择内容不可提交</div></div></div><div mxa="_zs_galleryaf:b" class="mb20"><a mxs="_zs_galleryaf:a" href="javascript:;" mx-click="' + $viewId + 'get()" class="btn btn-brand mr20">获取当前选中值</a>';
    $line = 13;
    $art = 'if ok';
    ;
    $p += '';
    $expr = '<%if(ok){%>';
    if (ok) {
        ;
        $p += '<span>';
        $line = 14;
        $art = '=result';
        ;
        $p += '' + ($expr = '<%=result%>', $e(result)) + '</span>';
        $line = 15;
        $art = 'else';
        ;
        $p += '';
        $expr = '<%}else{%>';
    }
    else {
        ;
        $p += '<span mxs="_zs_galleryaf:b" class="color-red">请至少选择一个时段</span>';
        $line = 17;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div id="';
    $line = 19;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_duration" mx-view="mx-duration/index?width=800&selected=';
    $line = 21;
    $art = '=result';
    ;
    $p += '' + ($expr = '<%!$eu(result)%>', $eu(result)) + '"></div></div><div mxa="_zs_galleryaf:c" class="clearfix"><div mxa="_zs_galleryaf:d" class="_zs_gallery___test___base_-eg-desc _zs_gallery___test___base_-third1"><div mxs="_zs_galleryaf:c" class="_zs_gallery___test___base_-eg-title">HTML Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 26;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryaf:e" class="_zs_gallery___test___base_-desc-tip">';
    $line = 28;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryaf:d" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 31;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-duration id="&#123;&#123;=viewId&#125;&#125;_duration"\n    width="800"\n    selected="&#123;&#123;=result&#125;&#125;"/&gt;</pre></div><div mxa="_zs_galleryaf:f" class="_zs_gallery___test___base_-eg-desc _zs_gallery___test___base_-third2 _zs_gallery___test___base_-half-right"><div mxs="_zs_galleryaf:e" class="_zs_gallery___test___base_-eg-title">JS Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 38;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryaf:g" class="_zs_gallery___test___base_-desc-tip">';
    $line = 40;
    $art = '!text2';
    ;
    $p += '' + ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryaf:d" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 43;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Vframe = Magix.Vframe;\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            viewId: this.id,\n            ok: true,\n            result: \'00:00-12:00:60,12:00-24:00:250;00:00-24:00:240;00:00-24:00:100;00:00-24:00:220;00:00-24:00:100;00:00-24:00:100;00:00-24:00:100\'\n        &#125;);\n    &#125;,\n    \'get&lt;click&gt;\'(event) &#123;\n        let vf = Vframe.get(this.id + \'_duration\');\n        let result = vf.invoke(\'submit\');\n\n        // ok：\n        //      false 未选择任何时段\n        //      true 已选择时段\n        // result.val 当前选中值，ok = true时\n        this.updater.digest(&#123;\n            ok: result.ok,\n            result: result.val\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-duration/__test__/1.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id,
            ok: true,
            result: '00:00-12:00:60,12:00-24:00:250;00:00-24:00:240;00:00-24:00:100;00:00-24:00:220;00:00-24:00:100;00:00-24:00:100;00:00-24:00:100'
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