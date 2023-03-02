import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@dialog-multi.html',
    init(e) {
        this.viewOptions = e;

        let { width, height, number } = e;
        this.updater.set({
            viewId: this.id,
            width,
            height,
            number,
        })
    },
    render() {
        let that = this;

        // 延时显示loading动画
        setTimeout(() => {
            that.updater.digest();
        }, 400)
    },
    'modal<click>'(e) {
        let { width, height, number } = this.updater.get();
        this.mxDialog('@./dialog-multi', {
            number: +number + 1
        }, {
            width: +width - 100,
            height: +height + 40,
            modal: true,
            header: {
                title: '多个带modal的浮层'
            },
            footer: {
                enter: false,
                cancel: true,
            },
        });
    },
    'closeAll<click>'(e) {
        this.mxCloseAllDialogs();
    },
});
