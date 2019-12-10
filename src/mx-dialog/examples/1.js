let Magix = require('magix');
let Dialog = require('@../index'); //mixins dialog
let Base = require('examples/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@1.html',
    mixins: [Dialog],
    render() {
        this.updater.digest();
    },
    'alert1<click>'(e) {
        this.alert('系统异常', '测试内容');
    },
    'alert2<click>'(e) {
        let that = this;
        // this.alert(title, content, enterCallback, dialogOptions)
        //   title: '标题',
        //   content: '内容',
        //   enterCallback: '点击确认按钮的回调',
        //   dialogOptions: { //浮层样式覆盖
        //      width:'宽度',
        //      height:'高度',
        //      btns: 'true or false，是否有按钮',
        //      modal: 'true or false，是否允许滚动',
        //      mask: 'true or false，是否有遮罩',
        //      closable: 'true or false，是否有右上角关闭按钮',
        //      left: '最终定位相对于屏幕左侧',
        //      top: '最终定位相对于屏幕高侧'
        //   }
        that.alert('系统异常', '测试内容', () => {
            console.log('点击确认后响应')
        }, {
            width: 400,
            mask: true
        });
    },
    'alert3<click>'(e) {
        let dialog = this.alert('系统异常', '无关闭按钮，2秒后自动关闭', null, {
            width: 400,
            mask: true,
            btns: false
        });
        
        setTimeout(() => {
            dialog.close();
        }, 2000);
    }
});