let Magix = require('magix');

module.exports = Magix.View.extend({
    init(e) {
        let opers = e.opers || [];
        let selected = e.selected || (opers[0] || '').value;

        // 当前项在最前面
        let cur = {};
        if(opers.length > 0){
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
        let info = e.info || {};
        let showInfo = false;
        if(!$.isEmptyObject(info)){
            showInfo = true;
        }
        
        this.updater.set({
            info,
            opers,
            cur,
            showInfo,
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