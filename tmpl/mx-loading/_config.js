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
    'mx-loading'(i) {
        let { attrsKV } = i;
        return `<div ${ProcessAttr(attrsKV, `display: table; text-align: center; width: ${(attrsKV.width || '100%')}; height: ${(attrsKV.height ? attrsKV.height : (+((attrsKV.padding || '100px').replace('px', '')) * 2 + 'px'))}; margin: auto;`, {
            width: 1,
            height: 1,
            padding: 1
        }, '')}>
            <div style="display: table-cell; vertical-align: middle;">
                <picture style="width: 36px; height: 36px;">
                    <source style="width: 36px; height: 36px;" type="image/webp" srcset="https://img.alicdn.com/imgextra/i2/O1CN01Nq8HLJ29BKfVBvDcQ_!!6000000008029-49-tps-72-72.webp">
                    <source style="width: 36px; height: 36px;" type="image/png" srcset="https://img.alicdn.com/imgextra/i4/O1CN01omxab91cLW9nsUlrL_!!6000000003584-54-tps-72-72.apng">
                    <img style="width: 36px; height: 36px;" src="https://img.alicdn.com/imgextra/i2/O1CN01KBG9Nq1VYc9ykOAxe_!!6000000002665-2-tps-200-200.png" />
                </picture>
            </div>
        </div>`;
    },

    'mx-loading.brand'(i) {
        let { attrsKV } = i;
        // 默认屏幕高度
        return `<div ${ProcessAttr(attrsKV, `display: table; text-align: center; width: ${(attrsKV.width || '100%')}; height: ${(attrsKV.height || 'calc(100vh)')}; margin: auto;`, {
            width: 1,
            height: 1
        }, '')}>
            <div style="display: table-cell; vertical-align: middle;">
                <picture style="width: 48px; height: 48px;">
                    <source style="width: 48px; height: 48px;" type="image/webp" srcset="https://img.alicdn.com/imgextra/i4/O1CN01UlNpXg1pByutEZSoc_!!6000000005323-49-tps-96-96.webp">
                    <source style="width: 48px; height: 48px;" type="image/png" srcset="https://img.alicdn.com/imgextra/i2/O1CN01YkLhgX1TS5IDT9kJJ_!!6000000002380-54-tps-96-96.apng">
                    <img style="width: 48px; height: 48px;" src="https://img.alicdn.com/imgextra/i2/O1CN01DpsTcB1Kdgmtb59n5_!!6000000001187-1-tps-48-48.gif" />
                </picture>
            </div>
        </div>`;
    },

    'mx-loading.anim'(i) {
        let { attrsKV } = i;

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
                    <div class="mx-loading-double-circle ${classNames}" style="${styles}"></div>
                    <div class="mx-loading-double-circle mx-loading-double-circle2 ${classNames}" style="${styles}"></div>
                `;
                break;

            case 'rectangle':
                tmpl = `
                    <div class="mx-loading-rects">
                        <div class="mx-loading-rect ${classNames}" style="${styles}"></div>
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
                    <div class="mx-loading-three-bounce ${classNames}" style="${styles}"></div>
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