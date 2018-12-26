let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@2.html',
    render() {
        let list = [{
            value: 1,
            subs: [{
                value: 11
            },{
                value: 12
            },{
                value: 13
            }]
        },{
            value: 2,
            subs: [{
                value: 21
            },{
                value: 22
            },{
                value: 23
            }]
        }]
        this.updater.digest({
            list
        });
    },
    'toggle<change>'(e) {
        let checked = e.target.checked;
        let groupIndex = e.params.groupIndex,
            subIndex = e.params.subIndex;

        let list = this.updater.get('list');
        list.forEach((group, gi) => {
            let checkes = [];
            group.subs.forEach((sub, si) => {
                if((groupIndex == gi) && 
                   (subIndex == 'all' || subIndex == si)){
                    sub.checked = checked;
                }

                if(sub.checked){
                    checkes.push(sub.value);
                }
            })

            // 1：全不选
            // 2：部分选
            // 3：全选
            group.type = (checkes.length > 0) ? ((checkes.length == group.subs.length) ? 3 : 2) : 1;
        })

        this.updater.digest({
            list
        })
    }
});