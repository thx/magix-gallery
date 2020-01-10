let Magix = require('magix');
let $ = require('$');
let CopyText = '复制代码';

module.exports = Magix.View.extend({
    init() {
        let that = this;
        let d = {
            viewId: that.id,
        }
        for (let i = 1; i < 20; i++) {
            d[`text${i}`] = CopyText;
        }
        that.updater.set(d);
    },
    'done<success>'(e) {
        let that = this;
        let id = e.params.id;
        let data = {};
        data['text' + id] = '<i class="mc-iconfont @scoped.style:desc-tip-icon">&#xe630;</i>复制成功';
        that.updater.digest(data);

        setTimeout(() => {
            data['text' + id] = CopyText;
            that.updater.digest(data);
        }, 1000);
    }
});