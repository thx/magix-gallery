/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-uploader/index",["magix","$","../mx-runner/index"],(require,exports,module)=>{
/*Magix,$,Runner*/

/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require("magix");
var $ = require("$");
var Runner = require("../mx-runner/index");
Magix.applyStyle("__mx-uploader_index_",".__mx-uploader_index_-pro{\n    position: relative;\n    overflow: hidden;\n}\n.__mx-uploader_index_-file{\n    position: absolute;\n    left:0;\n    top:0;\n    bottom: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    cursor: pointer;\n    font-size:100px;\n    filter: alpha(opacity=0);\n}\n.__mx-uploader_index_-cnt{\n    position: absolute;\n    left:-999999px;\n}");
var Uploader = Magix.Base.extend({
    destroy: function () {
        var me = this;
        me['@{destroyed}'] = 1;
    }
});
var Iframe = Uploader.extend({
    '@{send.request}': function (input, data, callback, progress) {
        var form = input.form;
        var me = this;
        var id = Magix.guid('up');
        if (!form) {
            $('body').append('<div id="' + id + '_temp" class="__mx-uploader_index_-cnt"><form target="' + id + '"></form></div>');
            var cnt = $('#' + id + '_temp');
            form = cnt.find('form');
            form.append(input);
            form = form[0];
        }
        var p = 0;
        var total = 2000;
        if (input.files) {
            total = 0;
            for (var i = 0; i < input.files.length; i++) {
                total += input.files[i].size;
            }
            total /= 1000;
            if (total < 2000) {
                total = 2000;
            }
        }
        var base = 1000 / total;
        var prgs = function () {
            if (me['@{destroyed}']) {
                Runner['@{task.remove}'](prgs);
                return;
            }
            if (p < 1) {
                progress(p);
                p += base + Math.random() * 20 * base;
            }
        };
        Runner['@{task.add}'](100, prgs);
        $('<iframe name="' + id + '" id="' + id + '" style="display:none;"></iframe>').insertAfter(form).on('load', function (e) {
            Runner['@{task.remove}'](prgs);
            if (!me['@{destroyed}']) {
                progress(1);
                var iframe = e.target;
                var $body = $(iframe.contentWindow.document.body);
                $body.find('script').remove();
                var response = $.trim($body.text());
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
        }).on('error', function (e) {
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
var XHR = Uploader.extend({
    '@{send.request}': function (input, data, callback, progress) {
        var fd = new FormData();
        var me = this;
        var files = input.files;
        for (var i = 0; i < files.length; i++) {
            fd.append(data.get('name'), files[i]);
        }
        var xhr = new XMLHttpRequest();
        xhr.open('post', data.get('action'), true);
        xhr.onload = function () {
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
        xhr.onerror = function (e) {
            if (!me['@{destroyed}']) {
                e.message = 'network error';
                callback(e);
            }
        };
        xhr.upload.onprogress = function (e) {
            if (!me['@{destroyed}']) {
                if (e.lengthComputable) {
                    progress(e.loaded / e.total);
                }
                else {
                    progress(0);
                }
            }
        };
        xhr.send(fd);
    }
});
module.exports = Magix.View.extend({
    init: function (extra) {
        var me = this;
        me.updater.set({
            name: extra.name || 'file',
            action: extra.action || '',
            multiple: extra.multiple,
            accept: extra.accept
        });
        var Transport;
        if (window.FormData) {
            Transport = XHR;
        }
        else {
            Transport = Iframe;
        }
        me.capture('@{transport}', new Transport());
    },
    render: function () {
        var me = this;
        var nodeId = 'file_' + me.id;
        var node = $('#' + nodeId);
        if (node.length) {
            node.remove();
        }
        var data = me.updater.get();
        $('#' + me.id).append('<input id="' + nodeId + '" type="file" class="__mx-uploader_index_-file" mx-change=' + me.id + '\x1e@{upload}()" name="' + data.name + '" />').addClass('__mx-uploader_index_-pro');
        node = $('#' + nodeId);
        if (data.multiple)
            node.attr('multiple', 'multiple');
        if (data.accept)
            node.prop('accept', data.accept);
    },
    '@{upload}<change>': function (e) {
        var me = this;
        var node = $('#' + me.id);
        var files = e.eventTarget.files;
        var event = $.Event('start', {
            files: files
        });
        node.trigger(event);
        if (event.isDefaultPrevented()) {
            me.render();
            return;
        }
        var transport = me.capture('@{transport}');
        transport['@{send.request}'](e.target, me.updater, function (err, response) {
            if (err) {
                node.trigger({
                    type: 'error',
                    error: err
                });
            }
            else {
                node.trigger({
                    type: 'success',
                    files: files,
                    response: response
                });
            }
        }, function (percent) {
            node.trigger({
                type: 'progress',
                percent: percent
            });
        });
        me.render();
    }
});

});