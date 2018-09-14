let Magix = require('magix');
Magix.applyStyle('@index.less');
let Monitor = require('../mx-monitor/index');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        let that = this;
        //初始化时保存一份当前数据的快照
        that.updater.snapshot();
        //该处是否可以由magix自动调用
        that.assign(extra);

        Monitor['@{setup}']();

        that.on('destroy', () => {
            Monitor['@{remove}'](that);
            Monitor['@{teardown}']();

            if (that['@{search.delay.timer}']) {
                clearTimeout(that['@{search.delay.timer}']);
            }
        })
    },
    assign(data) {
        let that = this;
        //赋值前先进行数据变化的检测,首次assign是在init方法中调用,后续的调用是magix自动调用,这个检测主要用于在首次调用后,magix自动调用前有没有进行数据的更新
        let altered = that.updater.altered();

        //你可以在这里对数据data进行加工,然后通过set方法放入到updater中
        that['@{search.key}'] = data.searchKey || ''; //当前选中的key值
        // 上下键切换缓存
        that['@{search.key.bak}'] = that['@{search.key}'];

        that['@{search.value}'] = data.searchValue || ''; //当前填入的搜索内容
        that['@{dis.placeholder}'] = data.placeholder || '';
        that['@{dis.align}'] = data.align || 'left';

        // 多种类型搜索的时候
        let list = [];
        if (data.list) {
            let listText = data.listText || 'text';
            let listValue = data.listValue || 'value';
            try {
                list = (new Function('return ' + data.list))();
            } catch (e) {
                list = data.list
            }
            list = list.map((item) => {
                let tpls = (item.tmpl || ('搜索含有“${content}”的' + item[listText])).split('${content}');
                return {
                    prefix: tpls[0],
                    suffix: tpls[1],
                    text: item[listText],
                    value: item[listValue]
                }
            })
            if (!that['@{dis.placeholder}']) {
                let ts = list.map(item => {
                    return item.text;
                });
                that['@{dis.placeholder}'] = $.unique(ts) .join('/');
            }
        } else {
            if (!that['@{dis.placeholder}']) {
                that['@{dis.placeholder}'] = '搜索';
            }
        }
        that['@{data.list}'] = list;

        that['@{owner.node}'] = $('#' + that.id);
        that.updater.set({
            viewId: that.id,
            list: that['@{data.list}'],
            searchValue: that['@{search.value}'],
            searchKey: that['@{search.key}'],
            placeholder: that['@{dis.placeholder}'],
            align: that['@{dis.align}']
        });

        //如果数据没变化,则设置新的数据后再次检测
        if (!altered) {
            altered = that.updater.altered();
        }

        //如果有变化,则再保存当前的快照,然后返回true告诉magix当前view需要更新
        if (altered) {
            that.updater.snapshot();
            return true;
        }

        //如果数据没变化,则告诉magix当前view不用更新
        return false;
    },
    render() {
        this.updater.digest();
    },
    '@{search}<focusin,keyup,paste>' (e) {
        e.stopPropagation();
        let that = this;
        if (that['@{search.delay.timer}']) {
            clearTimeout(that['@{search.delay.timer}']);
        }

        let show = that.updater.get('show'),
            list = that['@{data.list}'];
        if (e.keyCode == 40 || e.keyCode == 38) {
            // 下移 || 上移
            if(show){
                let idx = -1,
                    searchKey = that['@{search.key}'];
                for (let index = 0; index < list.length; index++) {
                    if(list[index].value == searchKey){
                        idx = index;
                        break;
                    }
                }
                if(e.keyCode == 40){
                    // 下移
                    idx += 1;
                    if(idx >= list.length){
                        idx = 0;
                    }
                }
                if(e.keyCode == 38){
                    // 下移
                    idx -= 1;
                    if(idx < 0){
                        idx = list.length - 1;
                    }
                }
                that.updater.digest({
                    searchKey: that['@{search.key}'] = list[idx].value
                })
            }
        } else if (e.keyCode == 13) {
            // 未选中时，回车默认第一个，已选中的情况下还是当前选项
            if (!that['@{search.key}'] && list && list.length > 0) {
                that['@{search.key}'] = list[0].value;
            }
            that['@{search.key.bak}'] = that['@{search.key}'];
            that['@{search.value}'] = $.trim(e.eventTarget.value);
            that['@{hide}']();
            that['@{fire}']();
        } else{
            that['@{search.delay.timer}'] = setTimeout(that.wrapAsync(() => {
                that['@{search.value}'] = $.trim(e.eventTarget.value);
                that['@{show}']();
            }), 300);
        }

    },
    '@{hide}' () {
        let that = this;
        if(that['@{search.key}'] != that['@{search.key.bak}']){
            // 上下键切换未选择
            that['@{search.key}'] = that['@{search.key.bak}'];
        }

        that.updater.digest({
            searchKey: that['@{search.key}'],
            searchValue: that['@{search.value}'],
            show: false
        })

        Monitor['@{remove}'](that);
    },
    '@{show}' () {
        let that = this;
        that.updater.digest({
            searchKey: that['@{search.key}'],
            searchValue: that['@{search.value}'],
            show: true
        })

        Monitor['@{add}'](that);
    },
    '@{inside}' (node) {
        return Magix.inside(node, this.id);
    },
    '@{stop}<change,focusout>' (e) {
        e.stopPropagation();
    },
    '@{select}<click>' (e) {
        e.stopPropagation();

        let that = this;
        let item = e.params.item;
        that.updater.digest({
            searchKey: that['@{search.key}'] = that['@{search.key.bak}'] = item.value,
            show: false
        })
        that['@{fire}']();
    },
    '@{fire}' () {
        let that = this;
        that['@{owner.node}'].trigger({
            type: 'search',
            searchKey: that['@{search.key}'],
            searchValue: that['@{search.value}']
        })
    }
});