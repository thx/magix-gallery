import Magix, { Vframe } from 'magix';
import * as $ from '$';
import Base from './base';
Magix.applyStyle('@./base.less');
export default Base.extend({
    tmpl: '@dropdown.html',
    '@{set.pos}'(popNode) {
        let oNode = this['@{owner.node}'];
        let { top, left } = oNode.offset();

        popNode.css({
            top: `calc(${top + oNode.outerHeight()}px + var(--output-offset, 8px))`,
            left,
        });
    },
    '@{show}'(force) {
        let that = this;
        let { list, info, cur, expand, popId, spm } = that.updater.get();
        if (!force && (expand || (list.length == 0 && info.text && !info.tip && !info.tipView))) {
            return;
        }

        that.updater.digest({
            expand: true
        })

        // 初始化
        if (!that['@{pos.init}']) {
            that['@{pos.init}'] = true;
            that['@{init}']();
        }

        let vf = Vframe.get(popId);
        if (vf) {
            vf.unmountView();
        };
        vf.mountView('@./content', {
            data: {
                cur,
                info,
                list,
                spm,
            },
            prepare: () => {
                // 样式
                let popNode = $(`#${popId}`);
                popNode.addClass('@base.less:status-show');

                // 定位
                that['@{set.pos}'](popNode);
            }
        });
    },
});