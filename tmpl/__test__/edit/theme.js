let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@theme.less');

module.exports = Magix.View.extend({
    tmpl: '@theme.html',
    render() {
        this.updater.digest({
            color: '#36a851'
        });
    },
    'changeTheme<click>'(event){
        let id = event.params.id;
        let map = {
            zuanshi: {
                '--color-brand': '#4d7fff',
                '--color-brand-hover': '#4470e0',
                '--color-brand-vs': '#14c9ce',
                '--color-brand-light': '#dfe8ff',
                '--color-brand-opacity': '#edf2ff',
                '--btn-brand': '#4d7fff',
                '--btn-brand-gradient': '#4d7fff',
                '--btn-brand-hover': '#4470e0',
                '--btn-brand-gradient-hover': '#4470e0',
                '--btn-border': '#4d7fff',
                '--btn-border-hover': '#4d7fff',
                '--btn-bg': '#edf2ff',
                '--btn-bg-hover': '#dfe8ff',
                '--app-brand': '#4d7fff',
                '--app-brand-gradient': '#4d7fff',
            },
            subway: {
                '--color-brand': '#ff831b',
                '--color-brand-hover': '#f07a19',
                '--color-brand-vs': '#91b514',
                '--color-brand-light': '#ffe6d6',
                '--color-brand-opacity': '#fff3e9',
                '--btn-brand': '#ff831b',
                '--btn-brand-gradient': '#ff831b',
                '--btn-brand-hover': '#f07a19',
                '--btn-brand-gradient-hover': '#f07a19',
                '--btn-border': '#ff831b',
                '--btn-border-hover': '#ff831b',
                '--btn-bg': '#fff3e9',
                '--btn-bg-hover': '#ffe6d6',
                '--app-brand': '#ff831b',
                '--app-brand-gradient': '#ff831b'
            },
            feeds: {
                '--color-brand': '#385ACC',
                '--color-brand-hover': '#2e4aa7',
                '--color-brand-vs': '#f7664d',
                '--color-brand-light': '#d7def6',
                '--color-brand-opacity': '#eff2fb',
                '--border-highlight': '#9095A1',
                '--border-highlight-hover': '#677088',
                '--btn-brand': '#385ACC',
                '--btn-brand-gradient': '#5C55DD',
                '--btn-brand-hover': '#28449F',
                '--btn-brand-gradient-hover': '#4741AD',
                '--btn-text': '#333',
                '--btn-text-hover': '#333',
                '--btn-border': '#637ba5',
                '--btn-border-hover': '#637ba5',
                '--btn-bg': '#f3f5fc',
                '--btn-bg-hover': '#e7eaf4',
                '--color-red': '#d52112',
                '--color-green': '#30ab66',
                '--color-bg': '#f5f5f5',
                '--app-brand': '#385ACC',
                '--app-brand-gradient': '#5C55DD'
            }
        }
        let colors = map[id];
        for(let key in colors){
            document.body.style.setProperty(key, colors[key]);
        }
    },

    getCookie(name) {
        let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
        let arr = document.cookie.match(reg);
        if (arr && arr.length) {
            return unescape(arr[2]);
        } else {
            return null;
        }
    },

    setCookie(name, value, time) {
        //这是有设定过期时间的使用示例：
        //s20是代表20秒
        //h是指小时，如12小时则是：h12
        //d是天数，30天则：d30
        let getsec = (str) => {
            let sec;
            let str1 = str.substring(1, str.length) * 1;
            let str2 = str.substring(0, 1);
            switch (str2) {
                case 's':
                    sec = str1 * 1000;
                    break;
                case 'h':
                    sec = str1 * 60 * 60 * 1000;
                    break;
                case 'd':
                    sec = str1 * 24 * 60 * 60 * 1000;
                    break;
            }
            return sec;
        }

        // time过期时间
        let strsec = getsec(time);
        let exp = new Date();
        exp.setTime(exp.getTime() + strsec * 1);

        document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString();
    }
});