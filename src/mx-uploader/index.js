/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-uploader/index',["magix","$","../mx-runner/index"],(require,exports,module)=>{
/*Magix,$,Runner*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@taobao.com
 */
let Magix = require('magix');
let $ = require('$');
let Runner = require('../mx-runner/index');
Magix.applyStyle("__mx-uploader_index_",".__mx-uploader_index_-pro{\n    position: relative;\n    overflow: hidden;\n}\n.__mx-uploader_index_-file{\n    position: absolute;\n    left:0;\n    top:0;\n    bottom: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    cursor: pointer;\n    font-size:100px;\n    filter: alpha(opacity=0);\n}\n.__mx-uploader_index_-cnt{\n    position: absolute;\n    left:-999999px;\n}");
let Uploader = Magix.Base.extend({
    destroy() {
        let me = this;
        me['@{destroyed}'] = 1;
    }
});
let Iframe = Uploader.extend({
    '@{send.request}'(input, data, callback, progress) {
        let form = input.form;
        let me = this;
        let id = Magix.guid('up');
        if (!form) {
            $('body').append('<div id="' + id + '_temp" class="__mx-uploader_index_-cnt"><form target="' + id + '"></form></div>');
            let cnt = $('#' + id + '_temp');
            form = cnt.find('form');
            form.append(input);
            form = form[0];
        }
        let p = 0;
        let total = 2000;
        if (input.files) {
            total = 0;
            for (let i = 0; i < input.files.length; i++) {
                total += input.files[i].size;
            }
            total /= 1000;
            if (total < 2000) {
                total = 2000;
            }
        }
        let base = 1000 / total;
        let prgs = () => {
            if (p < 1) {
                progress(p);
                p += base + Math.random() * 20 * base;
            }
        };
        Runner['@{task.add}'](100, prgs);
        $('<iframe name="' + id + '" id="' + id + '" style="display:none;"></iframe>').insertAfter(form).on('load', e => {
            Runner['@{task.remove}'](prgs);
            if (!me['@{destroyed}']) {
                progress(1);
                let iframe = e.target;
                let $body = $(iframe.contentWindow.document.body);
                $body.find('script').remove();
                let response = $.trim($body.text());
                $(iframe).remove();
                $('#' + id + '_temp').remove();
                try {
                    /*jshint evil:true*/
                    callback(null, new Function('return ' + response)());
                }
                catch (ex) {
                    callback(ex);
                }
            }
        }).on('error', e => {
            Runner['@{task.remove}'](prgs);
            if (!me['@{destroyed}']) {
                $('#' + id + '_temp').remove();
                callback(e);
            }
        });
        form.target = id;
        form.action = data.get('action');
        form.method = 'POST';
        form.enctype = 'multipart/form-data';
        form.submit();
    }
});
let XHR = Uploader.extend({
    '@{send.request}'(input, data, callback, progress) {
        let fd = new FormData();
        let me = this;
        let files = input.files;
        for (let i = 0; i < files.length; i++) {
            fd.append(data.get('name'), files[i]);
        }
        let xhr = new XMLHttpRequest();
        xhr.open('post', data.get('action'), true);
        xhr.onload = () => {
            if (!me['@{destroyed}']) {
                try {
                    /*jshint evil:true*/
                    callback(null, new Function('return ' + xhr.responseText)());
                }
                catch (ex) {
                    callback(ex);
                }
            }
        };
        xhr.onerror = e => {
            if (!me['@{destroyed}']) {
                e.message = 'network error';
                callback(e);
            }
        };
        xhr.upload.onprogress = e => {
            if (e.lengthComputable) {
                progress(e.loaded / e.total);
            }
            else {
                progress(0);
            }
        };
        xhr.send(fd);
    }
});
module.exports = Magix.View.extend({
    init(extra) {
        let me = this;
        me.updater.set({
            name: extra.name || 'file',
            action: extra.action || '',
            multiple: extra.multiple,
            accept: extra.accept
        });
        let Transport;
        if (window.FormData) {
            Transport = XHR;
        }
        else {
            Transport = Iframe;
        }
        me.capture('@{transport}', new Transport());
    },
    render() {
        let me = this;
        let nodeId = 'file_' + me.id;
        let node = $('#' + nodeId);
        if (node.length) {
            node.remove();
        }
        let data = me.updater.get();
        $('#' + me.id).append(me.wrapEvent('<input id="' + nodeId + '" type="file" class="__mx-uploader_index_-file" mx-change="\x1f\x1e@{upload}()" name="' + data.name + '" />')).addClass('__mx-uploader_index_-pro');
        node = $('#' + nodeId);
        if (data.multiple)
            node.attr('multiple', 'multiple');
        if (data.accept)
            node.prop('accept', data.accept);
    },
    '@{upload}<change>'(e) {
        let me = this;
        let node = $('#' + me.id);
        let files = e.eventTarget.files;
        let event = $.Event('start', {
            files
        });
        node.trigger(event);
        if (event.isDefaultPrevented()) {
            me.render();
            return;
        }
        let transport = me.capture('@{transport}');
        transport['@{send.request}'](e.target, me.updater, (err, response) => {
            if (err) {
                node.trigger({
                    type: 'error',
                    error: err
                });
            }
            else {
                node.trigger({
                    type: 'success',
                    files,
                    response
                });
            }
        }, percent => {
            node.trigger({
                type: 'progress',
                percent
            });
        });
        me.render();
    }
});

});