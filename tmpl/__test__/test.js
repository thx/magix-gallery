/*
ver:1.3.10
*/
let Magix = require('magix');
Magix.applyStyle('@test.css');

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
    //mixins: [Magix.State.clean('go')],
    init() {
        this.observeState('go');
        S.queryUser();
    },
    render() {
        this.updater.digest();
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
                    resolve('ok1');
                }, 2000);
            });
        };
        a().then(this.wrapAsync(r => {
            console.log(r);
            return b();
        })).then(this.wrapAsync(r => {
            console.log('r', r);
        }));
    }
});