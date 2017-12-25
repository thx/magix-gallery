/*
ver:1.3.10
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Speech = require('../index');
let Form = require('@mx-form/index');
let Examples = {
    'zh-cn': '小时候，乡愁是一枚小小的邮票，我在这头，母亲在那头。长大后，乡愁是一张窄窄的船票，我在这头，新娘在那头。后来啊，乡愁是一方矮矮的坟墓，我在外头，母亲在里头。而现在，乡愁是一湾浅浅的海峡，我在这头，大陆在那头。',
    'en': 'When I was young , my homesickness was a small stamp , I was here , my mother was there . After growing up , my homesickness was a narrow ticket , I was here , my bride was there . Later , my homesickness was a little tomb , I was outside , my mother was inside . And now , my homesickness is a shallow strait , I am here , the mainland is there . '
};
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    mixins: [Form],
    init() {
        this.capture('speech', new Speech({
            rate: 0.5
        }));
    },
    render() {
        let me = this;
        me.updater.digest({
            examples: { ...Examples },
            lang: 'zh-cn'
        });
    },
    'speak<click>'() {
        let speech = this.capture('speech');
        let data = this.updater.get();
        let lang = data.lang;
        speech.assign({
            lang: lang
        });
        speech.speak(data.examples[lang]);
    }
});