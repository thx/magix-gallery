let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'total',
            desc: '总数',
            type: 'number'
        }, {
            key: 'page',
            desc: '当前第几页',
            type: 'number',
            def: 1
        }, {
            key: 'offset',
            desc: '偏移量，优先级 page > offset',
            type: 'number',
            def: 0  
        }, {
            key: 'size',
            desc: '每页多少条',
            type: 'number',
            def: 40
        }, {
            key: 'sizes',
            desc: '可选分页数',
            type: 'array',
            def: '[10,20,30,40]'
        }, {
            key: 'jump',
            desc: '是否有快捷跳转',
            type: 'boolean',
            def: 'true'
        }, {
            key: 'simplify',
            desc: '只有翻页器，没有汇总数据版本',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'sizes-change',
            desc: '是否可切换分页数',
            type: 'boolean',
            def: 'true'
        }, {
            key: 'sizes-placement',
            desc: '分页选择框展示方向，bottom（下方），top（上方）',
            type: 'string',
            def: 'bottom'
        }, {
            key: 'mini',
            desc: '顺序翻页版本',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'step',
            desc: '页码过多时，中间显示多少条页码',
            type: 'number',
            def: '5'
        }]

        let events = [{
            type: 'change',
            desc: '切换页码，分页数时均会触发',
            params: [{
                key: 'page',
                desc: '当前页码',
                type: 'number'
            }, {
                key: 'size',
                desc: '每页条数',
                type: 'number'
            }, {
                key: 'offset',
                desc: '偏移量：offset = (size - 1) * page',
                type: 'number'
            }]
        }]

        this.updater.digest({
            viewId: this.id,
            options,
            events,
            page: 1,
            size: 40
        });
    },
    'change<change>' (e) {
        // e.page 当前第几页
        // e.size 每页多少条
        // e.offset 偏移量
        this.updater.digest({
            page: e.page,
            size: e.size
        })
    }
});