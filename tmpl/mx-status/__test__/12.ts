import Magix, { Router } from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@12.html',
    render() {
        this.updater.digest({
            selected: 1,
        });
    }
});