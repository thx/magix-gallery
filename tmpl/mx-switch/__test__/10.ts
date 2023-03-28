import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@10.html',
    render() {
        let list = [{
            text: '极简版',
            value: 'simple',
            icon: '<i class="mx-iconfont">&#xe64d;</i>'
            // icon: '<img src="https://img.alicdn.com/imgextra/i2/O1CN01bYp3hz1ILiAi4cp55_!!6000000000877-2-tps-96-108.png" />'
        }, {
            text: '专业版',
            value: 'custom',
            icon: '<i class="mx-iconfont">&#xe65f;</i>',
            // icon: '<img src="https://img.alicdn.com/imgextra/i2/O1CN01bYp3hz1ILiAi4cp55_!!6000000000877-2-tps-96-108.png" />'
        }];

        this.updater.digest({
            list,
            selected: list[0].value,
        })
    },
    'change<change>'(e) {
        this.updater.digest({
            selected: e.selected,
        })
    }
});