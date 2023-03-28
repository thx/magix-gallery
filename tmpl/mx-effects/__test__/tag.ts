import Magix from 'magix';

export default Magix.View.extend({
    tmpl: '@tag.html',
    render() {
        let options = [{
            key: 'list',
            desc: `<pre>列表数组，结构如下：
[{
    value: 1,
    text: "a",
    title: "打标",
    subs: [{
        value: 11,
        text: "aa",
    }]
}]</pre>`,
            type: 'array'
        }, {
            key: 'adc-list',
            desc: `<pre>联动adc，直接传入adc组件树结构即可，数据格式如下：
[{
    name: 1,
    code: "a",
    description: "打标",
    subComponentList: [{
        name: 11,
        code: "aa",
    }]
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
            key: 'title-key',
            desc: '渲染title时读取的key',
            type: 'string',
            def: 'title'
        }, {
            key: 'sub-key',
            desc: '渲染subs时读取的key',
            type: 'string',
            def: 'subs'
        }]

        let events = [{
            type: 'delete',
            desc: '移除标签时触发',
            params: [{
                key: 'list',
                desc: '当前剩余完成列表',
                type: 'array'
            }, {
                key: 'item',
                desc: '当前操作的对象，一级或者二级',
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