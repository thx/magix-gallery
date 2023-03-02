import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@16.html',
    render() {
        this.updater.digest();
    },
    'open<click>'(e) {
        this.mxModal('@./modal-quick', {

        }, {
            width: 800,
            header: {
                title: '全屏右出浮层',
                tip: '提示信息'
            },
        });
    }
});