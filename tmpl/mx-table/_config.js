//#gallery-config
module.exports = {
    'mx-table'(tag) {
        let content = tag.content;
        let ctrl = tag.seprateAttrs('div');
        content = content.replace(/<table/g, '<div>$&').replace(/<\/table>/g, '$&</div>');
        return `<${ctrl.tag} mx-view="${tag.mxView}" ${ctrl.attrs} ${ctrl.viewAttrs}>${content}</${ctrl.tag}>`;
    },
    'mx-table.excel'(tag) {
        let content = tag.content;
        let ctrl = tag.seprateAttrs('div');

        // 分组table用div包起来
        content = content.replace(/<table/g, '<div mx-table-wrapper>$&').replace(/<\/table>/g, '$&</div>');

        // 将thead与tbody分隔成两个table
        content = content.replace(/<\/thead>/g, '$&</table><table class="table">');

        // 增加占位符
        let arr = [];
        let reg1 = /<thead[^>]*>[\s\S]*?<\/thead>/g, // 匹配中thead
            reg2 = /<tr[^>]*>[\s\S]*?<\/tr>/, // 匹配第一个tr
            reg3 = /<th[^>]*>[\s\S]*?<\/th>/g, // 匹配第一个tr中的所有th
            reg4 = /colspan\s*="\s*([\d\.]+)"/; // 匹配colspan
        let theads = content.match(reg1);
        for (let i = 0; i < theads.length; i++) {
            let tr = theads[i].match(reg2)[0];
            let str = '<colgroup mx-table-placeholder>';

            let ths = tr.match(reg3);
            for (let j = 0; j < ths.length; j++) {
                let th = ths[j];
                let span = 1;
                let m = th.match(reg4);
                if (m) {
                    span = +m[1];
                }

                for (let k = 0; k < span; k++) {
                    str += `<col span="1" />`;
                }
            }
            str += '</colgroup>';
            arr.push(str);
        }
        let i = 0;
        content = content.replace(/<thead/g, (...results) => {
            i++;
            return arr[i - 1] + results[0];
        });
        let j = 0;
        content = content.replace(/<tbody/g, (...results) => {
            j++;
            return arr[j - 1] + results[0];
        });

        // table上再套一层div，用户滚动处理
        content = content.replace(/<table/g, '<div mx-table-scroll-wrapper>$&').replace(/<\/table>/g, '$&</div>');
        
        return `<${ctrl.tag} mx-view="${tag.mxView}" ${ctrl.attrs} ${ctrl.viewAttrs}>${content}</${ctrl.tag}>`;
    }
}
