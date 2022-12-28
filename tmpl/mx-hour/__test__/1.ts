import Magix, { Vframe } from 'magix';
import * as Base from '__test__/example';
Magix.applyStyle('@index.less');

export default Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            selected: [{
                week: '12345',
                name: '周一至周五',
                times: [2, 3, 4]
            }, {
                week: '67',
                name: '周六至周日',
                times: [10, 11, 12]
            }]
        });
    },
    'get<click>'() {
        let vf = Vframe.get(this.id + '_hour');
        let selected = vf.invoke('val');
        this.updater.digest({
            selected
        })
    }
});