/**
 * checkbox
 */
let Magix = require('magix');
let Moment = require('moment');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@38.html',
    mixins: [Form, Validator],
    render() {
        let fields = [];
        for (let i = 1; i < 5; i++) {
            fields.push({
                value: i,
                text: `字段${i}`,
                width: 100
            })
        }

        let list = [];
        for (let i = 1; i < 5; i++) {
            list.push({
                value: i,
                text: i
            })
        }
        this.updater.set({
            fields,
            list,
            count: 0,
            selected: {
                dd: 1,
                date: Moment().format('YYYY-MM-DD')
            }
        });
        this.setValue();
    },
    setValue() {
        let { count } = this.updater.get();
        this.updater.digest({
            linkages: '',
            count: count + 1
        });
    },
    'add<click>'(e) {
        let { list } = this.updater.get();
        let v = list.length + 1;
        list.push({
            value: v,
            text: v
        })
        this.updater.digest({
            list
        });
    },
    'remove<click>'(e) {
        let { list } = this.updater.get();
        list.splice(list.length - 1, 1);
        this.updater.digest({
            list
        });
    },
    'changeIndexes<click>'(e) {
        let { list, linkages } = this.updater.get();
        let arr = linkages ? (linkages + '').split(',') : [];
        for (let i = 0; i < list.length; i++) {
            if (arr.indexOf(list[i].value + '') > -1) {
                list[i].text = list[i].text + 1;
            }
        }
        this.updater.digest({
            list
        })
    },
    'changeIndex<click>'(e) {
        let { list } = this.updater.get();
        let index = +e.params.index;
        list[index].text = list[index].text + 1;
        this.updater.digest({
            list
        })
    },
    'changeDd<change>'(e) {
        let { selected } = this.updater.get();
        this.updater.set({
            selected: Magix.mix(selected, {
                dd: e.selected
            })
        })
        this.setValue();
    },
    'changeDate<change>'(e) {
        let { selected } = this.updater.get();
        this.updater.set({
            selected: Magix.mix(selected, {
                date: e.date
            })
        })
        this.setValue();
    }
});