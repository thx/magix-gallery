//#gallery-config
let DirectionMap = {
    'row': 'row',
    'col': 'column'
}
let JustifyMap = {
    'left': 'flex-start',
    'right': 'flex-end',
    'center': 'center', 
    'space-between': 'space-between', 
    'space-around': 'space-around'
}
let AlignMap = {
    'top': 'flex-start',
    'bottom': 'flex-end',
    'center': 'center',
    'stretch': 'stretch'
}
module.exports = {
    'mx-grid.row'(i) {
        let { content, attrsKV } = i;

        let styles = [
            'display: flex'
        ]
        if (attrsKV.width) {
            styles.push(`width: ${attrsKV.width}`);
        }
        if (attrsKV.height) {
            styles.push(`height: ${attrsKV.height}`);
        }

        let direction = DirectionMap[attrsKV.direction || 'row'] || 'row';
        styles.push(`flex-direction: ${direction}`);

        let justify = JustifyMap[attrsKV.justify || 'left'] || 'flex-start';
        styles.push(`justify-content: ${justify}`);

        let align = AlignMap[attrsKV.align || 'stretch'] || 'stretch';
        styles.push(`align-items: ${align}`);

        styles = styles.join(';');
        return `<div style="${styles}" ${i.attrs}>${content}</div>`;
    },
    'mx-grid.col'(i) {
        let { content, attrsKV } = i;

        let styles = [];

        // width > flex
        if (attrsKV.width) {
            styles.push(`flex: 0 0 ${attrsKV.width}`);
        } else {
            let flex = attrsKV.flex || 1;
            styles.push(`flex: ${flex}`);
        }

        if (attrsKV.height) {
            styles.push(`height: ${attrsKV.height}`);
        }

        styles = styles.join(';');
        return `<div style="${styles}" ${i.attrs}>${content}</div>`;
    },
    'mx-grid'(i) {
        return `<div ${i.attrs} style="background: #fff; border-radius: 4px; box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);">
                    ${i.content}
                </div>`;
    },
    'mx-grid.title'(i) {
        let { content, attrsKV } = i;

        let styles = [
            'padding: 10px 20px;',
            'line-height: 32px;'
        ];
        if((attrsKV.border + '') !== 'none'){
            styles.push('border-bottom: 1px solid #e6e6e6;');
        }

        let tmpl = `<div style="${styles.join(';')}">`;
        
        if(attrsKV.icon){
            tmpl += `<span style="margin-right: 2px; color: #ccc;">${attrsKV.icon}</span>`;
        }

        tmpl += `<span style="font-size: 16px;">${attrsKV.content}</span>`;

        if(attrsKV.tip){
            tmpl += `<span style="margin-left: 20px; color: #999;">${attrsKV.tip}</span>`;
        }
        tmpl += '</div>';
        return tmpl;
    },
    'mx-grid.body'(i) {
        let { content, attrsKV } = i;
        let view = attrsKV['mx-view'];
        if(view){
            return `<div mx-view="${view}" style="padding: 20px;"></div>`;
        }else{
            return `<div style="padding: 20px;">${content}</div>`;
        }
    }
};
