/**
 * 按钮 https://aone.alibaba-inc.com/req/33589875
 */
import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';

export default View.extend({
    tmpl: '@index.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        let that = this;

        // 当前数据截快照
        that.updater.snapshot();

        let owner = document.getElementById(that.id);
        let content = extra.content || owner.innerHTML || '';

        // 禁用按钮
        let disabled = (extra.disabled + '' === 'true');

        // loading
        // 历史配置loading="circle" || loading="dot" 此处需要兼容历史配置写法
        let loading = (extra.loading + '' === 'true' || extra.loading + '' === 'circle' || extra.loading + '' === 'dot');
        if (loading) {
            // loading态一定是禁用的
            disabled = true;
        }

        // 自定义按钮颜色
        let color = extra.color || '';
        let colorHover = extra.colorHover || color;
        let colorText = extra.colorText || '#ffffff';
        let colorHoverText = extra.colorHoverText || colorText;

        // 打标
        let tagContent = extra.tagContent || '';
        let tagColor = extra.tagColor || '';

        let classes = ['mx-btn'],
            styles = [],
            types = {};

        // 优先级，自定义颜色 > 预置颜色
        if (color) {
            styles.push(`--mx-btn-custom-color: ${color}`);
            styles.push(`--mx-btn-custom-color-text: ${colorText}`);
            styles.push(`--mx-btn-custom-color-hover: ${colorHover}`);
            styles.push(`--mx-btn-custom-color-hover-text: ${colorHoverText}`);
            classes.push('mx-btn-custom');
        } else {
            ['brand', 'white', 'hollow'].forEach(t => {
                if (extra[t] + '' === 'true') {
                    types[t] = true;
                    classes.push(`btn-${t}`);
                }
            })
        }

        // 小尺寸按钮
        if (extra.small + '' === 'true') {
            classes.push('btn-small');
        }

        // 禁用按钮
        if (disabled) {
            classes.push('btn-disabled');
        }

        that.updater.set({
            ...types,
            loading,
            content,
            disabled,
            tagContent,
            tagColor,
            styles: styles.join(';'),
            classes: classes.join(' ')
        });

        // altered是否有变化
        // true：有变化
        let altered = this.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest();
    }
});