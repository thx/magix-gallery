let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@result.html',
    render() {
        let options = [{
            key: 'type',
            desc: [
                '展示类型',
                'highlight：品牌色图标强调提示（默认）',
                'error：红色错误类型提示',
                'warn：黄色警告类型提示',
                'pass：绿色通过类型提示',
            ].join('<br>'),
            type: 'string',
            def: 'highlight'
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
    brand: true, // 是否为品牌按钮，默认false
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