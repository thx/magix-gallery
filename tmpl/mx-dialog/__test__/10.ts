import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@10.html',
    render() {
        this.updater.digest();
    },
    'open1<click>'(e) {
        this.mxDialog('@./dialog-inner-options');
    },
    'open2<click>'(e) {
        this.mxDialog('@./dialog-inner-options', {}, {
            top: 100,
            width: 400,
        });
    }
});