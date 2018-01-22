/*
ver:2.0.1
*/
let Magix = require('magix');
Magix.applyStyle('@test.css');
let Form = require('../mx-form/index');

let S = {
    ctor() {
        console.log('test');
    },
    queryUser() {
        Magix.State.digest({
            go: 20
        });
    }
};
module.exports = Magix.View.extend({
    tmpl: '@test.html:art',
    mixins: [Form],
    //mixins: [Magix.State.clean('go')],
    init() {
        this.observeState('go');
        S.queryUser();
    },
    render() {
        this.updater.digest({
            list: [1, 2],
            Math
        });
        let a = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('ok');
                }, 2000);
            });
        };
        let b = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('@../mx-number/index.less:wrapper');
                }, 2000);
            });
        };
        a().then(this.wrapAsync(r => {
            console.log(r);
            return b();
        })).then(this.wrapAsync(r => {
            console.log('r', r);
        }));
    },
    'increase<click>'() {
        let list = this.updater.get('list');
        list.push(Magix.guid());
        this.updater.digest({
            list
        });
    },
    'decrease<click>'() {
        this.owner.mountVframe('vf_1_' + this.id, '@./test');
    },
    'remove<click>'(e) {
        let list = this.updater.get('list');
        list.splice(e.params.i, 1);
        this.updater.digest({ list });
    },
    'start<click>'() {
        let active = 0;
        setInterval(() => {
            active++;
            if (active >= 10) {
                active = 0;
            }
            this.updater.digest({
                active
            });
        }, 150);
    }
});