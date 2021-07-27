let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@zan.html',
    render() {
        let options = [{
            key: 'state',
            desc: '当前状态<br/>state=true表示赞，state=false表示踩<br/>未明确指定true或者false时无选中',
            type: 'boolean',
            def: ''
        }]

        let events = [{
            type: 'change',
            desc: '切换开关时触发',
            params: [{
                key: 'state',
                desc: '当前是开或者关',
                type: 'boolean'
            }]
        }]

        this.updater.digest({
            options,
            events,
            viewId: this.id
        });
    }
});