import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@2.html',
    render() {
        this.updater.digest();
    }
});