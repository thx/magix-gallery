import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@18.html',
    render() {
        this.updater.digest();
    },
    'open<click>'(e) {
        this.mxDialog('@./dialog-inner-tip', {
            content: '当前浮层显示出框图',
        }, {
            outerImg: 'https://img.alicdn.com/imgextra/i2/O1CN01y9fLAd1ZyVBSgP91k_!!6000000003263-2-tps-1200-360.png',
            width: 600,
            height: 320,
            header: {
                title: '浮层标题',
                tip: '标题旁提示',
            },
        });
    },
});