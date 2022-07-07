import Magix from 'magix';
import * as Base from '__test__/example';
import * as Form from '../../mx-form/index';
import * as Validator from '../../mx-form/validator';

export default Base.extend({
    tmpl: '@5.html',
    mixins: [Form, Validator],
    render() {
        let list = [{
            text: '首页',
            value: 'home',
        }, {
            prefix: '计划',
            text: '计划名称',
            value: 'campaign',
        }, {
            prefix: '单元',
            text: '单元名称',
            value: 'adgroup',
        }];
        this.updater.digest({
            list,
            selected: list[list.length - 1].value,
        });
    },

    'empty<click>'(e) {
        let { list } = this.updater.get();
        this.updater.digest({
            selected: list[list.length - 1].value,
        });
    }
});