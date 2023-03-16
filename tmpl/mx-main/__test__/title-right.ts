import Magix, { Router } from 'magix';
import * as Base from '__test__/example';
export default Base.extend({
    tmpl: '@title-right.html',
    render() {
        this.updater.digest();
    },
    'open<click>'(e) {
        this.alert({
            title: '系统提示',
            content: '提示信息'
        })
    }
});