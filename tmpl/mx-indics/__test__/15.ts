import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@15.html',
    render() {
        this.updater.digest({
            selected1: [1, 2, 3],
            selected2: [1, 2, 3],
        });
    }
});