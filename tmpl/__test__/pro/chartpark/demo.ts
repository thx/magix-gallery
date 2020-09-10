/**
 * 每次项目各自的通用方法定义
 * 具体页面继承该View
 * 包括挂在在view上的接口管理的fetch，save
 */
import Magix from 'magix';
import * as $ from '$'
import * as Chartx from './index';

$(document).on('navslidend', () => {
    Chartx.resize();
})

$(window).on('resize', () => {
    Chartx.resize();
})

export = Magix.View.extend({
    init(options) {
        let me = this;
        me.updater.snapshot();
        me.assign(options);
    },
    assign(data, ctrl) {
        let me = this;
        if (ctrl) ctrl.deep = false;
        //赋值前先进行数据变化的检测,首次assign是在init方法中调用,后续的调用是magix自动调用,这个检测主要用于在首次调用后,magix自动调用前有没有进行数据的更新
        let altered = me.updater.altered();
        //你可以在这里对数据data进行加工,然后通过set方法放入到updater中
        me.updater.set(data);
        //如果数据没变化,则设置新的数据后再次检测
        if (!altered) altered = me.updater.altered();
        if (altered) {//如果有变化,则再保存当前的快照,然后返回true告诉magix当前view需要更新
            me.updater.snapshot();
            return true;
        }
        return false;//如果数据
    },
    render() {
        let me = this;
        let da = me.updater.get();
        let data = da.data
        let options = da.options //options由业务里自行获取

        //如果指定了chartId，则options直接来自chartPark配置
        if (da.chartId) {
            options = Chartx.getOptions(da.chartId)
        }
        let chart = this.capture('chart');
        if (chart) {
            chart.destroy();
        }
        chart = Chartx.create(this.id, data, $.extend(true, {}, options))
        this.capture('chart', chart)
    }
})