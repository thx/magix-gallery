let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        let fields = [{
            text: '消耗', value: 'cost', tip: '提示文案'
        }, {
            text: '展现量', value: 'impression'
        }, {
            text: '点击量', value: 'click', 
        }, {
            text: '点击率', value: 'ctr'
        }, {
            text: '平均点击单价', value: 'cpc'
        }, {
            text: '点击转化率', value: 'coverage'
        }, {
            text: '成交笔数', value: 'transaction'
        }]

        let map = {};
        fields.forEach(item => {
            map[item.value] = item.text;
        })
        
        this.updater.digest({
            fields,
            custom: false, //当前是为默认数据
            customs: ['cost', 'click', 'impression'],
            defaults: ['cost', 'click'],
            map
        });
    },
    'change<change>'(e){
        // e.custom：true or false，是否为自定义指标
        // e.customs：用户自定义的指标，当前用的的配置
        // e.defaults：默认指标，不变
        // e.triggerType：
        //      btn-switch 切换自定义和默认设置
        //      dialog-setting 浮层编辑指标
        this.updater.digest({
            custom: e.custom,
            customs: e.customs,
            triggerType: e.triggerType
        });
    }
});