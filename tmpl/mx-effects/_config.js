//#gallery-config

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
                attrStr += ` style="${style}${v}"`;
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
    'mx-effects.icon': {
        tag: 'span'
    },
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
    }
};
