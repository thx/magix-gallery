/*
ver:2.0.1
*/
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@scroll.html',
    render() {
        this.updater.digest({
            value: 100
        });
        setInterval(this.wrapAsync(() => {
            let v = (Math.random() * 20) + this.updater.get('value');
            this.updater.digest({
                value: v
            });
        }), 1000);
    },
    'update<click>'() {
        this.updater.digest({
            value: this.updater.get('value') - 20
        });
    }
});