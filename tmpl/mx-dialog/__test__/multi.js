let Magix = require('magix');
let Dialog = require('@../index');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@multi.html',
    mixins: [Dialog],
    init(e) {
        this.viewOptions = e;

        let { width, height, number } = e;
        this.updater.set({
            viewId: this.id,
            width,
            height,
            number
        })
    },
    render() {
        let that = this;

        // 延时显示loading动画
        setTimeout(() => {
            that.updater.digest();

            let { height } = that.updater.get();
            let hd = $(`#${that.id}_hd`),
                ft = $(`#${that.id}_ft`);
            let dlg = $(`#${that.id.replace('cnt_', '')}`);
            let btw = +dlg.css('borderTopWidth').replace('px', ''),
                bbw = +dlg.css('borderBottomWidth').replace('px', '');

            $(`#${that.id}_bd`).css({
                height: (height - btw - bbw - hd.outerHeight() - ft.outerHeight()) + 'px',
            })
        }, 400)
    },
    'cancel<click>'(event) {
        event.preventDefault();
        let viewOptions = this.viewOptions;
        if (viewOptions.dialog) {
            viewOptions.dialog.close();
        }
    },
    'modal<click>'(e) {
        let { width, height, number } = this.updater.get();
        this.mxDialog('@./multi', {
            number: +number + 1
        }, {
            width: +width - 100,
            height: +height + 40,
            modal: true
        });
    },
    'closeAll<click>'(e) {
        this.mxCloseAllDialogs();
    },
    'test<click>'(e) {
        this.mxModal('@./quick', {

        }, {
            width: 800,
            header: {
                title: '全屏右出浮层',
                tip: '提示信息'
            },
            footer: {
                enterText: '确认',
                cancelText: '取消'
            }
        });
    },
});
