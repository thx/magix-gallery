//#gallery-config
module.exports = {
    'mx-table'(tag) {
        let content = tag.content;
        let ctrl = tag.seprateAttrs('div');
        content = content.replace(/<table/g, '<div>$&').replace(/<\/table>/g, '$&</div>');
        return `<${ctrl.tag} mx-view="${tag.mxView}" ${ctrl.attrs} ${ctrl.viewAttrs}>${content}</${ctrl.tag}>`;
    },
    'mx-table.excel'(tag) {
        let content = tag.content;
        let ctrl = tag.seprateAttrs('div');
        content = content.replace(/<table/g, '<div>$&').replace(/<\/table>/g, '$&</div>');
        return `<${ctrl.tag} mx-view="${tag.mxView}" ${ctrl.attrs} ${ctrl.viewAttrs}>${content}</${ctrl.tag}>`;
    }
}
