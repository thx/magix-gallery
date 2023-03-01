let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'list',
            desc: `可搜素类型列表，例如<pre>[{
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
        }, {
            key: 'mode',
            desc: '展示模式<br/>highlight：强调搜索框样式<br/>white：反白普通搜索框<br/>white-highlight：反白强调搜索框<br/>common：普通样式',
            type: 'string',
            def: ''
        }]

        let events = [{
            type: 'change',
            desc: '回车（默认搜索第一个）<br/>或者点选下拉列表某个选项时触发',
            params: [{
                key: 'searchKey',
                desc: '下拉列表选中项',
                type: 'string'
            }, {
                key: 'searchValue',
                desc: '输入框输入的内容',
                type: 'string'
            }, {
                key: 'selected',
                desc: '输入框输入的内容，=searchValue',
                type: 'string'
            }, {
                key: 'selectedObj',
                desc: `<pre>双向绑定时，数据对象回显
                
例如入参为
search-key="{{:test1}}" 
search-value="{{:test2}}"

则返回
selectedObj={ 
    test1: 'xx', 
    test2: 'xx',
}</pre>`,
                type: 'object'
            }]
        }]

        this.updater.digest({
            viewId: this.id,
            options,
            events
        });
    }
});