//#gallery-config
let DirectionMap = {
    'row': 'row',
    'col': 'column'
}
let JustifyMap = {
    'left': 'flex-start',
    'right': 'flex-end',
    'center': 'center',
    'space-between': 'space-between',
    'space-around': 'space-around'
}
let AlignMap = {
    'top': 'flex-start',
    'bottom': 'flex-end',
    'center': 'center',
    'stretch': 'stretch'
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
    'mx-grid.row'(i) {
        let { content, attrsKV } = i;

        let styles = [
            'display: flex'
        ]
        if (attrsKV.width) {
            styles.push(`width: ${attrsKV.width}`);
        }
        if (attrsKV.height) {
            styles.push(`height: ${attrsKV.height}`);
        }

        let direction = DirectionMap[attrsKV.direction || 'row'] || 'row';
        styles.push(`flex-direction: ${direction}`);

        let justify = JustifyMap[attrsKV.justify || 'left'] || 'flex-start';
        styles.push(`justify-content: ${justify}`);

        let align = AlignMap[attrsKV.align || 'stretch'] || 'stretch';
        styles.push(`align-items: ${align}`);

        // 外间距 margin
        let gutter = attrsKV.gutter || 0;
        styles.push(`--mx-grid-gutter: ${gutter}`);
        if (direction == 'row') {
            styles.push(`margin-left: calc(0px - var(--mx-grid-gutter) / 2)`);
            styles.push(`margin-right: calc(0px - var(--mx-grid-gutter) / 2)`);
        } else {
            styles.push(`margin-top: calc(0px - var(--mx-grid-gutter) / 2)`);
            styles.push(`margin-bottom: calc(0px - var(--mx-grid-gutter) / 2)`);
        }

        return `<div ${ProcessAttr(attrsKV, styles.join(';'), {
            width: 1,
            height: 1,
            direction: 1,
            justify: 1,
            align: 1,
            gutter: 1,
            content: 1,
        })}>${content}</div>`;
    },
    'mx-grid.col'(i) {
        let { content, attrsKV, nodesMap, pId } = i;
        let styles = [];
        let pNode = nodesMap[pId];

        // width > flex
        if (attrsKV.width) {
            styles.push(`flex: 0 0 ${attrsKV.width}`);
        } else {
            if (pNode.tag == 'mx-grid.row' && pNode.attrsKV.direction == 'col') {
                // 垂直方向
                if (attrsKV.height) {
                    styles.push(`height: ${attrsKV.height}`);
                } else {
                    styles.push(
                        `flex: ${attrsKV.flex || 1}`,
                        'min-height: 0' // 防止内容溢出影响
                    );
                }
            } else {
                // 水平方向
                styles.push(
                    `flex: ${attrsKV.flex || 1}`,
                    'min-width: 0' // 防止内容溢出影响
                );
                if (attrsKV.height) {
                    styles.push(`height: ${attrsKV.height}`);
                }
            }
        }

        if (pNode.tag == 'mx-grid.row') {
            if (pNode.attrsKV.gutter) {
                if (pNode.attrsKV.direction == 'col') {
                    styles.push(`margin-top: calc(var(--mx-grid-gutter) / 2)`);
                    styles.push(`margin-bottom: calc(var(--mx-grid-gutter) / 2)`);
                } else {
                    styles.push(`margin-left: calc(var(--mx-grid-gutter) / 2)`);
                    styles.push(`margin-right: calc(var(--mx-grid-gutter) / 2)`);
                }
            }
        }

        return `<div ${ProcessAttr(attrsKV, styles.join(';'), {
            width: 1,
            height: 1,
            content: 1
        })}>${content}</div>`;
    },
    'mx-grid.title'(i) {
        let { content, attrsKV } = i;

        let styles = [
            'padding: var(--mx-grid-title-v-gap, 12px) var(--mx-grid-h-gap, 24px)'
        ];
        if (!(attrsKV.border === 'none' || attrsKV.border === 'false')) {
            styles.push('border-bottom: 1px solid var(--mx-grid-title-color-border, var(--color-border))');
        }

        let tmpl = `<div ${ProcessAttr(attrsKV, styles.join(';'), {
            icon: 1, // 标题前icon
            content: 1, // 标题
            tip: 1, // 标题旁提示
            tag: 1, // 打标
            'icon-tip': 1, // 标题旁小问号
            border: 1, // 是否底边线
        }, 'clearfix')}>`;

        // 标题，提示，icon
        tmpl += '<div style="float: left; margin-right: 16px; display: flex; max-width: 100%; height: var(--input-height); align-items: center; justify-content: center; white-space: nowrap; overflow: hidden; ">';
        if (attrsKV.icon) {
            tmpl += `<span style="margin-right: 4px; color: #ccc;">${attrsKV.icon}</span>`;
        }
        tmpl += '<span class="grid-title">' + attrsKV.content + '</span>' + (attrsKV.tag ? `<span class="mx-text-tag" style="margin-left: 4px;">${attrsKV.tag}</span>` : '') + (attrsKV['icon-tip'] ? `<mx-popover class="mc-iconfont mc-tip-iconfont" tag="i" width="220" content="${attrsKV['icon-tip']}">&#xe72f;</mx-popover>` : '');
        if (attrsKV.tip) {
            tmpl += `<span style="margin-left: 12px; font-size: 12px; color: var(--mx-grid-color, #999);">${attrsKV.tip}</span>`;
        }
        tmpl += '</div>';

        // 筛选项
        if (content) {
            tmpl += `${content}`;
        }

        tmpl += '</div>';
        return (attrsKV.sticky + '' === 'true') ? `<div mx-grid-sticky="outer"><div mx-grid-sticky="inner">${tmpl}</div></div>` : tmpl;
    },
    'mx-grid.body'(i) {
        let { content, attrsKV } = i;
        let tmpl = `<div ${ProcessAttr(attrsKV, 'padding: var(--mx-grid-body-v-top, 16px) var(--mx-grid-h-gap, 24px) var(--mx-grid-body-v-bottom, 16px);', {
            content: 1
        }, 'clearfix')}>${content}</div>`;

        return (attrsKV.sticky + '' === 'true') ? `<div mx-grid-sticky="outer"><div mx-grid-sticky="inner">${tmpl}</div></div>` : tmpl;
    },
    'mx-grid.footer'(i) {
        let { content, attrsKV } = i;
        return `<div ${ProcessAttr(attrsKV, 'display: flex; align-items: center; height: 50px; padding: 0 var(--mx-grid-h-gap, 24px); border-top: 1px solid var(--color-border); color: #999;', {
            content: 1,
        }, '')}>${attrsKV.content || content}</div>`;
    },
    'mx-grid.link'(i) {
        let { content, attrsKV } = i;
        return `<a ${ProcessAttr(attrsKV, '', {
            content: 1,
            icon: 1,
        }, 'grid-title-link')}>${content}${(attrsKV.icon + '' !== 'false') ? '<i class="mc-iconfont" style="position: relative; top: -1px; font-size: 14px; font-weight: bold;">&#xe602;</i>' : ''}</a>`;
    },
    'mx-grid.bfilter'(i) {
        let { content, attrsKV } = i;
        return `<div ${ProcessAttr(attrsKV, 'position: absolute; top: calc(0px - var(--mx-grid-title-v-gap, 12px) - var(--input-height)); right: var(--mx-grid-h-gap, 24px);', {}, '')}>${content}</div>`;
    }
};
