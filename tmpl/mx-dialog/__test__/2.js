let Magix = require('magix');
let Dialog = require('@../index'); //mixins dialog
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@2.html',
    mixins: [Dialog],
    render() {
        this.updater.digest();
    },
    'confirm1<click>'(e) {
        this.confirm({
            title: '标题',
            content: '测试内容'
        })
    },
    'confirm2<click>'(e) {
        // this.confirm(viewOptions, dialogOptions);
        //      viewOptions 展示内容
        //          title：标题
        //          content：内容
        //          enterText：自定义确定按钮文案，默认确定
        //          cancelText：自定义取消按钮文案，默认取消
        //          enterCallback：确定按钮响应事件
        //          cancelCallback：取消按钮响应事件
        //      dialogOptions 扩展浮层样式
        //          width： 宽度
        //          height： 高度
        //          modal：是否允许滚动
        //          mask：是否有遮罩
        //          ......
        this.confirm({
            title: '标题',
            content: '测试内容',
            enterText: '确认按钮文案',
            cancelText: '取消按钮文案',
            enterCallback: () => {
                console.log('确定按钮响应事件');
            }
        }, {
            width: 400,
            mask: true
        })
    }
});