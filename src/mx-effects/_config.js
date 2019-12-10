//#gallery-config
let ToRgb = (color) => {
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
        b: parseInt(result[3], 16)
    } : null;
}

let ProcessAttr = (attrs, style, ignores, className) => {
    let attrStr = '',
        classAdded = false,
        styleAdded = false;
    for (let p in attrs) {
        if (ignores[p] !== 1) {
            let v = attrs[p];
            if ((p == 'class') && className) {
                attrStr += ` class="${className} ${v}"`;
                classAdded = true;
            } else if ((p == 'style') && style) {
                attrStr += ` style="${style};${v}"`;
                styleAdded = true;
            } else {
                if (v === true) v = '';
                else v = '="' + v + '"';
                attrStr += ' ' + p + v;
            }
        }
    }
    if (!classAdded && className) {
        attrStr += ` class="${className}"`;
    }
    if (!styleAdded && style) {
        attrStr += ` style="${style}"`;
    }
    return attrStr;
};
module.exports = {
    'mx-effects.empty'(i) {
        let { content, attrsKV } = i;
        let tip = attrsKV.content || content || '暂无内容';
        let white = attrsKV.bg == 'white';

        return `<div ${ProcessAttr(attrsKV, '', {}, (white ? 'empty-white' : 'empty-area'))}>
            <div class="empty-inner">
                <div><i class="mc-iconfont no-data">&#xe685;</i></div>
                <div>${tip}</div>
            </div>
        </div>`;
    },
    'mx-effects.icon': {
        tag: 'span'
    }
};
