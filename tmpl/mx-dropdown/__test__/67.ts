import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@67.html',
    render() {
        this.updater.digest({
            selected: 1,
        });
    },
    'change<change>'(event) {
        this.updater.digest({
            selected: event.selected
        })
    }
});