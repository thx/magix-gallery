let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let that = this;
        let options = [{
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
            key: 'view',
            desc: '自定义提示内容view，配置的view以view为准，绝对路径',
            type: 'string'
        }, {
            key: 'data',
            desc: '自定义提示内容view需要传入的数据',
            type: 'object&nbsp;&nbsp;|&nbsp;&nbsp;array',
            def: ''
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
        },

        //         type参数修改为mode，尽量与原生属性避开命名，避免自定义标签时出错
        //         {
        //             key: 'type',
        //             desc: `
        // <div>展现样式，默认白底，需要黑底时配置type="dark"</div>
        // <div class="color-brand">异常情况说明：tag="a"时，a标签的原生属性type与组件定义的type冲突，此时若设置type="dark"失效</div>
        // <div class="color-brand">可以使用view-type与原生属性type区分来解决该问题</div>
        //             `,
        //             type: 'string',
        //             def: ''
        //         }, 

        {
            key: 'text-align',
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
        }, {
            key: 'color-text',
            desc: '自定义文案颜色',
            type: 'string',
            def: '#333333'
        }, {
            key: 'color-bg',
            desc: '自定义背景颜色',
            type: 'string',
            def: '#ffffff'
        }, {
            key: 'color-border',
            desc: '自定义边框颜色',
            type: 'string',
            def: 'var(--color-border)'
        }];
        
        that.updater.digest({
            viewId: that.id,
            options
        });
    }
});