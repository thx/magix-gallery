let Magix = require('magix');
let Base = require('./theme');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
let Dialog = require('@../../mx-dialog/index');
Magix.applyStyle('@theme.less');

module.exports = Base.extend({
    tmpl: '@index.html',
    mixins: [Form, Validator, Dialog],
    init(e) {
        this.initTheme();

        let list = [
            {
                text: '项目配置',
                tip: '超级推荐仿照Facebook，趋于将组件颜色统一化，只通过导航颜色区分不同品牌，后续只需要配置项目色值，组件色值所有都统一。<br/>对于老项目项目品牌色 = 组件品牌色，项目要做成品牌色变更是比较难的，故过渡阶段兼容配置，项目品牌和组件品牌可分别设置。',
                subs: [
                    {
                        type: 'color',
                        key: '--app-brand',
                        text: '项目品牌色',
                        tip: '项目品牌色，支持渐变，主要用于项目顶部和侧边导航，自定义时默认为项目品牌色 = 组件品牌色'
                    },
                    {
                        type: 'color',
                        key: '--app-brand-gradient',
                        text: '项目品牌渐变',
                        tip: '项目品牌色，支持渐变，主要用于项目顶部和侧边导航，自定义时默认为项目品牌色 = 组件品牌色'
                    },
                    {
                        type: 'color',
                        key: '--app-nav-bg',
                        text: '项目侧边导航背景',
                        tip: '项目侧边导航背景色'
                    },
                    {
                        type: 'color',
                        key: '--app-bg',
                        text: '项目背景',
                        tip: '项目采用卡片色设计，白框底部背景色'
                    }
                ]
            },
            {
                text: '组件配置',
                tip: '超级推荐仿照Facebook，趋于将组件颜色统一化，只通过导航颜色区分不同品牌，后续只需要配置项目色值，组件色值所有都统一。<br/>对于老项目项目品牌色 = 组件品牌色，项目要做成品牌色变更是比较难的，故过渡阶段兼容配置，项目品牌和组件品牌可分别设置。',
                subs: [
                    {
                        type: 'color',
                        key: '--color-brand',
                        text: '品牌色',
                        tip: '组件品牌色，组件基本色值都基于品牌色产生'
                    },
                    {
                        type: 'color',
                        key: '--color-brand-hover',
                        text: '品牌色hover',
                        tip: '组件品牌色hover色值，默认品牌色亮度减少10%'
                    },
                    {
                        type: 'color',
                        key: '--color-brand-light',
                        text: '品牌色20%',
                        tip: '主要应用于表格单行hover操作行背景值，开关浅色，滑动轴浅色；默认组件品牌色透明20%'
                    },
                    {
                        type: 'color',
                        key: '--color-brand-opacity',
                        text: '品牌色10%',
                        tip: '主要应用于表格单行hover显示行背景值，下拉选项选中态背景色；默认组件品牌色透明10%'
                    },
                    {
                        type: 'color',
                        key: '--color-brand-vs',
                        text: '品牌色对比色',
                        tip: '品牌色对比色，常用与报表对比场景'
                    },
                    {
                        type: 'color',
                        key: '--border-highlight',
                        text: '组件边框色',
                        tip: 'input，dropdown，calendar等组件的边框颜色；默认#e6e6e6'
                    },
                    {
                        type: 'color',
                        key: '--border-highlight-hover',
                        text: '组件边框hover色',
                        tip: 'input，dropdown，calendar等组件的边框hover颜色；默认#ccc',
                        gap: true
                    },
                    {
                        type: 'color',
                        key: '--btn-brand-text',
                        text: '深底按钮文字',
                        tip: '深底色按钮文字颜色'
                    },
                    {
                        type: 'color',
                        key: '--btn-brand',
                        text: '深底按钮',
                        tip: '深底按钮色，支持渐变，默认等于品牌色'
                    },
                    {
                        type: 'color',
                        key: '--btn-brand-gradient',
                        text: '深底按钮渐变',
                        tip: '深底按钮色，支持渐变，默认等于品牌色',
                        gap: true
                    },
                    {
                        type: 'color',
                        key: '--btn-brand-text-hover',
                        text: '深底按钮hover文字',
                        tip: '深底色按钮hover时文字颜色'
                    },
                    {
                        type: 'color',
                        key: '--btn-brand-hover',
                        text: '深底按钮hover',
                        tip: '深底按钮hover色值，支持渐变，默认等于品牌色hover'
                    },
                    {
                        type: 'color',
                        key: '--btn-brand-gradient-hover',
                        text: '深底按钮hover渐变',
                        tip: '深底按钮hover色值，支持渐变，默认等于品牌色hover',
                        gap: true
                    },
                    {
                        type: 'color',
                        key: '--btn-border',
                        text: '浅底按钮边框',
                        tip: '浅底色按钮边框颜色，默认为品牌色'
                    },
                    {
                        type: 'color',
                        key: '--btn-bg',
                        text: '浅底按钮背景',
                        tip: '浅底按钮背景色，默认为品牌色10%'
                    },
                    {
                        type: 'color',
                        key: '--btn-text',
                        text: '浅底按钮文字',
                        tip: '浅底按钮文字颜色，默认#333',
                        gap: true
                    },
                    {
                        type: 'color',
                        key: '--btn-border-hover',
                        text: '浅底按钮hover边框',
                        tip: '浅底按钮hover时边框颜色，默认为品牌色'
                    },
                    {
                        type: 'color',
                        key: '--btn-bg-hover',
                        text: '浅底按钮hover背景',
                        tip: '浅底按钮hover时背景颜色，默认为品牌色20%'
                    },
                    {
                        type: 'color',
                        key: '--btn-text-hover',
                        text: '浅底按钮hover文字',
                        tip: '浅底按钮hover文字颜色，默认#333'
                    },
                    {
                        type: 'text',
                        key: '--btn-border-radius',
                        text: '按钮圆角',
                        tip: '按钮圆角，默认4px'
                    },
                    {
                        type: 'color',
                        key: '--color-warn',
                        text: '黄色警告',
                        tip: '警告场景提示颜色'
                    },
                    {
                        type: 'color',
                        key: '--color-red',
                        text: '红色错误',
                        tip: '错误场景提示颜色'
                    },
                    {
                        type: 'color',
                        key: '--color-green',
                        text: '绿色通过',
                        tip: '通过场景提示颜色'
                    },
                    {
                        type: 'color',
                        key: '--color-border',
                        text: '辅助线条颜色',
                        tip: '常用语区块分隔边框线；默认#e6e6e6'
                    },
                    {
                        type: 'text',
                        key: '--font-size',
                        text: '字体',
                        tip: '字体大小，默认12px，组件基于此参数计算节点大小，<span class="color-brand">注：修改字体联动修改正常组件行高，小号组件行高</span>'
                    },
                    {
                        type: 'text',
                        key: '--line-height',
                        text: '文本行高',
                        tip: '文本行高，默认1.5'
                    },
                    {
                        type: 'text',
                        key: '--input-height',
                        text: '正常组件行高',
                        tip: 'input，btn，dropdown，calendar等等组件的trigger节点行高，默认 = 字体 + 20'
                    },
                    {
                        type: 'text',
                        key: '--input-small-height',
                        text: '小号组件行高',
                        tip: '小号input，小号btn，dropdown下拉列表单个选项，默认 = 字体 + 14'
                    }
                ]
            }
        ]

        this.updater.set({
            viewId: this.id,
            custom: '#51a300',
            cur: 2,
            itemWidth: 126,
            list
        })
    },
    render() {
        this.setValues();
    },
    setValues(post) {
        let that = this;
        let { list, cur, custom, themes } = that.updater.get();
        let colors = {};
        if (cur == 3) {
            // 自定义
            colors = that['@{get.base}']({
                '--color-brand': custom
            })
        } else {
            let item = themes[cur];
            colors = item.colors;
        }
        list.forEach(g => {
            g.subs.forEach(s => {
                s.value = colors[s.key] || '';
            })
        })
        that.updater.digest({
            list
        })

        if (post) {
            // 通知iframe改变颜色
            let frame = document.getElementById('frame_' + that.id);
            frame.contentWindow.postMessage({
                type: 'changeTheme',
                colors
            }, '*');
        }
    },
    'selectTheme<click>'(event) {
        let cur = event.params.cur;
        this.updater.set({
            cur
        })
        this.setValues(true);
    },
    'changeColor<change>'(event) {
        this.updater.set({
            custom: event.color,
            cur: 3
        })
        this.setValues(true);
    },
    'sync<change>'(event) {
        let list = this.updater.get('list');
        let colors = {};
        list.forEach(g => {
            g.subs.forEach(s => {
                colors[s.key] = s.value;
            })
        })

        let key = event.params.key;
        if (key == '--font-size') {
            let fs = colors['--font-size'].replace('px', '');
            colors['--input-height'] = (+fs + 20) + 'px';
            colors['--input-small-height'] = (+fs + 14) + 'px';
        }

        list.forEach(g => {
            g.subs.forEach(s => {
                s.value = colors[s.key];
            })
        })

        this.updater.digest({
            list
        })

        let frame = document.getElementById('frame_' + this.id);
        frame.contentWindow.postMessage({
            type: 'changeTheme',
            colors
        }, '*');
    },
    'copy<click>'(event){
        let list = this.updater.get('list');
        let colors = {};
        list.forEach(g => {
            g.subs.forEach(s => {
                colors[s.key] = s.value;
            })
        })

        this.mxModal('@./copy', {
            colors
        }, {
            header: {
                title: '复制我的定制主题'
            },
            footer: {
                enter: false
            },
            width: 800
        });
    }
});