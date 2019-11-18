/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-im/examples/wangwang",["magix","examples/example","$","examples/subs","mx-title/second","mx-copy/index","examples/hl","examples/api"],(require,exports,module)=>{
/*Magix,Base,$*/
require("examples/subs");
require("mx-title/second");
require("mx-copy/index");
require("examples/hl");
require("examples/api");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1, options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryc^:_" class="pr pr120"><div mx-view="examples/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\'\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\'        }, {            name: \'API\',            key: viewId + \'_api\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo' }, { name: 'API', key: viewId + '_api' }])) + '"></div><div id="';
    $line = 10;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryc^:a" class="mb40"><div mxa="_zs_galleryc^:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxs="_zs_galleryc^:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div class="mb10"><span class="inline-block w120">默认（抖动图标）：</span><a class="mx-ww" href="https://amos.alicdn.com/getcid.aw?v=3&uid=虞佳&site=cntaobao&groupid=0&s=1&charset=UTF-8" target="_blank" rel="noopener noreferrer"><span class="mx-ww-img"></span></a></div><div class="mb10"><span class="inline-block w120">静态图：</span><a icon="static" class="mx-ww" href="https://amos.alicdn.com/getcid.aw?v=3&uid=虞佳&site=cntaobao&groupid=0&s=1&charset=UTF-8" target="_blank" rel="noopener noreferrer"><span class="mx-ww-img"></span></a></div><div class="mb10"><span class="inline-block w120">抖动图标：</span><a icon="small" class="mx-ww" href="https://amos.alicdn.com/getcid.aw?v=3&uid=虞佳&site=cntaobao&groupid=0&s=1&charset=UTF-8" target="_blank" rel="noopener noreferrer"><span class="mx-ww-img"></span></a></div><div class="mb10"><span class="inline-block w120">和我联系图标：</span><a icon="large" class="mx-ww" href="https://amos.alicdn.com/getcid.aw?v=3&uid=虞佳&site=cntaobao&groupid=0&s=1&charset=UTF-8" target="_blank" rel="noopener noreferrer"><span class="mx-ww-img"></span></a></div><div class="mb10"><span class="inline-block w120">无图标+文案：</span><a icon="none" class="mx-ww" href="https://amos.alicdn.com/getcid.aw?v=3&uid=虞佳&site=cntaobao&groupid=0&s=1&charset=UTF-8" target="_blank" rel="noopener noreferrer"><span class="mx-ww-img"></span>联系我</a></div><div class="mb10"><span class="inline-block w120">抖动+文案：</span><a icon="small" class="mx-ww" href="https://amos.alicdn.com/getcid.aw?v=3&uid=虞佳&site=cntaobao&groupid=0&s=1&charset=UTF-8" target="_blank" rel="noopener noreferrer"><span class="mx-ww-img"></span>联系我</a></div></div><div mxa="_zs_galleryc^:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryc^:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 41;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryc^:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 43;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryc^:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 46;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;!-- 默认（抖动图标）：--&gt;\n&lt;mx-im.ww uid="虞佳"/&gt;\n\n&lt;!-- 静态图：--&gt;\n&lt;mx-im.ww icon="static" uid="虞佳"/&gt;\n\n&lt;!-- 抖动图标：--&gt;\n&lt;mx-im.ww icon="small" uid="虞佳"/&gt;\n\n&lt;!-- 和我联系图标：--&gt;\n&lt;mx-im.ww icon="large" uid="虞佳"/&gt;\n\n&lt;!-- 无图标+文案：--&gt;\n&lt;mx-im.ww icon="none" uid="虞佳" content="联系我"/&gt;\n\n&lt;!-- 抖动+文案：--&gt;\n&lt;mx-im.ww icon="small" uid="虞佳"&gt;联系我&lt;/mx-im.ww&gt;\n                </pre></div></div></div><div id="';
    $line = 69;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options=';
    $line = 70;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '" class="mb40"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-im/examples/wangwang.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'uid',
                desc: '用户名，必填',
                type: 'string',
                def: ''
            }, {
                key: 'icon',
                desc: '图标类型<br/>small：抖动小图标<br/>static：静态图标<br/>large：带和我联系图标<br/>none：不需要图标',
                type: 'string',
                def: 'small'
            }, {
                key: 'content',
                desc: '提示内容',
                type: 'string',
                def: ''
            }];
        this.updater.digest({
            options: options
        });
    }
});

});