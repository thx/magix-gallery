/*
ver:1.3.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
require('./alert');
require('./confirm');
Magix.applyStyle('@index.less');
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
    tmpl: '@index.html:updateby[]',
    init(extra) {
        let me = this;
        let app = $('#app');
        me.on('destroy', () => {
            RemoveCache(me);
            DialogZIndex -= 2;
            if (DialogZIndex == 500) {
                app.removeClass('@index.less:blur');
            }
            $('#' + me.id).trigger('close').remove();
        });
        if (!Magix.has(extra, 'closable')) {
            extra.closable = true;
        }
        me.updater.set(extra);
        if (DialogZIndex == 500) {
            app.addClass('@index.less:blur');
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
            $('#body_' + me.id).removeClass('@index.less:anim-body');
            $('#mask_' + me.id).removeClass('@index.less:anim-mask');
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
        if (e.keyCode == 27) { //esc
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
        let vf = view.owner.mountVframe(id, '@moduleId', options);
        let node = $('#' + id);
        let suspend;
        return node.on('dlg_close', () => {
            if (!node.data('closing') && !suspend) {
                let resume = () => {
                    node.data('closing', 1);
                    $('#body_' + id).addClass('@index.less:anim-body-out');
                    $('#mask_' + id).addClass('@index.less:anim-mask-out');
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
            this.mxDialog('@./' + (view || 'confirm'), {
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
                if (me[key]) return;
                me[key] = 1;
                Magix.mix(dOptions, V.dialogOptions);
                Magix.mix(dOptions, options);
                if (!dOptions.width) dOptions.width = 500;
                if (!dOptions.left) dOptions.left = (Win.width() - dOptions.width) / 2;
                if (!dOptions.top) dOptions.top = 100;
                dOptions.dialog = {
                    close() {
                        if (dlg) dlg.trigger('dlg_close');
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
                    if (dlg) dlg.trigger('dlg_close');
                },
                whenClose(fn) {
                    closeCallback = fn;
                }
            };
        }
    });