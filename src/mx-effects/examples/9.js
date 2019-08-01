let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@9.html',
    render() {
        this.updater.digest({
            num1: 20,
            num2: 40.3,
            num3: 60.89
        });
    },
    'add<click>'(e){
        let data = this.updater.get();
        this.updater.digest({
            num1: data.num1 + 10,
            num2: data.num2 + 10,
            num3: data.num3 + 10
        });
    }
});