/**
 * 按钮 https://aone.alibaba-inc.com/req/33589875
 * 
 * link：表示链接在正常情况下（即页面刚加载完成时）显示的颜色（a, a:link，一般不设置）
 * visited：表示链接被点击后显示的颜色。
 * hover：表示鼠标悬停时显示的颜色。
 * focus：表示元素获得光标焦点时使用的颜色，主要用于文本框输入文字时使用（鼠标松开时显示的颜色）。
 * active：表示当所指元素处于激活状态（鼠标在元素上按下还没有松开）时所显示的颜色。
 * 
 * 伪类的顺序应为:link — :visited — :hover — :focus - :active
 * 在 CSS 定义中，a:active 必须被置于 a:hover 之后，才是有效的。
 * 在 CSS 定义中，a:hover 必须被置于 a:link 和 a:visited 之后，才是有效的。
 */
import Magix from 'magix';
import * as View from '../mx-util/view';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@index.html',
    init(extra) {
        this.assign(extra);

        this.on('destroy', () => {
            if (this['@{anim.timer}']) {
                clearTimeout(this['@{anim.timer}']);
            }
        });
    },
    assign(extra, configs) {
        let that = this;

        // 当前数据截快照
        that.updater.snapshot();

        // 展示内容
        let content = '';
        if (configs && configs.node) {
            // attr change
            // 此时取owner.innerHTML为button
            content = extra.content || configs.node.innerHTML || '';
        } else {
            // 首次渲染
            let owner = document.getElementById(that.id);
            content = extra.content || owner.innerHTML || '';
        }

        // 禁用按钮
        let disabled = (extra.disabled + '' === 'true');

        // loading
        // 历史配置loading="circle" || loading="dot" 此处需要兼容历史配置写法
        let loading = (extra.loading + '' === 'true' || extra.loading + '' === 'circle' || extra.loading + '' === 'dot');

        // 小尺寸按钮
        let small = (extra.small + '' === 'true');

        // 自定义按钮颜色
        let color = extra.color || '';
        let colorHover = extra.colorHover || color;
        let colorText = extra.colorText || '#ffffff';
        let colorHoverText = extra.colorHoverText || colorText;

        // 打标
        let tagContent = extra.tagContent || '';
        let tagColor = extra.tagColor || '';

        let classes = [],
            styles = [],
            types = {};

        // 优先级，自定义颜色 > 预置颜色
        if (color) {
            classes.push('mx-btn-custom');

            // 自定义按钮颜色
            styles.push(`--mx-btn-custom-color: ${color}`);
            styles.push(`--mx-btn-custom-color-text: ${colorText}`);
            styles.push(`--mx-btn-custom-color-hover: ${colorHover}`);
            styles.push(`--mx-btn-custom-color-hover-text: ${colorHoverText}`);

            // 扩散动画样式，默认使用文案颜色
            styles.push(`--mx-comp-expand-amin-color: ${colorText}`);
        } else {
            ['brand', 'white', 'hollow'].forEach(t => {
                if (extra[t] + '' === 'true') {
                    types[t] = true;
                    classes.push(`btn-${t}`);
                }
            })
        }

        that.updater.set({
            ...types,
            disabled,
            disabledTip: extra.disabledTip || '',
            disabledWidth: extra.disabledWidth || 200,
            loading,
            small,
            content,
            tagContent,
            tagColor,
            styles: styles.join(';'),
            classes: classes.join(' ')
        });

        // altered是否有变化 true：有变化
        let altered = that.updater.altered();
        return altered;
    },

    render() {
        this.updater.digest();
    },

    '@{stop}<click>'(e) {
        e.stopPropagation();
    },

    '@{anim}<click>'(e) {
        let that = this;
        let { disabled, loading } = that.updater.get();
        if (disabled || loading || that.updater.get('animing')) {
            return;
        }

        // 只记录状态不digest
        let ms = that['@{get.css.var}']('--mx-comp-expand-amin-timer');
        let btn = document.getElementById(`${that.id}_btn`);
        btn.setAttribute('mx-comp-expand-amin', 'animing');
        that.updater.set({ animing: true });
        that['@{anim.timer}'] = setTimeout(() => {
            btn.setAttribute('mx-comp-expand-amin', 'animend');
            that.updater.set({ animing: false });
        }, ms.replace('ms', ''));
    },

    /**
     * 外部调用
     */
    showLoading() {
        this.updater.digest({
            loading: true
        })
    },

    /**
     * 外部调用
     */
    hideLoading() {
        this.updater.digest({
            loading: false
        })
    }
});