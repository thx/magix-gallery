let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@5.html',
    render() {
        let fields = [{
            text: '消耗', 
            value: 1, 
            pValue: 1,
            tip: '消耗提示文案'
        }, {
            text: '展现量', 
            value: 2, 
            pValue: 1
        }, {
            text: '点击量', 
            value: 3, 
            pValue: 1
        }, {
            text: '点击率', 
            value: 4, 
            pValue: 1
        }, {
            text: '平均点击单价', 
            value: 5, 
            pValue: 1,
            tip: '平均点击单价提示文案'
        }, {
            text: '点击转化率', 
            value: 6, 
            pValue: 2
        }, {
            text: '成交笔数', 
            value: 7, 
            pValue: 2
        }, {
            text: '淘积木页面平均停留时长', 
            value: 8,
            tip: '淘积木页面平均停留时长提示文案', 
            pValue: 2
        }, {
            text: '投资回报率', 
            value: 9, 
            pValue: 2
        }, {
            text: '访问页面数', 
            value: 10, 
            pValue: 2
        }]

        let parents = [{
            text: '淘积木互动',
            value: 1
        }, {
            text: '粉丝获取',
            value: 2
        }]

        let map = {};
        fields.forEach(item => {
            map[item.value] = item.text;
        })
        
        this.updater.digest({
            parents,
            fields,
            custom: false, //当前是为默认数据
            customs: [2,3,4,5],
            defaults: [2,3],
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