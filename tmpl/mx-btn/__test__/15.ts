import Magix from 'magix';
import * as Base from '__test__/example';
Magix.applyStyle('@index.less');

export default Base.extend({
    tmpl: '@15.html',
    render() {
        this.updater.digest();
    },
    'alert<click>'() {
        this.alert('系统提示', '响应点击事件')
    }
});