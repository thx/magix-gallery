let Magix = require('magix');
let Base = require('__test__/example');

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
                text: 'unionMedia（联盟媒体测）',
                value: 'unionMedia'
            }, {
                text: 'unionMerchant（联盟商家测）',
                value: 'unionMerchant'
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