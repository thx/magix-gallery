let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'mode',
            desc: '页脚类型，简单版（simple）还是复杂版本',
            type: 'string',
            def: ''
        }]

        this.updater.digest({
            options
        });
    }
});

// let Magix = require('magix');
// let View = require('zs_scaffold/view')
// module.exports = View.extend({
//     tmpl: '@sort.html',
//     init() {
//         let that = this;
//     },
//     render() {
//         let that = this;
//         let options = [{
//             key: 'limit',
//             desc: '指标选中上限，不传不限制选择个数',
//             type: 'number',
//             def: ''
//         }, {
//             key: 'sortable',
//             desc: '是否需要排序',
//             type: 'boolean',
//             def: 'false'
//         }, {
//             key: 'selected',
//             desc: '当前选中的指标key值的数组，["cost", "impression", "click"]',
//             type: 'array'
//         }, {
//             key: 'pageKey',
//             desc: '保存用户到memberConfig设置对应的key值，无需保存可不传',
//             type: 'string',
//             def: ''
//         }]

//         that.updater.digest({
//             options,
//             selected: ['cost', 'impression', 'click'],
//             selected2: ['cost', 'impression', 'click'],
//             selected3: ['cost', 'impression', 'click']
//         });
//     },
//     'changeFields<change>'(event) {
//         let selected = event.selected;
//         // selected 选择指标数组
//         this.updater.set({
//             selected: selected
//         }).digest();
//     },
//     'changeFields2<change>'(event) {
//         let selected = event.selected;
//         this.updater.set({
//             selected2: selected
//         }).digest();
//     }
// });