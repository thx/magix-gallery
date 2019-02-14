let Magix = require('magix');
let $ = require('$');
let Util = require('./util');
module.exports = {
    ctor() {
        let me = this;
        let updater = me.updater;
        me.on('domready', () => {
            // 初始化双向绑定
            let list = ($('input[type="checkbox"][mxe^="' + me.id + '"],input[type="radio"][mxe^="' + me.id + '"]'));
            for (let e of list) {
                e = $(e);

                // 配置属性
                let mxc = e.attr('mxc');
                let exprs = updater.parse(mxc);
                for (let ctrl of exprs) {
                    let ps = ctrl.p.split('.');
                    let key = ps.pop();

                    // 校验规则
                    let actions = ctrl.f || {};
                    let data = updater.get();
                    while (data && ps.length) {
                        let temp = ps.shift();
                        data = data[temp];
                    }
                    if (!ps.length) { 
                        // find aim object
                        // 处理对应的key
                        if(data === undefined){
                            // fix https://aone.alibaba-inc.com/issue/18911004
                            return;
                        }
                        let src = data[key];
                        if (src === true) {
                            e.prop('checked', src);
                        } else {
                            let value = e.val();
                            // let value = Util.fix(actions, e.val());
                            if ($.isArray(src)) {
                                if (Util.indexOf(src, value) >= 0) {
                                    e.prop('checked', true);
                                }
                            } else if ($.isPlainObject(src)) {
                                if (src[value]) {
                                    e.prop('checked', true);
                                }
                            } else if (src == value) {
                                e.prop('checked', true);
                            }
                        }
                    }
                }
            }
        });
    },
    fromKeys(data, keys) {
        keys = (keys + '').split(',');
        let r = {};
        for (let i = 0, key; i < keys.length; i++) {
            key = keys[i];
            r[key] = Magix.has(data, key) ? data[key] : '';
        }
        return r;
    },
    '$[mxc]<change,focusout>'(e) {
        let me = this,
            node = $(e.eventTarget);
        let mxe = node.attr('mxe');
        // 交给真正的处理元素，只处理本view的
        // 避免所有view都挂载isValid的时候触发所有校验
        if (!mxe || !mxe.startsWith(me.id)) {
            return;
        }

        // 配置属性
        let mxc = node.attr('mxc');
        let updater = me.updater;
        let exprs = updater.parse(mxc);
        let keys = updater.$k;
        let refresh = false;
        for (let ctrl of exprs) {
            // 绑定节点
            let ps = ctrl.p.split('.');

            // 校验规则
            let actions = ctrl.f || {};
            let key = ps.pop(),
                temp,
                value,
                rootKey;
            let object = updater.get();
            while (object && ps.length) {
                temp = ps.shift();
                if (!rootKey) {
                    //解决设置数据后，再调用updater.digest()不刷新的问题
                    rootKey = temp;
                }
                object = object[temp];
            }
            rootKey = rootKey || key;
            if(node.attr('mx-view') && (node.attr('mx-view').indexOf('mx-calendar/rangepicker') > -1)){
                // 日历时间段组件
                let pv = JSON.parse(node.val());
                value = pv[ctrl.a];
            }else if (node.prop('type') == 'checkbox') {
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
            if (object) {
                //处理多绑定时，值从event对象上读取
                if (!ctrl.a || Magix.has(e, ctrl.a) || value) {
                    if (Magix.has(e, ctrl.a)) {
                        value = e[ctrl.a];
                    }
                    object[key] = value;
                    if (actions.refresh) {
                        refresh = true;
                    }
                    if (refresh || !actions.silent) { //如果刷新或未标记沉默更新
                        if (keys) {
                            keys[rootKey] = 1; //标记改变;
                        }
                        updater.$c = 1;
                    }
                }
            } else {
                console.warn('can not set by path:', ctrl.p);
            }
        }
        if (refresh && e.type === 'change') {
            //解决在updater已经digesting时，再次digest带来的不稳定问题
            clearTimeout(me['@{digest.timer}']);
            me['@{digest.timer}'] = setTimeout(() => {
                updater.digest();
            }, 0);
        }
    }
};