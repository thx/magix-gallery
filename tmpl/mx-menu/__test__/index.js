/*
ver:2.0.4
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Menu = require('../index');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let me = this;
        me.updater.digest({
            list: [{
                id: 0,
                pId: '',
                text: '新建'
            }, {
                id: '0-0',
                pId: '',
                text: '复制'
            }, {
                id: '0-1',
                pId: '',
                text: '删除'
            }, {
                id: 1,
                pId: 0,
                text: '新建word文件'
            }, {
                id: 2,
                pId: 0,
                text: '新建excel文件'
            }, {
                id: 3,
                pId: 0,
                text: '新建ppt文件'
            }]
        });
    },
    'showcm<contextmenu>'(e) {
        e.preventDefault();
        Menu.show(this, e, {
            list: this.updater.get('list'),
            picked(item) {
                console.log(item);
            },
            width: 220
        });
    }
});