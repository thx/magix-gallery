import Magix from 'magix';

export default Magix.View.extend({
    tmpl: '@tab.html',
    render() {
        let options = [{
            key: 'list',
            desc: `<pre>列表数组，结构如下：
[{
    value: 1,
    text: "a",
    icon: "图标",
}]</pre>`,
            type: 'array'
        }, {
            key: 'adc-list',
            desc: `<pre>联动adc，直接传入adc组件树结构即可，数据格式如下：
[{
    name: 1,
    code: "a",
    properties: {
        icon: '图标'
    }
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
            key: 'icon-key',
            desc: '渲染icon时读取的key',
            type: 'string',
            def: 'icon'
        }];

        let events = [{
            type: 'change',
            desc: '切换模式时触发',
            params: [{
                key: 'item',
                desc: '当前模式完整对象',
                type: 'object'
            }, {
                key: 'selected',
                desc: '当前选中value值',
                type: 'string'
            }]
        }]

        this.updater.digest({
            viewId: this.id,
            options,
            events
        });
    }
});