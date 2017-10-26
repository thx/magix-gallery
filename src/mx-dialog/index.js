/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-dialog/index',["magix","$","./alert","./confirm"],function(require,exports,module){
/*Magix,$*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
require('./alert');
require('./confirm');
Magix.applyStyle("i",".bE{position:absolute}.bF{position:relative;background-color:#fff;border-radius:4px;border:1px solid #e6e6e6}.bG{position:absolute;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;margin:13px 15px 0 0;cursor:pointer;background:transparent;border:0;float:right;font-size:21px;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;filter:alpha(opacity=20);opacity:.2;z-index:1041;top:16px;right:10px;margin:0}.bG:focus,.bG:hover{color:#000;text-decoration:none;cursor:pointer;filter:alpha(opacity=50);opacity:.5}.bH{font-size:22px;font-weight:400}.bI{position:fixed;top:0;right:0;left:0;bottom:0;background-color:#000;filter:alpha(opacity=50);opacity:.5;display:none;z-index:1039}.bJ{-webkit-filter:blur(3px);filter:blur(3px)}.bK{-webkit-animation:b .3s;animation:b .3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.bL{position:absolute;right:10px;top:0;width:1px;height:0}.bM{padding:80px 0}@-webkit-keyframes b{0%{opacity:0}to{opacity:.5}}@keyframes b{0%{opacity:0}to{opacity:.5}}.bN{-webkit-animation:c .2s;animation:c .2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes c{0%{opacity:.5}to{opacity:0}}@keyframes c{0%{opacity:.5}to{opacity:0}}.bO{margin-bottom:50px;min-height:60px}.bP{position:fixed;width:100%;height:100%;overflow:auto;left:0;top:0}.bQ{-webkit-animation:d .3s;animation:d .3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes d{0%{margin-top:-50px;opacity:0}to{margin-top:0;opacity:1}}@keyframes d{0%{margin-top:-50px;opacity:0}to{margin-top:0;opacity:1}}.bR{-webkit-animation:e .2s;animation:e .2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes e{0%{margin-top:0;opacity:1}to{margin-top:-50px;opacity:0}}@keyframes e{0%{margin-top:0;opacity:1}to{margin-top:-50px;opacity:0}}");
var $ = require('$');
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
    tmpl: {"html":"<div class=\"bI bK\" style=\"display: block;z-index:<%=$$.zIndex-1%>\" id=\"mask_<%=$$.viewId%>\"></div><div class=\"bP\" style=\"z-index:<%=$$.zIndex%>\"><div class=\"bE bQ\" data-spm-protocol=\"i\" id=\"body_<%=$$.viewId%>\" style=\"left:<%=$$.left%>px;top:<%=$$.top%>px;width:<%=$$.width%>px\"><input id=\"focus_<%=$$.viewId%>\" class=\"bL\"><button type=\"button\" mx-click=\"\u001f\u001e_am()\" class=\"bG <%=$$.closable?'':'af'%>\"><span class=\"_ bH\">&#xe67f;</span></button><div class=\"bF bO\" id=\"cnt_<%=$$.viewId%>\"><div class=\"aA bM\"><span class=\"aB\"></span></div></div></div></div>","subs":[]},
    init: function (extra) {
        var me = this;
        var app = $('#app');
        me.on('destroy', function () {
            RemoveCache(me);
            DialogZIndex -= 2;
            if (DialogZIndex == 500) {
                app.removeClass('bJ');
            }
            $('#' + me.id).trigger('close').remove();
        });
        if (!Magix.has(extra, 'closable')) {
            extra.closable = true;
        }
        me.updater.set(extra);
        if (DialogZIndex == 500) {
            app.addClass('bJ');
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
            $('#body_' + me.id).removeClass('bQ');
            $('#mask_' + me.id).removeClass('bK');
        }), 300);
    },
    '_al': function (e) {
        var vf = Magix.Vframe.get('cnt_' + this.id);
        vf.invoke('fire', ['unload', e]);
    },
    '_am<click>': function () {
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
    '_an': function (view, options) {
        var id = Magix.guid('dlg_');
        $(document.body).append('<div id="' + id + '" style="display:none" />');
        var vf = view.owner.mountVframe(id, 'mx-dialog/index', options);
        var node = $('#' + id);
        var suspend;
        return node.on('dlg_close', function () {
            if (!node.data('closing') && !suspend) {
                var resume_1 = function () {
                    node.data('closing', 1);
                    $('#body_' + id).addClass('bR');
                    $('#mask_' + id).addClass('bN');
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
                vf.invoke('_al', e_1);
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
        Magix.use(view, me.wrapAsync(function (V) {
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
            dlg = me['_an'](me, dOptions);
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