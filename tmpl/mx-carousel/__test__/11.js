let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
let Dialog = require('@../../mx-dialog/index');
Magix.applyStyle('@1.less');

module.exports = Base.extend({
    tmpl: '@11.html',
    mixins: [Dialog],
    render() {
        let that = this;
        that.updater.digest({
            viewId: that.id,
            triggerHook: (currentIndex, targetIndex) => {
                // currentIndex: 当前页码，从0开始
                // targetIndex: 目标页码，从0开始
                return new Promise((resolve, reject) => {
                    if (currentIndex == 1 && targetIndex == 2) {
                        that.alert('系统提示', '禁止从第二页翻到第三页');
                        reject();
                    } else {
                        resolve();
                    }
                })
            }
        });
    }
});