let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@notice.html',
    render() {
        let options = [{
            key: 'content',
            desc: '展示内容',
            type: 'string',
            def: ''
        }, {
            key: 'content-title',
            desc: '内容标题',
            type: 'string',
            def: ''
        }, {
            key: 'content-tip',
            desc: '内容标题旁小问号提示信息',
            type: 'string',
            def: ''
        }, {
            key: 'type',
            desc: [
                '展示类型',
                'highlight：品牌色图标强调提示（默认）',
                'error：红色错误类型提示',
                'warn：黄色警告类型提示',
                'pass：绿色通过类型提示',
                'stress：蓝色高亮类型提示',
                'fault：严重故障类提示'
            ].join('<br>'),
            type: 'string',
            def: 'highlight'
        }, {
            key: 'closable',
            desc: '是否带关闭',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'border',
            desc: '是否带边框，包含边框的情况下一定为圆角',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'radius',
            desc: '是否带圆角',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'color',
            desc: '自定义颜色，配置了color的时候忽略type的配置，其他颜色基于此色值计算',
            type: 'string',
            def: ''
        }, {
            key: 'color-bg',
            desc: '背景颜色，默认为color * 0.1',
            type: 'string',
            def: ''
        }, {
            key: 'color-border',
            desc: '边框颜色，默认=color，仅在border=true的情况下显示',
            type: 'string',
            def: ''
        }, {
            key: 'color-icon',
            desc: 'icon颜色，默认=color',
            type: 'string',
            def: ''
        }, {
            key: 'color-text',
            desc: '文字颜色，默认#666',
            type: 'string',
            def: ''
        }, {
            key: 'icon',
            desc: '是否有提示icon',
            type: 'boolean',
            def: 'true'
        }, {
            key: 'img',
            desc: '左侧提示图片，优先级img &gt; icon',
            type: 'url',
            def: ''
        }, {
            key: 'img-size',
            desc: '图片尺寸，small 32px，normal 48px，large 80px',
            type: 'string',
            def: 'normal'
        }, {
            key: 'icon-text',
            desc: '自定义icon，默认是提示icon',
            type: 'html',
            def: ''
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});