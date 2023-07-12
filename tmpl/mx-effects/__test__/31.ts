import Magix, { Router } from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@31.html',
    render() {
        this.updater.digest({
            index: 1
        });
    },
    'change<click>'(event) {
        let { index } = this.updater.get();
        this.updater.digest({
            index: index + 1
        });
    }
});