import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@column.html',
    init(e) {
        this.viewOptions = e;
    },
    render() {
        this.updater.digest();
    },
    check() {
        return new Promise((resolve) => {
            resolve({
                ok: true,
            })
        })
    }

});
