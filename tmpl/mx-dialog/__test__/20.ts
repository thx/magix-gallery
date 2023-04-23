import Magix, { Vframe } from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@20.html',
    render() {
        this.updater.digest();
    },
    'open<click>'(e) {
        this.mxModal('@./modal-inner', {
            enterCallback: (result) => {
                this.alert('系统提示', `按钮旁输入内容为“${result.footerName}”`);
            }
        }, {
            ladder: {
                width: 'xlarge',
            },
            header: {
                title: '浮层标题',
                tip: '按钮旁支持配置footer.view配置自定义嵌入view',
            },
            footer: {
                view: '@./dialog-footer',
                viewData: {
                    footerName: '文案'
                }
            }
        });
    },
});