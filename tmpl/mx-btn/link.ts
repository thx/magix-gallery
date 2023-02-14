import Magix from 'magix';
import View from '../mx-btn/index';
Magix.applyStyle('@link.less');

export default View.extend({
    tmpl: '@link.html',
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
        let loading = (extra.loading + '' === 'true');

        let icon = '';
        switch (extra.icon) {
            case 'setting':
                icon = '<span class="@link.less:icon"><i class="mx-iconfont">&#xe70f;</i></span>';
                break;

            case 'add':
                icon = '<span class="@link.less:icon"><i class="mx-iconfont" style="font-size: 14px;">&#xe60c;</i></span>';
                break;

            case 'delete':
                icon = '<span class="@link.less:icon"><i class="mx-iconfont">&#xe714;</i></span>';
                break;

            case 'upload':
                icon = '<span class="@link.less:icon"><i class="mx-iconfont">&#xe718;</i></span>';
                break;

            case 'download':
                icon = '<span class="@link.less:icon"><i class="mx-iconfont">&#xe717;</i></span>';
                break;

            case 'drag':
                icon = '<span class="@link.less:icon"><i class="mx-iconfont">&#xe658;</i></span>';
                break;

            case 'filter':
                icon = '<span class="@link.less:text-icon"><i class="mx-iconfont">&#xe676;</i></span>';
                break;

            case 'zoom':
                icon = '<span class="@link.less:text-icon"><i class="mx-iconfont">&#xe677;</i></span>';
                break;

            case 'link':
                icon = '<span class="@link.less:icon"><i class="mx-iconfont">&#xe7cc;</i></span>';
                break;

            case 'appendix':
                icon = '<span class="@link.less:icon"><i class="mx-iconfont">&#xe604;</i></span>';
                break;

            default:
                icon = extra.icon ? `<span class="@link.less:icon">${extra.icon}</span>` : '';
                break;
        }
        that.updater.set({
            icon,
            content,
            disabled,
            disabledTip: extra.disabledTip || '',
            disabledWidth: extra.disabledWidth || 200,
            disabledPlacement: extra.disabledPlacement || 'bottom',
            loading,
            tagContent: extra.tagContent || '',
            tagColor: extra.tagColor || 'var(--color-red)',
            linkHref: extra.linkHref, // 外链处理
            linkTarget: extra.linkTarget || '_blank',
        });

        // altered是否有变化 true：有变化
        let altered = that.updater.altered();
        return altered;
    }
});