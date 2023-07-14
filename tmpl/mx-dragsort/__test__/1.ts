import Magix, { Router } from 'magix';
import * as Base from '__test__/example';
import * as $ from '$';
Magix.applyStyle('@index.less');

export default Base.extend({
    tmpl: '@1.html',
    render() {
        let list = [];
        for (let i = 1; i < 6; i++) {
            list.push({
                name: `标题标题标题${i}`,
                code: i,
                selected: true,
            })
        };

        this.updater.digest({
            viewId: this.id,
            list,
            items: [1, 2, 3, 4, 5]
        });
    },
    'change<change>'(e) {
        let { list } = this.updater.get();
        let index = e.params.index;
        list[index].selected = e.target.checked;

        let uns = [];
        for (let i = 0; i < list.length; i++) {
            if (!list[i].selected) {
                uns.push(...list.splice(i--, 1));
            }
        };
        this.updater.digest({
            list: list.concat(uns),
        });
    },
    'drag<dragfinish>'(e) {
        // 重排序之后的
        let items = [];
        let drags = $('#' + this.id + ' .@index.less:item');
        for (var i = 0, len = drags.length; i < len; i++) {
            let drag = $(drags[i]);
            items.push(drag.attr('data-value'));
        }
        this.updater.digest({
            items
        });
    }
});