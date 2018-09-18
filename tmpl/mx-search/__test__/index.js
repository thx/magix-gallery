let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'list',
            desc:  `可搜素类型列表，例如<pre>[{
    text: '文案',
    value: '跟后端交互字段',
    tmpl: '自定义下拉列表模板'
}]

关于tmpl：
默认为 = 搜索含有“$&#123;content&#125;”的$&#123;text&#125;
自定义时输入内容位置使用占位符$&#123;content&#125;
</pre>`,
            type: 'array',
            def: ''
        }, {
            key: 'list-text',
            desc: '可搜索类型展示文案',
            type: 'string',
            def: 'text'
        }, {
            key: 'list-value',
            desc: '可搜索类型对应的key值',
            type: 'string',
            def: 'value'
        }, {
            key: 'search-key',
            desc: '当前选中的搜索值，对应list-value的某个值',
            type: 'string',
            def: ''
        }, {
            key: 'search-value',
            desc: '搜索框的输入文案',
            type: 'string',
            def: ''
        }, {
            key: 'align',
            desc: '左对齐还是右对齐，left or right',
            type: 'string',
            def: 'left'
        }, {
            key: 'placeholder',
            desc: '空状态提示文案',
            type: 'string',
            def: '配置了placeholder，显示placeholder，否则<br>配置了list，默认显示list-text.join(\'/\')<br>单个类型搜索默认显示搜素'
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});