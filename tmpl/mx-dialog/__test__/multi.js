let Magix = require('magix');
let Dialog = require('@../index');

module.exports = Magix.View.extend({
    tmpl: '@multi.html',
    mixins: [Dialog],
    init(e) {
        this.viewOptions = e;
    },
    render() {
        let that = this;
        // 延时显示loading动画
        setTimeout(() => {
            let number = +that.viewOptions.number;
            that.updater.digest({
                number: number,
                width: 800 - (number * 100),
                height: 140 + (number * 40)
            });
        }, 2000)
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
            number: number + 1
        }, {
            width: width - 100,
            height: height + 170,
            modal: true
        });
    },
    'closeAll<click>'(e) {
        this.mxCloseAllDialogs();
    }
});
