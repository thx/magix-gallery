import Magix, { Router } from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@13.html',
    render() {
        let list1 = [];
        for (let i = 1; i < 10; i++) {
            list1.push({
                name: `选项文案选项文案选项文案选项文案选项文案${i}`,
                code: i,
                description: '选项说明文案一行或者两行高度一致',
                properties: {
                    icon: '<img src="https://img.alicdn.com/bao/uploaded/i1/111212547/O1CN011UgZU95qBzAyshG_!!0-saturn_solar.jpg" />',
                }
            })
        };

        this.updater.digest({
            list1,
            selected1: list1[0].code,
            selected2: list1[0].code,
        });
    },
});