import Magix, { Vframe } from 'magix';
import * as View from '../mx-util/view';

export default View.extend({
    tmpl: '@pop.html',
    init(extra) {
        this.assign(extra);
        this['@{owner.node}'] = $('#' + this.id);
    },
    assign(extra) {
        // 当前数据截快照
        this.updater.snapshot();

        this.updater.set(extra.data);

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest();

        // 滚动到可视范围
        let listItem = document.querySelector(`#${this.id} .mx-output-list`);
        let selectedItem = document.querySelector(`#${this.id} .mx-output-item-active`);
        let top = selectedItem.offsetTop - listItem.offsetTop;
        if (top > listItem.clientHeight - 30) {
            listItem.scrollTo({ top });
        }
    },
    '@{select}<click>'(e) {
        let item = e.params.item;
        if (item.disabled) {
            return;
        }
        let owner = Vframe.get(this.owner.pId);
        $('#' + owner.pId).trigger($.Event('select', {
            item,
        }));
    }
});