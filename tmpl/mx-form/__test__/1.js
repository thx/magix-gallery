let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@1.less');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        let that = this;
        let list = [];
        for (var i = 0; i < 3; i++) {
            list.push({
                name: Magix.guid('name-'),
                link: Magix.guid('link-'),
                value: Magix.guid('value-')
            })
        }

        let tip = '请填写1-300之间的整数';
        that.updater.digest({
            viewId: that.id,
            list,
            batRules: {
                warn: {
                    min: [50, '低于50可能影响效果，建议提高'],
                    style: 'box',
                },
                posint: true,
                min: [1, tip],
                max: [300, tip],
                style: 'box',
            },
            rules: {
                warn: {
                    min: [50, '低于50可能影响效果，建议提高'],
                    style: 'box',
                },
                required: [true, tip],
                posint: true,
                min: [1, tip],
                max: [300, tip],
                style: 'box',
            }
        });
    },
    'batch<change,click>'(e) {
        let that = this;

        // 校验批量的按钮是否符合规则
        // 符合规则再往下走
        let check = that.isValid({
            sizzle: `#${that.id}_batch_input`
        })

        if (!check) {
            return;
        }

        let data = that.updater.get();
        let remain = that.fromKeys(data, 'batchDiscount');
        let batchDiscount = remain.batchDiscount;
        if (!batchDiscount) {
            return;
        }

        let list = that.updater.get('list');
        list.forEach(item => {
            item.discount = batchDiscount;
        })
        that.updater.digest({
            list
        })

        // 可能批量校验的规则和单个的不一致
        // 此处调用isValid校验整个view
        that.isValid();
    }
});