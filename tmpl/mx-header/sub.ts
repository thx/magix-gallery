import Magix, { Vframe } from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
Magix.applyStyle('@sub.less');

export default View.extend({
    tmpl: '@sub.html',
    init(extra) {
        this.updater.snapshot();
        this.assign(extra);
    },
    assign(extra) {
        let that = this;
        that.updater.snapshot();

        let data = $.extend(true, {}, extra.data);
        let { valueKey, linkKey, outerKey, nav, child } = data;

        let info = nav.hasInfo ? (nav.info || {}) : {};
        nav.groups.forEach(group => {
            group.cur = false;
            group.subs.forEach(sub => {
                if (child == sub[valueKey]) {
                    group.cur = true;

                    if (sub.info) {
                        info = sub.info;
                    }
                }
            })
        })

        that.updater.set({
            info,
            ...data,
            linkFn: (item) => {
                let t = ` href=${item[linkKey]} `;
                if (item[outerKey] + '' !== 'false') {
                    // 默认true 外链打开
                    t += ' target=_blank ';
                }
                return t;
            },
        });

        // altered是否有变化 true：有变化
        let altered = that.updater.altered();
        return altered;
    },

    render() {
        this.updater.digest();
    },

    'showInfo<mouseover>'(event) {
        if (Magix.inside(event.relatedTarget, event.eventTarget)) {
            return;
        }

        let that = this;
        let { groupIndex, subIndex } = event.params;
        let { nav } = that.updater.get();
        if (nav.hasInfo) {
            that.updater.digest({
                info: nav.groups[groupIndex].subs[subIndex].info || {}
            })
        }
    },

    'change<click>'(event) {
        let { ownerId, nav } = this.updater.get();
        let { sub } = event.params;
        let navVf = Vframe.get(ownerId);
        navVf.invoke('changeSub<click>', [{
            params: {
                nav,
                sub
            }
        }])
    },
});