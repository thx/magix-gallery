
import Magix from 'magix';
import * as $ from '$'
import * as View from '../mx-util/view';
import * as Dialog from '../mx-dialog/index';

export default View.extend({
    mixins: [Dialog],
    init(extra) {
        this.updater.snapshot();
        this.assign(extra);
    },
    assign(extra) {
        let that = this;
        let altered = that.updater.altered();

        let opers = extra.opers || [],
            info = extra.info || {};
        let selected = extra.selected || (opers[0] || '').value;
        that.updater.set({
            opers,
            info,
            selected
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
        let { selected } = this.updater.get();
        this.update(selected);
    },
    update(selected) {
        let that = this;
        let { opers, info } = that.updater.get();

        // 当前项在最前面
        let cur = {};
        if (opers.length > 0) {
            for (var i = 0; i < opers.length; i++) {
                if (opers[i].value == selected) {
                    cur = opers[i];
                    opers.splice(i, 1);
                    break;
                }
            }
            opers.unshift(cur);
        }

        // 提示信息
        let showInfo = false;
        if (!$.isEmptyObject(info)) {
            showInfo = true;
        }

        that.updater.digest({
            cur,
            showInfo,
            show: false
        })
    },
    'select<click>'(e) {
        let that = this;
        let item = e.params.item;
        let cur = that.updater.get('cur');
        if (cur.value == item.value) {
            return;
        }

        let enterCallback = () => {
            that.update(item.value);
            $('#' + that.id).trigger({
                type: 'change',
                status: item
            })
        }

        if (item.confirmTitle && item.confirmContent) {
            that.confirm({
                title: item.confirmTitle,
                content: item.confirmContent,
                enterCallback
            })
        } else {
            enterCallback();
        }
    },
    'over<mouseover>'(event) {
        if (Magix.inside(event.relatedTarget, event.eventTarget)) {
            return;
        }

        this.updater.digest({
            show: true
        })
    },
    'out<mouseout>'(event) {
        if (Magix.inside(event.relatedTarget, event.eventTarget)) {
            return;
        }

        this.updater.digest({
            show: false
        })
    }
});