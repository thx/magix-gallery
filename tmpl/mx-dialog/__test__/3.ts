import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@3.html',
    render() {
        this.updater.digest();
    },
    'open1<click>'(event) {
        this.mxDialog('@./dialog-inner-tip', {
            content: '当前节点下居中',
        }, {
            target: `#${this.id}_test`,
            header: {
                title: '浮层标题'
            },
            footer: {
                enter: false,
                cancel: true,
            }
        });
    },
    'open2<click>'(event) {
        this.mxDialog('@./dialog-inner-tip', {
            content: '当前节点下居中 + 偏移'
        }, {
            target: event.target,
            offset: {
                left: 100,
                top: -20
            },
            header: {
                title: '浮层标题'
            },
            footer: {
                enter: false,
                cancel: true,
            }
        });
    }
});