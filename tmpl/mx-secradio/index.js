let Magix = require('magix');
Magix.applyStyle('@index.less');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        //初始化时保存一份当前数据的快照
        this.updater.snapshot();

        this.assign(extra);
    },
    assign(extra) {
        let that = this;
        let altered = that.updater.altered();

        let needExpand = (extra.needExpand + '' !== 'false');
        let close = (extra.close + '' === 'true');
        // 没有展开收起的时候一定是展开的
        if(!needExpand){
            close = false;
        }

        let parentTextKey = extra.parentTextKey || 'text',
            textKey = extra.textKey || 'text',
            valueKey = extra.valueKey || 'value';

        let list = [];
        (extra.list || []).forEach(origin => {
            let item  = {
                close: close,
                text: origin[parentTextKey],
                subs: origin.subs.map(sub => {
                    return {
                        text: sub[textKey],
                        value: sub[valueKey]
                    }
                })
            }
            list.push(item);
        })

        let selected = extra.selected;
        if(!selected){
            selected = list[0].subs[0].value;
        }

        let parentPrefix = extra.parentPrefix || '',
            prefix = extra.prefix || '';
        let maxHeight = extra.maxHeight || '';
        that.updater.set({
            viewId: that.id,
            needExpand,
            close,
            parentPrefix,
            prefix,
            maxHeight,
            list,
            selected
        })

        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            // 组件有更新，真个节点会全部需要重新初始化
            that.updater.snapshot();
            return true;
        }
        return false;
    },
    render: function () {
        this.updater.digest();
    },
    '@{toggleAll}<click>'(event) {
        let close = !this.updater.get('close');
        let list = this.updater.get('list');
        list.forEach(item => {
            item.close = close;
        })
        this.updater.digest({
            close,
            list
        })
    },
    '@{toggleOne}<click>'(event) {
        let index = event.params.index;
        let close = true,
            list = this.updater.get('list');
        list.forEach((item, i) => {
            if(index == i){
                item.close = !item.close;
            }
            close = close && item.close;
        })
        this.updater.digest({
            close,
            list
        })
    },
    '@{check}<change>'(event){
        let selected = event.params.value;
        this.updater.digest({
            selected
        })
        $('#' + this.id).val(selected)
    }
});