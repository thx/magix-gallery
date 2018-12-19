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

let ProcessAttr = (attrs, style, ignores) => {
    let attrStr = '',
        styleAdded = false;
    for (let p in attrs) {
        if (ignores[p] !== 1) {
            let v = attrs[p];
            if (p == 'style') {
                attrStr += `style="${style}${v}"`;
            } else {
                if (v === true) v = '';
                else v = '="' + v + '"';
                attrStr += ' ' + p + v;
            }
        }
    }
    if (!styleAdded) {
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

        styles = styles.join(';') + ';';
        return `<div ${ProcessAttr(attrsKV, styles, {
            width: 1,
            height: 1,
            direction: 1,
            justify: 1,
            align: 1,
            gutter: 1
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
            let flex = attrsKV.flex || 1;
            styles.push(`flex: ${flex}`);
        }

        if (attrsKV.height) {
            styles.push(`height: ${attrsKV.height}`);
        }
        //检查父标签是mx-grid.row且有gutter属性
        if (!i.lastElement &&
            pNode.tag == 'mx-grid.row' &&
            pNode.attrsKV.gutter) {
            let dir = `right`;
            if (pNode.attrsKV.direction == 'col') {
                dir = 'bottom';
            }
            styles.push(`margin-${dir}:${pNode.attrsKV.gutter}`);
        }

        styles = styles.join(';') + ';';
        return `<div ${ProcessAttr(attrsKV, styles, {
            width: 1,
            height: 1,
        })}>${content}</div>`;
    },
    'mx-grid'(i) {
        let styles = 'background: #fff; border-radius: 4px; box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);';
        return `<div ${ProcessAttr(i.attrsKV, styles, {})}>
                    ${i.content}
                </div>`;
    },
    'mx-grid.title'(i) {
        let { content, attrsKV } = i;

        let styles = [
            'padding: 10px 20px;',
            'line-height: 32px;'
        ];
        if ((attrsKV.border + '') !== 'none') {
            styles.push('border-bottom: 1px solid #e6e6e6;');
        }

        let tmpl = `<div ${ProcessAttr(attrsKV, styles.join(''), {
            icon: 1,
            tip: 1,
            border: 1
        })}>`;

        if (attrsKV.icon) {
            tmpl += `<span style="margin-right: 2px; color: #ccc;">${attrsKV.icon}</span>`;
        }

        tmpl += `<span style="font-size: 16px;">${attrsKV.content}</span>`;

        if (attrsKV.tip) {
            tmpl += `<span style="margin-left: 20px; color: #999;">${attrsKV.tip}</span>`;
        }
        tmpl += '</div>';
        return tmpl;
    },
    'mx-grid.body'(i) {
        let { content, attrsKV } = i;
        return `<div ${ProcessAttr(attrsKV, 'padding:20px;', {})}>${content}</div>`;
    }
};
