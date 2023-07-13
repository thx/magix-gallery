import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@41.html',
    render() {
        this.updater.digest({
            selected1: 2,
            selected2: 2,
            list: [{
                value: 1,
                text: '单选1'
            }, {
                value: 3,
                text: '多选1',
                multiple: true
            }, {
                value: 4,
                text: '多选2',
                multiple: true
            }, {
                value: 5,
                text: '多选3',
                multiple: true
            }, {
                value: 2,
                text: '单选2'
            }]
        });
    }
});