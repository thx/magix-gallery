/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
Magix.applyStyle('@index.less');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let me = this;
        me.updater.digest();
    },
    'stop<enterzone>'(e) {
        e.changePointer(false);
    },
    'ok<leavezone>'(e) {
        e.changePointer(true);
    },
    'del<dragfinish>'(e) {
        if (e.moved && e.outZone) {//moved and outside zone
            $(e.dragNode).slideUp();
            setTimeout(() => {
                e.dragZone.removeChild(e.dragNode);
            }, 500);
        }
    },
    'start<dragstart>'(e) {
        e.originalEvent.dataTransfer.effectAllowed = 'none';
        e.originalEvent.dataTransfer.setDragImage(e.target, -10, -18);
    },
    'drop<drop>'(e) {
        console.log(e);
        $(e.eventTarget).css({
            borderColor: '#ccc'
        });
    },
    'enter<dragenter>'(e) {
        $(e.eventTarget).css({
            borderColor: 'red'
        });
    },
    'leave<dragleave>'(e) {
        $(e.eventTarget).css({
            borderColor: '#ccc'
        });
    },
    '$doc<dragover>'(e) {
        e.preventDefault();
    }
});