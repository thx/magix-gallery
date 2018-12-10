//#gallery-config
module.exports = {
    'mx-effects.icon': {
        tag: 'span'
    },
    'mx-effects.empty'(i) {
        let { content, attrsKV } = i;
        let tip = attrsKV.content || content || '暂无内容';
        let white = attrsKV.bg == 'white';
        return `<div class="${white ? 'empty-white' : 'empty-area'}">
                    <i class="mc-iconfont no-data">&#xe685;</i>
                    <p class="mt10">${tip}</p>
                </div>`;
    }
};
