import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@9.html',
    render() {
        this.updater.digest({
            items1: [],
            items2: [{
                text: 'one',
                value: 1
            }, {
                text: 'two',
                value: 2
            }],
            dynamicEnterFn: (val) => {
                let { items2 } = this.updater.get();
                return new Promise(resolve => {
                    resolve({
                        text: val,
                        value: items2.length + 1,
                    });
                })
            }
        });
    },
    // 'change<change>'(e) {
    //     this.updater.digest({
    //         items: e.items
    //     })
    // }
});