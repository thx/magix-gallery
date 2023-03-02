import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@dialog-inner-options.html',
    init(e) {
        this.viewOptions = e;
    },
    render() {
        this.updater.digest();
    },
}, {
    dialogOptions: {
        top: 0,
        width: 800,
        header: {
            title: '浮层标题'
        },
        footer: {
            enter: false,
            cancel: true,
        }
    }
});
