let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'time',
            desc: '格式：hh:mm:ss，默认为当前时间',
            type: 'string'
        }, {
            key: 'types',
            desc: `<pre>
时分秒选择类型：
可选择"hour,minute,second"中的一个或者多个
此外"all" = "hour,minute,second" = ""，不设置的时候默认时分秒都显示
            </pre>`,
            type: 'string',
            def: ''
        }, {
            key: 'hour-min',
            desc: '小时下限',
            type: 'number',
            def: 0
        }, {
            key: 'hour-max',
            desc: '小时上限',
            type: 'number',
            def: 23
        }, {
            key: 'minute-min',
            desc: '分钟下限',
            type: 'number',
            def: 0
        }, {
            key: 'minute-max',
            desc: '分钟上限',
            type: 'number',
            def: 59
        }, {
            key: 'second-min',
            desc: '秒下限',
            type: 'number',
            def: 0
        }, {
            key: 'second-max',
            desc: '秒上限',
            type: 'number',
            def: 59
        }]

        let events = [{
            type: 'change',
            desc: '切换日期时会触发',
            params: [{
                key: 'time',
                desc: '当前时分秒，格式：hh:mm:ss',
                type: 'string'
            }]
        }]

        this.updater.digest({
            viewId: this.id,
            options,
            events
        });
    }
});