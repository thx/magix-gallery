let Magix = require('magix');
let Dialog = require('@../index');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@1.html',
    mixins: [Dialog],
    render() {
        this.updater.digest();
    },
    'alert1<click>'(e) {
        // this.alert('系统异常', '测试内容');
        this.alert({
            title: '系统异常',
            content: '测试内容'
        })
    },
    'alert2<click>'(e) {
        // this.alert(title, content, enterCallback, dialogOptions)
        //   title: '标题',
        //   content: '内容',
        //   enterCallback: '点击确认按钮的回调，无则不配置即可',
        //   dialogOptions: { // 浮层样式覆盖
        //      width:'宽度，默认320',
        //      height:'高度，默认内容自适应撑开',
        //      btns: '是否有按钮，默认true',
        //      modal: '是否允许滚动，默认false',
        //      mask: '是否有遮罩，默认false',
        //      closable: '是否有右上角关闭按钮，默认false',
        //      left: '最终定位相对于屏幕左侧，默认居中',
        //      top: '最终定位相对于屏幕高侧，默认居中'
        //      type: '展示样式，默认空，显示配置时才有'
        //           highlight：品牌色图标强调提示
        //           error：红色错误类型提示
        //           warn：黄色警告类型提示
        //           pass：绿色通过类型提示
        //   }
        // this.alert('系统异常', '测试内容', () => {
        //     console.log('点击确认后响应')
        // }, {
        //     width: 400,
        //     mask: true
        // });

        // this.alert(viewOptions, dialogOptions);
        //   viewOptions: {
        //      title: '标题',
        //      content: '内容',
        //      enter: '是否有确定按钮，默认true',
        //      enterText: '自定义确定按钮文案，默认确定',
        //      enterCallback: '确定按钮响应事件',
        //   }
        //   dialogOptions: { // 浮层样式覆盖
        //      width:'宽度，默认320',
        //      height:'高度，默认内容自适应撑开',
        //      modal: '是否允许滚动，默认false',
        //      mask: '是否有遮罩，默认false',
        //      closable: '是否有右上角关闭按钮，默认false',
        //      left: '最终定位相对于屏幕左侧，默认居中',
        //      top: '最终定位相对于屏幕高侧，默认居中'
        //      type: '展示样式，默认空，显示配置时才有'
        //           highlight：品牌色图标强调提示
        //           error：红色错误类型提示
        //           warn：黄色警告类型提示
        //           pass：绿色通过类型提示
        //   }
        this.alert({
            title: '系统异常',
            content: '测试内容',
            enterCallback: () => {
                console.log('点击确认后响应')
            }
        }, {
            width: 400,
            mask: true,
        });
    },
    'alert3<click>'(e) {
        // let dialog = this.alert('系统异常', '无关闭按钮，3秒后自动关闭', null, {
        //     width: 400,
        //     mask: true,
        //     btns: false
        // });

        let dialog = this.alert({
            title: '系统异常',
            content: '无关闭按钮，3秒后自动关闭',
            enter: false
        }, {
            width: 400,
            mask: true,
        });
        setTimeout(() => {
            dialog.close();
        }, 3000);
    },
    'alert4<click>'(e) {
        // this.alert('品牌色提示', '测试内容', null, {
        //     type: 'highlight'
        // });
        this.alert({
            title: '品牌色提示',
            content: '测试内容'
        }, {
            type: 'highlight'
        });
    },
    'alert5<click>'(e) {
        // this.alert('错误提示', '测试内容', null, {
        //     type: 'error'
        // });
        this.alert({
            title: '错误提示',
            content: '测试内容'
        }, {
            type: 'error'
        });
    },
    'alert6<click>'(e) {
        // this.alert('警告提示', '测试内容', null, {
        //     type: 'warn'
        // });
        this.alert({
            title: '警告提示',
            content: '测试内容'
        }, {
            type: 'warn'
        });
    },
    'alert7<click>'(e) {
        // this.alert('通过提示', '测试内容', null, {
        //     type: 'pass'
        // });
        this.alert({
            title: '通过提示',
            content: '测试内容'
        }, {
            type: 'pass'
        });
    },
});