let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    render(){
        let node = $('#' + this.id);
        // 在_config中配置
        // node.attr('type', 'checkbox');
        ['checked', 'disabled', 'indeterminate'].forEach(key => {
            if(typeof(node.attr('mx-' + key)) == 'undefined'){
                node.prop(key, false);
            }else{
                node.prop(key, true);
            }
        })
    }
});