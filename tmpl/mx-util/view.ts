/**
 * 通用方法定义
 * 具体页面继承该View
 */
import Magix from 'magix';
let PreSetMap = {
    "black": "#000000",
    "silver": "#c0c0c0",
    "gray": "#808080",
    "white": "#ffffff",
    "maroon": "#800000",
    "red": "#ff0000",
    "purple": "#800080",
    "fuchsia": "#ff00ff",
    "green": "#008000",
    "lime": "#00ff00",
    "olive": "#808000",
    "yellow": "#ffff00",
    "navy": "#000080",
    "blue": "#0000ff",
    "teal": "#008080",
    "aqua": "#00ffff",
    "orange": "#ffa500",
    "aliceblue": "#f0f8ff",
    "antiquewhite": "#faebd7",
    "aquamarine": "#7fffd4",
    "azure": "#f0ffff",
    "beige": "#f5f5dc",
    "bisque": "#ffe4c4",
    "blanchedalmond": "#ffebcd",
    "blueviolet": "#8a2be2",
    "brown": "#a52a2a",
    "burlywood": "#deb887",
    "cadetblue": "#5f9ea0",
    "chartreuse": "#7fff00",
    "chocolate": "#d2691e",
    "coral": "#ff7f50",
    "cornflowerblue": "#6495ed",
    "cornsilk": "#fff8dc",
    "crimson": "#dc143c",
    "darkblue": "#00008b",
    "darkcyan": "#008b8b",
    "darkgoldenrod": "#b8860b",
    "darkgray": "#a9a9a9",
    "darkgreen": "#006400",
    "darkgrey": "#a9a9a9",
    "darkkhaki": "#bdb76b",
    "darkmagenta": "#8b008b",
    "darkolivegreen": "#556b2f",
    "darkorange": "#ff8c00",
    "darkorchid": "#9932cc",
    "darkred": "#8b0000",
    "darksalmon": "#e9967a",
    "darkseagreen": "#8fbc8f",
    "darkslateblue": "#483d8b",
    "darkslategray": "#2f4f4f",
    "darkslategrey": "#2f4f4f",
    "darkturquoise": "#00ced1",
    "darkviolet": "#9400d3",
    "deeppink": "#ff1493",
    "deepskyblue": "#00bfff",
    "dimgray": "#696969",
    "dimgrey": "#696969",
    "dodgerblue": "#1e90ff",
    "firebrick": "#b22222",
    "floralwhite": "#fffaf0",
    "forestgreen": "#228b22",
    "gainsboro": "#dcdcdc",
    "ghostwhite": "#f8f8ff",
    "gold": "#ffd700",
    "goldenrod": "#daa520",
    "greenyellow": "#adff2f",
    "grey": "#808080",
    "honeydew": "#f0fff0",
    "hotpink": "#ff69b4",
    "indianred": "#cd5c5c",
    "indigo": "#4b0082",
    "ivory": "#fffff0",
    "khaki": "#f0e68c",
    "lavender": "#e6e6fa",
    "lavenderblush": "#fff0f5",
    "lawngreen": "#7cfc00",
    "lemonchiffon": "#fffacd",
    "lightblue": "#add8e6",
    "lightcoral": "#f08080",
    "lightcyan": "#e0ffff",
    "lightgoldenrodyellow": "#fafad2",
    "lightgray": "#d3d3d3",
    "lightgreen": "#90ee90",
    "lightgrey": "#d3d3d3",
    "lightpink": "#ffb6c1",
    "lightsalmon": "#ffa07a",
    "lightseagreen": "#20b2aa",
    "lightskyblue": "#87cefa",
    "lightslategray": "#778899",
    "lightslategrey": "#778899",
    "lightsteelblue": "#b0c4de",
    "lightyellow": "#ffffe0",
    "limegreen": "#32cd32",
    "linen": "#faf0e6",
    "mediumaquamarine": "#66cdaa",
    "mediumblue": "#0000cd",
    "mediumorchid": "#ba55d3",
    "mediumpurple": "#9370db",
    "mediumseagreen": "#3cb371",
    "mediumslateblue": "#7b68ee",
    "mediumspringgreen": "#00fa9a",
    "mediumturquoise": "#48d1cc",
    "mediumvioletred": "#c71585",
    "midnightblue": "#191970",
    "mintcream": "#f5fffa",
    "mistyrose": "#ffe4e1",
    "moccasin": "#ffe4b5",
    "navajowhite": "#ffdead",
    "oldlace": "#fdf5e6",
    "olivedrab": "#6b8e23",
    "orangered": "#ff4500",
    "orchid": "#da70d6",
    "palegoldenrod": "#eee8aa",
    "palegreen": "#98fb98",
    "paleturquoise": "#afeeee",
    "palevioletred": "#db7093",
    "papayawhip": "#ffefd5",
    "peachpuff": "#ffdab9",
    "peru": "#cd853f",
    "pink": "#ffc0cb",
    "plum": "#dda0dd",
    "powderblue": "#b0e0e6",
    "rosybrown": "#bc8f8f",
    "royalblue": "#4169e1",
    "saddlebrown": "#8b4513",
    "salmon": "#fa8072",
    "sandybrown": "#f4a460",
    "seagreen": "#2e8b57",
    "seashell": "#fff5ee",
    "sienna": "#a0522d",
    "skyblue": "#87ceeb",
    "slateblue": "#6a5acd",
    "slategray": "#708090",
    "slategrey": "#708090",
    "snow": "#fffafa",
    "springgreen": "#00ff7f",
    "steelblue": "#4682b4",
    "tan": "#d2b48c",
    "thistle": "#d8bfd8",
    "tomato": "#ff6347",
    "turquoise": "#40e0d0",
    "violet": "#ee82ee",
    "wheat": "#f5deb3",
    "whitesmoke": "#f5f5f5",
    "yellowgreen": "#9acd32",
    "rebeccapurple": "#663399",
}

let ToRGB = (color) => {
    if (!color) {
        return null;
    }
    if (PreSetMap[color]) {
        color = PreSetMap[color];
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
}
let ToHex = (result) => {
    let a = parseFloat(result.alpha || 1);
    let r = Math.floor(a * parseInt(result.r) + (1 - a) * 255),
        g = Math.floor(a * parseInt(result.g) + (1 - a) * 255),
        b = Math.floor(a * parseInt(result.b) + (1 - a) * 255);
    return '#' +
        ('0' + r.toString(16)).slice(-2) +
        ('0' + g.toString(16)).slice(-2) +
        ('0' + b.toString(16)).slice(-2);
}
let ToHSL = (result) => {
    let r = result.r / 255,
        g = result.g / 255,
        b = result.b / 255,
        a = result.alpha;

    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2, d = max - min;

    if (max === min) {
        h = s = 0;
    } else {
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h * 360, s: s, l: l, a: a };
}
let ColorMix = (color1, color2, p) => {
    let hsl1 = ToHSL(color1),
        hsl2 = ToHSL(color2);
    let w = p * 2 - 1;
    let a = hsl1.a - hsl2.a;

    let w1 = (((w * a == -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
    let w2 = 1 - w1;

    let r = color1.r * w1 + color2.r * w2,
        g = color1.g * w1 + color2.g * w2,
        b = color1.b * w1 + color2.b * w2;
    let alpha = color1.alpha * p + color2.alpha * (1 - p);
    return {
        r: Math.ceil(r),
        g: Math.ceil(g),
        b: Math.ceil(b),
        alpha
    };
}

export = Magix.View.extend({
    /**
     * 获取时间变量，转成ms
     */
    '@{get.css.time.var}'(key) {
        let root = window.getComputedStyle(document.documentElement);
        let v = document.body.style.getPropertyValue(key) || root.getPropertyValue(key);
        if (!v) {
            return 0;
        } else {
            v = v.trim();
            let milliseconds = 0;
            if (v.indexOf('ms') < 0) {
                // 秒
                milliseconds = Math.abs(+(v.replace('s', '')) * 1000);
            } else {
                // 毫秒
                milliseconds = +(v.replace('ms', ''));
            }
            return milliseconds;
        }
    },
    '@{mx.output.show}'(node) {
        return new Promise(resolve => {
            let duration = this['@{get.css.time.var}']('--duration');
            node.animate({
                opacity: 0,
                transform: 'translate(0, calc(0px - var(--mx-trigger-output-gap, 10px)))',
            }, duration, resolve);
        })
    },
    '@{mx.output.hide}'(node) {
        return new Promise(resolve => {
            let duration = this['@{get.css.time.var}']('--duration');
            node.animate({
                opacity: 0,
                transform: 'translate(0, calc(0px - var(--mx-trigger-output-gap, 10px)))',
            }, duration, resolve);
        })
    },
    /**
     * 1000 转化成 1,000.00
     * 简易数字格式化
     */
    '@{num.format}'(number, precision, thousand, decimal) {
        number = +number || 0;
        precision = +precision || 2;
        thousand = thousand || ',';
        decimal = decimal || '.';

        let negative = number < 0 ? '-' : '';

        let power = Math.pow(10, precision);
        let fixFn = n => {
            return (Math.round(n * power) / power).toFixed(precision);
        }
        let base = Math.abs(parseInt(fixFn(number), 10)) + '';
        let mod = base.length > 3 ? base.length % 3 : 0;

        return negative + (mod ? base.substr(0, mod) + thousand : '') + base.substr(mod).replace(/(\d{3})(?=\d)/g, '$1' + thousand) + (precision ? decimal + fixFn(Math.abs(number)).split('.')[1] : '');
    },
    '@{date.format}'(date, fmt) {
        fmt = fmt || 'YYYY-MM-DD';

        let o = {
            'M+': date.getMonth() + 1, //月份 
            'd+|D+': date.getDate(), //日 
            'h+': date.getHours(), //小时 
            'm+': date.getMinutes(), //分 
            's+': date.getSeconds(), //秒 
            'q+': Math.floor((date.getMonth() + 3) / 3), //季度 
            'S': date.getMilliseconds(), //毫秒 
        };
        if (/(y+|Y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (let k in o) {
            if (new RegExp('(' + k + ')').test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
            }
        }
        return fmt;
    },
    '@{date.day}'(day) {
        let oneDaySeconds = 1000 * 60 * 60 * 24;
        day = +day || 0;
        let t = new Date().getTime();
        return new Date(t + day * oneDaySeconds);
    },
    /**
     * 获取css变量值
     * 优先级：style设置 > root配置，在线预览配置 #!/all/edit/index
     */
    '@{get.css.var}'(key, def) {
        let root = window.getComputedStyle(document.documentElement);
        let v = document.body.style.getPropertyValue(key) || root.getPropertyValue(key);
        if (!v) {
            return def || '';
        } else {
            return v.trim();
        }
    },
    '@{color.to.rgb}': ToRGB,
    '@{color.to.hex}': ToHex,
    '@{color.to.hsl}': ToHSL,
    '@{color.shade}'(color, p) {
        let rgba = ToRGB(color);
        let result = ColorMix({
            r: 0,
            g: 0,
            b: 0,
            alpha: 1
        }, rgba, p);
        return result;
    },
    /**
     * 是否为移动端
     * 768 ipad
     * 375 手机
     */
    '@{get.dev.info}'() {
        let width = window.innerWidth;
        if (document.documentElement && document.documentElement.clientWidth) {
            width = document.documentElement.clientWidth;
        } else if (document.body && document.body.clientWidth) {
            width = document.body.clientWidth;
        } else if (screen.width) {
            width = screen.width;
        }
        return {
            pc: width > 768,
            pad: (width > 375 && width <= 768),
            phone: (width <= 375),
            width
        };
    }
}).merge({
    ctor(params) {
        try {
            // @释剑 http://gitlab.alibaba-inc.com/mm/unidesk/blob/deal/20210818.200403.421/src/unidesk/gallery/mx-util/view.ts#L297
            let p = Magix.parseUrl(this.owner.path);
            let getCamelClase = (str) => {
                return str.replace(/-([a-z])/g, (keb, item) => {
                    return item.toUpperCase()
                })
            }
            if (p.path.indexOf('mx-') > -1) {
                if (params._props) {
                    Object.keys(params._props).forEach(key => {
                        params[getCamelClase(key)] = params._props[key];
                    });
                    delete params._props;
                }
            }
        } catch (error) {

        }

        let el = document.getElementById(this.id);
        let attrs = el ? el.attributes : {};
        let spm = (attrs['data-spm-click'] || {})['value'] || '';
        this.updater.set({
            viewId: this.id,
            spm
        });
    }
});