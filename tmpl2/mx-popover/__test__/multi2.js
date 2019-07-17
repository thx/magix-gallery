let Magix = require('magix');
let Dialog = require('@../index');

module.exports = Magix.View.extend({
    tmpl: '@multi2.html',
    mixins: [Dialog],
    init(e) {
        this.viewOptions = e;
    },
    render() {
        this.updater.digest({
            viewId: this.id,
            custom: {
                list: [{
                    name: '消耗',
                    key: 'charge',
                    type: 'double'
                }, {
                    name: '展现量',
                    key: 'adPv',
                    type: 'integer'
                }, {
                    name: '点击量',
                    key: 'click',
                    type: 'integer'
                }, {
                    name: '点击率',
                    key: 'ctr',
                    type: 'percent'
                }]
            }
        });
    },
    'cancel<click>'(event) {
        event.preventDefault();
        let viewOptions = this.viewOptions;
        if (viewOptions.dialog) {
            viewOptions.dialog.close();
        }
    }
});
