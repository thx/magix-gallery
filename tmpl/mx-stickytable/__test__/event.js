let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@event.html',
    init(extra) {
        let events = [{
            type: 'dragfinish',
            desc: '拖动完成时触发<div class="color-red nowrap">注意：拖动会改变th节点的width属性，要保证稳定性，</div><div class="color-red nowrap">请修改之后一定要监听dragfinish缓存修改后的结果，</div><div class="color-red nowrap">否则重新digest时会回置到之前的宽度</div>',
            params: [{
                key: 'items',
                desc: `<pre>被影响列宽的列值对象
items = {
    列value1: 宽度,
    列value2: 宽度
}</pre>`,
                type: 'object'
            }]
        }, {
            type: 'change',
            desc: 'checkbox选中发生变化时触发',
            params: [{
                key: 'linkages',
                desc: '当前选中checkbox的叶子节点value值<br/>入参为数组则为数组<br/>入参为逗号分隔字符串则为字符串',
                type: 'array or string'
            }]
        }, {
            type: 'sort',
            desc: '配置sort-action="event"时，排序字段发生变化时外抛事件',
            params: [{
                key: 'orderField',
                desc: '排序字段',
                type: 'string'
            }, {
                key: 'orderBy',
                desc: '排序方式，desc 或者 asc，默认desc',
                type: 'string'
            }]
        }, {
            type: 'filter',
            desc: '配置filter=true时，排序上下限小浮层发生变化时外抛事件',
            params: [{
                key: 'orderField',
                desc: '排序字段',
                type: 'string'
            }, {
                key: 'filterMin',
                desc: '下限',
                type: 'number'
            }, {
                key: 'filterMax',
                desc: '上限',
                type: 'number'
            }]
        }]

        let filters = extra.filters || [];
        if (filters.length > 0) {
            for (let i = 0; i < events.length; i++) {
                if (filters.indexOf(events[i].type) < 0) {
                    events.splice(i--, 1);
                }
            }
        }
        this.updater.set({
            viewId: this.id,
            events
        });
    },
    render() {
        this.updater.digest();
    }
});