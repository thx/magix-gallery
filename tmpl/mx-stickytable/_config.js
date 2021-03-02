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
    'mx-stickytable'(tag) {
        let { content } = tag;
        let ctrl = tag.seprateAttrs('div');

        // 匹配中thead
        // thead和tbody分隔开，用div包裹
        let arr = [];
        content = content.replace(/<thead[^>]*>[\s\S]*?<\/thead>/g, (...results) => {
            arr.push('<div mx-stickytable-wrapper="placeholder"><div mx-stickytable-wrapper="head"><table>' + results[0] + '</table></div></div>');
            return '';
        });
        content = content.replace(/<table/g, '<div mx-stickytable-wrapper="body">$&').replace(/<\/table>/g, '$&</div>');
        return `<${ctrl.tag} mx-view="${tag.mxView}" ${ctrl.attrs} ${ctrl.viewAttrs}>
            ${arr.join('') + content}
            <div mx-stickytable-wrapper="bar"><div mx-stickytable-wrapper="bar-inner"></div></div>
        </${ctrl.tag}>`;
    },
    /**
     * 表头文案包裹
     */
    'mx-stickytable.th-text'(tag) {
        return `<span ${tag.attrs} mx-stickytable-th="text">${tag.content}</span>`;
    },
    /**
     * mx-stickytable-operation="line"
     * 单独的操作行，分栏超出的操作项包裹
     */
    'mx-stickytable.over-opers'(tag) {
        return `<div ${tag.attrs} mx-stickytable-operation="line-over-opers">${tag.content}</div>`;
    },

    /**
     * 展开子行trigger
     */
    'mx-stickytable.sub'(tag) {
        let { content, attrsKV } = tag;
        return `<span  ${ProcessAttr(attrsKV, '', {
            value: 1,
            expand: 1
        }, '')} mx-stickytable-sub="${attrsKV.value}" mx-stickytable-sub-expand="${attrsKV.expand}">${content}</span>`;
    },

    /**
     * 排序指标
     */
    'mx-stickytable.sort'(tag) {
        let { content, attrsKV } = tag;
        return `<span  ${ProcessAttr(attrsKV, '', {
            value: 1,
            order: 1
        }, '')} mx-stickytable-sort="${attrsKV.value}" mx-stickytable-sort-order="${attrsKV.order}" mx-stickytable-sort-order-field="${attrsKV['order-field'] || 'orderField'}" mx-stickytable-sort-order-by="${attrsKV['order-by'] || 'orderBy'}">${content}<i class="mc-iconfont" mx-stickytable-sort-trigger="true"></i></span>`;
    }
}
