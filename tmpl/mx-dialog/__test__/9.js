let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@9.html',
    render() {
        this.updater.digest();
    },
    'open1<click>'(e) {
        let that = this;

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
        that.mxModal('@./full', {
            callback: (data) => {
                that.updater.digest({
                    inputText1: data.name
                })
            }
        }, {
            width: 800,
            header: {
                title: '全屏右出浮层',
                tip: '提示信息',
                iconTip: 'icon提示'
            },
            footer: {
                enterText: '自定义确认',
                cancelText: '自定义取消'
            }
        });
    },
    'open2<click>'(e) {
        this.mxModal('@./full', {
            callback: (data) => {
                this.updater.digest({
                    inputText2: data.name
                })
            }
        }, {
            width: 800,
            header: {
                title: '全屏右出浮层',
            },
            footer: {
                enterError: true,
            }
        });
    }
});