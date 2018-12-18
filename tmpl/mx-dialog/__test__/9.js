let Magix = require('magix');
let Dialog = require('@../index'); //mixins dialog
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@9.html',
    mixins: [Dialog],
    render() {
        this.updater.digest();
    },
    'open1<click>'(e) {
        // this.mxModal(viewPath[string], viewOptions[object], dialogOptions[object])
        //      viewPath: 'dialog view路径'
        //      viewOptions: {
        //          传入dialog的数据，挂载当前dialog实体
        //      }
        //      dialogOptions: { //浮层样式覆盖
        //          width:'宽度，默认600',
        //          mask: 'true or false，是否有遮罩',
        //          closable: 'true or false，是否有右上角关闭按钮'
        //          header: {
        //              title: '标题',
        //              tip: '提示信息'
        //          },
        //          footer: {
        //              enter: 'true or false，是否需要确定按钮',
        //              enterText: '确定按钮文案',
        //              cancel: 'true or false，是否需要取消按钮',
        //              cancelText: '取消按钮文案'
        //          }
        // 
        //          ==========================================
        //          无效参数：
        //          height:'高度固定全屏',
        //          left: '固定为doc.width - width',
        //          top: '固定为0',
        //          modal: '固定为false，禁止滚动',
        //      }
        this.mxModal('@./full', {
            
        }, {
            width: 800,
            header: {
                title: '全屏右出浮层',
                tip: '提示信息'
            },
            footer: {
                enterText: '自定义确认',
                cancelText: '自定义取消'
            }
        });
    },
    'open2<click>'(e) {
        this.mxModal('@./full', {
            readonly: true
        }, {
            header: {
                title: '全屏右出浮层'
            },
            footer: {
                enter: false,
                cancel: false
            }
        });
    },
    'open3<click>'(e) {
        this.mxModal('@./full', {
            
        }, {
            width: 800,
            mask: false
        });
    }
});