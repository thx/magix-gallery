let Magix = require('magix');
let $ = require('$');

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