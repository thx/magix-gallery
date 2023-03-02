import Magix from 'magix';

export default Magix.View.extend({
    tmpl: '@index.html',
    init() {
        let options = [{
            key: 'width',
            desc: '浮层宽度',
            type: 'number',
            def: '480'
        }, {
            key: 'height',
            desc: '浮层高度<br/>抽屉浮层固定为屏幕高度，设置height忽略',
            type: 'number',
            def: '260'
        }, {
            key: 'mask',
            desc: '打开浮层时是否有深色透明度遮罩，不需要请手动false关闭',
            type: 'boolean',
            def: 'true'
        }, {
            key: 'closable',
            desc: '浮层是否有右上角默认的关闭按钮',
            type: 'boolean',
            def: 'true'
        }, {
            key: 'blankSpaceClosable',
            desc: '点击空白处是否可关闭浮层',
            type: 'boolean',
            def: 'true'
        }, {
            key: 'top',
            desc: `最终定位相对于屏幕高侧
<div class="color-brand">如果想相对于trigger定位，请减去 window.scrollTop</div>`,
            type: 'number',
            def: '默认居中，若高度超过屏幕高度则为0'
        }, {
            key: 'left',
            desc: '最终定位相对于屏幕左侧',
            type: 'number',
            def: '默认居中'
        }, {
            key: 'target',
            desc: '选择器<br/>默认相对于该节点下10px居中对齐<br/>指定节点的情况下忽略left，top，可配合使用offset指定微量偏移',
            type: '',
            def: ''
        }, {
            key: 'offset',
            desc: `<pre>指定target时生效，微量偏移 
offset: {
    left: -10,
    top: 10
}</pre>`,
            type: 'object',
            def: ''
        }, {
            key: 'header',
            desc: `<pre>头部内容配置 
header: {
    title: '标题',
    tip: '提示信息',
    iconTip: 'title旁的小问号浮层提示信息',
    feedbackId: 'feedbackId'
}</pre>`,
            type: 'object',
            def: '{}，不明确指定title时不显示头部'
        }, {
            key: 'footer',
            desc: `<pre>底部内容按钮配置 
footer: {
    enter: 'true or false，是否需要确定按钮',
    enterText: '确定按钮文案',
    cancel: 'true or false，是否需要取消按钮',
    cancelText: '取消按钮文案'
}</pre>`,
            type: 'object',
            def: `<pre>mxDialog的footer: 
默认不显示
footer: {
    enter: false,
    cancel: false,
}

mxModal的footer: 
默认显示
footer: {
    enter: true,
    enterText: '确定',
    cancel: true,
    cancelText: '取消'
}</pre>`
        }, {
            key: 'modal',
            desc: '打开浮层时是否禁止滚动',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'spm',
            desc: '定制的埋点字段',
            type: 'string',
            def: ''
        }];

        this.updater.set({
            viewId: this.id,
            options,
        })
    },
    render() {
        let methods = [{
            key: 'mxDialog(viewPath, [viewOptions], [dialogOptions])',
            desc: '说明：自定义浮层',
        }, {
            key: 'alert(title, content, [enterCallback], [dialogOptions])',
            desc: '说明：警告小浮层',
        }, {
            key: 'confirm(viewOptions, [dialogOptions])',
            desc: '说明：二次确认浮层',
        }, {
            key: 'mxCloseAllDialogs()',
            desc: '说明：关闭当前所有展开的浮层',
        }];

        this.updater.digest({
            methods,
        });
    }
});