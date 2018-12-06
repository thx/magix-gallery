/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/index",["magix","$","./alert","./confirm"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
require("./alert");
require("./confirm");
Magix.applyStyle("__mx-dialog_index_","/* @dependent: ./index.less */\n.__mx-dialog_index_-dialog {\n  position: absolute;\n}\n.__mx-dialog_index_-dialog-content {\n  position: relative;\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #e6e6e6;\n}\n.__mx-dialog_index_-dialog-close {\n  position: absolute;\n  cursor: pointer;\n  opacity: 0.2;\n  z-index: 1;\n  top: 16px;\n  right: 10px;\n}\n.__mx-dialog_index_-dialog-close:hover,\n.__mx-dialog_index_-dialog-close:focus {\n  opacity: 0.5;\n}\n.__mx-dialog_index_-iconfont-ext {\n  font-size: 22px;\n  font-weight: normal;\n}\n.__mx-dialog_index_-dialog-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: #000;\n  opacity: 0.5;\n  display: none;\n}\n.__mx-dialog_index_-blur {\n  -webkit-filter: blur(3px);\n          filter: blur(3px);\n}\n.__mx-dialog_index_-anim-mask {\n  -webkit-animation: __mx-dialog_index_-fadein 0.3s;\n          animation: __mx-dialog_index_-fadein 0.3s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.__mx-dialog_index_-focus {\n  position: absolute;\n  right: 10px;\n  top: 0;\n  width: 1px;\n  height: 0px;\n}\n.__mx-dialog_index_-loading-ext {\n  padding: 80px 0;\n}\n@-webkit-keyframes __mx-dialog_index_-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 0.5;\n  }\n}\n@keyframes __mx-dialog_index_-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 0.5;\n  }\n}\n.__mx-dialog_index_-anim-mask-out {\n  -webkit-animation: __mx-dialog_index_-fadeout 0.2s;\n          animation: __mx-dialog_index_-fadeout 0.2s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n@-webkit-keyframes __mx-dialog_index_-fadeout {\n  from {\n    opacity: 0.5;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes __mx-dialog_index_-fadeout {\n  from {\n    opacity: 0.5;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.__mx-dialog_index_-dialog-content-ext {\n  margin-bottom: 50px;\n  min-height: 60px;\n}\n.__mx-dialog_index_-scroll-cnt {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  left: 0;\n  top: 0;\n}\n.__mx-dialog_index_-anim-body {\n  -webkit-animation: __mx-dialog_index_-move 0.3s;\n          animation: __mx-dialog_index_-move 0.3s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n@-webkit-keyframes __mx-dialog_index_-move {\n  from {\n    margin-top: -50px;\n    opacity: 0;\n  }\n  to {\n    margin-top: 0;\n    opacity: 1;\n  }\n}\n@keyframes __mx-dialog_index_-move {\n  from {\n    margin-top: -50px;\n    opacity: 0;\n  }\n  to {\n    margin-top: 0;\n    opacity: 1;\n  }\n}\n.__mx-dialog_index_-anim-body-out {\n  -webkit-animation: __mx-dialog_index_-moveup 0.2s;\n          animation: __mx-dialog_index_-moveup 0.2s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n@-webkit-keyframes __mx-dialog_index_-moveup {\n  from {\n    margin-top: 0;\n    opacity: 1;\n  }\n  to {\n    margin-top: -50px;\n    opacity: 0;\n  }\n}\n@keyframes __mx-dialog_index_-moveup {\n  from {\n    margin-top: 0;\n    opacity: 1;\n  }\n  to {\n    margin-top: -50px;\n    opacity: 0;\n  }\n}\n");
var $ = require("$");
var Win = $(window);
var DialogZIndex = 500;
var CacheList = [];
var RemoveCache = function (view) {
    for (var i = CacheList.length - 1, one = void 0; i >= 0; i--) {
        one = CacheList[i];
        if (one.id == view.id) {
            CacheList.splice(i, 1);
            break;
        }
    }
};
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
} ; var $g = '', $_temp, $p = '', zIndex = $$.zIndex, viewId = $$.viewId, left = $$.left, top = $$.top, width = $$.width, closable = $$.closable; var $expr, $art, $line; try {
    $p += '<div class="__mx-dialog_index_-dialog-backdrop __mx-dialog_index_-anim-mask" style="display:block;z-index:' + ($expr = '<%=zIndex - 1%>', $e(zIndex - 1)) + '" id="mask_' + ($expr = '<%=viewId%>', $e(viewId)) + '"></div><div mxv class="__mx-dialog_index_-scroll-cnt" style="z-index:' + ($expr = '<%=zIndex%>', $e(zIndex)) + ';"><div mxv class="__mx-dialog_index_-dialog __mx-dialog_index_-anim-body" data-spm-protocol="i" id="body_' + ($expr = '<%=viewId%>', $e(viewId)) + '" style="left:' + ($expr = '<%=left%>', $e(left)) + 'px;top:' + ($expr = '<%=top%>', $e(top)) + 'px;width:' + ($expr = '<%=width%>', $e(width)) + 'px;"><input id="focus_' + ($expr = '<%=viewId%>', $e(viewId)) + '" class="__mx-dialog_index_-focus"/><span class="__mx-style_index_-mc-iconfont __mx-dialog_index_-iconfont-ext __mx-dialog_index_-dialog-close ' + ($expr = '<%=closable ? \'\' : \'__mx-style_index_-none\'%>', $e(closable ? '' : '__mx-style_index_-none')) + '" mx-click="' + $viewId + '@{close}()">&#xe67f;</span><div class="__mx-dialog_index_-dialog-content __mx-dialog_index_-dialog-content-ext" id="cnt_' + ($expr = '<%=viewId%>', $e(viewId)) + '"><div mxs="_8:_" class="__mx-style_index_-loading __mx-dialog_index_-loading-ext"><span class="__mx-style_index_-loading-anim"></span></div></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dialog/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        var app = $('#app');
        me.on('destroy', function () {
            RemoveCache(me);
            DialogZIndex -= 2;
            if (DialogZIndex == 500) {
                app.removeClass('__mx-dialog_index_-blur');
            }
            $('#' + me.id).trigger('close').remove();
        });
        if (!Magix.has(extra, 'closable')) {
            extra.closable = true;
        }
        me.updater.set(extra);
        if (DialogZIndex == 500) {
            app.addClass('__mx-dialog_index_-blur');
        }
        DialogZIndex += 2;
        CacheList.push(me);
    },
    render: function () {
        var me = this;
        var updater = me.updater;
        var data = updater.get();
        updater.set({
            zIndex: DialogZIndex,
            viewId: me.id
        }).digest();
        $('#' + me.id).show();
        $('#focus_' + me.id).focus();
        me.owner.mountVframe('cnt_' + me.id, data.view, data);
        setTimeout(me.wrapAsync(function () {
            $('#body_' + me.id).removeClass('__mx-dialog_index_-anim-body');
            $('#mask_' + me.id).removeClass('__mx-dialog_index_-anim-mask');
        }), 300);
    },
    '@{notify.main.view.unload}': function (e) {
        var vf = Magix.Vframe.get('cnt_' + this.id);
        vf.invoke('fire', ['unload', e]);
    },
    '@{close}<click>': function () {
        $('#' + this.id).trigger('dlg_close');
    },
    '$doc<keyup>': function (e) {
        if (e.keyCode == 27) { //esc
            var dlg = CacheList[CacheList.length - 1];
            if (dlg == this && dlg.updater.get('closable')) {
                var node = $('#' + dlg.id);
                node.trigger('dlg_close');
            }
        }
    }
}, {
    '@{dialog.show}': function (view, options) {
        var id = Magix.guid('dlg_');
        $(document.body).append('<div id="' + id + '" style="display:none" />');
        var vf = view.owner.mountVframe(id, 'mx-dialog/index', options);
        var node = $('#' + id);
        var suspend;
        return node.on('dlg_close', function () {
            if (!node.data('closing') && !suspend) {
                var resume_1 = function () {
                    node.data('closing', 1);
                    $('#body_' + id).addClass('__mx-dialog_index_-anim-body-out');
                    $('#mask_' + id).addClass('__mx-dialog_index_-anim-mask-out');
                    setTimeout(function () {
                        if (view.owner) {
                            view.owner.unmountVframe(id);
                        }
                    }, 200);
                };
                var e_1 = {
                    prevent: function () {
                        suspend = 1;
                    },
                    resolve: function () {
                        e_1.p = 1;
                        suspend = 0;
                        resume_1();
                    },
                    reject: function () {
                        e_1.p = 1;
                        suspend = 0;
                    }
                };
                vf.invoke('@{notify.main.view.unload}', [e_1]);
                if (!suspend && !e_1.p) {
                    resume_1();
                }
            }
        });
    },
    alert: function (content, enterCallback, title) {
        this.confirm(content, enterCallback, null, title, 'alert');
    },
    confirm: function (content, enterCallback, cancelCallback, title, view) {
        this.mxDialog('mx-dialog/' + (view || 'confirm'), {
            body: content,
            cancelCallback: cancelCallback,
            enterCallback: enterCallback,
            title: title,
            modal: true,
            width: 400,
            closable: false,
            left: (Win.width() - 400) / 2,
            top: Math.max((Win.height() - 220) / 2, 0)
        });
    },
    mxDialog: function (view, options) {
        var me = this;
        var dlg;
        var closeCallback;
        var dOptions = {
            view: view
        };
        seajs.use(view, me.wrapAsync(function (V) {
            var key = '$dlg_' + view;
            if (me[key])
                return;
            me[key] = 1;
            Magix.mix(dOptions, V.dialogOptions);
            Magix.mix(dOptions, options);
            if (!dOptions.width)
                dOptions.width = 500;
            if (!dOptions.left)
                dOptions.left = (Win.width() - dOptions.width) / 2;
            if (!dOptions.top)
                dOptions.top = 100;
            dOptions.dialog = {
                close: function () {
                    if (dlg)
                        dlg.trigger('dlg_close');
                }
            };
            dlg = me['@{dialog.show}'](me, dOptions);
            dlg.on('close', function () {
                delete me[key];
                if (closeCallback) {
                    closeCallback();
                }
            });
        }));
        return {
            close: function () {
                if (dlg)
                    dlg.trigger('dlg_close');
            },
            whenClose: function (fn) {
                closeCallback = fn;
            }
        };
    }
});

});