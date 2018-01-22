/*
ver:2.0.3
*/
let Magix = require('magix');
module.exports = Magix.View.extend({
    render() {
        let node = Magix.node(this.id);
        hljs.highlightBlock(node);
    }
});