/*
ver:1.3.9
*/
let Magix = require('magix');
let $ = require('$');
let LoadTinymce = () => {
    if (window.tinymce) {
        return Promise.resolve(window.tinymce);
    }
    return $.getScript('https://cloud.tinymce.com/stable/tinymce.min.js').then(() => {
        return Promise.resolve(window.tinymce);
    });
};
module.exports = Magix.View.extend({
    render() {
        let me = this;
        LoadTinymce().then(me.wrapAsync(tinymce => {
            return tinymce.init({
                selector: '#' + me.id
            }).then(me.wrapAsync(([editor]) => {
                me.capture('editor', editor);
            }));
        }));
    }
});