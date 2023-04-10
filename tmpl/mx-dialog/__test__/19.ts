import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@19.html',
    render() {
        this.updater.digest();
    },
    'open<click>'(e) {
        this.mxModal('@./column', {
        }, {
            ladder: {
                width: 'xlarge',
            },
            header: {
                title: '浮层标题',
                tip: '标题旁提示',
            },
        });
    },
});