/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-dialog_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-dialog_index_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-dialog_index_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-dialog_index_-dialog-backdrop,\n._zs_gallery_mx-dialog_index_-dialog-wrapper {\n  position: fixed;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: opacity 0.25s, top 0.25s;\n}\n._zs_gallery_mx-dialog_index_-dialog-backdrop {\n  opacity: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n._zs_gallery_mx-dialog_index_-dialog-backdrop._zs_gallery_mx-dialog_index_-backdrop-out {\n  opacity: 1;\n}\n._zs_gallery_mx-dialog_index_-dialog-wrapper {\n  opacity: 0;\n  top: -50px;\n  overflow-y: auto;\n}\n._zs_gallery_mx-dialog_index_-dialog-wrapper._zs_gallery_mx-dialog_index_-wrapper-out {\n  opacity: 1;\n  top: 0;\n}\n._zs_gallery_mx-dialog_index_-dialog {\n  position: absolute;\n}\n._zs_gallery_mx-dialog_index_-dialog ._zs_gallery_mx-dialog_index_-dialog-content {\n  position: relative;\n  background-color: #fff;\n  border-radius: 4px;\n  word-break: break-all;\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-dialog_index_-dialog ._zs_gallery_mx-dialog_index_-dialog-content ._zs_gallery_mx-dialog_index_-loading-ext {\n  padding: 80px 0;\n}\n._zs_gallery_mx-dialog_index_-dialog ._zs_gallery_mx-dialog_index_-dialog-close {\n  position: absolute;\n  top: 18px;\n  right: 20px;\n  width: 26px;\n  height: 26px;\n  z-index: 2;\n  border-radius: 50%;\n  background: transparent;\n  color: #ccc;\n  text-align: center;\n}\n._zs_gallery_mx-dialog_index_-dialog ._zs_gallery_mx-dialog_index_-dialog-close ._zs_gallery_mx-dialog_index_-iconfont-ext {\n  font-size: 18px;\n  font-weight: bold;\n  line-height: 26px;\n}\n._zs_gallery_mx-dialog_index_-dialog ._zs_gallery_mx-dialog_index_-dialog-close:hover,\n._zs_gallery_mx-dialog_index_-dialog ._zs_gallery_mx-dialog_index_-dialog-close:focus {\n  background-color: #999;\n  color: #fff;\n}\n._zs_gallery_mx-dialog_index_-modal {\n  overflow-y: hidden;\n}\n");
var Win = $(window);
var DialogZIndex = 500;
var Duration = 250;
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
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, closable = $$.closable, viewId = $$.viewId; var $expr, $art, $line; try {
    $p += '';
    $line = 1;
    $art = 'if closable';
    ;
    $p += '';
    $expr = '<%if(closable){%>';
    if (closable) {
        ;
        $p += '<a mxs="_zs_gallery}:_" href="javascript:;" mx-click="' + $viewId + '@{close}()" class="_zs_gallery_mx-dialog_index_-dialog-close"><i class="mc-iconfont _zs_gallery_mx-dialog_index_-iconfont-ext">&#xe603;</i></a>';
        $line = 5;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '<div class="_zs_gallery_mx-dialog_index_-dialog-content" id="cnt_' + ($expr = '<%=viewId%>', $e(viewId)) + '"><div mxs="_zs_gallery}:a" class="loading _zs_gallery_mx-dialog_index_-loading-ext"><span class="loading-anim"></span></div></div>';
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
        me.on('destroy', function () {
            RemoveCache(me);
            // 2 dialog + mask
            DialogZIndex -= 2;
            $('#' + me.id).trigger('dlg_close');
        });
        DialogZIndex += 2;
        CacheList.push(me);
        if (!Magix.has(extra, 'closable')) {
            extra.closable = true;
        }
        me.updater.set(Magix.mix({
            viewId: me.id
        }, extra));
    },
    render: function () {
        var me = this;
        var updater = me.updater;
        var data = updater.get();
        updater.digest();
        setTimeout(me.wrapAsync(function () {
            $('#wrapper_' + me.id).addClass('_zs_gallery_mx-dialog_index_-wrapper-out');
            $('#mask_' + me.id).addClass('_zs_gallery_mx-dialog_index_-backdrop-out');
            me.owner.mountVframe('cnt_' + me.id, data.view, data);
            $('#wrapper_' + me.id).on('scroll', function () {
                // popover追加到body，滚动时通知节点改动定位
                $(document).trigger('dialogScolll');
            });
        }), Duration);
    },
    '@{notify.main.view.unload}': function (e) {
        var vf = Magix.Vframe.get('cnt_' + this.id);
        vf.invoke('fire', ['unload', e]);
    },
    '@{close}<click>': function () {
        $('#' + this.id).trigger('dlg_close');
    },
    '$doc<keyup>': function (e) {
        if (e.keyCode == 27) {
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
        if (options.mask) {
            var mask = $('<div class="_zs_gallery_mx-dialog_index_-dialog-backdrop" id="mask_' + id + '" />');
            mask.css({
                zIndex: DialogZIndex - 1
            });
            $(document.body).append(mask);
        }
        var wrapperId = 'wrapper_' + id, wrapperZIndex = DialogZIndex, width = options.width, left = options.left, top = options.top;
        var wrapper = $("<div class=\"_zs_gallery_mx-dialog_index_-dialog-wrapper\" id=\"" + wrapperId + "\"\n            style=\"z-index:" + wrapperZIndex + "\">\n            <div class=\"_zs_gallery_mx-dialog_index_-dialog\" id=\"" + id + "\"\n                style=\"top:" + top + "px; left:" + left + "px; width:" + width + "px;\"></div>\n        </div>");
        $(document.body).append(wrapper);
        // 禁止body滚动
        $(document.body).addClass('_zs_gallery_mx-dialog_index_-modal');
        if (options.modal) {
            wrapper.addClass('_zs_gallery_mx-dialog_index_-modal');
        }
        var vf = view.owner.mountVframe(id, 'mx-dialog/index', options);
        var node = $('#' + id);
        var suspend;
        return node.on('dlg_close', function () {
            if (!node.data('closing') && !suspend) {
                var resume_1 = function () {
                    node.data('closing', 1);
                    $('#wrapper_' + id).removeClass('_zs_gallery_mx-dialog_index_-wrapper-out');
                    $('#mask_' + id).removeClass('_zs_gallery_mx-dialog_index_-backdrop-out');
                    setTimeout(function () {
                        node.trigger('close');
                        if (view.owner) {
                            view.owner.unmountVframe(id);
                        }
                        $('#wrapper_' + id).remove();
                        $('#mask_' + id).remove();
                        // 有浮层展开的情况下，body都不可滚动
                        $(document.body)[(CacheList.length == 0) ? 'removeClass' : 'addClass']('_zs_gallery_mx-dialog_index_-modal');
                    }, Duration);
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
    alert: function (title, content, enterCallback, dialogOptions) {
        this.mxDialog('mx-dialog/alert', {
            title: title,
            content: content,
            enterCallback: enterCallback
        }, Magix.mix({
            width: 320,
            closable: false,
            mask: false
        }, (dialogOptions || {})));
    },
    confirm: function (viewOptions, dialogOptions) {
        // this.confirm(viewOptions, dialogOptions);
        //      viewOptions
        //          title：标题
        //          content：内容
        //          enterText：自定义确定按钮文案，默认确定
        //          enterCallback：确定按钮响应事件
        //          cancelCallback：取消按钮响应事件
        //      dialogOptions 扩展浮层样式
        //          width： 宽度
        //          height： 高度
        //          modal：是否允许滚动
        //          mask：是否有遮罩
        //          ......
        this.mxDialog('mx-dialog/confirm', viewOptions, Magix.mix({
            width: 320,
            closable: false,
            mask: false
        }, (dialogOptions || {})));
    },
    mxDialogGroup: function (viewOptions, dialogOptions) {
        // this.mxDialogGroup(viewOptions, dialogOptions);
        //      viewOptions
        //          list：传入的对象数组
        //          contentView：中间区域自定义view，会把当前对象完整传入
        //          textKey：右侧文案字段，默认text
        //      dialogOptions 扩展浮层样式
        //          width： 宽度，默认800
        //          height： 高度，默认500
        //          modal：是否允许滚动
        //          mask：是否有遮罩
        //          ......
        viewOptions.height = dialogOptions.height || 500;
        this.mxDialog('mx-dialog/group', viewOptions, Magix.mix({
            width: 800,
            closable: true,
            mask: true
        }, (dialogOptions || {})));
    },
    mxDialog: function (view, viewOptions, dialogOptions) {
        var me = this;
        var dlg;
        var closeCallback;
        var dOptions = {
            view: view
        };
        seajs.use(view, me.wrapAsync(function (V) {
            var key = '$dlg_' + view;
            if (me[key]) {
                return;
            }
            me[key] = 1;
            dialogOptions = dialogOptions || {};
            var width = dialogOptions.width || 400, height = dialogOptions.height || 260;
            // 浮层展示位置
            Magix.mix(dOptions, Magix.mix({
                mask: true,
                modal: false,
                width: width,
                closable: true,
                left: (Win.width() - width) / 2,
                top: Math.max((Win.height() - height) / 2, 0)
            }, dialogOptions));
            // 数据
            Magix.mix(dOptions, viewOptions);
            dOptions.dialog = {
                close: function () {
                    if (dlg) {
                        dlg.trigger('dlg_close');
                    }
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
                if (dlg) {
                    dlg.trigger('dlg_close');
                }
            },
            whenClose: function (fn) {
                closeCallback = fn;
            }
        };
    }
});

});