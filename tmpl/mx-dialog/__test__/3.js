let Magix = require('magix');
let Dialog = require('@../index'); //mixins dialog
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@3.html',
    mixins: [Dialog],
    render() {
        this.updater.digest();
    },
    'open1<click>'(e) {
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
            height: 320
        });
    },
    'open3<click>'(e) {
        this.mxDialog('@./demo4', {
            content: 'closable = true 的浮层，点击空白处自动关闭浮层'
        }, {
            height: 300,
            header: {
                title: '浮层标题'
            }
        });
    },
    'open4<click>'(e) {
        let that = this;
        that.mxDialog('@./demo3', {
            callback: () => {
                that.mxDialog('@./multi', {
                    number: 1
                }, {
                    width: 800,
                    height: 320
                });
            }
        }, {
            width: 800,
            height: 320
        });
    }
});