import Magix from 'magix';
import * as Base from '__test__/example';
import * as Form from '../../mx-form/index';
import * as Validator from '../../mx-form/validator';

export default Base.extend({
    tmpl: '@2.html',
    mixins: [Form, Validator],
    render() {
        let list = [];
        for (let i = 1; i < 11; i++) {
            list.push({
                text: `选项${i}`,
                value: i,
            })
        }

        this.updater.digest({
            list,
            selected: [1, 2]
        });
    }
});