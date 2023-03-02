import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@13.html',
    render() {
        this.updater.digest();
    },
    'open<click>'(event) {
        this.mxDialog('@./dialog-inner-tip', {
            content: '定位自动修正'
        }, {
            width: 400,
            height: 400,
            target: event.target,
            header: {
                title: '浮层标题'
            },
            footer: {
                enter: false,
                cancel: true,
            },
        });
    }
});