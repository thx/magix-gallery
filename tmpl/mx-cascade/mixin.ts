export = {
    '@{get}'(selectedValue) {
        let { valueKey, textKey, parentKey, placeholder, map, list } = this.updater.get();

        let selectedTexts = [],
            selectedValues = [],
            groups = [];

        // 恢复默认态
        let _end = (item) => {
            item.cur = false;
            item.hover = false;
            item.hide = false;
            if (item.children && item.children.length) {
                item.children.forEach(child => {
                    _end(child);
                })
            }
        }
        list.forEach(item => {
            _end(item);
        });

        if (selectedValue === '' || selectedValue === undefined || selectedValue === null || !map[selectedValue]) {
            // 1. 未选中
            // 2. 选中值不在可选列表中
            selectedValue = '';
            selectedValues = [];
            selectedTexts = [placeholder];
            list.forEach(item => {
                item.cur = item[valueKey] === '';
            });
            groups = [list];
        } else {
            // 已选中
            let _loop = (v) => {
                let i = map[v];
                selectedValues.unshift(i[valueKey] + '');
                selectedTexts.unshift(i[textKey]);
                if (i[parentKey] === '' || i[parentKey] === undefined || i[parentKey] === null) {
                    // 根节点
                    i.cur = true;
                    groups.unshift(list);
                } else {
                    i.cur = true;
                    let siblings = map[i[parentKey]].children;
                    groups.unshift(siblings);
                    _loop(i[parentKey]);
                }
            }
            _loop(selectedValue);
        }

        return {
            groups,
            selectedValues,
            selectedTexts,
            selectedValue,
            selectedText: selectedTexts.join('/') // 结果框显示的拼接文案
        }
    },
}