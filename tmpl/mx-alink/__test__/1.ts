import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest();
    },
    'alert<click>'() {
        this.alert('系统提示', '响应点击事件')
    }
});