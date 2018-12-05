let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@events.html',
    render() {
        let events = [{
            type: 'change',
            desc: '切换操作项的时候触发',
            params: [{
                key: 'status',
                desc: '当前选中操作项完整对象',
                type: 'object'
            }]
        }]

        this.updater.digest({
            events
        });
    }
});