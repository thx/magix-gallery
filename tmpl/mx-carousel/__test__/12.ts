import Magix from 'magix';
import * as Base from '__test__/example';
Magix.applyStyle('@auto.less');

export default Base.extend({
    tmpl: '@12.html',
    render() {
        this.updater.digest();
    }
});