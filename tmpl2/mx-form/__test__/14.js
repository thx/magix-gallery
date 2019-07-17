let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../index');
let Validator = require('@../validator');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@14.html',
    mixins: [Form, Validator],
    render() {
        let list = [];
        for (let index = 0; index < 2; index++) {
            list.push({
                key: index,
                value: ''
            })
        }

        this.updater.digest({
            list
        });
    },
    'add<click>'(e){
        let list = this.updater.get('list');
        let len = list.length;
        list.push({
            key: len,
            value: 'test'
        })
        this.updater.digest({
            list
        });
    }
});