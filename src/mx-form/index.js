/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/index",["$","magix"],(require,exports,module)=>{
/*$,Magix*/

/*
ver:2.0.1
*/
var $ = require("$");
var Magix = require("magix");
Magix.applyStyle("_u","._dw,._dw:hover{border-color:#a62a22!important}._dx{display:none;position:absolute;white-space:nowrap;word-wrap:normal;pointer-events:none;color:#666;font-size:10px;top:1px;line-height:1}");
var ByteLen = function (str) {
    return str.replace(/[^\x00-\xff]/g, 'xl').length;
};
var Rules = {
    required: function (val, rule) {
        if (rule) {
            return $.trim(val);
        }
        return true;
    },
    number: function (val, rule) {
        val = $.trim(val);
        if (val && rule) {
            if (val.indexOf('.') != val.lastIndexOf('.')) {
                return false;
            }
            return /^-?[\d\.]+$/.test(val);
        }
        return true;
    },
    length: function (val, rule) {
        if (val.length < rule[0] || val.length > rule[1]) {
            return false;
        }
        return true;
    },
    blength: function (val, rule) {
        var len = ByteLen(val);
        if (len < rule[0] || len > rule[1]) {
            return false;
        }
        return true;
    },
    minLength: function (val, rule) {
        val = $.trim(val);
        if (val && val.length < rule) {
            return false;
        }
        return true;
    },
    maxLength: function (val, rule) {
        val = $.trim(val);
        if (val && val.length > rule) {
            return false;
        }
        return true;
    },
    range: function (val, rule) {
        val = parseFloat(val);
        if (isNaN(val)) {
            return false;
        }
        if (val < rule[0] || val > rule[1]) {
            return false;
        }
        return true;
    },
    equalto: function (val, rule) {
        var to = $(rule).val();
        return to == val;
    },
    pattern: function (val, rule) {
        val = $.trim(val);
        if (val) {
            var reg = new RegExp(rule);
            return reg.test(val);
        }
        return true;
    },
    max: function (val, rule) {
        if (+val > +rule) {
            return false;
        }
        return true;
    },
    min: function (val, rule) {
        if (+val < +rule) {
            return false;
        }
        return true;
    }
};
var Msgs = {
    required: function () {
        return '必填';
    },
    number: function () {
        return '数字';
    },
    length: function (rule, value) {
        return rule[0] + '-' + rule[1] + '个字之间,当前:' + value.length;
    },
    blength: function (rule, value) {
        return rule[0] + '-' + rule[1] + '个字符之间,当前:' + ByteLen(value);
    },
    range: function (rule) {
        return rule[0] + '-' + rule[1] + '之间的数字';
    },
    equalto: function (rule) {
        return '与' + rule + '同样的内容';
    },
    pattern: function () {
        return '格式有误';
    },
    minLength: function (rule) {
        return '最小长度:' + rule;
    },
    maxLength: function (rule) {
        return '最大长度:' + rule;
    },
    max: function (rule) {
        return '不能大于 ' + rule;
    },
    min: function (rule) {
        return '不能小于 ' + rule;
    }
};
var isValid = function (actions, val) {
    var f = true, r, v;
    for (var a in actions) {
        if (Magix.has(actions, a)) {
            var rule = Rules[a];
            if (rule) {
                f = rule(val, v = actions[a]);
                if (!f) {
                    r = a;
                    break;
                }
            }
        }
    }
    return {
        f: f,
        v: v,
        a: val,
        r: r
    };
};
var showError = function (ssId, key, rule, value) {
    var node = $('[mx-ssid="' + ssId + '"]');
    if (!node.length)
        return;
    node.addClass('_dw');
    node.each(function (i, n) {
        n = $(n);
        var id = n.attr('id');
        if (!id) {
            id = Magix.guid();
            n.attr('id', id);
        }
        var msgId = id + '_msg';
        var msgNode = $('#' + msgId);
        if (!msgNode.length) {
            var prt = n.parent();
            var pos_1 = prt.css('position');
            if (pos_1 == 'static') {
                prt.addClass('_ag');
            }
            n.after('<div class="_dx" id="' + msgId + '"/>');
            msgNode = $('#' + msgId);
        }
        msgNode.html(Msgs[key](rule, value)).show();
        var width = n.outerWidth() - 3;
        var mWidth = msgNode.width();
        var pos = n.position();
        msgNode.css({
            top: pos.top + 2,
            left: pos.left + width - mWidth
        });
    });
    return true;
};
var hideError = function (ssId) {
    var node = $('[mx-ssid="' + ssId + '"]');
    node.removeClass('_dw');
    node.each(function (i, n) {
        n = $(n);
        var msgId = n.attr('id') + '_msg';
        $('#' + msgId).hide();
    });
};
var callUserEvent = function (e, view) {
    var params = e.params;
    if (params.m) {
        var userEventName = params.m + '\x1e' + e.type;
        var userEventFN = view[userEventName];
        if (userEventFN) {
            e.params = params.a;
            userEventFN.call(view, e);
        }
    }
};
module.exports = {
    fromKeys: function (data, keys) {
        keys = (keys + '').split(',');
        var r = {};
        for (var i = 0, key = void 0; i < keys.length; i++) {
            key = keys[i];
            r[key] = Magix.has(data, key) ? data[key] : '';
        }
        return r;
    },
    isValid: function (ref) {
        var me = this;
        var result = true;
        var children = me.owner.children();
        var topLevel = false;
        if (!ref) {
            ref = [];
            topLevel = true;
        }
        for (var i = 0; i < children.length; i++) {
            var vf = Magix.Vframe.get(children[i]);
            var r = vf.invoke('isValid', [ref]);
            if (r === false) {
                result = false;
            }
        }
        var elements = $('#' + me.id + ' [mx-ssid^="' + me.id + '"]');
        elements.each(function (i, e) {
            $(e).trigger({
                type: 'change',
                from: 'faker'
            });
        });
        var form = me.updater.$form;
        if (form) {
            var keys = Magix.keys(form);
            if (keys.length) {
                ref.push(keys[0]);
                result = false;
            }
        }
        if (topLevel) {
            var minTop = 1e20, node = void 0;
            for (var i = ref.length, n = void 0, f = void 0; i--;) {
                n = $('[mx-ssid="' + ref[i] + '"]');
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
    triggerParent: function (values) {
        var rootNode = $('#' + this.id);
        rootNode.trigger({
            type: 'change',
            from: 'subview',
            values: values
        });
    },
    '__b<focusin>': function (e) {
        e.stopPropagation();
        var node = $(e.eventTarget);
        hideError(node.attr('mx-ssid'));
        callUserEvent(e, this);
    },
    '__b<focusout>': function (e) {
        e.stopPropagation(); //停掉冒泡，防止父view的监听
        var node = $(e.eventTarget);
        node.trigger({
            type: 'change',
            from: 'faker'
        });
        callUserEvent(e, this);
    },
    '__b<change>': function (e) {
        var me = this, node = $(e.eventTarget);
        if (e.viewId && e.viewId != me.id)
            return;
        e.viewId = me.id;
        var faker = e.from == 'faker' || e.from == 'subview';
        //if (faker) {
        e.stopPropagation(); //模拟的直接停掉
        //}
        var params = e.params;
        var updater = me.updater;
        if (!updater.$form) {
            updater.$form = {};
        }
        var form = updater.$form;
        var keys = updater.$keys || updater.$k;
        var ctrls = params.c ? params.c.slice() : [params];
        var refresh = false;
        var valid = true;
        var rootNode = $('#' + me.id);
        rootNode.removeAttr('mx-ssid');
        var notify = false;
        var addCheckbox = function (name, src, actions) {
            $('input[name="' + name + '"]:checked').each(function (idx, item) {
                var value = item.value;
                if (actions.number) {
                    value = parseFloat(value);
                }
                idx = src.indexOf(value);
                if (idx === -1) {
                    src.push(value);
                }
            });
        };
        while (ctrls.length) {
            var ctrl = ctrls.shift();
            var ps = ctrl.p.split('.');
            var actions = ctrl.f || {};
            var key = ps.pop(), temp = void 0, value = void 0, rootKey = void 0;
            var object = updater.get();
            while (object && ps.length) {
                temp = ps.shift();
                if (!rootKey)
                    rootKey = temp; //解决设置数据后，再调用updater.digest()不刷新的问题
                object = object[temp];
            }
            rootKey = rootKey || key;
            if (e.from == 'subview') {
                value = e.values[actions.from || key];
            }
            else if (node.prop('type') == 'checkbox') {
                var src = object[key];
                var checked = node.prop('checked');
                if (src === true || src === false) {
                    value = checked;
                }
                else {
                    value = node.val();
                    if (actions.number) {
                        value = parseFloat(value);
                    }
                    if ($.isArray(src)) {
                        var checkboxName = node.prop('name');
                        if (checkboxName) {
                            src = [];
                            addCheckbox(checkboxName, src, actions);
                        }
                        else {
                            value = node.val();
                            if (actions.number) {
                                value = parseFloat(value);
                            }
                            var idx = src.indexOf(value);
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
            else {
                value = node.val();
                if (actions.number) {
                    value = parseFloat(value);
                }
            }
            if (object) {
                if (object[key] !== value) {
                    object[key] = value;
                    if (actions.refresh) {
                        refresh = true;
                    }
                    if (refresh || !actions.silent) {
                        keys[rootKey] = 1; //标记改变;
                        updater.$c = 1;
                    }
                    notify = true;
                }
            }
            else {
                console.warn('can not set by path:', ctrl.p);
            }
            if (valid) {
                var v = isValid(actions, value);
                var ssId = node.attr('mx-ssid');
                if (v.f) {
                    delete form[ssId];
                    hideError(ssId);
                }
                else {
                    form[ssId] = v;
                    valid = false;
                    showError(ssId, v.r, v.v, v.a);
                }
            }
        }
        if (valid && refresh) {
            updater.digest();
        }
        if (notify) {
            me.triggerParent(updater.get());
        }
        if (!faker) {
            callUserEvent(e, me);
        }
    },
    '$doc<htmlchanged>': function (e) {
        var me = this;
        var form = me.updater.$form;
        if (e.vId == me.id) {
            clearTimeout(me['__cQ']);
            me['__cQ'] = setTimeout(me.wrapAsync(function () {
                if (form) {
                    for (var f in form) {
                        var v = form[f];
                        if (!showError(f, v.r, v.v, v.a)) {
                            delete form[f];
                        }
                    }
                }
            }), 0);
        }
    }
};

});