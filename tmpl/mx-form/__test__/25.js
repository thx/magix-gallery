let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@25.html',
    render() {
        let errorTip = '输入数字x，必须 3 <= x < 5 或者 x >= 9',
            warnTip = '输入数字x，建议 x < 3 或者 9 <= x < 10';
        this.updater.digest({
            errorTip,
            errorRules: {
                number: true,
                inranges: [
                    ['(,3)', errorTip],
                    ['[5, 9)', errorTip],
                ]
            },
            warnTip,
            warnRules: {
                number: true,
                warn: {
                    inranges: [
                        ['[3, 9)', warnTip],
                        ['[10,)', warnTip],
                    ]
                }
            }
        });
    }
});