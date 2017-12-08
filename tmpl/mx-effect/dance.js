/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@taobao.com
 */
let Magix = require('magix');
let $ = require('$');
let Runner = require('../mx-runner/index');
Magix.applyStyle('@dance.less');
let Names = 'names@dance.less[d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11]';
module.exports = Magix.View.extend({
    init(extra) {
        let me = this;
        let node = $('#' + me.id);
        me['@{owner.node}'] = node;
        me.assign(extra);
    },
    assign(ops) {
        let me = this;
        me['@{value}'] = ops.value;
        me['@{dance.effect}'] = ops.dance || 'd1';
        me['@{duration}'] = +ops.duration || 60;
        me['@{stop}']();
        return true;
    },
    '@{stop}'() {
        let me = this;
        me['@{current.span.index}'] = 0;
        Runner['@{task.remove}'](me['@{fn.run}']);
    },
    '@{start}'() {
        let me = this;
        let spans = me['@{ui.spans}'];
        Runner['@{task.add}'](me['@{duration}'], me['@{fn.run}'] = () => {
            if (me['@{current.span.index}'] < spans.length) {
                let span = spans.eq(me['@{current.span.index}']);
                span.addClass(Names[me['@{dance.effect}']]);
                me['@{current.span.index}']++;
            } else {
                me['@{stop}']();
            }
        });
    },
    render() {
        let me = this;
        let words = me['@{value}'].split('');
        let html = `<span class="@dance.less:c">${words.join('</span><span class="@dance.less:c">')}</span>`;
        me['@{owner.node}'].html(html);
        me['@{ui.spans}'] = me['@{owner.node}'].find('span');
        me['@{start}']();
    }
});