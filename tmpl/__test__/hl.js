/*
ver:2.0.6
*/
let Magix = require('magix');
let $ = require('$');
module.exports = Magix.View.extend({
    assign(data, ops) {
        ops.deep = false;
        if (ops.html) {
            $('#' + this.id).html(ops.inner);
        }
        return ops.html;
    },
    render() {
        let node = Magix.node(this.id);
        hljs.highlightBlock(node);
    }
});