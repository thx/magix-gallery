/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/rule",["$","../mx-medusa/util"],(require,exports,module)=>{
/*$,I18n*/

var $ = require("$");
var ByteLen = function (str) {
    return str.replace(/[^\x00-\xff]/g, 'xl').length;
};
var I18n = require("../mx-medusa/util");
var isMobile = function (str) {
    var regex = {
        //中国移动
        cm: /^(?:0?1)(?:3[456789]|47|5[0124789]|78|8[23478]|9[89])\d{8}$/,
        //中国联通
        cu: /^(?:0?1)(?:3[012]|45|5[356]|66|7[56]|8[356])\d{8}$/,
        //中国电信
        ce: /^(?:0?1)(?:33|49|53|7[37]|8[019])\d{8}$/,
        //虚拟电商
        cn: /^(?:0?1)(?:70)\d{8}$/,
        //中国香港
        hk: /^(?:0?[1569])(?:\d{7}|\d{8}|\d{12})$/,
        //澳门
        macao: /^6\d{7}$/,
        //台湾
        tw: /^(?:0?[679])(?:\d{7}|\d{8}|\d{10})$/
    }, flag = false;
    for (var re in regex) {
        if (regex[re].test(str)) {
            flag = true;
        }
    }
    return flag;
};
module.exports = {
    email: function (val, rule) {
        // 邮箱：名称@域名
        var valid = true, tip = I18n['form.check.email'];
        val = $.trim(val);
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var domains = [];
        if (val) {
            if ($.isArray(rule)) {
                if (rule[0]) {
                    valid = reg.test(val);
                }
                if (rule[1]) {
                    tip = rule[1];
                }
                if (rule[2] && $.isArray(rule[2])) {
                    domains = rule[2];
                }
            }
            else {
                if (rule) {
                    valid = reg.test(val);
                }
            }
        }
        if (valid && (domains.length > 0)) {
            // 指定域名校验
            var contain = false;
            var d = val.substring(val.indexOf('@') + 1);
            for (var i = 0; i < domains.length; i++) {
                if (domains[i] == d) {
                    contain = true;
                    break;
                }
            }
            if (!contain) {
                valid = false;
            }
        }
        return {
            valid: valid,
            tip: tip
        };
    },
    url: function (val, rule) {
        // 中文
        var valid = true, tip = I18n['form.check.url'];
        val = $.trim(val);
        var reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
        if (val) {
            if ($.isArray(rule)) {
                if (rule[0]) {
                    valid = reg.test(val);
                }
                if (rule[1]) {
                    tip = rule[1];
                }
            }
            else {
                if (rule) {
                    valid = reg.test(val);
                }
            }
        }
        return {
            valid: valid,
            tip: tip
        };
    },
    english: function (val, rule) {
        // 中文
        var valid = true, tip = I18n['form.check.english'];
        val = $.trim(val);
        var reg = /^[A-Za-z]+$/;
        if (val) {
            if ($.isArray(rule)) {
                if (rule[0]) {
                    valid = reg.test(val);
                }
                if (rule[1]) {
                    tip = rule[1];
                }
            }
            else {
                if (rule) {
                    valid = reg.test(val);
                }
            }
        }
        return {
            valid: valid,
            tip: tip
        };
    },
    chinese: function (val, rule) {
        // 中文
        var valid = true, tip = I18n['form.check.chinese'];
        val = $.trim(val);
        var reg = /^[\u0391-\uFFE5]+$/;
        if (val) {
            if ($.isArray(rule)) {
                if (rule[0]) {
                    valid = reg.test(val);
                }
                if (rule[1]) {
                    tip = rule[1];
                }
            }
            else {
                if (rule) {
                    valid = reg.test(val);
                }
            }
        }
        return {
            valid: valid,
            tip: tip
        };
    },
    mobile: function (val, rule) {
        var valid = true, tip = I18n['form.check.mobile'];
        val = $.trim(val);
        if (val) {
            if ($.isArray(rule)) {
                if (rule[0]) {
                    valid = isMobile(val);
                }
                if (rule[1]) {
                    tip = rule[1];
                }
            }
            else {
                if (rule) {
                    valid = isMobile(val);
                }
            }
        }
        return {
            valid: valid,
            tip: tip
        };
    },
    currency: function (val, rule) {
        // 金额，最多保留两位小数
        var valid = true, tip = I18n['form.check.currency'];
        val = $.trim(val);
        var reg = /^(([1-9]\d*)|0)(\.\d{1,2})?$/;
        if (val) {
            if ($.isArray(rule)) {
                if (rule[0]) {
                    valid = reg.test(val);
                }
                if (rule[1]) {
                    tip = rule[1];
                }
            }
            else {
                if (rule) {
                    valid = reg.test(val);
                }
            }
        }
        return {
            valid: valid,
            tip: tip
        };
    },
    trim: function (val, rule) {
        // 两端是否有空格
        // required: [true, '自定义']
        // required: true
        var valid = true, tip = I18n['form.check.trim'];
        if ($.isArray(rule)) {
            if (rule[0]) {
                valid = /\s/.test(val);
            }
            if (rule[1]) {
                tip = rule[1];
            }
        }
        else {
            if (rule) {
                valid = /\s/.test(val);
            }
        }
        return {
            valid: !valid,
            tip: tip
        };
    },
    required: function (val, rule) {
        // 是否必填
        // required: [true, '自定义']
        // required: true
        var valid = true, tip = I18n['form.check.required'];
        val = $.trim(val);
        if ($.isArray(rule)) {
            if (rule[0]) {
                valid = (val != '');
            }
            if (rule[1]) {
                tip = rule[1];
            }
        }
        else {
            if (rule) {
                valid = (val != '');
            }
        }
        return {
            valid: valid,
            tip: tip
        };
    },
    number: function (val, rule) {
        // 是否为数字
        // number: true
        var valid = true, tip = I18n['form.check.number'];
        val = $.trim(val);
        var reg = /(^[\-0-9][0-9]*(.[0-9]+)?)$/;
        if (val) {
            if ($.isArray(rule)) {
                if (rule[0]) {
                    valid = reg.test(val);
                }
                if (rule[1]) {
                    tip = rule[1];
                }
            }
            else {
                if (rule) {
                    valid = reg.test(val);
                }
            }
        }
        return {
            valid: valid,
            tip: tip
        };
    },
    int: function (val, rule) {
        // 是否为整数
        // int: true
        var valid = true, tip = I18n['form.check.int'];
        val = $.trim(val);
        var reg = /^-?\d+$/;
        if (val) {
            if ($.isArray(rule)) {
                if (rule[0]) {
                    valid = reg.test(val);
                }
                if (rule[1]) {
                    tip = rule[1];
                }
            }
            else {
                if (rule) {
                    valid = reg.test(val);
                }
            }
        }
        return {
            valid: valid,
            tip: tip
        };
    },
    posint: function (val, rule) {
        // 是否为正整数
        // posint: true
        // posint: [true, 自定义]
        var valid = true, tip = I18n['form.check.posint'];
        val = $.trim(val);
        var reg = /^[0-9]*[1-9][0-9]*$/;
        if (val) {
            if ($.isArray(rule)) {
                if (rule[0]) {
                    valid = reg.test(val);
                }
                if (rule[1]) {
                    tip = rule[1];
                }
            }
            else {
                if (rule) {
                    valid = reg.test(val);
                }
            }
        }
        return {
            valid: valid,
            tip: tip
        };
    },
    negint: function (val, rule) {
        // 是否为负整数
        // negint: true
        // negint: [true, 自定义]
        var valid = true, tip = I18n['form.check.negint'];
        val = $.trim(val);
        var reg = /^-[0-9]*[1-9][0-9]*$/;
        if (val) {
            if ($.isArray(rule)) {
                if (rule[0]) {
                    valid = reg.test(val);
                }
                if (rule[1]) {
                    tip = rule[1];
                }
            }
            else {
                if (rule) {
                    valid = reg.test(val);
                }
            }
        }
        return {
            valid: valid,
            tip: tip
        };
    },
    length: function (val, rule) {
        // 字个数
        // length: [4,8]
        var valid = true, tip = I18n['form.word.between'];
        val = $.trim(val);
        if (val) {
            var min = rule[0], max = rule[1], current = val.length;
            valid = (current >= min) && (current <= max);
            tip = tip.replace(/{min}/g, min).replace(/{max}/g, max).replace(/{current}/g, current);
        }
        return {
            valid: valid,
            tip: tip
        };
    },
    minlength: function (val, rule) {
        // 最少字个数
        // minlength: 10
        // minlength: [10, '自定义提示']
        var valid = true, tip = [I18n['form.less'], rule, I18n['form.word']].join(' ');
        val = $.trim(val);
        if (val) {
            if ($.isArray(rule)) {
                valid = (val.length >= rule[0]);
                if (rule[1]) {
                    tip = rule[1];
                }
            }
            else {
                valid = (val.length >= rule);
            }
        }
        return {
            valid: valid,
            tip: tip
        };
    },
    maxlength: function (val, rule) {
        // 最多字个数
        // maxlength: 10
        // maxlength: [10, '自定义提示']
        var valid = true, tip = [I18n['form.more'], rule, I18n['form.word']].join(' ');
        val = $.trim(val);
        if (val) {
            if ($.isArray(rule)) {
                valid = (val.length <= rule[0]);
                if (rule[1]) {
                    tip = rule[1];
                }
            }
            else {
                valid = (val.length <= rule);
            }
        }
        return {
            valid: valid,
            tip: tip
        };
    },
    blength: function (val, rule) {
        // 字符长度：一个汉字两个字符
        // blength: [10, 20]
        var valid = true, tip = I18n['form.char.between'];
        val = $.trim(val);
        if (val) {
            var min = rule[0], max = rule[1], current = ByteLen(val);
            valid = (current >= min) && (current <= max);
            tip = tip.replace(/{min}/g, min).replace(/{max}/g, max).replace(/{current}/g, current);
        }
        return {
            valid: valid,
            tip: tip
        };
    },
    bminlength: function (val, rule) {
        // 字符最小长度：一个汉字两个字符
        // bminlength: 10
        // bminlength: [10, 自定义]
        val = $.trim(val);
        var len = ByteLen(val);
        var valid = true, tip = I18n['form.less'] + ' ' + rule + ' ' + I18n['form.char'];
        if (val) {
            if ($.isArray(rule)) {
                valid = (len >= rule[0]);
                if (rule[1]) {
                    tip = rule[1];
                }
            }
            else {
                valid = (len >= rule);
            }
        }
        return {
            valid: valid,
            tip: tip
        };
    },
    bmaxlength: function (val, rule) {
        // 字符最大长度：一个汉字两个字符
        // bmaxlength: 10
        // bmaxlength: [10, 自定义]
        val = $.trim(val);
        var len = ByteLen(val);
        var valid = true, tip = I18n['form.more'] + ' ' + rule + ' ' + I18n['form.char'];
        if (val) {
            if ($.isArray(rule)) {
                valid = (len <= rule[0]);
                if (rule[1]) {
                    tip = rule[1];
                }
            }
            else {
                valid = (len <= rule);
            }
        }
        return {
            valid: valid,
            tip: tip
        };
    },
    equalto: function (val, rule) {
        var tip = I18n['form.check.equal'];
        var id;
        if ($.isArray(rule)) {
            // [id, 自定义提示]
            id = rule[0];
            if (rule[1]) {
                tip = rule[1];
            }
            else {
                tip = tip.replace(/{rule}/g, rule[0]);
            }
        }
        else {
            id = rule;
            tip = tip.replace(/{rule}/g, rule);
        }
        var to = $('#' + id).val();
        return {
            valid: (to == val),
            tip: tip
        };
    },
    unequalto: function (val, rule) {
        var tip = I18n['form.check.unequal'];
        // 支持多个id逗号分隔
        var ids;
        if ($.isArray(rule)) {
            // [ids, 自定义提示]
            ids = rule[0];
            if (rule[1]) {
                tip = rule[1];
            }
        }
        else {
            ids = rule;
        }
        var equalIds = [];
        ids = ids.split(',');
        ids.forEach(function (id) {
            if ($('#' + id).val() == val) {
                equalIds.push(id);
            }
        });
        tip = tip.replace(/{rule}/g, equalIds.join(','));
        return {
            valid: (equalIds.length == 0),
            tip: tip
        };
    },
    pattern: function (val, rule) {
        // 正则
        // pattern [reg, 自定义]
        // pattern reg
        var valid = true, tip = I18n['form.check.pattern'];
        val = $.trim(val);
        if (val) {
            var reg = void 0;
            if ($.isArray(rule)) {
                reg = new RegExp(rule[0]);
                if (rule[1]) {
                    tip = rule[1];
                }
            }
            else {
                reg = new RegExp(rule);
            }
            valid = reg.test(val);
        }
        return {
            valid: valid,
            tip: tip
        };
    },
    range: function (val, rule) {
        // 数字范围，包括边界
        // range: [2,10,自定义提示]
        var valid = true;
        var min = rule[0], max = rule[1];
        var tip = rule[2] || I18n['form.check.range'];
        val = $.trim(val);
        if (val) {
            valid = (+val >= +min) && (+val <= +max);
        }
        return {
            valid: valid,
            tip: tip.replace(/{min}/g, min).replace(/{max}/g, max)
        };
    },
    rangeborder: function (val, rule) {
        // 数字范围，不包括边界
        // range: [2,10,自定义提示]
        var valid = true;
        var min = rule[0], max = rule[1];
        var tip = rule[2] || I18n['form.check.range.border'];
        val = $.trim(val);
        if (val) {
            valid = (+val > +min) && (+val < +max);
        }
        return {
            valid: valid,
            tip: tip.replace(/{min}/g, min).replace(/{max}/g, max)
        };
    },
    max: function (val, rule) {
        // 数字最大值
        // max: [10,自定义]
        // max: 10
        var valid = true, max, tip = I18n['form.max'];
        if ($.isArray(rule)) {
            max = rule[0];
            if (rule[1]) {
                tip = rule[1];
            }
        }
        else {
            max = rule;
        }
        val = $.trim(val);
        if (val) {
            valid = (+val <= +max);
        }
        return {
            valid: valid,
            tip: tip.replace(/{max}/g, max)
        };
    },
    maxborder: function (val, rule) {
        // 数字最大值，不包含边界
        // max: [10,自定义]
        // max: 10
        var valid = true, max, tip = I18n['form.max.border'];
        if ($.isArray(rule)) {
            max = rule[0];
            if (rule[1]) {
                tip = rule[1];
            }
        }
        else {
            max = rule;
        }
        val = $.trim(val);
        if (val) {
            valid = (+val < +max);
        }
        return {
            valid: valid,
            tip: tip.replace(/{max}/g, max)
        };
    },
    min: function (val, rule) {
        // 数字最小值，包含边界
        // min: [10,自定义]
        // min: 10
        var valid = true, min, tip = I18n['form.min'];
        if ($.isArray(rule)) {
            min = rule[0];
            if (rule[1]) {
                tip = rule[1];
            }
        }
        else {
            min = rule;
        }
        val = $.trim(val);
        if (val) {
            valid = (+val >= +min);
        }
        return {
            valid: valid,
            tip: tip.replace(/{min}/g, min)
        };
    },
    minborder: function (val, rule) {
        // 数字最小值，不包含边界
        // min: [10,自定义]
        // min: 10
        var valid = true, min, tip = I18n['form.min.border'];
        if ($.isArray(rule)) {
            min = rule[0];
            if (rule[1]) {
                tip = rule[1];
            }
        }
        else {
            min = rule;
        }
        val = $.trim(val);
        if (val) {
            valid = (+val > +min);
        }
        return {
            valid: valid,
            tip: tip.replace(/{min}/g, min)
        };
    }
};

});