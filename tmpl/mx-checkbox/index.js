let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    init(extra) {
        //初始化时保存一份当前数据的快照
        this.updater.snapshot();

        this.assign(extra);
    },
    assign(extra) {
        let that = this;
        let altered = that.updater.altered();

        let checked = (extra.checked + '') === 'true';
        let disabled = (extra.disabled + '') === 'true';
        let indeterminate = (extra.indeterminate + '') === 'true';

        that.updater.set({
            checked,
            disabled,
            indeterminate
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
    render(){
        this.updater.digest({});

        let data = this.updater.get();
        let node = $('#' + this.id);
        ['checked', 'disabled', 'indeterminate'].forEach(key => {
            node.prop(key, data[key]);
        })
    }
});