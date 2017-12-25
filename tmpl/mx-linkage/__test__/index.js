/*
ver:1.3.10
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
            headers: ['省份', '城市', '地区'],
            list: [{
                id: 1,
                text: '浙江省'
            }, {
                id: 2,
                text: '河南省'
            }, {
                id: 3,
                text: '杭州市',
                pId: 1
            }, {
                id: 4,
                text: '周口市',
                pId: 2
            }, {
                id: 5,
                text: '安徽省'
            }, {
                id: 6,
                text: '新疆维吾尔自治区'
            }, {
                id: 7,
                pId: 3,
                text: '余杭区'
            }, {
                id: 8,
                text: '湖州市',
                pId: 1
            }, {
                id: 9,
                text: '长吉县',
                pId: 8
            }]
        });
    },
    'showValue<change>'(e) {
        console.log(e);
    }
});