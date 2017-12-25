/*
ver:1.3.10
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Form = require('../../mx-form/index');
module.exports = Magix.View.extend({
    tmpl: '@count.html',
    mixins: [Form],
    render() {
        let me = this;
        me.updater.digest({
            toNumber: 20,
            content: '你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。',
            dance: 'd1',
            duration: '60'
        });
    },
    'changeNumber<click>'(e) {
        let me = this;
        let to = me.updater.get('toNumber');
        let diff = 300;
        if (!e.params.i) {
            diff = -diff;
        }
        me.updater.digest({
            toNumber: to + diff
        });
    }
});