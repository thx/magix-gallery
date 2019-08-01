let Magix = require('magix');
let Base = require('examples/example');
let Dialog = require('@../../mx-dialog/index');
let Moment = require('moment');
let $ = require('$');
let Formater = 'YYYY-MM-DD';

module.exports = Base.extend({
    tmpl: '@12.html',
    mixins: [Dialog],
    render() {
        this.updater.digest({
            inlay:{
                title: '自定义标题',
                dates: {
                    startStr: Moment().format(Formater),
                    endStr: Moment().add(2, 'days').format(Formater)
                },
                vsEnable: true,
                vs: true,
                quickDates: ['passed5', 'passed10']
            }
        });
    },
    'show<click>'(event){
        let that = this;
        let node = $(event.target);

        let offset = node.offset();
        let top = offset.top + node.outerHeight() - $(window).scrollTop() + 10,
            left = offset.left;

        let inlay = that.updater.get('inlay');
        that.mxDialog('@./pannel', {
            inlay: inlay,
            submit: (newInlay) =>{
                that.updater.digest({
                    inlay: newInlay
                })
            }
        }, {
            width: 320,
            top,
            left,
            mask: false,
            closable: false
        });
    }
});