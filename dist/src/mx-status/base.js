let Magix = require('magix');

module.exports = Magix.View.extend({
    init(e) {
        this.viewOptions = e;
    },
    render() {
        let viewOptions = this.viewOptions;
        let opers = viewOptions.opers || [];
        let selected = viewOptions.selected || (opers[0] || '').value;
        this.update(selected);
    },
    update(selected){
        let that = this;
        let viewOptions = that.viewOptions;
        
        let opers = viewOptions.opers || [];
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
        let info = viewOptions.info || {};
        let showInfo = false;
        if(!$.isEmptyObject(info)){
            showInfo = true;
        }

        // 包装成异步渲染
        // setTimeout(that.wrapAsync(() => {
        // }), 0);
        that.updater.digest({
            info,
            opers,
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

        that.update(item.value);
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