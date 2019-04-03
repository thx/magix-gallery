/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/init",["magix","$","../subs","mx-title/second","./init-steps","./init-dir"],(require,exports,module)=>{
/*Magix,$*/
require("../subs");
require("mx-title/second");
require("./init-steps");
require("./init-dir");
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery___test___pro_cross_","._zs_gallery___test___pro_cross_-line {\n  position: relative;\n  padding-left: 20px;\n  line-height: 32px;\n}\n._zs_gallery___test___pro_cross_-line ._zs_gallery___test___pro_cross_-num {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 20px;\n}\n._zs_gallery___test___pro_cross_-iframe {\n  box-shadow: -2px 0 4px rgba(51, 51, 51, 0.08), 0 -2px 4px rgba(51, 51, 51, 0.08), 0 2px 4px rgba(51, 51, 51, 0.08), 2px 0 4px rgba(51, 51, 51, 0.08);\n}\n");
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
    $p += '<div mxs="_zs_galleryp:_" class="mx-notice mx-notice-border mx-notice-highlight mb20 mr20" style="text-align: left"><div class="mx-notice-inner">依赖<a class="link-brand" href="https://thx.github.io/magix-cli-book/#/" target="_blank" rel="noopener noreferrer">magix-cli</a>命令行工具快速创建magix项目，接口人<a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=vuop5vn" class="ml5"><i class="mc-iconfont color-brand fontsize-18 displacement-2">&#xe677;</i>崇志</a></div></div><div mxa="_zs_galleryp:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 8;
    $art = '@[{\n        name: \'效果预览\',\n        key: viewId + \'_preview\'\n    }, {\n        name: \'创建步骤\',\n        key: viewId + \'_steps\'\n    }, {\n        name: \'目录结构说明\',\n        key: viewId + \'_dir\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'效果预览\',            key: viewId + \'_preview\'        }, {            name: \'创建步骤\',            key: viewId + \'_steps\'        }, {            name: \'目录结构说明\',            key: viewId + \'_dir\'        }]%>', $i($$ref, [{ name: '效果预览', key: viewId + '_preview' }, { name: '创建步骤', key: viewId + '_steps' }, { name: '目录结构说明', key: viewId + '_dir' }])) + '"></div><div id="';
    $line = 19;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_preview" mx-view="mx-title/second?content=%E6%95%88%E6%9E%9C%E9%A2%84%E8%A7%88&tip=%E4%BB%A5%E4%B8%8B%E7%A4%BA%E4%BE%8Biframe%E5%B5%8C%E5%85%A5%EF%BC%8C%E5%AE%8C%E6%95%B4%E5%8F%AF%E6%93%8D%E4%BD%9C"></div><div mxs="_zs_galleryp:a" class="pr20 mb40"><div class="mb10">脚手架git仓库：<a class="link-brand" href="http://gitlab.alibaba-inc.com/mm/zs_scaffold" target="_blank">http://gitlab.alibaba-inc.com/mm/zs_scaffold</a></div><div class="mb10">iconfont库：<a class="link-brand" href="https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.11&manage_type=myprojects&projectId=826439" target="_blank">https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=826439</a></div><div class="mb20">图表库：<a class="link-brand" href="https://chartpark.alibaba-inc.com/#!/manage/index?projectId=13" target="_blank">https://chartpark.alibaba-inc.com/#!/manage/index?projectId=13</a></div><iframe src="https://mo.m.taobao.com/page_201902152003028" class="_zs_gallery___test___pro_cross_-iframe" width="100%" height="770" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" border="0"></iframe></div><div id="';
    $line = 36;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_steps" mx-view="mx-title/second?content=%E5%88%9B%E5%BB%BA%E6%AD%A5%E9%AA%A4&tip=magix-cli%E5%B7%A5%E5%85%B7%3Ca%20rel%3D%27noopener%20noreferrer%27%20href%3D%27https%3A%2F%2Fthx.github.io%2Fmagix-cli-book%2F%23%2F%27%20target%3D%27_blank%27%20class%3D%27color-brand%27%3Ehttps%3A%2F%2Fthx.github.io%2Fmagix-cli-book%2F%23%2F%3C%2Fa%3E"></div><div mxs="_zs_galleryp:b" mx-view="__test__/pro/init-steps" class="pr20 mb40"></div><div id="';
    $line = 41;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_dir" mx-view="mx-title/second?content=%E8%84%9A%E6%89%8B%E6%9E%B6%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84%E8%AF%B4%E6%98%8E&tip=%E4%BA%91%E9%9B%80%E6%96%87%E6%A1%A3%E5%9C%B0%E5%9D%80%3Ca%20rel%3D%27noopener%20noreferrer%27%20href%3D%27https%3A%2F%2Flark.alipay.com%2Fchongzhi.ldq%2Fez0zq4%2Fluqazk%27%20target%3D%27_blank%27%20class%3D%27color-brand%27%3Ehttps%3A%2F%2Flark.alipay.com%2Fchongzhi.ldq%2Fez0zq4%2Fluqazk%3C%2Fa%3E"></div><div mxs="_zs_galleryp:c" mx-view="__test__/pro/init-dir"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/pro/init.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id
        });
    }
});

});