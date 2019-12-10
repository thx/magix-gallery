let Magix = require('magix');
let $ = require('$');
let CopyText = '复制代码';

module.exports = Magix.View.extend({
    init(){
        let that = this;
        that.updater.set({
            viewId: that.id,
            text1: CopyText,
            text2: CopyText,
            text3: CopyText,
            text4: CopyText,
            text5: CopyText,
            text6: CopyText,
            text7: CopyText,
            text8: CopyText,
            text9: CopyText,
            text10: CopyText,
            text11: CopyText
        })
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