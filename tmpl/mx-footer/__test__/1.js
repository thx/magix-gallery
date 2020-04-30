let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest({
            list: [{
                text: '左对齐（默认）',
                value: 'left'
            }, {
                text: '居中对齐',
                value: 'center'
            }, {
                text: '右对齐',
                value: 'right'
            }],
            current: 'left',
            bizCodes: [{
                text: 'adStrategy（策略中心）',
                value: 'adStrategy'
            }, {
                text: 'union（联盟）',
                value: 'union'
            }],
            types: [{
                text: 'alimama（默认）',
                value: 'alimama'
            }, {
                text: 'taobao',
                value: 'taobao'
            }, {
                text: 'etao',
                value: 'etao'
            }, {
                text: 'tanx',
                value: 'tanx'
            }, {
                text: 'iconfont',
                value: 'iconfont'
            }],
            currentType: 'alimama',
            currentBizcode: ''
        });
    },
    'change<change>'(e) {
        this.updater.digest({
            current: e.params.value
        })
    },
    'changeType<change>'(e) {
        this.updater.digest({
            currentType: e.params.value,
            currentBizcode: ''
        })
    },
    'changeBizCode<change>'(e) {
        this.updater.digest({
            currentType: '',
            currentBizcode: e.params.value
        })
    }
});