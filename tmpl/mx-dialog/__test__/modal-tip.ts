import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@modal-tip.html',
    init(e) {
        this.viewOptions = e;

        this.updater.set({
            content: e.content,
            name: ''
        })
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
