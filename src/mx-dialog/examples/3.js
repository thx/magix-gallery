let Magix = require('magix');
let Dialog = require('@../index'); //mixins dialog
let Base = require('examples/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@3.html',
    mixins: [Dialog],
    render() {
        this.updater.digest();

        // this.alert('系统提示', '提示1')
        // this.alert('系统提示', '提示2')
    },
    'open<click>'(e) {
        // this.mxDialog(viewPath[string], viewOptions[object], dialogOptions[object])
        //      viewPath: 'dialog view路径'
        //      viewOptions: {
        //          传入dialog的数据，挂载当前dialog实体
        //      }
        //      dialogOptions: { //浮层样式覆盖
        //          width:'宽度',
        //          height:'高度',
        //          modal: 'true or false，是否允许滚动',
        //          mask: 'true or false，是否有遮罩',
        //          closable: 'true or false，是否有右上角关闭按钮'
        //          left: '最终定位相对于屏幕左侧',
        //          top: '最终定位相对于屏幕高侧'
        //      }
        this.mxDialog('@./multi', {
            number: 1
        }, {
            width: 800,
            height: 320,
            modal: true
        });
    },
    'noMask<click>'(e){
        let node = $(e.eventTarget);
        let offset = node.offset();
        let top = offset.top + node.outerHeight() - $(window).scrollTop() + 10;
        let left = offset.left;
        this.alert('mask=false的浮层', '点击空白处自动关闭浮层', null, {
            top,
            left
        });
    }
});