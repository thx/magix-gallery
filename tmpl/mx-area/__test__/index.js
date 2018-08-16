let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
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
            desc: '自定义数据<br>格式[{id, name, cities:[id, name]}]',
            type: 'string',
            def: '见示例1'
        }, {
            key: 'type',
            desc: '展现形式，默认平铺，需要tab切换时配置type="tab"即可',
            type: 'string',
            def: ''
        }]

        this.updater.digest({
            options
        });
    }
});