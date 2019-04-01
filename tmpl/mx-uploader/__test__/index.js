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
            key: 'mx-disabled',
            desc: '是否禁用，请在节点上配置mx-disabled<br/>&lt;mx-calendar.datepicker mx-disabled /&gt;',
            type: '',
            def: ''
        }, {
            key: 'type',
            desc: '上传方式<br>iframe：返回为页面<br>xhr：直接返回json数据',
            type: 'string',
            def: 'iframe'
        }]

        let events = [{
            type: 'success',
            desc: '上传成功时调用',
            params: [{
                key: 'files',
                desc: '上传的文件',
                type: '-'
            }, {
                key: 'response',
                desc: '-',
                type: '-'
            }]
        }, {
            type: 'error',
            desc: '上传失败时调用',
            params: [{
                key: 'error',
                desc: '错误信息',
                type: '-'
            }]
        }, {
            type: 'progress',
            desc: '上传过程中调用',
            params: [{
                key: 'percent',
                desc: '上传进度',
                type: '-'
            }]
        }]

        this.updater.digest({
            options,
            events,
            viewId: this.id
        });
    }
});