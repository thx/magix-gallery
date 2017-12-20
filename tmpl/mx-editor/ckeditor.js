/*
ver:1.3.9
*/
'top@./ckeditor/ckeditor.js';
let Magix = require('magix');
module.exports = Magix.View.extend({
    init() {
        let me = this;
        ClassicEditor
            .create(Magix.node(me.id), {
                ckfinder: {
                    uploadUrl: '/upload/url'
                }
            }).then(editor => {
                me.capture('editor', editor);
                editor.on('destroy', e => {
                    console.log(e);
                });
            })
            .catch(error => {
                me.setHTML(me.id, error);
            });
    }
});