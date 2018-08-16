let Magix = require('magix');
let Form = require('@../index');
let Validator = require('@../validator');
Magix.applyStyle('@form3.less');

module.exports = Magix.View.extend({
    tmpl: '@mixins.html',
    mixins: [Form, Validator],
    init() {
        let that = this;
    },
    render() {
        let that = this;
        let list = [{
            id: '1',
            name: '选项1'
        }, {
            id: '2',
            name: '选项2'
        }, {
            id: '3',
            name: '选项3'
        }];

        that.updater.digest({
            list,
            selected: list[0].id
        });
    }
});
// let Magix = require('magix');
// let $ = require('$');

// module.exports = Magix.View.extend({
//     tmpl: '@mixins.html',
//     render() {
//         let options = [{
//             key: 'list',
//             desc: '对象数组，如[{value:1,text:"选项1"}]',
//             type: 'array'
//         }, {
//             key: 'selected',
//             desc: '当前选中值',
//             type: 'string',
//             def: '不传默认取list第一个'
//         }, {
//             key: 'text-key',
//             desc: '渲染text时读取的key',
//             type: 'string',
//             def: 'text'
//         }, {
//             key: 'value-key',
//             desc: '渲染value时读取的key',
//             type: 'string',
//             def: 'value'
//         }, {
//             key: 'disabled',
//             desc: '是否禁用',
//             type: 'boolean',
//             def: 'false'
//         }, {
//             key: 'tag',
//             desc: '打标内容',
//             type: 'string',
//             def: ''
//         }]

//         this.updater.digest({
//             options
//         });
//     },
//     'changeTab<change>'(e) {
//         // e.value 当前选中的key值
//         // e.text 当前选中的文案
//         this.updater.set({
//             selectedId: e.value
//         }).digest()
//     }
// });