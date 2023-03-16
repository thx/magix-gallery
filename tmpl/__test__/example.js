let Magix = require('magix');
let Base = require('../mx-util/view');
let Form = require('../mx-form/index');
let Validator = require('../mx-form/validator');
let Dialog = require('../mx-dialog/index');
let Loading = require('../mx-loading/mask');
let $ = require('$');
let CopyText = '复制代码';
let Chartx = require('./pro/chartpark/index');

module.exports = Base.extend({
    mixins: [Form, Validator, Dialog, Loading],
    init() {
        let d = {};
        for (let i = 1; i < 20; i++) {
            d[`text${i}`] = CopyText;
        }
        this.updater.set({
            ...d,
            viewId: this.id,
        });
    },
    render() {
        this.updater.digest();
    },
    'done<success>'(e) {
        let that = this;
        let id = e.params.id;
        let data = {};
        data['text' + id] = '<i class="mx-iconfont color-green">&#xe71a;</i>复制成功';
        that.updater.digest(data);

        setTimeout(() => {
            data['text' + id] = CopyText;
            that.updater.digest(data);
        }, 1000);
    },
    getChartOptions(id) {
        return $.extend(true, {}, Chartx.getOptions(id))
    },
    getCssVar(key, def) {
        let root = window.getComputedStyle(document.documentElement);
        let v = document.body.style.getPropertyValue(key) || root.getPropertyValue(key);
        if (!v) {
            return def || '';
        } else {
            return v.trim();
        }
    },
    colorToRgb(color) {
        if (!color) {
            return null;
        }

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
            alpha: 1
        } : null;
    },
    colorToHex(result) {
        let a = parseFloat(result.alpha || 1);
        let r = Math.floor(a * parseInt(result.r) + (1 - a) * 255),
            g = Math.floor(a * parseInt(result.g) + (1 - a) * 255),
            b = Math.floor(a * parseInt(result.b) + (1 - a) * 255);
        return '#' +
            ('0' + r.toString(16)).slice(-2) +
            ('0' + g.toString(16)).slice(-2) +
            ('0' + b.toString(16)).slice(-2);
    },
});