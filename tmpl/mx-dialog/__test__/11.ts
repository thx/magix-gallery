import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@11.html',
    render() {
        this.updater.digest();
    },
    'open<click>'(e) {
        //  viewPath  //dialog view路径
        //  viewOptions //传入dialog的数据，挂载当前dialog实体
        //  dialogOptions //样式覆盖
        //      width： 宽度
        //      height： 高度
        //      modal：是否允许滚动
        //      mask：是否有遮罩
        //      ......
        let dlg = this.mxDialog('@./dialog-inner-tip', {
            content: 'afterClose：关闭浮层之后事件响应'
        }, {
            header: {
                title: '浮层标题'
            },
            footer: {
                enter: false,
                cancel: true,
            }
        });
        dlg.afterClose(() => {
            // do something
            console.log('关闭浮层')
        })
    }
});