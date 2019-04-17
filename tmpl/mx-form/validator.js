let $ = require('$');
let Magix = require('magix');
let Rules = require('@./rule');
let Util = require('./util');
Magix.applyStyle('@index.less');

let isValid = (type, actions, val) => {
    let valid = true,
        action, rule, tip;
    for (let a in actions) {
        if (Magix.has(actions, a)) {
            if (Rules[a]) {
                let check = Rules[a](val, rule = actions[a]);
                valid = check.valid;
                tip = check.tip;
            } else {
                // '过滤掉不在校验规则内的'
                valid = true;
                tip = '过滤掉不在校验规则内的'
            }
            if (!valid) {
                action = a;
                break;
            }

        }
    }
    return {
        type: type, //错误还是警告
        placement: actions.placement, //样式定位
        valid, //校验是否通过
        action, //校验失败的规则 min: [20, tip]中min
        rule, //原始校验配置 min: [20, tip]中20
        val, //用户输入值
        tip //校验失败错误提示
    };
};
let hideMsg = ssId => {
    let node = $('[mxe="' + ssId + '"]');
    node.removeClass('@index.less:warn @index.less:error');
    node.each((i, n) => {
        n = $(n);
        let msgId = n.attr('id') + '_msg';
        $('#' + msgId).hide();
    });
};
let showMsg = (type, ssId, checkInfo) => {
    let node = $('[mxe="' + ssId + '"]');
    if (!node.length) {
        return;
    }

    switch (type) {
        case 'warn':
            node.addClass('@index.less:warn').removeClass('@index.less:error');
            break;
        case 'error':
            node.addClass('@index.less:error').removeClass('@index.less:warn');
            break;
    }

    // checkbox radio 提示的时候取第一个节点提示
    if (node.prop('type') == 'checkbox' || node.prop('type') == 'radio') {
        node = $(node[0]);
    }

    node.each((i, n) => {
        n = $(n);
        let prt = n.parent();
        let id = n.attr('id');
        if (!id) {
            id = Magix.guid();
            n.attr('id', id);
        }
        let msgId = id + '_msg';
        let msgNode = $('#' + msgId);
        if (!msgNode.length) {
            let pos = prt.css('position');
            if (pos == 'static') {
                prt.css({
                    position: 'relative'
                })
            }
            n.after('<div id="' + msgId + '"/>');
            msgNode = $('#' + msgId);
        }

        switch (type) {
            case 'warn':
                msgNode[0].className = '@index.less:warn-msg';
                break;
            case 'error':
                msgNode[0].className = '@index.less:error-msg';
                break;
        }
        // 提示信息
        msgNode.html(checkInfo.tip).show();

        // 提示信息位置 bottom / right
        let placement = checkInfo.placement || 'bottom';

        let width = n.outerWidth(),
            height = n.outerHeight(),
            offset = n.offset(),
            pOffset = prt.offset();

        let lh = '32px';
        if (window.getComputedStyle) {
            let root = getComputedStyle(document.documentElement);
            lh = root.getPropertyValue('--input-height').trim();
        }
        switch (placement) {
            case 'right':
                msgNode.css({
                    lineHeight: lh,
                    top: (offset.top - pOffset.top),
                    left: (offset.left - pOffset.left) + width + 10
                });
                break;
            case 'bottom':
                msgNode.css({
                    lineHeight: '18px',  //table td的padding
                    top: (offset.top - pOffset.top) + height,
                    left: (offset.left - pOffset.left) + 10
                });
                break;
        }

    });
    return true;
};

module.exports = {
    isValid(config, ref) {
        config = Magix.mix({
            element: null, //单独校验某个节点
            scrollIntoView: true, //校验有错误的情况下是否要滚动到错误节点
            checkSubs: true //是否调用子view校验，children isValid
        }, config || {});

        let me = this;
        let result = true;
        let children = me.owner.children();
        let topLevel = false;
        if (!ref) {
            ref = [];
            topLevel = true;
        }
        // 递归调用子view校验
        if (config.checkSubs) {
            for (let i = 0; i < children.length; i++) {
                let vf = Magix.Vframe.get(children[i]);
                let r = vf.invoke('isValid', [ref]);
                if (r === false) {
                    result = false;
                }
            }
        }

        let elements;
        if (config.element) {
            if ((typeof config.element == 'string') && !(/^#/.test(config.element)) && !(/^\./.test(config.element))) {
                elements = $('#' + config.element);
            } else {
                elements = $(config.element);
            }
            let ssId = elements.attr('mxe');
            if (!ssId) {
                // 查找该节点下所有的校验节点
                elements = elements.find('[mxe^="' + me.id + '"]');
            } else {
                // 该节点本身为校验节点
            }
        } else {
            // 不传单个节点，遍历所有的
            elements = $('#' + me.id + ' [mxe^="' + me.id + '"]');
        }
        let keys = []
        elements.each((i, e) => {
            // $(e).trigger({
            //     type: 'change',
            //     from: 'faker'
            // });
            me['@{check}']($(e));
            keys.push($(e).attr('mxe'));
        });

        // 缓存所有的错误，只提取type=error类型的
        let form = me.updater.$form;
        if (form) {
            for (var i = 0; i < keys.length; i++) {
                let key = keys[i];
                if (form[key] && (form[key].type == 'error')) {
                    ref.push(key);
                    result = false;
                    break;
                }
            }

        }

        // 父view 滚动到错误位置
        if (topLevel && config.scrollIntoView) {
            let minTop = 1e20,
                node;
            for (let i = ref.length, n, f; i--;) {
                n = $('[mxe="' + ref[i] + '"]');
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
    '$[mxc]<keyup,change,focusout>'(e) {
        let me = this,
            node = $(e.eventTarget);
        let mxe = node.attr('mxe');
        //交给真正的处理元素
        if (!mxe || !mxe.startsWith(me.id)) {
            return;
        }
        me['@{check}'](node);
    },

    '@{check}'(node) {
        let me = this;
        let updater = me.updater;
        let form = updater.$form || (updater.$form = {});
        let mxc = node.attr('mxc');
        let exprs = updater.parse(mxc);
        let valid = true; //校验信息
        for (let ctrl of exprs) {
            let actions = ctrl.f || {};
            let ps = ctrl.p.split('.');
            let key = ps.pop(),
                temp,
                value;
            let object = updater.get();
            while (object && ps.length) {
                temp = ps.shift();
                object = object[temp];
            }
            if (node.prop('type') == 'checkbox') {
                let src = object[key];
                let checked = node.prop('checked');
                if (src === true || src === false) {
                    value = checked;
                } else {
                    value = node.val();
                    if ($.isArray(src)) {
                        let checkboxName = node.prop('name');
                        if (checkboxName) {
                            src = [];
                            Util.addCheckbox(checkboxName, src, actions);
                        } else {
                            let idx = Util.indexOf(src, value);
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
            } else if (node.prop('type') == 'radio') {
                let radioName = node.prop('name');
                value = $('input[name=' + radioName + ']:checked').val();
            } else {
                value = node.val();
            }
            if (valid) {
                let checkInfo = isValid('error', actions, value);
                let ssId = node.attr('mxe');
                if (checkInfo.valid) {
                    delete form[ssId];
                    hideMsg(ssId);

                    //警告信息，校验成功的前提下才会有
                    if (Magix.has(actions, 'warn')) {
                        let warnCheckInfo = isValid('warn', actions.warn, value);

                        if (warnCheckInfo.valid) {
                            // 不需要警告
                            delete form[ssId];
                            hideMsg(ssId);
                        } else {
                            form[ssId] = warnCheckInfo;
                            showMsg('warn', ssId, warnCheckInfo);
                        }
                    }
                } else {
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
    clearValid() {
        let me = this;
        let form = me.updater.$form;
        if (form) {
            for (let f in form) {
                hideMsg(f);
            }
        }
        me.updater.$form = {};
    },
    '$doc<htmlchanged>'(e) {
        let me = this;
        let form = me.updater.$form;
        if (e.vId == me.id) {
            if (form) {
                for (let f in form) {
                    let v = form[f];
                    if (!showMsg(v.type, f, v)) {
                        delete form[f];
                    }
                }
            }
        }
    }
};