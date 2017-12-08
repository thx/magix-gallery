/*
ver:1.3.8
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
    tmpl: '@test.html',
    //mixins: [Magix.State.clean('go')],
    init() {
        this.observeState('go');
        S.queryUser();
    },
    render() {
        let me = this;
        let s = Magix.State.get();
        if (s.go) {
            console.log(s);
            me.updater.digest();
        }
        S.queryUser();
        // S.invoke('query', ['a', 'b']);
    }
});