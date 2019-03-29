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
    'mx-loading'(i) {
        let { content, attrsKV } = i;
        let padding = attrsKV.padding || '150px';

        return `<div ${ProcessAttr(attrsKV, `padding: ${padding} 0;`, {
            padding: 1
        }, 'loading')}>
            <span class="loading-anim"></span>
        </div>`;
    },

    'mx-loading.anim'(i) {
        let { content, attrsKV } = i;

        let classNames = [], styles = [];
        if (!attrsKV.color) {
            // 默认色彩模式：灰色，品牌色
            let type = attrsKV.type || 'grey';
            classNames.push(`mx-loading-bg-${type}`);
        } else {
            // 自定义颜色
            styles.push('background-color:' + attrsKV.color)
        }

        let mode = attrsKV.mode || 'circle-spinner';
        let size = attrsKV.size || 60;

        let tmpl = '';
        switch (mode) {
            case 'square':
                tmpl = `
                    <div class="mx-loading-square ${classNames}" style="${styles}"></div>
                `;
                break;

            case 'double-circle':
                tmpl = `
                    <div class="mx-loading-double-circle mx-loading-double-circle1 ${classNames}" style="${styles}"></div>
                    <div class="mx-loading-double-circle mx-loading-double-circle2 ${classNames}" style="${styles}"></div>
                `;
                break;

            case 'rectangle':
                tmpl = `
                    <div class="mx-loading-rects">
                        <div class="mx-loading-rect mx-loading-rect1 ${classNames}" style="${styles}"></div>
                        <div class="mx-loading-rect mx-loading-rect2 ${classNames}" style="${styles}"></div>
                        <div class="mx-loading-rect mx-loading-rect3 ${classNames}" style="${styles}"></div>
                        <div class="mx-loading-rect mx-loading-rect4 ${classNames}" style="${styles}"></div>
                        <div class="mx-loading-rect mx-loading-rect5 ${classNames}" style="${styles}"></div>
                    </div>
                `;
                break;

            case 'cubes':
                tmpl = `
                    <div class="mx-loading-cube1 ${classNames}" style="${styles}"></div>
                    <div class="mx-loading-cube2 ${classNames}" style="${styles}"></div>
                `;
                break;

            case 'pulse':
                tmpl = `
                    <div class="mx-loading-pulse ${classNames}" style="${styles}"></div>
                `;
                break;

            case 'dots':
                tmpl = `
                    <div class="mx-loading-dots">
                        <div class="mx-loading-dot1 ${classNames}" style="${styles}"></div>
                        <div class="mx-loading-dot2 ${classNames}" style="${styles}"></div>
                    </div>
                `;
                break;

            case 'three-bounce':
                tmpl = `
                    <div class="mx-loading-three-bounce mx-loading-three-bounce1 ${classNames}" style="${styles}"></div>
                    <div class="mx-loading-three-bounce mx-loading-three-bounce2 ${classNames}" style="${styles}"></div>
                    <div class="mx-loading-three-bounce mx-loading-three-bounce3 ${classNames}" style="${styles}"></div>
                `;
                break;

            case 'circle-spinner':
                tmpl = `
                    <div class="mx-loading-spinner mx-loading-spinner1">
                        <div class="mx-loading-spinner-circle mx-loading-spinner-circle1 ${classNames}" style="${styles}"></div>
                        <div class="mx-loading-spinner-circle mx-loading-spinner-circle2 ${classNames}" style="${styles}"></div>
                        <div class="mx-loading-spinner-circle mx-loading-spinner-circle3 ${classNames}" style="${styles}"></div>
                        <div class="mx-loading-spinner-circle mx-loading-spinner-circle4 ${classNames}" style="${styles}"></div>
                    </div>
                    <div class="mx-loading-spinner mx-loading-spinner2">
                        <div class="mx-loading-spinner-circle mx-loading-spinner-circle1 ${classNames}" style="${styles}"></div>
                        <div class="mx-loading-spinner-circle mx-loading-spinner-circle2 ${classNames}" style="${styles}"></div>
                        <div class="mx-loading-spinner-circle mx-loading-spinner-circle3 ${classNames}" style="${styles}"></div>
                        <div class="mx-loading-spinner-circle mx-loading-spinner-circle4 ${classNames}" style="${styles}"></div>
                    </div>
                    <div class="mx-loading-spinner mx-loading-spinner3">
                        <div class="mx-loading-spinner-circle mx-loading-spinner-circle1 ${classNames}" style="${styles}"></div>
                        <div class="mx-loading-spinner-circle mx-loading-spinner-circle2 ${classNames}" style="${styles}"></div>
                        <div class="mx-loading-spinner-circle mx-loading-spinner-circle3 ${classNames}" style="${styles}"></div>
                        <div class="mx-loading-spinner-circle mx-loading-spinner-circle4 ${classNames}" style="${styles}"></div>
                    </div>
                `;
                break;
        }

        return `<div ${ProcessAttr(attrsKV, '', {
            size: 1,
            mode: 1,
            type: 1,
            color: 1
        }, 'pr')}>
            <div style="position:relative; left: 50%; width: ${size}px; height:${size}px; margin-left: ${0 - size / 2}px;">${tmpl}</div>        
        </div>`;
    }
}