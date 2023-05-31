import Magix from 'magix';

export default Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'list',
            desc: `<pre>
对象数组，格式如下：
[{
    value: 1,
    text: '选项1',
    link: '外链',
    img: '带图场景大图，96 * 96，正方形尺寸',
    tagContent: '自定义打标内容，优先级tagContent > tag',
    tag: '打标标签',
    color: '打标自定义颜色，默认红色，只对tag生效',
    tip: '提示信息',
    disabled: false  // 单选项禁用
}]</pre>`, type: 'array'
        }, {
            key: 'adc-list',
            desc: `<pre>联动adc，直接传入adc组件树结构即可，数据格式如下：
[{
    code: "对应value",
    name: "对应text",
    description: "提示信息，对应tip",
    properties: {
        disabled: "是否禁用",
        tag: "打标",
        tagColor: "打标颜色",
        link: "外链地址",
        img: '带图场景大图，96 * 96，正方形尺寸',
    }
}]</pre>`,
            type: 'array'
        }, {
            key: 'selected',
            desc: '当前选中值',
            type: 'string',
            def: '不传默认取list第一个'
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
            key: 'disabled',
            desc: '是否禁用',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'count-map',
            desc: `<pre>计数对象
显示返回对应value的才显示，组件不做补0操作，未0也需要配置0才显示
{
    value: count,
}</pre>`,
            type: 'object',
            def: '{}'
        }];

        let events = [{
            type: 'change',
            desc: '切换tab时触发',
            params: [{
                key: 'selected',
                desc: '当前选中value，同value',
                type: 'string'
            }, {
                key: 'value',
                desc: '当前选中value',
                type: 'string'
            }, {
                key: 'text',
                desc: '当前选中text',
                type: 'string'
            }, {
                key: 'item',
                desc: '当前选中完整对象',
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