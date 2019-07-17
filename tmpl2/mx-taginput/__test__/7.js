let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
let Vframe = Magix.Vframe;

module.exports = Base.extend({
    tmpl: '@7.html',
    render() {
        this.updater.digest();
    },
    'update<show>'(e){
        let keyword = e.keyword;
        if(!keyword){
            return;
        }

        let instance = Vframe.get(this.id + '_taginput');
        instance.invoke('showLoading');
        setTimeout(() => {
            let suggest = [1, 2, 3].map(v => {
                return {
                    text: Magix.guid('dynamic_'),
                    value: Magix.guid('dynamic_')
                };
            })
            instance.invoke('update', [suggest]);
            instance.invoke('hideLoading');
        }, 1500);
    }
});