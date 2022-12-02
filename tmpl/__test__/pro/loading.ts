import Magix, { Router } from 'magix';
import * as Base from '__test__/example';
Magix.applyStyle('@loading.less');

export default Base.extend({
    tmpl: '@loading.html',
    render() {
        let item1 = this.getRandom(),
            item2 = this.getRandom(),
            item3 = this.getRandom(),
            item4 = this.getRandom(),
            item5 = this.getRandom();
        this.updater.digest({
            viewId: this.id,
            item1,
            item2,
            item3,
            item4,
            item5,
            count: item1 + item2 + item3 + item4 + item5,
        });
    },
    getRandom() {
        return Math.ceil(Math.random() * 100);
    }
});