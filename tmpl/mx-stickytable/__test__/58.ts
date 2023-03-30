import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@58.html',
    render() {
        this.updater.digest();
    },
    'alert<click>'(e) {
        this.alert('系统提示', '点击操作');
    }
});