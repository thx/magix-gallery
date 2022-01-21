let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@9.html',
    mixins: [Form, Validator],
    render() {
        let list = [];
        let max = 10;

        let fn = (pValue) => {
            for (let i = 1; i < 10; i++) {
                list.push({
                    value: pValue + '' + i,
                    text: pValue + '' + i,
                    pValue
                })
            }
        }

        fn('');
        for (let i = 1; i < max; i++) {
            fn(i);
            for (let j = 1; j < max; j++) {
                fn(i + '' + j);
                for (let k = 1; k < max; k++) {
                    fn(i + '' + j + '' + k);
                }
            }
        }

        this.updater.digest({
            list,
            selected: 2111
        });
    }
});