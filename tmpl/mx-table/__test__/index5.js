let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index5.html',
    render() {
        let options = [{
            key: 'rwd-range',
            desc: '固定的列',
            type: 'string',
            def: '2,-1'
        }, {
            key: 'rwd-limit',
            desc: '几列一页',
            type: 'number',
            def: '4'
        }, {
            key: 'rwd-current',
            desc: '当前显示第几页',
            type: 'number',
            def: '1'
        }]

        this.updater.digest({
            options
        });
    }
});