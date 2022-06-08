import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
Magix.applyStyle('@../mx-main/hor.less');
Magix.applyStyle('@pipeline.less');

export default View.extend({
    tmpl: '@pipeline.html',
    init(e) {
        this.assign(e);
    },
    assign(e) {
        let that = this;
        that.updater.snapshot();

        let list = e.list || [];
        let selected = e.selected; // 不需要默认匹配
        let cur = list[selected] || {};

        let len = list.length;
        let pd = parseInt(50 / len); //间隔

        let color = e.color || '#FF0036';
        that.updater.set({
            mode: e.mode || 'circle',
            logo: e.logo,
            color,
            colorGradient: e.colorGradient || color,
            selected,
            cur,
            list,
            len,
            pd
        });

        // altered是否有变化 true：有变化
        let altered = that.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest();
    }
});