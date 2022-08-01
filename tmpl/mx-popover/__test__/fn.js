let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@fn.html',
    render() {
        let that = this;
        let options = [{
            key: 'scroll-wrapper',
            desc: 'popover所属父节点，事件所在view<br/>选择器节点',
            type: 'sizzle'
        }, {
            key: 'content',
            desc: '提示内容 ',
            type: 'string'
        }, {
            key: 'width',
            desc: '提示框宽度',
            type: 'number',
            def: 200
        }, {
            key: 'placement',
            desc: '提示框在目标的方位，top，bottom，left，right<br/>与目标距离10px',
            type: 'string',
            def: 'bottom'
        }, {
            key: 'align',
            desc: '提示框与目标的对齐方式，top，bottom，left，right，center',
            type: 'string',
            def: 'center'
        }, {
            key: 'left',
            desc: '最终定位相对于屏幕左侧，配置 left + top 时忽略 placement + align',
            type: 'number',
            def: ''
        }, {
            key: 'top',
            desc: '最终定位相对于屏幕高侧，配置 left + top 时忽略 placement + align',
            type: 'number',
            def: ''
        }, {
            key: 'offset',
            desc: `<pre>在placement + align / left + top 基础上微量偏移
offset: {
    left: -10,
    top: 10
}</pre>`,
            type: 'object',
            def: ''
        }, {
            key: 'auto',
            desc: '默认自动展开提示框',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'mode',
            desc: `<pre>展现样式可选项
common：白底（默认）
dark：黑底色
light：白底带呼吸灯
arrow：白底带箭头
</pre>`,
            type: 'string',
            def: 'common'
        }, {
            key: 'align-text',
            desc: '文字对齐方式，left，right，center',
            type: 'string',
            def: 'left'
        }, {
            key: 'light-color',
            desc: '呼吸灯颜色',
            type: '',
            def: 'var(--color-brand)'
        }, {
            key: 'z-index',
            desc: '自定义z-index',
            type: 'number',
            def: '999999'
        }, {
            key: 'show-delay',
            desc: '显示延迟时间，单元毫秒，默认100，可模拟自带的title效果',
            type: 'number',
            def: '100'
        }, {
            key: 'hide-delay',
            desc: '消失延迟时间，单元毫秒，默认200',
            type: 'number',
            def: '200'
        }]
        that.updater.digest({
            viewId: that.id,
            options
        });
    }
});