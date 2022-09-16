let Magix = require('magix');
let Base = require('__test__/example');
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
            key: 'step',
            desc: '页码过多时，中间显示多少条页码',
            type: 'number',
            def: '5'
        }, {
            key: 'simplify',
            desc: '只有翻页器，没有汇总数据版本，默认对应<br/>hide-jump=false<br/>hide-detail-total=true<br/>hide-total=false',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'mini',
            desc: '顺序翻页版本，默认对应<br/>hide-jump=true<br/>hide-detail-total=true<br/>hide-total=false',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'hide-jump',
            desc: '是否隐藏快捷跳转',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'hide-detail-total',
            desc: '是否隐藏左侧详情汇总',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'hide-total',
            desc: '是否隐藏右侧极简汇总',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'sizes-change',
            desc: '是否可切换分页数',
            type: 'boolean',
            def: 'true'
        }, {
            key: 'sizes-placement',
            desc: '分页器下拉框展开方向',
            type: 'string，可选top，bottom',
            def: 'bottom'
        }];

        // {
        //     key: 'small',
        //     desc: '小尺寸展示',
        //     type: 'boolean',
        //     def: 'false'
        // }

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
                desc: '偏移量：offset = (page - 1) * size',
                type: 'number'
            }]
        }]

        this.updater.digest({
            viewId: this.id,
            options,
            events
        });
    }
});