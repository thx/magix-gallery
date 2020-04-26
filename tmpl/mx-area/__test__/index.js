let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let viewId = this.id;

        let options = [{
            key: 'selected',
            desc: '当前选中值<br>每个省份和城市都有各自的id<br>若选择了省份，则其所有城市id都不传',
            type: 'array',
            def: '[]'
        }, {
            key: 'city',
            desc: '是否可选城市',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'data',
            desc: `<pre>
自定义数据，数据格式：
[{
    id, 
    name, 
    cities: [{
        id, 
        name
    }, {...}]
}]
</pre>`,
            type: 'string',
            def: `<a href="javascript:;" class="color-brand" mx-click="to({id:'${viewId}_demo3'})">查看示例</a>`
        }, {
            key: 'type',
            desc: '展现形式，默认平铺，需要tab切换时配置type="tab"即可',
            type: 'string',
            def: ''
        }, {
            key: 'line-number',
            desc: '单行显示个数',
            type: 'number',
            def: 6
        }]


        let events = [{
            type: 'change',
            desc: '选择项发生变化时触发',
            params: [{
                key: 'selected',
                desc: '当前选中项完整对象',
                type: 'array'
            }, {
                key: 'values',
                desc: '当前选中项的id',
                type: 'array'
            }]
        }]

        this.updater.digest({
            viewId,
            options,
            events
        });
    }
});