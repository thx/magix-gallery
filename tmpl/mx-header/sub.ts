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
        let altered = that.updater.altered();

        let data = $.extend(true, {}, extra.data);
        let { valueKey, linkKey, outerKey, nav, child } = data;

        let gap = 12, len = nav.groups.length;
        if (len <= 2) {
            gap = 30;
        } else if (len == 3) {
            gap = 24;
        } else if (len == 4) {
            gap = 18;
        } else {
            gap = 12;
        }

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
            gap,
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

        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            that.updater.snapshot();
            return true;
        }
        return false;
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