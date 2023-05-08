import Magix, { Router } from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@13.html',
    render() {
        let list = [{
            value: 0,
            text: '暂停投放',
            icon: '<i class="mx-iconfont">&#xe711;</i>',
            color: 'var(--color-red)'
        }, {
            value: 1,
            text: '正在投放',
            icon: '<i class="mx-iconfont">&#xe713;</i>',
            color: 'var(--color-green)'
        }, {
            value: 9,
            text: '结束投放',
            icon: '<i class="mx-iconfont">&#xe613;</i>',
            color: '#999999'
        }]

        this.updater.digest({
            list,
            selected: list[1].value
        });
    }
});