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

        // 按钮尺寸(size)
        // 兼容历史配置api size="small"
        let size = extra.size || ((extra.small + '' === 'true') ? 'small' : 'normal');
        if (['small', 'normal', 'large'].indexOf(size) < 0) {
            size = 'normal';
        }

        // 自定义按钮颜色
        let color = extra.color || '';
        let colorText = extra.colorText || '#ffffff';
        let colorBorder = extra.colorBorder || color;
        let colorHover = extra.colorHover || color;
        let colorHoverText = extra.colorHoverText || colorText;
        let colorHoverBorder = extra.colorHoverBorder || colorHover;

        // 打标，默认红色
        let tagContent = extra.tagContent || '';

        let styles = [], mode = '';
        let loadingColor = 'var(--color-brand)',
            loadingColorGradient = 'var(--color-brand)',
            loadingColorBg = '#DEE1E8';

        let errorColor = '#FF4444', errorColorHover = '#CC0909', errorBorder = '#E6E6E7';
        let errorColorRgb = that['@{color.to.rgb}'](errorColor);
        let errorColor1 = `rgba(${errorColorRgb.r},${errorColorRgb.g},${errorColorRgb.b}, 0.1)`,
            errorColor2 = `rgba(${errorColorRgb.r},${errorColorRgb.g},${errorColorRgb.b}, 0.2)`,
            errorColor5 = `rgba(${errorColorRgb.r},${errorColorRgb.g},${errorColorRgb.b}, 0.5)`,
            errorShadow = `0 2px 10px 0  rgba(${errorColorRgb.r},${errorColorRgb.g},${errorColorRgb.b}, 0.4)`;

        // 优先级，自定义颜色 > 预置颜色
        if (color) {
            mode = 'custom';

            // 自定义按钮颜色
            styles.push(`--mx-btn-custom-color: ${color}`);
            styles.push(`--mx-btn-custom-color-text: ${colorText}`);
            styles.push(`--mx-btn-custom-color-border: ${colorBorder}`);
            styles.push(`--mx-btn-custom-color-hover: ${colorHover}`);
            styles.push(`--mx-btn-custom-color-text-hover: ${colorHoverText}`);
            styles.push(`--mx-btn-custom-color-border-hover: ${colorHoverBorder}`);

            // 扩散动画样式，默认使用文案颜色
            styles.push(`--mx-comp-expand-amin-color: ${colorText}`);

            // loading色值
            let textRgb = that['@{color.to.rgb}'](colorText);
            loadingColor = colorText;
            loadingColorGradient = colorText;
            loadingColorBg = `rgba(${textRgb.r},${textRgb.g},${textRgb.b},.2)`;
        } else {
            // primary：主要品牌按钮
            // secondary：次要跟随按钮（默认）
            // white：白色
            // hollow：空心按钮
            mode = extra.mode;
            if (!mode) {
                // 兼容历史api
                mode = (extra.brand + '' === 'true') ? 'primary' : ((extra.white + '' === 'true') ? 'white' : ((extra.hollow + '' === 'true') ? 'hollow' : ''));
            };
            switch (mode) {
                case 'primary': // 主要
                    loadingColor = '#ffffff';
                    loadingColorGradient = '#ffffff';
                    loadingColorBg = 'rgba(222,225,232,.2)';

                    // 处理成自定义
                    mode = 'custom-gradient';
                    styles.push(`--mx-btn-custom-color: var(--btn-brand)`);
                    styles.push(`--mx-btn-custom-color-gradient: var(--btn-brand-gradient)`);
                    styles.push(`--mx-btn-custom-color-text: var(--btn-brand-text)`);
                    styles.push(`--mx-btn-custom-shadow: var(--btn-brand-shadow)`);
                    styles.push(`--mx-btn-custom-color-hover: var(--btn-brand-hover)`);
                    styles.push(`--mx-btn-custom-color-gradient-hover: var(--btn-brand-gradient-hover)`)
                    styles.push(`--mx-btn-custom-color-text-hover: var(--btn-brand-text-hover)`);
                    styles.push(`--mx-btn-custom-shadow-hover: var(--btn-brand-shadow-hover)`);
                    styles.push(`--mx-comp-expand-amin-color: #fff`);
                    break;

                case 'primary-error': // 主要警告
                    loadingColor = '#ffffff';
                    loadingColorGradient = '#ffffff';
                    loadingColorBg = 'rgba(222,225,232,.2)';

                    // 处理成自定义
                    mode = 'custom-gradient';
                    styles.push(`--mx-btn-custom-color: ${errorColor}`);
                    styles.push(`--mx-btn-custom-color-gradient: ${errorColor}`);
                    styles.push(`--mx-btn-custom-color-text: #fff`);
                    styles.push(`--mx-btn-custom-shadow: none`);
                    styles.push(`--mx-btn-custom-color-hover: ${errorColorHover}`);
                    styles.push(`--mx-btn-custom-color-gradient-hover: ${errorColorHover}`);
                    styles.push(`--mx-btn-custom-color-text-hover: #fff`);
                    styles.push(`--mx-btn-custom-shadow-hover: ${errorShadow}`);
                    styles.push(`--mx-comp-expand-amin-color: #fff`);
                    break;

                case 'hollow': // 跟随按钮
                    // 处理成自定义
                    mode = 'custom';
                    let brandRgb = that['@{color.to.rgb}'](that['@{get.css.var}']('--color-brand'));
                    styles.push(`--mx-btn-custom-color-border: rgba(${brandRgb.r},${brandRgb.g},${brandRgb.b},0.1)`);
                    styles.push(`--mx-btn-custom-color: rgba(${brandRgb.r},${brandRgb.g},${brandRgb.b},0.1)`);
                    styles.push('--mx-btn-custom-color-text: var(--color-brand)');
                    styles.push(`--mx-btn-custom-color-border-hover: rgba(${brandRgb.r},${brandRgb.g},${brandRgb.b},0.2)`);
                    styles.push(`--mx-btn-custom-color-hover: rgba(${brandRgb.r},${brandRgb.g},${brandRgb.b},0.2)`);
                    styles.push('--mx-btn-custom-color-text-hover: var(--color-brand-hover)');
                    break;

                case 'white': // 白色
                    // 处理成自定义
                    mode = 'custom';
                    styles.push('--mx-btn-custom-color-border: #fff');
                    styles.push('--mx-btn-custom-color: #fff');
                    styles.push('--mx-btn-custom-color-text: #333');
                    styles.push('--mx-btn-custom-color-border-hover: #fff');
                    styles.push('--mx-btn-custom-color-hover: #fff');
                    styles.push('--mx-btn-custom-color-text-hover: var(--color-brand)');
                    break;

                case 'secondary-error': // 次要警告
                    loadingColor = 'var(--btn-error)';
                    loadingColorGradient = 'var(--btn-error)';

                    // 处理成自定义
                    mode = 'custom';
                    styles.push(`--mx-btn-custom-color-border: ${errorBorder}`);
                    styles.push(`--mx-btn-custom-color: transparent`);
                    styles.push(`--mx-btn-custom-color-text: ${errorColor}`);
                    styles.push(`--mx-btn-custom-color-border-hover: ${errorColor5}`);
                    styles.push(`--mx-btn-custom-color-hover: ${errorColor1}`);
                    styles.push(`--mx-btn-custom-color-text-hover: ${errorColor}`);
                    styles.push(`--mx-comp-expand-amin-color: ${errorColor}`);
                    break;

                case 'hollow-error': // 空心警告
                    loadingColor = 'var(--btn-error)';
                    loadingColorGradient = 'var(--btn-error)';

                    // 处理成自定义
                    mode = 'custom';
                    styles.push(`--mx-btn-custom-color-border: ${errorColor1}`);
                    styles.push(`--mx-btn-custom-color: ${errorColor1}`);
                    styles.push(`--mx-btn-custom-color-text: ${errorColor}`);
                    styles.push(`--mx-btn-custom-color-border-hover: ${errorColor2}`);
                    styles.push(`--mx-btn-custom-color-hover: ${errorColor2}`);
                    styles.push(`--mx-btn-custom-color-text-hover: ${errorColorHover}`);
                    styles.push(`--mx-comp-expand-amin-color: ${errorColor}`);
                    break;

                case 'white-error': // 白色警告
                    loadingColor = 'var(--btn-error)';
                    loadingColorGradient = 'var(--btn-error)';

                    // 处理成自定义
                    mode = 'custom';
                    styles.push(`--mx-btn-custom-color-border: #fff`);
                    styles.push(`--mx-btn-custom-color: #fff`);
                    styles.push(`--mx-btn-custom-color-text: #333`);
                    styles.push(`--mx-btn-custom-color-border-hover: #fff`);
                    styles.push(`--mx-btn-custom-color-hover: #fff`);
                    styles.push(`--mx-btn-custom-color-text-hover: ${errorColor}`);
                    styles.push(`--mx-comp-expand-amin-color: ${errorColor}`);
                    break;

                // case 'secondary': 
                default: // 默认次要默认
                    // 处理成自定义
                    mode = 'custom';
                    styles.push('--mx-btn-custom-color-border: var(--btn-border)');
                    styles.push('--mx-btn-custom-color-border-hover: var(--btn-border-hover)');
                    styles.push('--mx-btn-custom-color: var(--btn-bg)');
                    styles.push('--mx-btn-custom-color-hover: var(--btn-bg-hover)');
                    styles.push('--mx-btn-custom-color-text: var(--btn-text)');
                    styles.push('--mx-btn-custom-color-text-hover: var(--btn-text-hover)');
                    break;
            }
        }

        let icon = extra.icon ? `<span class="@index.less:text-icon">${extra.icon}</span>` : '';
        that.updater.set({
            onlyIcon: icon && !content,
            icon,
            content,
            loadingColor,
            loadingColorGradient,
            loadingColorBg,
            mode,
            styles: styles.join(';'),
            disabled,
            disabledTip: extra.disabledTip || '',
            disabledWidth: extra.disabledWidth || 200,
            disabledPlacement: extra.disabledPlacement || 'bottom',
            width: extra.width,
            loading,
            size,
            tagContent,
            tagColor: extra.tagColor || 'var(--color-red)',
            linkHref: extra.linkHref, // 外链处理
            linkTarget: extra.linkTarget || '_blank',
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
        let btn = document.getElementById(`${that.id}_btn`);
        btn.setAttribute('mx-comp-expand-amin', 'animing');
        that.updater.set({ animing: true });
        that['@{anim.timer}'] = setTimeout(() => {
            btn.setAttribute('mx-comp-expand-amin', 'animend');
            that.updater.set({ animing: false });
        }, that['@{get.css.time.var}']('--mx-comp-expand-amin-timer'));
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