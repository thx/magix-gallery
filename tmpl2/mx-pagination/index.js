let Magix = require('magix');
let $ = require('$');
let DefaultSizes = [10, 20, 30, 40];
let I18n = require('../mx-medusa/util');
Magix.applyStyle('@index.less');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        //初始化时保存一份当前数据的快照
        this.updater.snapshot();
        //该处是否可以由magix自动调用
        this.assign(extra);
    },
    assign(ops) {
        let me = this;
        //赋值前先进行数据变化的检测,首次assign是在init方法中调用,后续的调用是magix自动调用,这个检测主要用于在首次调用后,magix自动调用前有没有进行数据的更新
        let altered = me.updater.altered();

        let sizes = [];
        try {
            sizes = JSON.parse(ops.sizes);
        } catch (e) {
            sizes = ops.sizes
        }

        if (!sizes || !sizes.length) {
            sizes = DefaultSizes;
        }

        let sizesChange = true;
        if ((/^false$/i).test(ops.sizesChange)) {
            sizesChange = false;
        }

        //当前第几页
        // 优先级page > offset
        let page,
            size = ops.size || 40;
        if(ops.page){
            page = ops.page;
        }else if(ops.offset){
            page = parseInt(ops.offset / size) + 1;
        }else{
            page = 1;
        }

        me.updater.set({
            viewId: me.id,
            step: ops.step || 5, //页码过多时，中间显示多少条页码
            simplify: (ops.simplify + '') === 'true',
            mini: (ops.mini + '') === 'true',
            hideTotal: (ops.hideTotal + '') === 'true', //是否隐藏总计
            jump: (ops.jump + '') === 'false', //是否有快捷跳转
            total: (ops.total | 0) || 0, //总数
            page, 
            size, //当前分页数
            sizesChange: sizesChange, //是否可切换分页数
            sizesPlacement: ops.sizesPlacement || 'bottom',
            sizes: sizes //可选分页数
        });

        //如果数据没变化,则设置新的数据后再次检测
        if (!altered) {
            altered = me.updater.altered();
        }

        //如果有变化,则再保存当前的快照,然后返回true告诉magix当前view需要更新
        if (altered) {
            me.updater.snapshot();
            return true;
        }

        //如果数据没变化,则告诉magix当前view不用更新
        return false;
    },
    render() {
        let me = this;
        let info = me['@{cal.page.info}']();
        me.updater.digest(info);
    },
    '@{cal.page.info}'() {
        let me = this;
        let data = me.updater.get();
        let total = data.total;
        let page = data.page | 0;
        let pages = Math.ceil((data.total || 1) / data.size);
        if (page > pages) {
            page = pages;
        }
        let step = data.step | 0;
        let middle = step / 2 | 0;
        let start = Math.max(1, page - middle);
        let end = Math.min(pages, start + step - 1);
        start = Math.max(1, end - step + 1);
        let offset;
        if (start <= 2) { //=2 +1  =1  +2
            offset = 3 - start;
            if (end + offset < pages) {
                end += offset;
            }
        }
        if (end + 2 > pages) {
            offset = 2 - (pages - end);
            if ((start - offset) > 1) {
                start -= offset;
            }
        }
        if (start == 3) {
            start -= 1;
        }
        if (end + 2 == pages) {
            end += 1;
        }
        let offsetStart = (page - 1) * data.size + 1;
        let offsetEnd = Math.min(data.total, page * data.size);

        if(total == 0){
            offsetStart = offsetEnd = 0;
        }

        let tipOffset = I18n['pager.offset'].replace('${min}', `${offsetStart}`).replace('${max}', `${offsetEnd}`),
            tipTotal = I18n['pager.total'].replace('${total}', `${total}`),
            tipPer = I18n['pager.per.page'],
            tipUnit = I18n['pager.unit'],
            tipJumpTo = I18n['pager.jump.to'],
            tipJumpUnit = I18n['pager.jump.unit'];

        // 跳转，下一页
        let next = page + 1;
        if(next > pages){
            next = pages;
        }
        return {
            pages,
            offsetStart: offsetStart,
            offsetEnd: offsetEnd,
            page,
            start,
            end,
            next,
            tipOffset,
            tipTotal,
            tipPer,
            tipUnit,
            tipJumpTo,
            tipJumpUnit
        };
    },
    '@{fire.event}'() {
        let me = this;
        let node = $('#' + me.id);
        let data = me.updater.get();
        let page = +data.page, size = +data.size;
        let offset = (page - 1) * size;
        node.trigger({
            type: 'change',
            page,
            size,
            offset
        });
    },
    '@{toPage}<click>'(e) {
        e.preventDefault();
        let me = this;
        me.updater.set(e.params);
        me.render();
        me['@{fire.event}']();
    },
    '@{changeSize}<change>'(e) {
        e.stopPropagation();
        let me = this;
        me.updater.set({
            // page: 1,
            size: e.value
        });
        me.render();
        me['@{fire.event}']();
    },
    '@{stop}<change,focusin,focusout>' (e) {
        e.stopPropagation();
    },
    '@{jump}<click>'(e){
        e.stopPropagation();
        let me = this;
        var i = $('#' + me.id + '_jump_input');
        let page = +(i.val());
        if(!Number.isInteger(page)){
            return;
        }
        me.updater.set({
            page: page
        });
        me.render();
        me['@{fire.event}']();

    },
    '@{prevent}<click>'(e) {
        e.preventDefault();
    }
});