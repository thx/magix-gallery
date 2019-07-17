let Magix = require('magix');
let $ = require('$');
let Router = Magix.Router;

module.exports = Magix.View.extend({
    tmpl: '@data.html',
    render() {
        let viewId = this.id;
        this.updater.digest({
            viewId
        });

        let locParams = Router.parse().params;
        if(locParams.to){
            $(window).scrollTop($('#' + viewId + '_step_' + locParams.to).offset().top);
        }
    }
});