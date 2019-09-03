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
        attrStr += ` class="${className}"`;
    }
    if (!styleAdded && style) {
        attrStr += ` style="${style}"`;
    }
    return attrStr;
};
module.exports = {
    'mx-btn'(i) {
        let { content, attrsKV } = i;
        let cont = attrsKV.content || content || '';
        // 自定义按钮颜色
        let color = attrsKV['color'] || '';
        let colorHover = attrsKV['color-hover'] || color;
        let colorText = attrsKV['color-text'] || '#ffffff';
        let colorHoverText = attrsKV['color-hover-text'] || colorText;

        // 打标
        let tagContent = attrsKV['tag-content'] || '';
        let tagColor = attrsKV['tag-color'] || '';

        let classes = ['mx-btn'],
            styles = [];
        if (attrsKV.small + '' === 'true') {
            classes.push('btn-small');
        }

        let disabled = (attrsKV.disabled + '' === 'true');
        if (disabled) {
            classes.push('btn-disabled');
        } else {
            // 优先级，自定义颜色 > 预置颜色
            if (color) {
                styles.push(`--mx-btn-custom-color: ${color}`);
                styles.push(`--mx-btn-custom-color-text: ${colorText}`);
                styles.push(`--mx-btn-custom-color-hover: ${colorHover}`);
                styles.push(`--mx-btn-custom-color-hover-text: ${colorHoverText}`);
                classes.push('mx-btn-custom');
            } else {
                if (attrsKV.brand + '' === 'true') {
                    classes.push('btn-brand');
                } else if (attrsKV.white + '' === 'true') {
                    classes.push('btn-white');
                }
            }
        }

        let loading = attrsKV.loading || '';
        let colorLoading = attrsKV['color-loading'] || '';
        if(colorLoading){
            styles.push(`--mx-btn-custom-color-loading: ${colorLoading}`);
            classes.push('mx-btn-custom-loading');
        }

        return `<button type="button" ${ProcessAttr(attrsKV, styles.join(';'), {
            'loading': 1,
            'color': 1,
            'color-hover': 1,
            'color-text': 1,
            'color-hover-text': 1,
            'tag-content': 1,
            'tag-color': 1,
            'content': 1,
            'brand': 1,
            'white': 1,
            'small': 1,
            'disabled': disabled ? 0 : 1
        }, classes.join(' '))}>${loading ? ('<span class="mx-btn-loading-' + loading + '"></span>') : ''}${cont}${!tagContent ? '' : ('<span class="mx-tag btn-tag" style="' + (!tagColor ? '' : ('background-color: ' + tagColor + ';')) + '"><span class="mx-tag-arrow btn-tag-arrow" style="' + (!tagColor ? '' : ('border-color: ' + tagColor + ' transparent transparent ' + tagColor + ';')) + '"></span><span class="mx-tag-name">' + tagContent + '</span></span>')}</button>`
    }
};
