let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@notice.html',
    render() {
        let options = [{
            key: 'type',
            desc: [
                '展示类型',
                'common：灰色类型提示（默认）',
                'error：红色错误类型提示',
                'warn：黄色警告类型提示',
                'pass：绿色通过类型提示',
                'highlight：品牌色图标强调提示'
            ].join('<br>'),
            type: 'string',
            def: 'common'
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
            key: 'border',
            desc: '是否带边框，默认情况下带边框则border-radius=4',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'closable',
            desc: '是否带关闭',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'radius',
            desc: '是否带圆角',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'color-border',
            desc: '边框颜色，默认=color',
            type: 'string',
            def: ''
        }, {
            key: 'icon',
            desc: '是否有警告icon',
            type: 'boolean',
            def: 'true'
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
            key: 'text-align',
            desc: '文字对齐方式，left，center，right',
            type: 'string',
            def: 'left'
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});