import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@40.html',
    render() {
        this.updater.digest({
            selected1: 1,
            selected2: 1,
            selected3: 1,
        });
    }
});