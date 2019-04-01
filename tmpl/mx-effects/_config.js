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
        attrStr += ' class="' + className + '"';
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
    'mx-effects.icon'(i) {
        let { content, attrsKV } = i;

        // 如果用户自定义了色值以自定义色值为准
        let mode = attrsKV.mode || 'solid',
            type = attrsKV.type || 'common';
        let classNames = [];
        if (['solid', 'hollow'].indexOf(mode) > -1) {
            classNames.push(`mx-icon-${mode}`);
        }
        if (['common', 'error', 'warn', 'highlight'].indexOf(type) > -1) {
            classNames.push(`mx-icon-${type}`);
        }

        // 自定义颜色
        let styles = [],
            color = attrsKV.color;
        if (color) {
            switch (mode) {
                case 'solid':
                    styles.push(
                        'background-color:' + color
                    )
                    break;
                case 'hollow':
                    styles.push(
                        'color:' + color,
                        'border: 1px solid ' + color
                    )
                    break;
            }
        }
        styles = styles.join(';');
        classNames = classNames.join(' ');
        let text = attrsKV.content || content || 'icon',
            tip = attrsKV.tip;
        if (!tip) {
            return `<span ${ProcessAttr(attrsKV, styles, {
                mode: 1,
                type: 1,
                content: 1,
                tip: 1,
                color: 1
            }, classNames)} >
                <span class="text">${text}</span>
            </span>`;
        } else {
            return `<mx-popover ${ProcessAttr(attrsKV, styles, {
                mode: 1,
                type: 1,
                content: 1,
                tip: 1,
                color: 1
            }, classNames)} 
                content="${tip}">
                <span class="text">${text}</span>
            </mx-popover>`;
        }
    },
    'mx-effects.star'(i) {
        let { content, attrsKV } = i;

        // num: 0, 0.5, 1 ... 4, 4.5, 5
        let color = attrsKV.color || '';
        let num = +attrsKV.num || 0;
        let icon = attrsKV.icon || '<i class="mc-iconfont">&#xe60f;</i>';
        let s = num + '';
        let l = s.indexOf('.');
        if (l >= 0) {
            l = s.slice(l + 1).length;
        } else {
            l = 0;
        }
        // 取半
        if (l > 0) {
            num = Math.floor(num) + 0.5;
        }
        if (num < 0) {
            num = 0;
        }
        if (num > 5) {
            num = 5;
        }
        let width = num / 5 * 100 + '%';

        return `<div ${ProcessAttr(attrsKV, '', {
            color: 1,
            num: 1,
            icon: 1
        }, 'mx-star')}>
            <div class="mx-star-bg">
                <% for(let i=0; i<5; i++) { %>
                    <span class="mx-star-item">${icon}</span>
                <% } %>
            </div>
            <div class="mx-star-on" style="width: ${width};">
                <div class="mx-star-inner ${!color ? 'mx-star-brand' : ''}">
                    <% for(let i=0; i<5; i++) { %>
                        <span class="mx-star-item" style="${!color ? '' : ('color:' + color)}">${icon}</span>
                    <% } %>
                </div>
            </div>
        </div>`;
    },
    'mx-effects.notice'(i) {
        let { content, attrsKV } = i;

        // 如果用户自定义了色值以自定义色值为准
        let color = attrsKV.color,
            border = (attrsKV.border + '' === 'true'),
            type = attrsKV.type || 'common';

        let styles = [], classNames = ['mx-notice'];
        if (border) {
            classNames.push('mx-notice-border');
        }
        if (!color) {
            if (['common', 'error', 'warn', 'highlight'].indexOf(type) > -1) {
                classNames.push(`mx-notice-${type}`);
            }
        }else{
            let result = ToRgb(color);
            let rgba = `rgba(${result.r}, ${result.g}, ${result.b}, 0.2)`;
            styles.push(
                'color:' + color,
                'background-color:' + rgba
            )
            if (border) {
                styles.push(`border-color:${color}`);
            }
        }

        // 默认左对齐
        let textAlign = attrsKV['text-align'] || 'left';
        styles.push(`text-align: ${textAlign}`);

        let notice = attrsKV.content || content || '提示内容';
        let icon = (attrsKV.icon + '' === 'false') ? '' : '<i class="mc-iconfont mx-notice-icon">&#xe6ad;</i>';

        return `<div ${ProcessAttr(attrsKV, styles.join(';'), {
            color: 1,
            border: 1,
            type: 1,
            content: 1,
            icon: 1
        }, classNames.join(' '))}>
            <div class="mx-notice-inner ${!icon ? '' : 'mx-notice-inner-with'}">
                ${icon}${notice}
            </div>
        </div>`;
    }
};
