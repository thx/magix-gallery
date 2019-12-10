/*
    generate by magix-combine@3.11.31: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/index",["magix","$","./util"],(require,exports,module)=>{
/*Magix,$,Util*/

var Magix = require("magix");
var $ = require("$");
var Util = require("./util");
module.exports = {
    ctor: function () {
        var me = this;
        var updater = me.updater;
        me.on('domready', function () {
            // 初始化双向绑定
            var list = ($('input[type="checkbox"][mxe^="' + me.id + '"],input[type="radio"][mxe^="' + me.id + '"]'));
            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                var e = list_1[_i];
                e = $(e);
                // 配置属性
                var mxc = e.attr('mxc');
                var exprs = updater.parse(mxc);
                for (var _a = 0, exprs_1 = exprs; _a < exprs_1.length; _a++) {
                    var ctrl = exprs_1[_a];
                    var ps = ctrl.p.split('.');
                    var key = ps.pop();
                    // 校验规则
                    var actions = ctrl.f || {};
                    var data = updater.get();
                    while (data && ps.length) {
                        var temp = ps.shift();
                        data = data[temp];
                    }
                    if (!ps.length) {
                        // find aim object
                        // 处理对应的key
                        if (data === undefined) {
                            // fix https://aone.alibaba-inc.com/issue/18911004
                            return;
                        }
                        var src = data[key];
                        if (src === true) {
                            e.prop('checked', src);
                        }
                        else {
                            var value = e.val();
                            // let value = Util.fix(actions, e.val());
                            if ($.isArray(src)) {
                                if (Util.indexOf(src, value) >= 0) {
                                    e.prop('checked', true);
                                }
                            }
                            else if ($.isPlainObject(src)) {
                                if (src[value]) {
                                    e.prop('checked', true);
                                }
                            }
                            else if (src == value) {
                                e.prop('checked', true);
                            }
                        }
                    }
                }
            }
        });
    },
    fromKeys: function (data, keys) {
        keys = (keys + '').split(',');
        var r = {};
        for (var i = 0, key = void 0; i < keys.length; i++) {
            key = keys[i];
            r[key] = Magix.has(data, key) ? data[key] : '';
        }
        return r;
    },
    '$[mxc]<change,focusout>': function (e) {
        var me = this, node = $(e.eventTarget);
        var mxe = node.attr('mxe');
        // 交给真正的处理元素，只处理本view的
        // 避免所有view都挂载isValid的时候触发所有校验
        if (!mxe || !mxe.startsWith(me.id)) {
            return;
        }
        // 配置属性
        var mxc = node.attr('mxc');
        var updater = me.updater;
        var exprs = updater.parse(mxc);
        var keys = updater.$k;
        var refresh = false;
        for (var _i = 0, exprs_2 = exprs; _i < exprs_2.length; _i++) {
            var ctrl = exprs_2[_i];
            // 绑定节点
            var ps = ctrl.p.split('.');
            // 校验规则
            var actions = ctrl.f || {};
            var key = ps.pop(), temp = void 0, value = void 0, rootKey = void 0;
            var object = updater.get();
            while (object && ps.length) {
                temp = ps.shift();
                if (!rootKey) {
                    //解决设置数据后，再调用updater.digest()不刷新的问题
                    rootKey = temp;
                }
                object = object[temp];
            }
            rootKey = rootKey || key;
            if (node.attr('mx-view') && (node.attr('mx-view').indexOf('mx-calendar/rangepicker') > -1)) {
                // 日历时间段组件
                var pv = JSON.parse(node.val());
                value = pv[ctrl.a];
            }
            else if (node.prop('type') == 'checkbox') {
                var src = object[key];
                var checked = node.prop('checked');
                if (src === true || src === false) {
                    value = checked;
                }
                else {
                    value = node.val();
                    if ($.isArray(src)) {
                        var checkboxName = node.prop('name');
                        if (checkboxName) {
                            src = [];
                            Util.addCheckbox(checkboxName, src, actions);
                        }
                        else {
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
                value = $('input[name=' + radioName + ']:checked').val();
            }
            else {
                value = node.val();
            }
            if (object) {
                //处理多绑定时，值从event对象上读取
                if (!ctrl.a || Magix.has(e, ctrl.a) || value) {
                    if (Magix.has(e, ctrl.a)) {
                        value = e[ctrl.a];
                    }
                    object[key] = value;
                    //统一在change事件中标记更新
                    if (e.type == 'change') {
                        if (actions.refresh) {
                            refresh = true;
                        }
                        if (refresh || !actions.silent) {
                            if (keys) {
                                keys[rootKey] = 1; //标记改变;
                            }
                            updater.$c = 1;
                        }
                    }
                }
            }
            else {
                console.warn('can not set by path:', ctrl.p);
            }
        }
        if (refresh && e.type === 'change') {
            //解决在updater已经digesting时，再次digest带来的不稳定问题
            clearTimeout(me['@{digest.timer}']);
            me['@{digest.timer}'] = setTimeout(function () {
                updater.digest();
            }, 0);
        }
    }
};

});