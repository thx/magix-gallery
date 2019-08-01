let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let that = this;
        let viewId = that.id;
        let options = [{
            key: 'content',
            desc: '按钮显示文案',
            type: 'string',
            def: ''
        }, {
            key: 'brand',
            desc: '是否为品牌色按钮',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'white',
            desc: '是否为白色按钮',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'small',
            desc: '是否为小号尺寸按钮',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'color',
            desc: '按钮背景颜色',
            type: '合法色值',
            def: ''
        }, {
            key: 'color-hover',
            desc: 'hover按钮背景颜色',
            type: '合法色值',
            def: '配置了color才生效，默认=color'
        }, {
            key: 'color-text',
            desc: '按钮文字颜色',
            type: '合法色值',
            def: '配置了color才生效，默认=#ffffff'
        }, {
            key: 'color-hover-text',
            desc: 'hover按钮文案颜色',
            type: '合法色值',
            def: '配置了color才生效，默认=color-text'
        }, {
            key: 'tag-content',
            desc: '打标文案',
            type: 'string',
            def: ''
        }, {
            key: 'tag-color',
            desc: '打标颜色，品牌色按钮默认红色，禁用按钮默认灰色，其他默认品牌色',
            type: '合法色值',
            def: ''
        }]

        that.updater.digest({
            viewId,
            options
        });
    }
});