let Magix = require('magix');
let Dialog = require('@../index'); //mixins dialog
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@9.html',
    mixins: [Dialog],
    render() {
        this.updater.digest();
        // let a = document.getElementById('test_wrapper');
        // let b = document.getElementById('test_inner');
        // $('#test_wrapper').on('scroll', () => {
        //     console.error(
        //         a.scrollTop + a.clientHeight,
        //         b.offsetTop - a.offsetTop,
        //         a.scrollTop - b.clientHeight,
        //         (a.scrollTop + a.clientHeight) > (b.offsetTop - a.offsetTop),
        //         (a.scrollTop - b.clientHeight) < (b.offsetTop - a.offsetTop)
        //     )
        // })
    },
    'open<click>'(e) {
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
                    text: data.name
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
    }
});