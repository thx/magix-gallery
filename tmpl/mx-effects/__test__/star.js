let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@star.html',
    render() {
        let options = [{
            key: 'count',
            desc: 'icon个数',
            type: 'number',
            def: 5
        }, {
            key: 'num',
            desc: '当前评分，相对于count，范围为 0 ~ count',
            type: 'number',
            def: 0
        }, {
            key: 'color',
            desc: '自定义颜色，如 #4d7fff 或者 rgb(77, 127, 255)',
            type: 'string',
            def: '品牌色'
        }, {
            key: 'icon',
            desc: '自定义icon<br/>特殊场景：<br/>icom=number时数字版',
            type: 'string',
            def: ''
        }, {
            key: 'width',
            desc: '单个icon尺寸',
            type: 'number',
            def: 24
        }, {
            key: 'operational',
            desc: '是否可操作',
            type: 'boolean',
            def: 'false'
        }]

        let events = [{
            type: 'change',
            desc: 'operational=true时，切换评分时触发',
            params: [{
                key: 'num',
                desc: '当前评分',
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