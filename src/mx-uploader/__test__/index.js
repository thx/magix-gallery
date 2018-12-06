/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-uploader/__test__/index",["magix","../index","mx-progress/index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("mx-progress/index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
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
} ; var $g = '', $_temp, $p = '', percent = $$.percent; var $expr, $art, $line; try {
    $p += '<h2 mxs="_Q:_">mx-uploader</h2><div mxa="_Q:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxs="_Q:a" class="__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-fl" mx-start="' + $viewId + 'showStart()" mx-error="' + $viewId + 'showError()" mx-success="' + $viewId + 'showSuccess()" mx-progress="' + $viewId + 'showProgress()" mx-view="mx-uploader/index?path=mx-uploader%2Findex&action=.%2Findex.html&name=file1&multiple=true">上传文件</div><div class="__mx-style_index_-fl __mx-style_index_-ml20" mx-view="mx-progress/index?value=' + ($expr = '<%!$eu(percent)%>', $eu(percent)) + '&fixed=2"></div></div><div mxs="_Q:b" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-uploader\n    class="btn btn-brand fl"\n    action="./index.html"\n    name="file1"\n    multiple="true"\n    mx-error="showError()"\n    mx-success="showSuccess()"\n    mx-progress="showProgress()"\n&gt;上传文件&lt;/mx-uploader&gt;\n&lt;mx-progress value="&lt;%=percent%&gt;" fixed="2" class="fl ml20" /&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest({\n            showProgress: false,\n            percent: 0\n        });\n    },\n    \'showError&lt;error&gt;\'(e) {\n        console.log(e.error);\n    },\n    \'showSuccess&lt;success&gt;\'(e) {\n        console.log(e.response);\n    },\n    \'showProgress&lt;progress&gt;\'(e) {\n        this.updater.digest({\n            percent:e.percent\n        });\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-uploader/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
        me.updater.digest({
            showProgress: false,
            percent: 0
        });
    },
    'showError<error>': function (e) {
        console.log(e.error);
    },
    'showSuccess<success>': function (e) {
        console.log(e.response);
    },
    'showProgress<progress>': function (e) {
        this.updater.digest({
            percent: e.percent
        });
    },
    'showStart<start>': function (e) {
        console.log(e);
    }
});

});