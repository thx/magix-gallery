/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-dialog/index',["magix","$","./alert","./confirm"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
require('./alert');
require('./confirm');
Magix.applyStyle("__mx-dialog_index_",".__mx-dialog_index_-dialog {\n  position: absolute;\n}\n.__mx-dialog_index_-dialog-content {\n  position: relative;\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #e6e6e6;\n}\n.__mx-dialog_index_-dialog-close {\n  position: absolute;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  padding: 0;\n  margin: 13px 15px 0 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  filter: alpha(opacity=20);\n  opacity: .2;\n  z-index: 1041;\n  top: 16px;\n  right: 10px;\n  margin: 0;\n}\n.__mx-dialog_index_-dialog-close:hover,\n.__mx-dialog_index_-dialog-close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\n.__mx-dialog_index_-iconfont-ext {\n  font-size: 22px;\n  font-weight: normal;\n}\n.__mx-dialog_index_-dialog-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: #000;\n  filter: alpha(opacity=50);\n  opacity: .5;\n  display: none;\n  z-index: 1039;\n}\n.__mx-dialog_index_-blur {\n  -webkit-filter: blur(3px);\n          filter: blur(3px);\n}\n.__mx-dialog_index_-anim-mask {\n  -webkit-animation: __mx-dialog_index_-fadein .3s;\n          animation: __mx-dialog_index_-fadein .3s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.__mx-dialog_index_-focus {\n  position: absolute;\n  right: 10px;\n  top: 0;\n  width: 1px;\n  height: 0px;\n}\n.__mx-dialog_index_-loading-ext {\n  padding: 80px 0;\n}\n@-webkit-keyframes __mx-dialog_index_-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: .5;\n  }\n}\n@keyframes __mx-dialog_index_-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: .5;\n  }\n}\n.__mx-dialog_index_-anim-mask-out {\n  -webkit-animation: __mx-dialog_index_-fadeout .2s;\n          animation: __mx-dialog_index_-fadeout .2s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n@-webkit-keyframes __mx-dialog_index_-fadeout {\n  from {\n    opacity: .5;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes __mx-dialog_index_-fadeout {\n  from {\n    opacity: .5;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.__mx-dialog_index_-dialog-content-ext {\n  margin-bottom: 50px;\n  min-height: 60px;\n}\n.__mx-dialog_index_-scroll-cnt {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  left: 0;\n  top: 0;\n}\n.__mx-dialog_index_-anim-body {\n  -webkit-animation: __mx-dialog_index_-move .3s;\n          animation: __mx-dialog_index_-move .3s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n@-webkit-keyframes __mx-dialog_index_-move {\n  from {\n    margin-top: -50px;\n    opacity: 0;\n  }\n  to {\n    margin-top: 0;\n    opacity: 1;\n  }\n}\n@keyframes __mx-dialog_index_-move {\n  from {\n    margin-top: -50px;\n    opacity: 0;\n  }\n  to {\n    margin-top: 0;\n    opacity: 1;\n  }\n}\n.__mx-dialog_index_-anim-body-out {\n  -webkit-animation: __mx-dialog_index_-moveup .2s;\n          animation: __mx-dialog_index_-moveup .2s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n@-webkit-keyframes __mx-dialog_index_-moveup {\n  from {\n    margin-top: 0;\n    opacity: 1;\n  }\n  to {\n    margin-top: -50px;\n    opacity: 0;\n  }\n}\n@keyframes __mx-dialog_index_-moveup {\n  from {\n    margin-top: 0;\n    opacity: 1;\n  }\n  to {\n    margin-top: -50px;\n    opacity: 0;\n  }\n}\n");
let $ = require('$');
let Win = $(window);
let DialogZIndex = 500;
let CacheList = [];
let RemoveCache = (view) => {
    for (let i = CacheList.length - 1, one; i >= 0; i--) {
        one = CacheList[i];
        if (one.id == view.id) {
            CacheList.splice(i, 1);
            break;
        }
    }
};
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"__mx-dialog_index_-dialog-backdrop __mx-dialog_index_-anim-mask\" style=\"display:block;z-index:<%=$$.zIndex-1%>\" id=\"mask_<%=$$.viewId%>\"></div><div class=\"__mx-dialog_index_-scroll-cnt\" style=\"z-index:<%=$$.zIndex%>\"><div class=\"__mx-dialog_index_-dialog __mx-dialog_index_-anim-body\" data-spm-protocol=\"i\" id=\"body_<%=$$.viewId%>\" style=\"left:<%=$$.left%>px;top:<%=$$.top%>px;width:<%=$$.width%>px\"><input id=\"focus_<%=$$.viewId%>\" class=\"__mx-dialog_index_-focus\"><button type=\"button\" mx-click=\"\u001f\u001e@{close}()\" class=\"__mx-dialog_index_-dialog-close <%=$$.closable?'':'__mx-style_index_-none'%>\"><span class=\"__mx-style_index_-mc-iconfont __mx-dialog_index_-iconfont-ext\">&#xe67f;</span></button><div class=\"__mx-dialog_index_-dialog-content __mx-dialog_index_-dialog-content-ext\" id=\"cnt_<%=$$.viewId%>\"><div class=\"__mx-style_index_-loading __mx-dialog_index_-loading-ext\"><span class=\"__mx-style_index_-loading-anim\"></span></div></div></div></div>","subs":[],"file":"mx-dialog/index.html"},
    init(extra) {
        let me = this;
        let app = $('#app');
        me.on('destroy', () => {
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
    render() {
        let me = this;
        let updater = me.updater;
        let data = updater.get();
        updater.set({
            zIndex: DialogZIndex,
            viewId: me.id
        }).digest();
        $('#' + me.id).show();
        $('#focus_' + me.id).focus();
        me.owner.mountVframe('cnt_' + me.id, data.view, data);
        setTimeout(me.wrapAsync(() => {
            $('#body_' + me.id).removeClass('__mx-dialog_index_-anim-body');
            $('#mask_' + me.id).removeClass('__mx-dialog_index_-anim-mask');
        }), 300);
    },
    '@{notify.main.view.unload}'(e) {
        let vf = Magix.Vframe.get('cnt_' + this.id);
        vf.invoke('fire', ['unload', e]);
    },
    '@{close}<click>'() {
        $('#' + this.id).trigger('dlg_close');
    },
    '$doc<keyup>'(e) {
        if (e.keyCode == 27) {
            let dlg = CacheList[CacheList.length - 1];
            if (dlg == this && dlg.updater.get('closable')) {
                let node = $('#' + dlg.id);
                node.trigger('dlg_close');
            }
        }
    }
}, {
    '@{dialog.show}'(view, options) {
        let id = Magix.guid('dlg_');
        $(document.body).append('<div id="' + id + '" style="display:none" />');
        let vf = view.owner.mountVframe(id, 'mx-dialog/index', options);
        let node = $('#' + id);
        let suspend;
        return node.on('dlg_close', () => {
            if (!node.data('closing') && !suspend) {
                let resume = () => {
                    node.data('closing', 1);
                    $('#body_' + id).addClass('__mx-dialog_index_-anim-body-out');
                    $('#mask_' + id).addClass('__mx-dialog_index_-anim-mask-out');
                    setTimeout(() => {
                        if (view.owner) {
                            view.owner.unmountVframe(id);
                        }
                    }, 200);
                };
                let e = {
                    prevent() {
                        suspend = 1;
                    },
                    resolve() {
                        e.p = 1;
                        suspend = 0;
                        resume();
                    },
                    reject() {
                        e.p = 1;
                        suspend = 0;
                    }
                };
                vf.invoke('@{notify.main.view.unload}', e);
                if (!suspend && !e.p) {
                    resume();
                }
            }
        });
    },
    alert(content, enterCallback, title) {
        this.confirm(content, enterCallback, null, title, 'alert');
    },
    confirm(content, enterCallback, cancelCallback, title, view) {
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
    mxDialog(view, options) {
        let me = this;
        let dlg;
        let closeCallback;
        let dOptions = {
            view: view
        };
        Magix.use(view, me.wrapAsync(V => {
            let key = '$dlg_' + view;
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
                close() {
                    if (dlg)
                        dlg.trigger('dlg_close');
                }
            };
            dlg = me['@{dialog.show}'](me, dOptions);
            dlg.on('close', () => {
                delete me[key];
                if (closeCallback) {
                    closeCallback();
                }
            });
        }));
        return {
            close() {
                if (dlg)
                    dlg.trigger('dlg_close');
            },
            whenClose(fn) {
                closeCallback = fn;
            }
        };
    }
});

});