/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@index.less');
let barId = Magix.guid('mx_topbar_');
let Vframe = Magix.Vframe;
let timer, interval;
let percent = 100;
let Topbar = {
    '@{show}'() {
        clearTimeout(timer);
        let bar = $('#' + barId);
        if (!bar.length) {
            $('body').append(`<div class="@index.less:bar" id="${barId}"></div>`);
            interval = setInterval(Topbar['@{progress}'], 300);
        }
    },
    '@{porgress}'() {
        let bar = $('#' + barId);
        if (bar.length) {
            if (percent > 15) {
                percent -= (3 + Math.random() * 5);
            } else if (percent > 4) {
                percent -= (1 + Math.random());
            }
            bar.css({
                transform: `translate3d(-${percent}%,0px,0px)`
            });
        }
    },
    '@{hide}'() {
        clearInterval(interval);
        let bar = $('#' + barId);
        if (bar.length) {
            bar.css({
                transform: `translate3d(0,0px,0px)`
            });
            timer = setTimeout(() => {
                percent = 100;
                bar.remove();
            }, 400);
        }
    }
};

let rootId = Magix.config('rootId');
let rootVf = Vframe.get(rootId);
let resume = vf => {
    vf.on('alter', Topbar['@{show}']);
    vf.on('created', Topbar['@{hide}']);
};
if (rootVf) {
    resume(rootVf);
} else {
    Topbar['@{show}'](); //未准备好的情况下
    let watch = e => {
        if (e.vframe.id == rootId) {
            Vframe.off('add', watch);
            resume(e.vframe);
        }
    };
    Vframe.on('add', watch);
}