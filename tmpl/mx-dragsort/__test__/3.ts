import Magix, { Router } from 'magix';
import * as Base from '__test__/example';
Magix.applyStyle('@index.less');

export default Base.extend({
    tmpl: '@3.html',
    render() {
        this.updater.digest();
    }
});