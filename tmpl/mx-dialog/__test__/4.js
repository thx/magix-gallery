let Magix = require('magix');
let Dialog = require('@../index'); //mixins dialog
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@4.html',
    mixins: [Dialog],
    render() {
        this.updater.digest();
    },
    'showGroup<click>'(e) {
        let list = [];
        for (let index = 0; index < 10; index++) {
            list.push({
                text: '测试' + index,
                content: '内容' + index
            })
        }
        // this.mxDialogGroup(viewOptions, dialogOptions)：
        //    viewOptions: {
        //        list:'传入的对象数组，如[{text:"测试",content:"内容"}]',
        //        contentView:'中间区域自定义view，会把当前选中对象完整传入',
        //        textKey: '右侧文案字段，默认text'
        //    },
        //    dialogOptions: { //浮层样式覆盖
        //        width:'宽度',
        //        height:'高度',
        //        modal: 'true（禁止滚动） or false（允许滚动），溢出是否允许滚动，默认false',
        //        mask: 'true or false，是否有遮罩，默认true',
        //        closable: 'true or false，是否有右上角关闭按钮，默认true',
        //        left: '最终定位相对于屏幕左侧，默认居中',
        //        top: '最终定位相对于屏幕高侧，默认居中'
        //    }
        this.mxDialogGroup({
            list,
            contentView: '@./content'
        }, {
            width: 600,
            height: 400
        });
    }
});