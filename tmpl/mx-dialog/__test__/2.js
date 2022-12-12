let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@2.html',
    render() {
        this.updater.digest();
    },
    'confirm1<click>'(e) {
        this.confirm({
            title: '标题',
            content: '确定进行操作吗？'
        })
    },
    'confirm2<click>'(e) {
        // this.confirm(viewOptions, dialogOptions);
        //   viewOptions: {
        //      title: '标题',
        //      content: '内容',
        //      enterText: '自定义确定按钮文案，默认确定',
        //      enterCallback: '确定按钮响应事件',
        //      cancelText: '自定义取消按钮文案，默认取消',
        //      cancelCallback: '取消按钮响应事件'
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
        this.confirm({
            title: '标题',
            content: '确定进行操作吗？',
            enterText: '确认按钮文案',
            enterCallback: (e) => {
                // e.preventDefault();
                console.log('确定按钮响应事件');
            },
            cancelText: '取消按钮文案',
            cancelCallback: (e) => {
                // e.preventDefault();
                console.log('取消按钮响应事件');
            }
        }, {
            width: 400,
            mask: true
        })
    },
    'confirm3<click>'(e) {
        this.confirm({
            title: '品牌色提示',
            content: '确定进行操作吗？'
        }, {
            type: 'highlight'
        })
    },
    'confirm4<click>'(e) {
        this.confirm({
            title: '错误提示',
            content: '确定进行操作吗？'
        }, {
            type: 'error'
        })
    },
    'confirm5<click>'(e) {
        this.confirm({
            title: '警告提示',
            content: '确定进行操作吗？'
        }, {
            type: 'warn'
        })
    },
    'confirm6<click>'(e) {
        this.confirm({
            title: '通过提示',
            content: '确定进行操作吗？'
        }, {
            type: 'pass'
        })
    },
});