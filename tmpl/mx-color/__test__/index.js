let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let that = this;
        let viewId = that.id;
        let options = [{
            key: 'color',
            desc: '当前选中颜色',
            type: 'string',
            def: '#ffffff'
        }, {
            key: 'dot',
            desc: '选中值显示样式为色值圆点',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'disabled',
            desc: '是否禁用',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'list',
            desc: `<pre>配置list，则仅展示该部分快捷选择色值
1. 简单数组['#3BD0D8', '#4D7FFF', '#FFC13A']
2. 对象数组，如[{
    value: '#3BD0D8',
    text: '浅蓝色',
}]</pre>`,
            type: 'array'
        }, {
            key: 'text-key',
            desc: '渲染text时读取的key',
            type: 'string',
            def: 'text'
        }, {
            key: 'value-key',
            desc: '渲染value时读取的key',
            type: 'string',
            def: 'value'
        }, {
            key: 'need-all',
            desc: '配置list时是否需要全部选项',
            type: 'boolean',
            def: 'false',
        }];

        let events = [{
            type: 'change',
            desc: '切换颜色时触发',
            params: [{
                key: 'color',
                desc: '当前选中颜色',
                type: 'string'
            }]
        }]

        that.updater.digest({
            viewId,
            options,
            events
        });
    }
});