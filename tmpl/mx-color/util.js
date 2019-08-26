let ToRGB = (color) => {
    if (!color) {
        return null;
    }

    if(color.indexOf('rgb') > -1){
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
            case g: h = (b - r) / d + 2;               break;
            case b: h = (r - g) / d + 4;               break;
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
module.exports = {
    toRgb: ToRGB,
    toHSL: ToHSL,
    toHex: ToHex,
    mix: ColorMix,
    shade: function(color, p) {
        let rgba = ToRGB(color);
        let result = ColorMix({
            r: 0,
            g: 0,
            b: 0,
            alpha: 1
        }, rgba, p);
        return result;
        // return `rgba(${result.r}, ${result.g}, ${result.b}, ${result.alpha})`;
    },
}