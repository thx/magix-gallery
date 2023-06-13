import Magix from 'magix';
import * as Base from '__test__/example';
Magix.applyStyle('@index.less');

export default Base.extend({
    tmpl: '@4.html',
    render() {
        this.updater.digest({
            list: [{
                value: 1,
                text: '操作1'
            }, {
                value: 2,
                text: '操作2'
            }, {
                value: 3,
                text: '操作3'
            }]
        });
    },
    'select<change>'(e){
        let text = e.params.text;
        let selected = e.selected;
        this.updater.digest({
            text,
            selected
        })
    }
});
