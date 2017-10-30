/*
ver:1.3.4
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Dialog = require('mx-dialog/index');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    mixins: [Dialog],
    init(extra) {
        this.updater.set(extra);
    },
    render() {
        let me = this;
        me.updater.digest();
    },
    'alert<click>' () {
        this.alert('xxx', () => {
            console.log('确定被点击');
        });
    },
    'confirm<click>' () {
        this.confirm('xxx', () => {
            console.log('确定被点击');
        }, () => {
            console.log('取消被点击');
        });
    },
    'view<click>' () {
        this.mxDialog('@moduleId', {
            inDialog: true,
            width: 900
        });
    }
});