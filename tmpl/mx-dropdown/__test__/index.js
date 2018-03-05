/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest({
            userList: [{
                name: 'xinglie',
                id: 58782
            }, {
                name: 'xinglie1',
                id: 587821
            }, {
                name: 'xinglie2',
                id: 587822
            }, {
                name: 'xinglie3',
                id: 587823
            }, {
                name: 'xinglie4',
                id: 587824
            }, {
                name: 'xinglie5',
                id: 587825
            }, {
                name: 'xinglie6',
                id: 587826
            }, {
                name: 'xinglie7',
                id: 587827
            }, {
                name: 'xinglie8',
                id: 587828
            }, {
                name: 'xinglie9',
                id: 587829
            }],
            userSelected: 587828,
            usersSelected: [58782, 587829]
        });
    },
    'showWeek<change>'(e) {
        this.gtipRB('text:' + e.text + ',value:' + e.value);
    },
    'showUser<change>'(e) {
        this.gtipRB('name:' + e.text + ',id:' + e.value);
    },
    'showWeeks<change>'(e) {
        this.gtipRB('values:' + e.values);
    },
    'showUsers<change>'(e) {
        this.gtipRB('user ids:' + e.values);
    },
    'test<click>'(e) {
        this.updater.digest({
            searchbox: !this.updater.get('searchbox')
        });
        console.log(this.updater.get('searchbox'));
    }
});