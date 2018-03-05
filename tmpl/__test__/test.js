/*
ver:2.0.6
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
            list: [1, 2, 3, 4, 5],
            Math
        });
        // let abc = 20;
        // setInterval(() => {
        //     this.updater.digest({
        //         value: abc++
        //     });
        // }, 1500);
        let a = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('ok');
                }, 2000);
            });
        };
        console.log(this.updater);
    },
    'increase<click>'() {
        let list = this.updater.get('list');
        list.push(Magix.guid());
        console.log('enter');
        this.updater.digest({
            list
        });
    },
    'decrease<click>'() {
        let list = this.updater.get('list');
        list.pop();
        this.updater.digest();
        //this.owner.mountVframe('vf_1_' + this.id, '@./test');
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
    },
    '@{test}<input>'(e) {
        let value = e.eventTarget.value;
       // e.preventDefault();
        //setTimeout(() => {
            this.updater.digest({
                value: value
            });
        //}, 150);
    },
    '$doc<mousedown,mouseup>'(){
        console.log(document.activeElement);
    },
    '@{show}<click>' (e) {
        let that = this;
        that.updater.set({
            editing: true
        }).digest()
    }
});
