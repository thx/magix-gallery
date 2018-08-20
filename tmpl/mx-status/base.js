let Magix = require('magix');

module.exports = Magix.View.extend({
    init(e) {
        let list = e.list || [];
        let selected = e.selected || list[0].value;

        // 当前项在最前面
        let cur = {};
        for (var i = 0; i < list.length; i++) {
            if (list[i].value == selected) {
                cur = list[i];
                list.splice(i, 1);
                break;
            }
        }
        list.unshift(cur);

        // 只有一条数据时也是只读
        let readonly = (e.readonly + '' === 'true') || (list.length == 1);

        this.updater.set({
            list,
            cur,
            readonly,
            show: false
        })
    },
    render() {
        this.updater.digest();
    },
    'select<click>'(e) {
        let that = this;
        let item = e.params.item;
        let cur = that.updater.get('cur');
        if (cur.value == item.value) {
            return;
        }

        that.updater.digest({
            show: false
        })
        $('#' + that.id).trigger({
            type: 'change',
            status: item
        })
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