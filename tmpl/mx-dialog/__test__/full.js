let Magix = require('magix');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Magix.View.extend({
    tmpl: '@full.html',
    mixins: [Form, Validator],
    init(extra){
        this.updater.set({
            readonly: extra.readonly
        })
    },
    render() {
        this.updater.digest();
    },
    check() {
        let that = this;
        let ok = that.isValid();

        let name = '';
        if(ok){
            name = that.updater.get('name');
        }
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    ok,  
                    msg: '请按照要求填写完信息再提交',
                    data: {
                        name
                    }
                })
            }, 1000)
        })
    }
});
