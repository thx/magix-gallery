import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@3.html',
    render() {
        let list = [];
        for (let i = 1; i < 11; i++) {
            list.push({
                text: `选项${i}`,
                value: i,
                disabled: (i == 3 || i == 6),
            })
        }

        this.updater.digest({
            list,
            selected: [],
        });
    },
});