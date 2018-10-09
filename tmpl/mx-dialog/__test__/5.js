let Magix = require('magix');
let Dialog = require('@../index'); //mixins dialog
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@5.html',
    mixins: [Dialog],
    render() {
        this.updater.digest();
    },
    'open<click>'(e) {
        //  viewPath  //dialog view路径
        //  viewOptions //传入dialog的数据，挂载当前dialog实体
        //  dialogOptions //样式覆盖
        //      width： 宽度
        //      height： 高度
        //      modal：是否允许滚动
        //      mask：是否有遮罩
        //      ......
        this.mxDialog('@./multi', {
            number: 1
        }, {
            width: 800,
            height: 320,
            modal: true
        });
    }
});