//#gallery-config
module.exports = {
    'mx-dropdown.item'(tag) {
        return `<i ${tag.attrs} class="none">${tag.content}</i>`;
    }
}