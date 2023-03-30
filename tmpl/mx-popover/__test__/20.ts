import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@20.html',
    render() {
        this.updater.digest({
            index: 1
        });
    },
    'change<click>'() {
        this.updater.digest({
            index: this.updater.get('index') + 1,
        })
    }
});