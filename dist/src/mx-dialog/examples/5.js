/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/examples/5",["magix","mx-dialog/index","examples/example","$","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Dialog,Base,$*/
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Dialog = require("mx-dialog/index"); //mixins dialog
var Base = require("examples/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-dialog_index_","._zs_gallery_mx-dialog_index_-dialog-backdrop,\n._zs_gallery_mx-dialog_index_-dialog-wrapper {\n  position: fixed;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: all var(--duration);\n}\n._zs_gallery_mx-dialog_index_-dialog-backdrop {\n  opacity: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n._zs_gallery_mx-dialog_index_-dialog-backdrop._zs_gallery_mx-dialog_index_-backdrop-out {\n  opacity: 1;\n}\n._zs_gallery_mx-dialog_index_-dialog {\n  position: absolute;\n  border-radius: var(--border-radius);\n  background-color: #fff;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n._zs_gallery_mx-dialog_index_-dialog ._zs_gallery_mx-dialog_index_-dialog-content {\n  position: relative;\n  word-break: break-all;\n}\n._zs_gallery_mx-dialog_index_-dialog ._zs_gallery_mx-dialog_index_-dialog-close {\n  position: absolute;\n  top: 16px;\n  right: 24px;\n  width: 26px;\n  height: 26px;\n  z-index: 20;\n  border-radius: 50%;\n  background: transparent;\n  color: #ccc;\n  text-align: center;\n}\n._zs_gallery_mx-dialog_index_-dialog ._zs_gallery_mx-dialog_index_-dialog-close ._zs_gallery_mx-dialog_index_-iconfont-ext {\n  font-size: 18px;\n  font-weight: bold;\n  line-height: 26px;\n}\n._zs_gallery_mx-dialog_index_-dialog ._zs_gallery_mx-dialog_index_-dialog-close:hover,\n._zs_gallery_mx-dialog_index_-dialog ._zs_gallery_mx-dialog_index_-dialog-close:focus {\n  background-color: #999;\n  color: #fff;\n}\n._zs_gallery_mx-dialog_index_-dialog._zs_gallery_mx-dialog_index_-full {\n  border-radius: 0;\n}\n/**\n * 按钮中间的loading点动画\n */\n@-webkit-keyframes _zs_gallery_mx-dialog_index_-loading-dots {\n  0% {\n    transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, 2px);\n  }\n  50% {\n    transform: translate(0, 0);\n  }\n  75% {\n    transform: translate(0, -2px);\n  }\n  100% {\n    transform: translate(0, 0);\n  }\n}\n@keyframes _zs_gallery_mx-dialog_index_-loading-dots {\n  0% {\n    transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, 2px);\n  }\n  50% {\n    transform: translate(0, 0);\n  }\n  75% {\n    transform: translate(0, -2px);\n  }\n  100% {\n    transform: translate(0, 0);\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-dialog_index_-loading-dots-rev {\n  0% {\n    transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -2px);\n  }\n  50% {\n    transform: translate(0, 0);\n  }\n  75% {\n    transform: translate(0, 2px);\n  }\n  100% {\n    transform: translate(0, 0);\n  }\n}\n@keyframes _zs_gallery_mx-dialog_index_-loading-dots-rev {\n  0% {\n    transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -2px);\n  }\n  50% {\n    transform: translate(0, 0);\n  }\n  75% {\n    transform: translate(0, 2px);\n  }\n  100% {\n    transform: translate(0, 0);\n  }\n}\n._zs_gallery_mx-dialog_index_-loading-dot,\n._zs_gallery_mx-dialog_index_-loading-dot:after,\n._zs_gallery_mx-dialog_index_-loading-dot:before {\n  display: inline-block;\n  width: 4px;\n  height: 4px;\n  background-color: white;\n  vertical-align: middle;\n  border-radius: 50%;\n}\n._zs_gallery_mx-dialog_index_-loading-dot {\n  position: relative;\n  margin: 0 8px;\n}\n._zs_gallery_mx-dialog_index_-loading-dot:after {\n  content: ' ';\n  position: absolute;\n  left: -8px;\n  top: 0;\n  -webkit-animation: _zs_gallery_mx-dialog_index_-loading-dots 0.6s linear 0s infinite;\n          animation: _zs_gallery_mx-dialog_index_-loading-dots 0.6s linear 0s infinite;\n}\n._zs_gallery_mx-dialog_index_-loading-dot:before {\n  content: ' ';\n  position: absolute;\n  left: 8px;\n  top: 0;\n  -webkit-animation: _zs_gallery_mx-dialog_index_-loading-dots-rev 0.6s linear 0s infinite;\n          animation: _zs_gallery_mx-dialog_index_-loading-dots-rev 0.6s linear 0s infinite;\n}\n._zs_gallery_mx-dialog_index_-btn-submit {\n  position: relative;\n}\n._zs_gallery_mx-dialog_index_-btn-submit ._zs_gallery_mx-dialog_index_-submit-text {\n  opacity: 1;\n  position: relative;\n  z-index: 1;\n}\n._zs_gallery_mx-dialog_index_-btn-submit ._zs_gallery_mx-dialog_index_-submit-loading {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n}\n._zs_gallery_mx-dialog_index_-btn-submit._zs_gallery_mx-dialog_index_-btn-submit-loading ._zs_gallery_mx-dialog_index_-submit-text {\n  opacity: 0;\n}\n._zs_gallery_mx-dialog_index_-btn-submit._zs_gallery_mx-dialog_index_-btn-submit-loading ._zs_gallery_mx-dialog_index_-submit-loading {\n  display: inline;\n}\n");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryaQ:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxs="_zs_galleryaQ:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div class="mb20"><span class="color-9">以下示例：</span>说明浮层本身如何获取dialog示例关闭，即this.mxDialog(viewPath, viewOptions, dialogOptions)中viewPath页面如何写</div><div class="pr" style="width: 400px; height: 200px;"><div class="_zs_gallery_mx-dialog_index_-dialog" style="top: 0; left: 0; width: 400px;"><div class="_zs_gallery_mx-dialog_index_-dialog-content"><div class="dialog-header"><div class="fontsize-16">标题</div></div><div class="dialog-body">浮层内容</div><div class="dialog-footer"><a href="javascript:;" class="btn">取消</a></div></div></div></div></div><div mxa="_zs_galleryaQ:a" class="clearfix"><div mxa="_zs_galleryaQ:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-third1"><div mxs="_zs_galleryaQ:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryaQ:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 28;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryaQ:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 31;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;div class="dialog-header"&gt;\n    &lt;div class="fontsize-16"&gt;标题&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class="dialog-body"&gt;\n    浮层内容\n&lt;/div&gt;\n&lt;div class="dialog-footer"&gt;\n    &lt;a href="javascript:;" \n        class="btn" \n        mx-click="cancel()"&gt;&lt;/a&gt; \n&lt;/div&gt;\n            </pre></div><div mxa="_zs_galleryaQ:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-third2 _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-right"><div mxs="_zs_galleryaQ:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 47;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryaQ:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 49;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryaQ:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 52;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    init(e) &#123;\n        this.viewOptions = e;\n    &#125;,\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    \'cancel&lt;click&gt;\'(event) &#123;\n        event.preventDefault();\n        let viewOptions = this.viewOptions;\n        if (viewOptions.dialog) &#123;\n            viewOptions.dialog.close();\n        &#125;\n    &#125;\n&#125;);\n    </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dialog/examples/5.html';
    throw msg;
} return $p; },
    mixins: [Dialog],
    render: function () {
        this.updater.digest();
    },
    'open<click>': function (e) {
        //  viewPath  //dialog view路径
        //  viewOptions //传入dialog的数据，挂载当前dialog实体
        //  dialogOptions //样式覆盖
        //      width： 宽度
        //      height： 高度
        //      modal：是否允许滚动
        //      mask：是否有遮罩
        //      ......
        this.mxDialog('mx-dialog/examples/multi', {
            number: 1
        }, {
            width: 800,
            height: 320,
            modal: true
        });
    }
});

});