import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@1.html',
    render() {
        let list = [];
        for (let i = 1; i < 11; i++) {
            list.push({
                text: `选项${i}`,
                value: i,
                tag: (i == 2) ? 'NEW' : '',
            })
        }

        this.updater.digest({
            list,
            selected: []
        });
    },
    'change<change>'(e) {
        this.updater.digest({
            selected: e.selected,
        })
    }
});