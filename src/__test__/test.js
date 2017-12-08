/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('__test__/test',["magix"],(require,exports,module)=>{
/*Magix*/

/*
ver:1.3.8
*/
let Magix = require('magix');
Magix.applyStyle("____test___test_",".____test___test_-name{\n    color:red\n}");
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
    tmpl: {"html":"","subs":[],"file":"__test__/test.html"},
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

});