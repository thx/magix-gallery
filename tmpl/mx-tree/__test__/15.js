let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Base.extend({
    tmpl: '@15.html',
    mixins: [Form, Validator],
    init() {
        this['@{map}'] = {};
    },
    render() {
        let that = this;
        let list = [];
        for (let i = 1; i < 4; i++) {
            list.push({
                value: i,
                text: i,
                showChildren: true,
            })
        }

        that.updater.digest({
            list,
            bottomValues: [],
            asyncLoad: (item) => {
                let { value } = item;

                if (!that['@{map}'][value]) {
                    that['@{map}'][value] = new Promise(resolve => {
                        setTimeout(() => {
                            let { list } = that.updater.get();
                            if (+value % 2 == 1) {
                                for (let i = 0; i < 4; i++) {
                                    list.push({
                                        value: `${value}${i}`,
                                        text: `${value}_${i}`,
                                        pValue: value,
                                        showChildren: true,
                                    })
                                }
                            };
                            that.updater.digest({
                                list,
                            });
                            resolve();
                        }, 2000);
                    });
                }
                return that['@{map}'][value];
            }
        });
    },
});