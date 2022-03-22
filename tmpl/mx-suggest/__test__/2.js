let Magix = require('magix');
let Base = require('__test__/example');
module.exports = Base.extend({
    tmpl: '@2.html',
    render() {
        this.updater.digest({
            list: [{
                text: 'test1',
                value: 1
            }, {
                text: 'test12',
                value: 2
            }, {
                text: 'abc1',
                value: 3
            }, {
                text: 'abc2',
                value: 4
            }],
            selectedValue: '',
            selectedText: ''
        });
    },
    'suggest<change>'(e) {
        // e.item [object]
        //      value
        //      text
        // e.selected [item.value]
        let item = e.item;
        this.updater.digest({
            selectedValue: item.value,
            selectedText: item.text
        })
    }
});