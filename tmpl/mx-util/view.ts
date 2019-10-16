/**
 * 通用方法定义
 * 具体页面继承该View
 */
import Magix from 'magix';

//@ts-ignore
export = Magix.View.merge({
    ctor() {
        this.updater.set({
            viewId: this.id
        });
    }
});