let Magix = require('magix');
let Base = require('examples/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
let $ = require('$');
let Vframe = Magix.Vframe;
module.exports = Base.extend({
    tmpl: '@8.html',
    mixins: [Form, Validator],
    render() {
        let item = {
            text: 'test',
            value: 'test'
        }
        this.updater.digest({
            item,
            selected: item.value
        });
    },
    /**
     * 显示下拉框时
     */
    'show<show>'(e) {
        let that = this;

        // 输入框输入关键词时触发show
        // 当前输入框输入的值
        let keyword = e.keyword;
        
        let instance = Vframe.get(this.id + '_test');
        instance.invoke('showLoading');

        that['hide<focusout>']();
        that.delayTimer = setTimeout(that.wrapAsync(() => {
            let list = [1, 2, 3].map(v => {
                return {
                    text: '测试' + v,
                    value: v
                };
            })
            instance.invoke('update', [list]);
            instance.invoke('hideLoading');
        }), 1000);
    },
    /**
     * 关闭下拉框时，包括输入框失去焦点时
     */
    'hide<focusout>'(e){
        if (this.delayTimer) {
            clearTimeout(this.delayTimer);
        }
    }
});