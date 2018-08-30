/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/validator",["$","magix","mx-form/rule","./util"],(require,exports,module)=>{
/*$,Magix,Rules,Util*/

var $ = require("$");
var Magix = require("magix");
var Rules = require("mx-form/rule");
var Util = require("./util");
Magix.applyStyle("_zs_gallery_mx-form_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-form_index_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-form_index_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\nhtml ._zs_gallery_mx-form_index_-error,\nhtml ._zs_gallery_mx-form_index_-error:hover,\nhtml ._zs_gallery_mx-form_index_-error:focus {\n  border-color: #a40100;\n}\n._zs_gallery_mx-form_index_-error-msg {\n  display: none;\n  position: absolute;\n  white-space: nowrap;\n  word-wrap: normal;\n  pointer-events: none;\n  color: #a40100;\n  font-size: 12px;\n}\n._zs_gallery_mx-form_index_-warn,\n._zs_gallery_mx-form_index_-warn:hover,\n._zs_gallery_mx-form_index_-warn:focus {\n  border-color: #ffb400;\n}\n._zs_gallery_mx-form_index_-warn-msg {\n  display: none;\n  position: absolute;\n  white-space: nowrap;\n  word-wrap: normal;\n  pointer-events: none;\n  color: #ffb400;\n  font-size: 12px;\n}\n");
var isValid = function (type, actions, val) {
    var valid = true, action, rule, tip;
    for (var a in actions) {
        if (Magix.has(actions, a)) {
            if (Rules[a]) {
                var check = Rules[a](val, rule = actions[a]);
                valid = check.valid;
                tip = check.tip;
            }
            else {
                // '过滤掉不在校验规则内的'
                valid = true;
                tip = '过滤掉不在校验规则内的';
            }
            if (!valid) {
                action = a;
                break;
            }
        }
    }
    return {
        type: type,
        placement: actions.placement,
        valid: valid,
        action: action,
        rule: rule,
        val: val,
        tip: tip //校验失败错误提示
    };
};
var hideMsg = function (ssId) {
    var node = $('[mxe="' + ssId + '"]');
    node.removeClass('_zs_gallery_mx-form_index_-warn _zs_gallery_mx-form_index_-error');
    node.each(function (i, n) {
        n = $(n);
        var msgId = n.attr('id') + '_msg';
        $('#' + msgId).hide();
    });
};
var showMsg = function (type, ssId, checkInfo) {
    var node = $('[mxe="' + ssId + '"]');
    if (!node.length) {
        return;
    }
    switch (type) {
        case 'warn':
            node.addClass('_zs_gallery_mx-form_index_-warn').removeClass('_zs_gallery_mx-form_index_-error');
            break;
        case 'error':
            node.addClass('_zs_gallery_mx-form_index_-error').removeClass('_zs_gallery_mx-form_index_-warn');
            break;
    }
    // checkbox radio 提示的时候取第一个节点提示
    if (node.prop('type') == 'checkbox' || node.prop('type') == 'radio') {
        node = $(node[0]);
    }
    node.each(function (i, n) {
        n = $(n);
        var prt = n.parent();
        var id = n.attr('id');
        if (!id) {
            id = Magix.guid();
            n.attr('id', id);
        }
        var msgId = id + '_msg';
        var msgNode = $('#' + msgId);
        if (!msgNode.length) {
            var pos = prt.css('position');
            if (pos == 'static') {
                prt.css({
                    position: 'relative'
                });
            }
            n.after('<div id="' + msgId + '"/>');
            msgNode = $('#' + msgId);
        }
        switch (type) {
            case 'warn':
                msgNode[0].className = '_zs_gallery_mx-form_index_-warn-msg';
                break;
            case 'error':
                msgNode[0].className = '_zs_gallery_mx-form_index_-error-msg';
                break;
        }
        // 提示信息
        msgNode.html(checkInfo.tip).show();
        // 提示信息位置 bottom / left
        var placement = checkInfo.placement || 'bottom';
        var width = n.outerWidth(), height = n.outerHeight(), offset = n.offset(), pOffset = prt.offset();
        switch (placement) {
            case 'left':
                msgNode.css({
                    lineHeight: '32px',
                    top: (offset.top - pOffset.top),
                    left: (offset.left - pOffset.left) + width + 10
                });
                break;
            case 'bottom':
                msgNode.css({
                    lineHeight: '18px',
                    top: (offset.top - pOffset.top) + height,
                    left: (offset.left - pOffset.left) + 10
                });
                break;
        }
    });
    return true;
};
module.exports = {
    isValid: function (config, ref) {
        config = Magix.mix({
            element: null,
            scrollIntoView: true,
            checkSubs: true //是否调用子view校验，children isValid
        }, config || {});
        var me = this;
        var result = true;
        var children = me.owner.children();
        var topLevel = false;
        if (!ref) {
            ref = [];
            topLevel = true;
        }
        // 递归调用子view校验
        if (config.checkSubs) {
            for (var i_1 = 0; i_1 < children.length; i_1++) {
                var vf = Magix.Vframe.get(children[i_1]);
                var r = vf.invoke('isValid', [ref]);
                if (r === false) {
                    result = false;
                }
            }
        }
        var elements;
        if (config.element) {
            if ((typeof config.element == 'string') && !(/^#/.test(config.element)) && !(/^\./.test(config.element))) {
                elements = $('#' + config.element);
            }
            else {
                elements = $(config.element);
            }
            var ssId = elements.attr('mxe');
            if (!ssId) {
                // 查找该节点下所有的校验节点
                elements = elements.find('[mxe^="' + me.id + '"]');
            }
            else {
                // 该节点本身为校验节点
            }
        }
        else {
            // 不传单个节点，遍历所有的
            elements = $('#' + me.id + ' [mxe^="' + me.id + '"]');
        }
        var keys = [];
        elements.each(function (i, e) {
            // $(e).trigger({
            //     type: 'change',
            //     from: 'faker'
            // });
            me.check($(e));
            keys.push($(e).attr('mxe'));
        });
        // 缓存所有的错误，只提取type=error类型的
        var form = me.updater.$form;
        if (form) {
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (form[key] && (form[key].type == 'error')) {
                    ref.push(key);
                    result = false;
                    break;
                }
            }
        }
        // 父view 滚动到错误位置
        if (topLevel && config.scrollIntoView) {
            var minTop = 1e20, node = void 0;
            for (var i_2 = ref.length, n = void 0, f = void 0; i_2--;) {
                n = $('[mxe="' + ref[i_2] + '"]');
                if (n.length) {
                    f = n.offset();
                    if (f.top < minTop) {
                        node = n[0];
                        minTop = f.top;
                    }
                }
            }
            if (node) {
                if (node.scrollIntoViewIfNeeded) {
                    node.scrollIntoViewIfNeeded();
                }
                else if (node.scrollIntoView) {
                    node.scrollIntoView();
                }
            }
        }
        return result;
    },
    '$[mxc]<keyup,change,focusout>': function (e) {
        var me = this, node = $(e.eventTarget);
        var mxe = node.attr('mxe');
        //交给真正的处理元素
        if (!mxe || !mxe.startsWith(me.id)) {
            return;
        }
        me.check(node);
    },
    check: function (node) {
        var me = this;
        var updater = me.updater;
        var form = updater.$form || (updater.$form = {});
        var mxc = node.attr('mxc');
        var exprs = updater.parse(mxc);
        var valid = true; //校验信息
        for (var _i = 0, exprs_1 = exprs; _i < exprs_1.length; _i++) {
            var ctrl = exprs_1[_i];
            var actions = ctrl.f || {};
            var ps = ctrl.p.split('.');
            var key = ps.pop(), temp = void 0, value = void 0;
            var object = updater.get();
            while (object && ps.length) {
                temp = ps.shift();
                object = object[temp];
            }
            if (node.prop('type') == 'checkbox') {
                var src = object[key];
                var checked = node.prop('checked');
                if (src === true || src === false) {
                    value = checked;
                }
                else {
                    value = Util.fix(actions, node.val());
                    if ($.isArray(src)) {
                        var checkboxName = node.prop('name');
                        if (checkboxName) {
                            src = [];
                            Util.addCheckbox(checkboxName, src, actions);
                        }
                        else {
                            value = Util.fix(actions, node.val());
                            var idx = Util.indexOf(src, value);
                            if (checked) {
                                if (idx === -1) {
                                    src.push(value);
                                }
                            }
                            else {
                                if (idx > -1) {
                                    src.splice(idx, 1);
                                }
                            }
                        }
                        value = src;
                    }
                    else if ($.isPlainObject(src)) {
                        if (checked) {
                            src[value] = value;
                        }
                        else {
                            delete src[value];
                        }
                        value = src;
                    }
                    else {
                        value = checked ? value : '';
                    }
                }
            }
            else if (node.prop('type') == 'radio') {
                var radioName = node.prop('name');
                value = Util.fix(actions, $('input[name=' + radioName + ']:checked').val());
            }
            else {
                value = Util.fix(actions, node.val());
            }
            if (valid) {
                var checkInfo = isValid('error', actions, value);
                var ssId = node.attr('mxe');
                if (checkInfo.valid) {
                    delete form[ssId];
                    hideMsg(ssId);
                    //警告信息，校验成功的前提下才会有
                    if (Magix.has(actions, 'warn')) {
                        var warnCheckInfo = isValid('warn', actions.warn, value);
                        if (warnCheckInfo.valid) {
                            // 不需要警告
                            delete form[ssId];
                            hideMsg(ssId);
                        }
                        else {
                            form[ssId] = warnCheckInfo;
                            showMsg('warn', ssId, warnCheckInfo);
                        }
                    }
                }
                else {
                    form[ssId] = checkInfo;
                    valid = false;
                    showMsg('error', ssId, checkInfo);
                }
            }
        }
    },
    /**
     * 清空当前所有校验
     */
    clearValid: function () {
        var me = this;
        var form = me.updater.$form;
        if (form) {
            for (var f in form) {
                hideMsg(f);
            }
        }
        me.updater.$form = {};
    },
    '$doc<htmlchanged>': function (e) {
        var me = this;
        var form = me.updater.$form;
        if (e.vId == me.id) {
            if (form) {
                for (var f in form) {
                    var v = form[f];
                    if (!showMsg(v.type, f, v)) {
                        delete form[f];
                    }
                }
            }
        }
    }
};

});