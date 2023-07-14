import Magix, { Router } from 'magix';
import * as Base from '__test__/example';
import * as $ from '$';
Magix.applyStyle('@index.less');

export default Base.extend({
    tmpl: '@2.html',
    render() {
        this.updater.digest({
            items: [1, 2, 3, 4, 5]
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