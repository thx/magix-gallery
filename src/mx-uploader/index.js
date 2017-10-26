/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-uploader/index',["magix","$","../mx-runner/index"],function(require,exports,module){
/*Magix,$,Runner*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require('magix');
var $ = require('$');
var Runner = require('../mx-runner/index');
Magix.applyStyle("K",".fD{position:relative;overflow:hidden}.fE{left:0;top:0;bottom:0;right:0;width:100%;height:100%;opacity:0;cursor:pointer;font-size:100px;filter:alpha(opacity=0)}.fF,.fE{position:absolute}.fF{left:-999999px}");
var Uploader = Magix.Base.extend({
    destroy: function () {
        var me = this;
        me['_cw'] = 1;
    }
});
var Iframe = Uploader.extend({
    '_fc': function (input, data, callback, progress) {
        var form = input.form;
        var me = this;
        var id = Magix.guid('up');
        if (!form) {
            $('body').append('<div id="' + id + '_temp" class="fF"><form target="' + id + '"></form></div>');
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
            if (p < 1) {
                progress(p);
                p += base + Math.random() * 20 * base;
            }
        };
        Runner['_aH'](100, prgs);
        $('<iframe name="' + id + '" id="' + id + '" style="display:none;"></iframe>').insertAfter(form).on('load', function (e) {
            Runner['_aI'](prgs);
            if (!me['_cw']) {
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
            Runner['_aI'](prgs);
            if (!me['_cw']) {
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
    '_fc': function (input, data, callback, progress) {
        var fd = new FormData();
        var me = this;
        var files = input.files;
        for (var i = 0; i < files.length; i++) {
            fd.append(data.get('name'), files[i]);
        }
        var xhr = new XMLHttpRequest();
        xhr.open('post', data.get('action'), true);
        xhr.onload = function () {
            if (!me['_cw']) {
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
            if (!me['_cw']) {
                e.message = 'network error';
                callback(e);
            }
        };
        xhr.upload.onprogress = function (e) {
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
        me.capture('transport', new Transport());
    },
    render: function () {
        var me = this;
        var nodeId = 'file_' + me.id;
        var node = $('#' + nodeId);
        if (node.length) {
            node.remove();
        }
        var data = me.updater.get();
        $('#' + me.id).append(me.wrapEvent('<input id="' + nodeId + '" type="file" class="fE" mx-change="\x1f\x1e_fd()" name="' + data.name + '" />')).addClass('fD');
        node = $('#' + nodeId);
        if (data.multiple)
            node.attr('multiple', 'multiple');
        if (data.accept)
            node.prop('accept', data.accept);
    },
    '_fd<change>': function (e) {
        var me = this;
        var node = $('#' + me.id);
        var event = $.Event('start', {
            files: e.eventTarget.files
        });
        node.trigger(event);
        if (event.isDefaultPrevented()) {
            me.render();
            return;
        }
        var transport = me.capture('transport');
        transport['_fc'](e.target, me.updater, function (err, response) {
            if (err) {
                node.trigger({
                    type: 'error',
                    error: err
                });
            }
            else {
                node.trigger({
                    type: 'success',
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