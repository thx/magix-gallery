module.exports = {
    process: (attrs, style, ignores, className) => {
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
    }
}