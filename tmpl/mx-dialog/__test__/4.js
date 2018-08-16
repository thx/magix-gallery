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
        // viewOptions
        //     list：传入的对象数组，如[{text:'测试',content:'内容'}]
        //     contentView：中间区域自定义view，会把当前选中对象完整传入
        //     textKey：右侧文案字段，默认text
        // dialogOptions 扩展浮层样式
        //     width： 宽度，默认800
        //     height： 高度，默认500
        //     mask：是否有遮罩，默认true
        //     modal：是否允许滚动
        //     ......
        this.mxDialogGroup({
            list,
            contentView: '@./content'
        }, {
            width: 600,
            height: 400,
            modal: true
        });
    }
});