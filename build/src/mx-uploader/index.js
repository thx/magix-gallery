/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-uploader/index",["magix","$","../mx-util/runner"],(require,exports,module)=>{
/*Magix,$,Runner*/

var Magix = require("magix");
var $ = require("$");
var Runner = require("../mx-util/runner");
Magix.applyStyle("_zs_gallery_mx-uploader_index_","[mx-view*=\"mx-uploader/index\"] {\n  position: relative;\n  overflow: hidden;\n}\n._zs_gallery_mx-uploader_index_-file {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n  font-size: 100px;\n  filter: alpha(opacity=0);\n}\n._zs_gallery_mx-uploader_index_-cnt {\n  position: absolute;\n  left: -999999px;\n}\n");
var html = function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = '', nodeId = $$.nodeId, disabled = $$.disabled, name = $$.name; var $expr, $art, $line; try {
    $p += '<input id="';
    $line = 1;
    $art = '=nodeId';
    ;
    $p += ($expr = '<%=nodeId%>', $e(nodeId)) + '" class="_zs_gallery_mx-uploader_index_-file" ';
    $line = 2;
    $art = 'if disabled';
    ;
    $expr = '<%if (disabled) {%>';
    if (disabled) {
        ;
        $p += ' disabled="true" ';
        $line = 2;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' type="file" name="';
    $line = 3;
    $art = '=name';
    ;
    $p += ($expr = '<%=name%>', $e(name)) + '" mx-change="' + $viewId + '@{upload}()"/>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-uploader/index.html';
    throw msg;
} return $p; };
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
            $('body').append('<div id="' + id + '_temp" class="_zs_gallery_mx-uploader_index_-cnt"><form target="' + id + '"></form></div>');
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
        // 支持mx-disabled或者disabled
        var disabled = (extra.disabled + '' === 'true') || $('#' + me.id)[0].hasAttribute('mx-disabled');
        me.updater.set({
            name: extra.name || 'file',
            action: extra.action || '',
            multiple: ((extra.multiple + '') === 'true'),
            accept: extra.accept,
            disabled: disabled
        });
        // 默认iframe
        var Transport;
        if ((extra.type == 'xhr') && window.FormData) {
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
        var tmpl = $.isFunction(html) ? html({
            disabled: data.disabled,
            name: data.name,
            nodeId: nodeId
        }, me.id) : html;
        if (me.wrapEvent) {
            tmpl = me.wrapEvent(tmpl);
        }
        $('#' + me.id).append(tmpl);
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