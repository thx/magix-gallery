/*
ver:1.3.7
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
            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10'],
            selected: ['分类1', '分类5', '分类10'],
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
            userSelected: [58782]
        });
    },
    'showUserIds<change>' (e) {
        this.gtipRT('选中的用户ids:'+e.ids);
    }
});