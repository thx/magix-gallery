/*
ver:1.3.1
*/
let $ = require('$');
let Magix = require('magix');
Magix.applyStyle('@index.less');
let ByteLen = (str) => {
    return str.replace(/[^\x00-\xff]/g, 'xl').length;
};
let Rules = {
    required(val, rule) {
        if (rule) {
            return $.trim(val);
        }
        return true;
    },
    number(val, rule) {
        val = $.trim(val);
        if (val && rule) {
            if (val.indexOf('.') != val.lastIndexOf('.')) { //多个.
                return false;
            }
            return /^-?[\d\.]+$/.test(val);
        }
        return true;
    },
    length(val, rule) {
        if (val.length < rule[0] || val.length > rule[1]) {
            return false;
        }
        return true;
    },
    blength(val, rule) {
        let len = ByteLen(val);
        if (len < rule[0] || len > rule[1]) {
            return false;
        }
        return true;
    },
    minLength(val, rule) {
        val = $.trim(val);
        if (val && val.length < rule) {
            return false;
        }
        return true;
    },
    maxLength(val, rule) {
        val = $.trim(val);
        if (val && val.length > rule) {
            return false;
        }
        return true;
    },
    range(val, rule) {
        val = parseFloat(val);
        if (isNaN(val)) {
            return false;
        }
        if (val < rule[0] || val > rule[1]) {
            return false;
        }
        return true;
    },
    equalto(val, rule) {
        let to = $(rule).val();
        return to == val;
    },
    pattern(val, rule) {
        val = $.trim(val);
        if (val) {
            let reg = new RegExp(rule);
            return reg.test(val);
        }
        return true;
    },
    max(val, rule) {
        if (+val > +rule) {
            return false;
        }
        return true;
    },
    min(val, rule) {
        if (+val < +rule) {
            return false;
        }
        return true;
    }
};
let Msgs = {
    required() {
        return '必填';
    },
    number() {
        return '数字';
    },
    length(rule, value) {
        return rule[0] + '-' + rule[1] + '个字之间,当前:' + value.length;
    },
    blength(rule, value) {
        return rule[0] + '-' + rule[1] + '个字符之间,当前:' + ByteLen(value);
    },
    range(rule) {
        return rule[0] + '-' + rule[1] + '之间的数字';
    },
    equalto(rule) {
        return '与' + rule + '同样的内容';
    },
    pattern() {
        return '格式有误';
    },
    minLength(rule) {
        return '最小长度:' + rule;
    },
    maxLength(rule) {
        return '最大长度:' + rule;
    },
    max(rule) {
        return '不能大于 ' + rule;
    },
    min(rule) {
        return '不能小于 ' + rule;
    }
};
let isValid = (actions, val) => {
    let f = true,
        r, v;
    for (let a in actions) {
        if (Magix.has(actions, a)) {
            let rule = Rules[a];
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
        f,
        v,
        a: val,
        r
    };
};
let showError = (ssId, key, rule, value) => {
    let node = $('[mx-ssid="' + ssId + '"]');
    if (!node.length) return;
    node.addClass('@index.less:fail');
    node.each((i, n) => {
        n = $(n);
        let id = n.attr('id');
        if (!id) {
            id = Magix.guid();
            n.attr('id', id);
        }
        let msgId = id + '_msg';
        let msgNode = $('#' + msgId);
        if (!msgNode.length) {
            let prt = n.parent();
            let pos = prt.css('position');
            if (pos == 'static') {
                prt.addClass('@scoped.style:pr');
            }
            n.after('<div class="@index.less:msg" id="' + msgId + '"/>');
            msgNode = $('#' + msgId);
        }
        msgNode.html(Msgs[key](rule, value)).show();
        let width = n.outerWidth() - 3;
        let mWidth = msgNode.width();
        let pos = n.position();
        msgNode.css({
            top: pos.top + 2,
            left: pos.left + width - mWidth
        });
    });
    return true;
};
let hideError = ssId => {
    let node = $('[mx-ssid="' + ssId + '"]');
    node.removeClass('@index.less:fail');
    node.each((i, n) => {
        n = $(n);
        let msgId = n.attr('id') + '_msg';
        $('#' + msgId).hide();
    });
};
let callUserEvent = (e, view) => {
    let params = e.params;
    if (params.m) {
        let userEventName = params.m + '\x1e' + e.type;
        let userEventFN = view[userEventName];
        if (userEventFN) {
            e.params = params.a;
            userEventFN.call(view, e);
        }
    }
};
module.exports = {
    fromKeys(data, keys) {
        keys = (keys + '').split(',');
        var r = {};
        for (var i = 0, key; i < keys.length; i++) {
            key = keys[i];
            r[key] = Magix.has(data, key) ? data[key] : '';
        }
        return r;
    },
    isValid(ref) {
        let me = this;
        let result = true;
        let children = me.owner.children();
        let topLevel = false;
        if (!ref) {
            ref = [];
            topLevel = true;
        }
        for (let i = 0; i < children.length; i++) {
            let vf = Magix.Vframe.get(children[i]);
            let r = vf.invoke('isValid', [ref]);
            if (r === false) {
                result = false;
            }
        }
        let elements = $('#' + me.id + ' [mx-ssid^="' + me.id + '"]');
        elements.each((i, e) => {
            $(e).trigger({
                type: 'change',
                from: 'faker'
            });
        });
        let form = me.updater.$form;
        if (form) {
            let keys = Magix.keys(form);
            if (keys.length) {
                ref.push(keys[0]);
                result = false;
            }
        }
        if (topLevel) {
            let minTop = 1e20,
                node;
            for (let i = ref.length, n, f; i--;) {
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
                } else if (node.scrollIntoView) {
                    node.scrollIntoView();
                }
            }
        }
        return result;
    },
    triggerParent(values) {
        let rootNode = $('#' + this.id);
        rootNode.trigger({
            type: 'change',
            from: 'subview',
            values
        });
    },
    '@{sync.value.from.ui}<focusin>'(e) {
        e.stopPropagation();
        let node = $(e.eventTarget);
        hideError(node.attr('mx-ssid'));
        callUserEvent(e, this);
    },
    '@{sync.value.from.ui}<focusout>'(e) {
        e.stopPropagation();//停掉冒泡，防止父view的监听
        let node = $(e.eventTarget);
        node.trigger({
            type: 'change',
            from: 'faker'
        });
        callUserEvent(e, this);
    },
    '@{sync.value.from.ui}<change>'(e) {
        let me = this,
            node = $(e.eventTarget);
        let last = node.prop('_lt');
        let now = Date.now();
        if (last && (now - last) < 10) return;
        node.prop('_lt', now);
        if (e.viewId) {
            if (e.viewId != me.id) return;
        }
        e.viewId = me.id;
        let faker = e.from == 'faker' || e.from == 'subview';
        //if (faker) {
        e.stopPropagation(); //模拟的直接停掉
        //}
        let params = e.params;
        let updater = me.updater;
        if (!updater.$form) {
            updater.$form = {};
        }
        let form = updater.$form;
        let keys = updater.$keys;
        let ctrls = params.c ? params.c.slice() : [params];
        let refresh = false;
        let valid = true;
        let rootNode = $('#' + me.id);
        rootNode.removeAttr('mx-ssid');
        let notify = false;
        let addCheckbox = (name, src, actions) => {
            $('input[name="' + name + '"]:checked').each(function (idx, item) {
                let value = item.value;
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
            let ctrl = ctrls.shift();
            let ps = ctrl.p.split('.');
            let actions = ctrl.f || {};
            let key = ps.pop(),
                temp,
                value,
                rootKey;
            let object = updater.get();
            while (object && ps.length) {
                temp = ps.shift();
                if (!rootKey) rootKey = temp; //解决设置数据后，再调用updater.digest()不刷新的问题
                object = object[temp];
            }
            rootKey = rootKey || key;
            if (e.from == 'subview') {
                value = e.values[actions.from || key];
            } else if (node.prop('type') == 'checkbox') {
                let src = object[key];
                let checked = node.prop('checked');
                if (src === true || src === false) {
                    value = checked;
                } else {
                    value = node.val();
                    if (actions.number) {
                        value = parseFloat(value);
                    }
                    if ($.isArray(src)) {
                        let checkboxName = node.prop('name');
                        if (checkboxName) {
                            src = [];
                            addCheckbox(checkboxName, src, actions);
                        } else {
                            value = node.val();
                            if (actions.number) {
                                value = parseFloat(value);
                            }
                            let idx = src.indexOf(value);
                            if (checked) {
                                if (idx === -1) {
                                    src.push(value);
                                }
                            } else {
                                if (idx > -1) {
                                    src.splice(idx, 1);
                                }
                            }
                        }
                        value = src;
                    } else if ($.isPlainObject(src)) {
                        if (checked) {
                            src[value] = value;
                        } else {
                            delete src[value];
                        }
                        value = src;
                    } else {
                        value = checked ? value : '';
                    }
                }
            } else {
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
                    if (refresh || !actions.silent) {//如果刷新或未标记沉默更新
                        keys[rootKey] = 1; //标记改变;
                    }
                    notify = true;
                }
            } else {
                console.warn('can not set by path:', ctrl.p);
            }
            if (valid) {
                let v = isValid(actions, value);
                let ssId = node.attr('mx-ssid');
                if (v.f) {
                    delete form[ssId];
                    hideError(ssId);
                } else {
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
    '$doc<htmlchanged>'(e) {
        let me = this;
        let form = me.updater.$form;
        if (e.vId == me.id) {
            clearTimeout(me['@{change.delay.timer}']);
            me['@{change.delay.timer}'] = setTimeout(me.wrapAsync(() => {
                if (form) {
                    for (let f in form) {
                        let v = form[f];
                        if (!showError(f, v.r, v.v, v.a)) {
                            delete form[f];
                        }
                    }
                }
            }), 0);
        }
    }
};