let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@result.html',
    render() {
        let options = [{
            key: 'type',
            desc: [
                '展示类型',
                'highlight：64px图标提示，品牌色图标强调提示（默认）',
                'error：64px图标提示，红色错误类型提示',
                'warn：64px图标提示，黄色警告类型提示',
                'pass：64px图标提示，绿色通过类型提示',
                'success-zan：120px图片提示，创建成功',
                'success-ok：120px图片提示，创建成功',
                'success-highfive：120px图片提示，达成合作',
                'success-shakehands：120px图片提示，创建成功',
                'success-cheer：120px图片提示，达成合作',
                'success-cooperation：120px图片提示，开始推广',
                'success-trumpet：120px图片提示，创建成功',
                'error-permission：120px图片提示，无权限访问',
                'error-disconnect：120px图片提示，已断开链接',
                'error-load：120px图片提示，加载失败',
                'error-empty：120px图片提示，暂无数据',
                'error-todo：120px图片提示，功能建设中',
            ].join('<br>'),
            type: 'string',
            def: 'highlight'
        }, {
            key: 'direction',
            desc: 'horizontal：水平<br/>vertical：垂直（默认）',
            type: 'string',
            def: 'vertical'
        }, {
            key: 'img',
            desc: '自定义展示图片，配置了img时忽略type配置',
            type: 'string',
            def: ''
        }, {
            key: 'content',
            desc: '标题内容',
            type: 'string'
        }, {
            key: 'tip',
            desc: '提示内容',
            type: 'string'
        }, {
            key: 'btns',
            desc: `<pre>展示的按钮 btns: [&#123;
    text: '按钮文案',
    mode: 'primary', // 按钮样式，同mx-btn定义
    link: '外链地址', // 跳转外链
    outer: true, // 配置的link是否外跳打开，默认true
    callback: () =&gt; &#123;
        // 非外链可处理，自行处理按钮逻辑
    &#125;
&#125;]</pre>`,
            type: 'array'
        }];

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});