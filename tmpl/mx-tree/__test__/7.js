let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@7.html',
    render() {
        let list = [];

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
        for (let i = 1; i < 10; i++) {
            fn(i);
            for (let j = 1; j < 10; j++) {
                fn(i + '' + j);
                for (let k = 1; k < 10; k++) {
                    fn(i + '' + j + '' + k);
                }
            }
        }

        this.updater.digest({
            list,
            realValues: []
        });
    }
});