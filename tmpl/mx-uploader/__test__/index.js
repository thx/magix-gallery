let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'name',
            desc: '服务器端接收文件时的名称',
            type: 'file'
        }, {
            key: 'action',
            desc: '上传接口地址',
            type: 'string',
            def: ''
        }, {
            key: 'multiple',
            desc: '是否允许多文件上传',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'accept',
            desc: '选择文件时的类型，同input[type=file]的accept',
            type: 'string',
            def: ''
        }, {
            key: 'disabled',
            desc: '是否禁用',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'type',
            desc: '上传方式<br>iframe：返回为页面<br>xhr：直接返回json数据',
            type: 'string',
            def: 'iframe'
        }]

        this.updater.digest({
            options
        });
    }
});