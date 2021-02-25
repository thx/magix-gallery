//#gallery-config
module.exports = {
    'mx-stickytable'(tag) {
        let { content, attrsKV } = tag;
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
    }
}
