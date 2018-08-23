let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@index.less');

let Win = $(window);
let DialogZIndex = 500;
let Duration = 250;

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
        me.on('destroy', () => {
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
    render() {
        let me = this;
        let updater = me.updater;
        let data = updater.get();
        updater.digest();
        
        setTimeout(me.wrapAsync(() => {
            $('#wrapper_' + me.id).addClass('@index.less:wrapper-out');
            $('#mask_' + me.id).addClass('@index.less:backdrop-out');
            me.owner.mountVframe('cnt_' + me.id, data.view, data);

            $('#wrapper_' + me.id).on('scroll', () => {
                // popover追加到body，滚动时通知节点改动定位
                $(document).trigger('dialogScolll');
            })
        }), Duration);
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
        if (options.mask) {
            let mask = $('<div class="@index.less:dialog-backdrop" id="mask_' + id + '" />');
            mask.css({
                zIndex: DialogZIndex - 1
            })
            $(document.body).append(mask);
        }

        let wrapperId = 'wrapper_' + id,
            wrapperZIndex = DialogZIndex,
            width = options.width,
            left = options.left,
            top = options.top;
        let wrapper = $(`<div class="@index.less:dialog-wrapper" id="${wrapperId}"
            style="z-index:${wrapperZIndex}">
            <div class="@index.less:dialog" id="${id}"
                style="top:${top}px; left:${left}px; width:${width}px;"></div>
        </div>`);
        $(document.body).append(wrapper);

        // 禁止body滚动
        $(document.body).addClass('@index.less:modal');
        if (options.modal) {
            wrapper.addClass('@index.less:modal');
        }

        let vf = view.owner.mountVframe(id, '@moduleId', options);
        let node = $('#' + id);
        let suspend;
        return node.on('dlg_close', () => {
            if (!node.data('closing') && !suspend) {
                let resume = () => {
                    node.data('closing', 1);

                    $('#wrapper_' + id).removeClass('@index.less:wrapper-out');
                    $('#mask_' + id).removeClass('@index.less:backdrop-out');

                    setTimeout(() => {
                        node.trigger('close');

                        if (view.owner) {
                            view.owner.unmountVframe(id);
                        }
                        $('#wrapper_' + id).remove();
                        $('#mask_' + id).remove();
                        
                        // 有浮层展开的情况下，body都不可滚动
                        $(document.body)[(CacheList.length == 0) ? 'removeClass' : 'addClass']('@index.less:modal');
                    }, Duration);
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
                vf.invoke('@{notify.main.view.unload}', [e]);
                if (!suspend && !e.p) {
                    resume();
                }
            }
        });
    },

    alert(title, content, enterCallback, dialogOptions) {
        dialogOptions = dialogOptions || {};
        let hasBtns = ((dialogOptions.btns + '') !== 'false');

        return this.mxDialog('@./alert', {
            title,
            content,
            enterCallback,
            hasBtns
        }, Magix.mix({
            width: 320,
            closable: false,
            mask: false
        }, dialogOptions))
    },

    confirm(viewOptions, dialogOptions) {
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
        return this.mxDialog('@./confirm', viewOptions, Magix.mix({
            width: 320,
            closable: false,
            mask: false
        }, (dialogOptions || {})));
    },

    mxDialogGroup(viewOptions, dialogOptions){
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
        return this.mxDialog('@./group', viewOptions, Magix.mix({
            width: 800,
            closable: true,
            mask: true
        }, (dialogOptions || {})));
    },

    mxDialog(view, viewOptions, dialogOptions) {
        let me = this;
        let dlg;
        let closeCallback;

        let dOptions = {
            view: view
        };
        seajs.use(view, me.wrapAsync(V => {
            let key = '$dlg_' + view;
            if (me[key]) {
                return;
            }
            me[key] = 1;

            dialogOptions = dialogOptions || {};
            let width = dialogOptions.width || 400,
                height = dialogOptions.height || 260;

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
                close() {
                    if (dlg) {
                        dlg.trigger('dlg_close');
                    }
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
                if (dlg) {
                    dlg.trigger('dlg_close');
                }
            },
            whenClose(fn) {
                closeCallback = fn;
            }
        };
    }
});