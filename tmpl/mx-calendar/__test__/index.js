let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'max',
            desc: '最大可选的日期',
            type: 'string'
        }, {
            key: 'min',
            desc: '最小可选的日期',
            type: 'string',
            def: ''
        }, {
            key: 'selected',
            desc: '默认选中的日期',
            type: 'string',
            def: '1. 今天小于min，默认为min<br/>2. 今天大于max，默认为max<br/>3. 今天在可选范围之内，默认为今天'
        }, {
            key: 'time-type',
            desc: '时分秒选择类型，设置该值后会出现时间选择组件<br/>可选择"hour,minute,second"中的一个或者多个<br/>此外提供快捷的配置"all" = "hour,minute,second"',
            type: 'string',
            def: ''
        }, {
            key: 'align',
            desc: '日历与目标的对齐方式，可选left和right',
            type: 'string',
            def: 'left'
        }, {
            key: 'prefix',
            desc: '提示文案前缀，展示为prefix：YYYY-MM-DD',
            type: 'string',
            def: ''
        }, {
            key: 'week-start',
            desc: '从周几开，0-6，0表示周日',
            type: 'number',
            def: '0'
        }]

        this.updater.digest({
            options
        });
        
    }
});