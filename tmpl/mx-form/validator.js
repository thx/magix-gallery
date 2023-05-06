const Magix = require('magix');
const Rules = require('@./rule');
const Util = require('./util');
const Vframe = Magix.Vframe;
const $ = require('$');
Magix.applyStyle('@index.less');
const FormMsgTypes = {
    error: {
        key: '--color-red',
        icon: '&#xe71c;'
    },
    warn: {
        key: '--color-warn',
        icon: '&#xe719;'
    },
    highlight: {
        key: '--color-brand',
        icon: '&#xe71b;'
    },
    pass: {
        key: '--color-green',
        icon: '&#xe71a;'
    },
}

const GetCssVar = (key, def) => {
    let root = window.getComputedStyle(document.documentElement);
    let v = document.body.style.getPropertyValue(key) || root.getPropertyValue(key);
    if (!v) {
        return def || '';
    } else {
        return v.trim();
    }
}

const GetCssColorRgb = (key, def) => {
    let color = GetCssVar(key, def);

    if (color.indexOf('rgb') > -1) {
        // rgb() rgba()
        // 先转成hex
        let rgb = color.toString().match(/\d+/g); // 把 x,y,z 推送到 color 数组里

        let hex = '#';
        for (let i = 0; i < 3; i++) {
            // 'Number.toString(16)' 是JS默认能实现转换成16进制数的方法.
            // 'color[i]' 是数组，要转换成字符串.
            // 如果结果是一位数，就在前面补零。例如： A变成0A
            hex += ('0' + Number(rgb[i]).toString(16)).slice(-2);
        }

        color = hex;
    }

    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    color = color.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
    } : null;
}

const isValid = (type, actions, val) => {
    let valid = true,
        action, rule, tip;
    for (let a in actions) {
        if (Magix.has(actions, a)) {
            if (Rules[a]) {
                let check = Rules[a](val, rule = actions[a]);
                valid = check.valid;
                tip = check.tip;
            } else {
                // 过滤掉不在校验规则内的
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
        type, //错误还是警告
        style: actions.style, // 展现样
        placement: actions.placement, //样式定位
        align: actions.align, //样式对齐方式
        classList: actions.classList || [],
        valid, //校验是否通过
        action, //校验失败的规则 min: [20, tip]中min
        rule, //原始校验配置 min: [20, tip]中20
        val, //用户输入值
        tip //校验失败错误提示
    };
};

const mxFormGetNodes = (view, ssId) => {
    let node = $(`#${view.id} [mxe="${ssId}"]`),
        mxv = node.attr('mx-view');

    // checkbox和radio类型，非数组循环出来的mxe不一致，需要重新找一遍同name节点
    if (node.prop('type') == 'checkbox' || node.prop('type') == 'radio') {
        let name = node.attr('name');
        if (name) {
            node = $('input[name="' + name + '"]');
        }
    } else if (mxv && (mxv.indexOf('mx-checkbox/index') > -1)) {
        let name = node.find('input[type="checkbox"]').attr('name');
        if (name) {
            node = $('input[name="' + name + '"]').closest('[mx-view*="mx-checkbox/index"]');
        }
    } else if (mxv && (mxv.indexOf('mx-radio/index') > -1)) {
        let name = node.find('input[type="radio"]').attr('name');
        if (name) {
            node = $('input[name="' + name + '"]').closest('[mx-view*="mx-radio/index"]');
        }
    }

    return node;
}

const mxFormHideMsg = (view, ssId) => {
    view.updater.$form = view.updater.$form || {};

    let node = mxFormGetNodes(view, ssId);
    node.removeClass('@index.less:mx-form-notice-node');
    node.each((i, n) => {
        n = $(n);

        // 清楚缓存
        let mxe = n.attr('mxe');
        delete view.updater.$form[mxe];

        // 提示文案节点
        let msgId = n.attr('id') + '_msg';
        $('#' + msgId).hide();
    });
};

const mxFormShowMsg = (view, ssId, type, checkInfo) => {
    let node = mxFormGetNodes(view, ssId);
    if (!node.length) { return; };

    // 错误类型
    if (!FormMsgTypes[type]) {
        return;
    }

    // 样式
    let cns = 'names@index.less';

    // 关联节点样式同步
    view.updater.$form = view.updater.$form || {};

    // 节点样式
    let nodeStyles = {};
    let borderOpacity = +GetCssVar('--border-highlight-active-opacity', 1);
    let shadowOpacity = +GetCssVar('--border-highlight-shadow-active-opacity', 1);
    let rgbResult = GetCssColorRgb(FormMsgTypes[type].key);
    if (borderOpacity < 1 && shadowOpacity < 1 && rgbResult) {
        // 透明度+阴影样式处理
        Magix.mix(nodeStyles, {
            '--mx-form-notice-color': `rgba(${rgbResult.r}, ${rgbResult.g}, ${rgbResult.b}, ${borderOpacity})`,
            '--mx-form-notice-shadow': `var(--border-highlight-shadow-active-h, 0px) var(--border-highlight-shadow-active-v, 2px) var(--border-highlight-shadow-active-blur, 4px) 0 rgba(${rgbResult.r}, ${rgbResult.g}, ${rgbResult.b}, ${shadowOpacity})`,
        })
    } else {
        Magix.mix(nodeStyles, {
            '--mx-form-notice-color': `var(${FormMsgTypes[type].key})`,
            '--mx-form-notice-shadow': '0 none',
        })
    }
    node.css(nodeStyles);
    node.addClass('@index.less:mx-form-notice-node');

    node.each((i, n) => {
        n = $(n);

        // 缓存
        let mxe = n.attr('mxe');
        view.updater.$form[mxe] = checkInfo;
    });

    // checkbox radio 提示文案只显示在第一个节点上
    if (node.prop('type') == 'checkbox'
        || (node.attr('mx-view') && (node.attr('mx-view').indexOf('mx-checkbox/index') > -1))
        || node.prop('type') == 'radio'
        || (node.attr('mx-view') && (node.attr('mx-view').indexOf('mx-radio/index') > -1))) {
        node = $(node[0]);
    }

    // 展现样式 纯文案（text） or 盒状样式（ box）
    let style = checkInfo.style || 'text';
    if (!({ text: true, box: true, icon: true })[style]) {
        style = 'text';
    }

    // 提示信息位置 top / bottom / right
    let placement = ['bottom', 'right', 'top'].indexOf(checkInfo.placement) > -1 ? checkInfo.placement : 'bottom';
    let align = ['left', 'right'].indexOf(checkInfo.align) > -1 ? checkInfo.align : 'left';
    let classList = checkInfo.classList || [];

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

        // 相对定位节点
        let width = n.outerWidth(),
            height = n.outerHeight(),
            offset = n.offset(),
            pOffset = prt.offset(),
            pWidth = prt.outerWidth(),
            gap = 8;

        switch (style) {
            case 'text':
                msgNode[0].className = cns[`${type}-text-msg`] + ` aem-${type}-text-msg`;
                msgNode.html(checkInfo.tip).show();

                switch (placement) {
                    case 'right':
                        msgNode.css({
                            top: (offset.top - pOffset.top),
                            left: (offset.left - pOffset.left) + width + gap,
                            lineHeight: `${height}px`,
                        });
                        break;

                    case 'bottom':
                        let ml = Math.floor((offset.left - pOffset.left) + gap),
                            mxv = n.attr('mx-view');
                        if (mxv && (mxv.indexOf('mx-radio/cards') > -1)) {
                            // mx-radio.cards特殊处理
                            let lastCard = n.find('.@../mx-radio/cards.less:card:last-child');
                            msgNode.css({
                                top: (lastCard.offset().top + lastCard.outerHeight() - pOffset.top),
                                left: ml,
                            });
                        } else if (mxv && (mxv.indexOf('mx-checkbox/cards') > -1)) {
                            // mx-checkbox.cards特殊处理
                            let lastCard = n.find('.@../mx-checkbox/cards.less:card:last-child');
                            msgNode.css({
                                top: (lastCard.offset().top + lastCard.outerHeight() - pOffset.top),
                                left: ml,
                            });
                        } else {
                            let ss = {
                                top: (offset.top - pOffset.top) + height,
                                left: ml,
                            }
                            let ctd = n.closest('td');
                            if (ctd && ctd.length) {
                                // 是否是表格内的场景
                                Magix.mix(ss, {
                                    lineHeight: 'var(--mx-table-ceil-v-gap, 12px)',
                                })
                            }
                            msgNode.css(ss);
                        }
                        break;
                }
                break;

            case 'box':
                msgNode[0].className = `${cns[`${type}-box-msg`]} ${cns[`box-placement-${placement}`]} ${cns[`box-align-${align}`]}`;
                msgNode.html(checkInfo.tip).show();
                if (classList.length > 0) {
                    msgNode.addClass(classList.join(' '));
                }

                let ml = Math.floor(offset.left - pOffset.left),
                    mr = Math.floor(pOffset.left + pWidth - offset.left - width),
                    mxv = n.attr('mx-view');
                switch (placement) {
                    case 'right':
                        break;

                    case 'bottom':
                    case 'top':
                        let vs = {};
                        switch (align) {
                            case 'left':
                                vs = {
                                    left: ml,
                                    right: 'auto',
                                }
                                break;

                            case 'right':
                                vs = {
                                    left: 'auto',
                                    right: mr,
                                }
                                break;
                        }

                        if (mxv && (mxv.indexOf('mx-radio/cards') > -1)) {
                            // mx-radio.cards特殊处理
                            let lastCard = n.find('.@../mx-radio/cards.less:card:last-child');
                            msgNode.css({
                                ...vs,
                                [placement]: 'unset',
                                [(placement == 'top') ? 'bottom' : 'top']: Math.floor(lastCard.offset().top + lastCard.outerHeight() - pOffset.top + gap),
                            });
                        } else if (mxv && (mxv.indexOf('mx-checkbox/cards') > -1)) {
                            // mx-checkbox.cards特殊处理
                            let lastCard = n.find('.@../mx-checkbox/cards.less:card:last-child');
                            msgNode.css({
                                ...vs,
                                [placement]: 'unset',
                                [(placement == 'top') ? 'bottom' : 'top']: Math.floor(lastCard.offset().top + lastCard.outerHeight() - pOffset.top + gap),
                            });
                        } else {
                            msgNode.css({
                                ...vs,
                                [placement]: 'unset',
                                [(placement == 'top') ? 'bottom' : 'top']: Math.floor((offset.top - pOffset.top) + height + gap),
                            });
                        }
                        break;
                }
                break;

            case 'icon':
                msgNode[0].className = cns[`${type}-icon-msg`];
                msgNode.html(`<i class="mx-iconfont">${FormMsgTypes[type].icon}</i>`).show();
                msgNode.css({
                    height,
                    left: Math.floor(offset.left - pOffset.left + width - 16 - gap) // 16为icon本身宽度
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
                let vf = Vframe.get(children[i]);
                let r = vf.invoke('isValid', [ref]);
                if (r === false) {
                    result = false;
                }
            }
        }
        let elements;
        if (config.sizzle) {
            // 选择器
            elements = $(config.sizzle);
            let ssId = elements.attr('mxe');
            if (!ssId) {
                // 本身不是校验节点则查找该节点下所有的校验节点
                elements = elements.find('[mxo="' + me.id + '"]');
            } else {
                // 该节点本身为校验节点
            }
        } else if (config.element) {
            // 历史配置的兼容
            // 1. 传入字符串，默认为id（这时候传入选择器会判断失误，api中已不透出）
            // 2. #id，.class格式
            // 3. dom
            if ((typeof config.element == 'string') && !(/^#/.test(config.element)) && !(/^\./.test(config.element))) {
                elements = $('#' + config.element);
            } else {
                elements = $(config.element);
            }
            let ssId = elements.attr('mxe');
            if (!ssId) {
                // 本身不是校验节点则查找该节点下所有的校验节点
                elements = elements.find('[mxo="' + me.id + '"]');
            } else {
                // 该节点本身为校验节点
            }
        } else {
            // 不传单个节点，遍历所有的
            elements = $('#' + me.id + ' [mxo="' + me.id + '"]');
        }

        let keys = []
        elements.each((i, e) => {
            // 通过查找节点的方式会查到子view的节点：过滤掉非本view的节点
            // 该方法的问题：组件的vf != me.id，导致组件的校验都失效了
            // let start = e;
            // while (true) {
            //     let id = start.id;
            //     if (id) {
            //         let vf = Vframe.get(id);
            //         if (vf) {
            //             // 最近的vframe
            //             if (me.id == vf.id) {
            //                 me['@{check}']($(e));
            //                 keys.push($(e).attr('mxe'));
            //             }
            //             break;
            //         } else {
            //             start = start.parentNode;
            //         }
            //     } else {
            //         start = start.parentNode;
            //     }
            // }

            // 只取本view的节点
            let mxo = $(e).attr('mxo');
            if (!mxo || (mxo && (me.id == mxo))) {
                me['@{check}']($(e));
                keys.push($(e).attr('mxe'));
            }
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
        let mxe = node.attr('mxe'),
            mxo = node.attr('mxo'),
            viewId = me.id;

        //交给真正的view处理元素
        if ((mxo && mxo == viewId) || (mxe && mxe.startsWith(viewId))) {
            me['@{check}'](node);
        }
    },

    '@{check}'(node) {
        let me = this;
        let updater = me.updater;
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
            } else if (node.attr('mx-view') && (node.attr('mx-view').indexOf('mx-checkbox/index') > -1)) {
                // mx-checkbox
                let src = object[key];
                let checked = node.find('input[type="checkbox"]').prop('checked');
                if (src === true || src === false) {
                    value = checked;
                } else {
                    value = node.find('input[type="checkbox"]').val();
                    if ($.isArray(src)) {
                        let checkboxName = node.find('input[type="checkbox"]').prop('name');
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
                // 原生radio处理
                let radioName = node.prop('name');
                value = $('input[name=' + radioName + ']:checked').val();
            } else if (node.attr('mx-view') && (node.attr('mx-view').indexOf('mx-radio/index') > -1)) {
                // mx-radio组件处理
                let radioName = node.find('input[type="radio"]').prop('name');
                value = $('input[name=' + radioName + ']:checked').val();
            } else if (node.attr('mx-view') && (node.attr('mx-view').indexOf('mx-calendar/rangepicker') > -1)) {
                // 日历处理
                try {
                    let vo = JSON.parse(node.val());
                    value = vo[ctrl.a];
                } catch (error) {
                    value = node.val();
                }
            } else {
                value = node.val();
            }
            if (valid) {
                let checkInfo = isValid('error', actions, value);
                let ssId = node.attr('mxe');
                if (checkInfo.valid) {
                    mxFormHideMsg(me, ssId);

                    // 校验成功的前提下，其他展现样式的提示信息
                    for (let t in FormMsgTypes) {
                        if (t != 'error' && Magix.has(actions, t)) {
                            let tCheckInfo = isValid(t, actions[t], value);

                            if (tCheckInfo.valid) {
                                // 不需要警告
                                mxFormHideMsg(me, ssId);
                            } else {
                                mxFormShowMsg(me, ssId, t, tCheckInfo);
                            }
                        }
                    }
                } else {
                    valid = false;
                    mxFormShowMsg(me, ssId, 'error', checkInfo);
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
                mxFormHideMsg(me, f);
            }
        }
    },
    '$doc<htmlchanged>'(e) {
        let me = this;
        let form = me.updater.$form;
        if ((e.vId == me.id) && form) {
            for (let f in form) {
                let v = form[f];
                if (!mxFormShowMsg(me, f, v.type, v)) {
                    delete form[f];
                }
            }
        }
    }
};