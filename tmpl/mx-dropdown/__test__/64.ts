import Magix from 'magix';
import * as Base from '__test__/example';
export default Base.extend({
    tmpl: '@64.html',
    render() {
        let list = [];
        for (let i = 1; i < 36; i++) {
            list.push({
                value: i,
                text: (i > 20) ? `多选${i}` : `单选${i}`,
                multiple: (i > 20),
                detail: '提示',
            })
        }
        this.updater.digest({
            list,
            selected1: list[0].value,
            selected2: list[1].value,
        });
    }
});