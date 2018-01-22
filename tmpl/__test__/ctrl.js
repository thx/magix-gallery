/*
ver:2.0.3
*/
let Magix = require('magix');
let $ = require('$');
module.exports = Magix.View.extend({
    init() {
        this.$left = 200;
        this.$node = $('#' + this.id);
    },
    assign(data, ops) {
        console.log(data, ops);
        this.$node.css({
            left: this.$left += 20
        });
    }
});