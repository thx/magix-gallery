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
    'mx-btn'(i) {
        let { content, attrsKV } = i;
        let cont = attrsKV.content || content || '按钮';
        let tagContent = attrsKV['tag-content'] || '';
        let tagColor = attrsKV['tag-color'] || '';

        return `<a href="javascript:;" ${ProcessAttr(attrsKV, '', {
            'tag-content': 1
        }, ['mx-btn', ((attrsKV.brand && !attrsKV.color) ? 'btn-brand' : ''), ((attrsKV.white && !attrsKV.color) ? 'btn-white' : ''), (attrsKV.small ? 'btn-small' : ''), (attrsKV.disabled ? 'btn-disabled' : '')].join(' '))}>${cont}${!tagContent ? '' : ('<span class="mx-tag btn-tag" style="' + (!tagColor ? '' : ('background-color: ' + tagColor + ';')) + '"><span class="mx-tag-arrow btn-tag-arrow" style="' + (!tagColor ? '' : ('border-color: ' + tagColor + ' transparent transparent ' + tagColor + ';')) + '"></span><span class="mx-tag-name">' + tagContent + '</span></span>')}</a>`;
    }
};
