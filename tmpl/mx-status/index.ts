import Magix, { Vframe } from 'magix';
import * as $ from '$';
import Base from './base';
Magix.applyStyle('@./base.less');
export default Base.extend({
    tmpl: '@index.html',
    '@{get.pos}'() {
        let oNode = this['@{owner.node}'];
        let { top, left } = oNode.offset();
        return {
            top: top - 11,
            left: left - 11
        };
    },
    '@{show}'() {
        let that = this;
        let { opers, info, cur, showInfo, expand } = that.updater.get();

        if (!expand) {
            that.updater.digest({
                expand: true
            })

            // 初始化
            if (!that['@{pos.init}']) {
                that['@{pos.init}'] = true;
                that['@{init}']();
            }
            let popId = `status_${that.id}`;
            let vf = Vframe.get(popId);
            if (vf) {
                vf.unmountView();
            };
            vf.mountView('@./content', {
                data: {
                    cur,
                    info,
                    opers,
                    showInfo
                }
            });

            // 样式
            let popNode = $('#status_' + that.id);
            popNode.addClass('@base.less:status-show');
        }
    },
});