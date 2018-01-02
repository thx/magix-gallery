/*
ver:2.0.0
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@index.less');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let me = this;
        me.updater.digest();
        me.$selected = {};
    },
    'show<change,click>'(e) {
        let node = e.node;
        let me = this;
        if (!node.id) node.id = Magix.guid('mx_');
        if (e.action == 'add') {
            if (me.$selected[node.id]) {
                $(node).removeClass('@index.less:selected');
                delete me.$selected[node.id];
                if (e.mode == 'drag') {
                    me.$temp[node.id] = 1;
                }
            } else {
                $(node).addClass('@index.less:selected');
                me.$selected[node.id] = node;
                if (e.mode == 'drag') {
                    delete me.$temp[node.id];
                }
            }
        } else if (e.action == 'remove') {
            if (me.$temp[node.id]) {
                $(node).addClass('@index.less:selected');
                me.$selected[node.id] = node; if (e.mode == 'drag') {
                    delete me.$temp[node.id];
                }
            } else {
                $(node).removeClass('@index.less:selected');
                delete me.$selected[node.id]; if (e.mode == 'drag') {
                    me.$temp[node.id] = 1;
                }
            }
        }
        console.log(me.$selected);
    },
    'begin<dragbegin>'() {
        console.log('begin');
        this.$temp = {};
    },
    'end<dragfinish>'() {
        delete this.$temp;
    }
});