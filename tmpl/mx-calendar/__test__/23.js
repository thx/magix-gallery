let Magix = require('magix');
let Base = require('__test__/example');
let Moment = require('moment');
let $ = require('$');
let Formater = 'YYYY-MM-DD';

module.exports = Base.extend({
    tmpl: '@23.html',
    render() {
        let start = Moment().format(Formater),
            end = Moment().add(5, 'days').format(Formater);
        let shortkeys = [{
            key: 'test1',
            text: '自定义1',
            tip: '自定义说明1',
            start,
            end
        }, {
            key: 'test2',
            text: '自定义2',
            tip: '自定义说明2',
            start: start,
            end: Moment().add(10, 'days').format(Formater)
        }]
        this.updater.digest({
            start,
            end,
            shortkeys,
            today: Moment().format(Formater)
        });
    },
    'to<click>'(e) {
        let key = e.params.key;
        Magix.Router.to({
            highlightId: key
        })
        this.to(key);
    },
    to(key) {
        let node = $('#' + key);
        let cName = '@scoped.style:example',
            hlName = '@scoped.style:example-highlight';
        let examples = $('.' + cName);
        examples.removeClass(hlName);
        if (node.hasClass(cName)) {
            node.addClass(hlName);
        } else {
            node.find('.' + cName).addClass(hlName);
        }
        $(window).scrollTop(node.offset().top);
    },
});