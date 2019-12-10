//#gallery-config
module.exports = {
    'mx-carousel.panel'(tag) {
        return `<div ${tag.attrs} data-carousel="true">${tag.content}</div>`;
    }
}