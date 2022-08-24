let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let viewId = this.id;

        let options = [
            // {
            //     key: 'selected',
            //     desc: '当前选中值<br>每个省份和城市都有各自的id<br>若选择了省份，则其所有城市id都不传',
            //     type: 'array',
            //     def: '[]'
            // },
            {
                key: 'values',
                desc: '当前选中值<br>每个省份和城市都有各自的id<br>若选择了省份，则其所有城市id都不传',
                type: 'array',
                def: '[]'
            },
            {
                key: 'adc-list',
                desc: `<pre>自定义数据字母地理区数据格式：
[{
    name: '省份', 
    code: '省份id', 
    properties: {
        letter: '可选，字母分组，A，B，会按照该文案分组',
        area: '可选，地理区域分组，华东地区，华北地区，会按照该文案分组',
    },
    subComponentList: [{
        name: '城市', 
        code: '城市id',
    }, {
        name: '城市', 
        code: '城市id'
    }]
}]
</pre>`,
                type: 'array',
                def: '[]'
            },
            {
                key: 'data',
                desc: `<pre>
自定义数据，平铺或者tab切换数据格式：
[{
    id, 
    name, 
    cities: [{
        id, 
        name
    }, {...}]
}]
</pre>`,
                type: 'array',
                def: `<a href="javascript:;" class="color-brand" mx-click="to({id:'${viewId}_demo3'})">查看示例</a>`
            },
            {
                key: 'city',
                desc: '是否可选城市',
                type: 'boolean',
                def: 'false'
            },
            {
                key: 'type',
                desc: '展现形式，默认平铺，需要tab切换时配置type="tab"即可',
                type: 'string',
                def: ''
            },
            {
                key: 'line-number',
                desc: '单行显示个数',
                type: 'number',
                def: 6
            }
        ]


        let events = [{
            type: 'change',
            desc: '选择项发生变化时触发',
            params: [
                // {
                //     key: 'selected', // 入参是[1,2]，出参是完整对象，不好匹配
                //     desc: '当前选中项完整对象',
                //     type: 'array'
                // },
                {
                    key: 'items',
                    desc: '当前选中项完整对象',
                    type: 'array'
                },
                {
                    key: 'values',
                    desc: '当前选中项的id',
                    type: 'array'
                }
            ]
        }]

        this.updater.digest({
            viewId,
            options,
            events
        });
    }
});