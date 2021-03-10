let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@event.html',
    init(extra) {
        let events = [{
            type: 'dragfinish',
            desc: '拖动完成时触发<div class="color-red">注意：拖动会改变th节点的width属性，要保证稳定性，<br/>请修改之后一定要监听dragfinish缓存修改后的结果，<br/>否则重新digest时会回置到之前的宽度</div>',
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