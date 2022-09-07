let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../index');
let Validator = require('@../validator');

module.exports = Base.extend({
    tmpl: '@24.html',
    mixins: [Form, Validator],
    render() {
        let rules = {
            required: [true, '目标出价必填'],
            currency: true,
            inranges: [
                ['(,7.51)', '低于成本预期下限7.51元，影响拿量效果，建议提高至14.57元'],
                ['(22.54,)', '当前设置金额高于成本预期上限22.54元，为了保障获取流量的性价比，建议您降低出价']
            ],
            warn: {
                inranges: [
                    ['[7.51,12.32)', '成本预期下限12.32元，影响拿量效果'],
                    ['(16.83,22.54]', '成本设置过高，影响整体投放效率'],
                ]
            },
            pass: {
                max: [12.32, '成本设置较合理'],
                min: [16.83, '成本设置较合理']
            }
        }
        this.updater.digest({
            test: '',
            rules,
            name1: '',
            name2: '',
            name3: '4',
            name4: '4',
            name5: '4',
            name6: '4',
            name7: '4',
            name8: '4',
        });
        this.isValid({
            scrollIntoView: false
        });
    }
});