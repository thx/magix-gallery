let Magix = require('magix');
let Dialog = require('@../index');

module.exports = Magix.View.extend({
    tmpl: '@multi.html',
    mixins: [Dialog],
    init(e) {
        this.viewOptions = e;
    },
    render() {
        let number = +this.viewOptions.number;
        this.updater.digest({
            number: number,
            width: 800 - (number * 100),
            height: 100 + (number * 40)
        });
    },
    'cancel<click>'(event) {
        event.preventDefault();
        let viewOptions = this.viewOptions;
        if (viewOptions.dialog) {
            viewOptions.dialog.close();
        }
    },
    'modal<click>'(e) {
        let width = +this.updater.get('width');
        let height = +this.updater.get('height');
        let number = +this.updater.get('number');
        this.mxDialog('@./multi', {
            number: number + 1
        }, {
            width: width - 100,
            height: height + 170,
            modal: true
        });
    }
});
