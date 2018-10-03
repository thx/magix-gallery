let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'simple',
            desc: '极简模式，默认只区分工作日和双休日，如需每天单独选择，请设置simple=false',
            type: 'boolean',
            def: 'true'
        }, {
            key: 'selected',
            desc: `<pre>
当前选中值，week表示周几（1周一，7周日，以此类推），times表示当前选中小时，0 ~ 23
1. simple = true时
    selected = [{
        week: 12345, //工作日
        times: [2,3,4]
    },{
        week: 67, //双休日
        times: []
    }]

2. simple = false时
    selected = [{
        week: 1, //周一
        times: [2,3,4]
    },
    ...
    {
        week: 7, //周日
        times: [1,2,4]
    }]
</pre>`,
            type: 'array',
            def: '[]'
        }, {
            key: 'tip',
            desc: '右下角提示文案信息',
            type: 'string',
            def: ''
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});