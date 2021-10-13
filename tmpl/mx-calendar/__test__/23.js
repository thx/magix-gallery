let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@23.html',
    render() {
        let today = this['@{date.format}'](this['@{date.day}']()),
            start1 = this['@{date.format}'](this['@{date.day}']()),
            end1 = this['@{date.format}'](this['@{date.day}'](5)),
            end2 = this['@{date.format}'](this['@{date.day}'](10));
        let shortkeys = [{
            key: 'test1',
            text: '自定义1',
            tip: '自定义说明1',
            start: start1,
            end: end1
        }, {
            key: 'test2',
            text: '自定义2',
            tip: '自定义说明2',
            start: start1,
            end: end2
        }]
        this.updater.digest({
            start1,
            end1,
            end2,
            today,
            start: start1,
            end: end1,
            shortkeys,
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