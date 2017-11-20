/*
ver:1.3.7
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let me = this;
        me.updater.digest({
            list: [{
                id: 0,
                pId: '',
                text: 'abc'
            }, {
                id: '0-0',
                pId: '',
                text: 'abc-abc'
            }, {
                id: 1,
                pId: 0,
                text: 'def'
            }, {
                id: 2,
                pId: 1,
                text: 'aaa'
            }, {
                id: 3,
                pId: 2,
                text: 'bbb'
            }, {
                id: 4,
                pId: 2,
                text: 'bbb'
            }, {
                id: 5,
                pId: 1,
                text: 'aaa'
            }, {
                id: 6,
                pId: 1,
                text: 'aaa'
            }]
        });
    }
});