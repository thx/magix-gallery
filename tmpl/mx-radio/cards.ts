/**
 * 单选卡片 https://done.alibaba-inc.com/file/BfeHD00VvQXv/SJDvcfm5NxOygPFO/preview
 */
import Magix from 'magix';
import * as $ from '$'
import * as View from '../mx-util/view';
import { commonAreas } from 'mx-area/data';
Magix.applyStyle('@cards.less');

export default View.extend({
    tmpl: '@cards.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        // 当前数据截快照
        this.updater.snapshot();

        let list = extra.list || [];
        let selected = extra.selected;

        // 是否有标签
        let hasTags = false;
        for (let i = 0; i < list.length; i++) {
            list[i].tags = list[i].tags || [];
            if (list[i].tags.length > 0) {
                hasTags = true;
            }
        }

        // 展示尺寸
        // normal：正常尺寸，默认宽度288
        // small：小尺寸，默认宽度216
        let mode = extra.mode || 'small';
        let width;
        switch (mode) {
            case 'small':
                width = +extra.width || 216;
                break;

            case 'normal':
                width = +extra.width || 288;
                break;
        }

        // hover的显示样式
        // common
        // brand
        let hoverType = extra.hoverType || 'common';

        this.updater.set({
            mode,
            hoverType,
            width,
            list,
            selected,
            hasTags,
        });

        this['@{owner.node}'] = $(`#${this.id}`);

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },

    render() {
        this.updater.digest();
        this['@{fire}<change>']();
    },

    'change<change>'(e) {
        let item = e.params.item;
        this.updater.digest({
            selected: item.value
        })
    },

    /**
     * 双向绑定处理
     */
    '@{fire}<change>'(e) {
        // let node = $(`#${this.id}_input`);
        // let value = node.val();
        // this.updater.digest({
        //     value
        // })
        // this['@{owner.node}'].val(value);
    }
});
