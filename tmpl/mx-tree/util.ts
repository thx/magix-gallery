import Magix from 'magix';
export default {
    listToTree: (list, id, pId) => {
        list = list || [];
        let map = {},
            listMap = {},
            rootList = [];
        for (let i = 0, max = list.length; i < max; i++) {
            let one = Magix.mix({}, list[i]);
            map[one[id]] = one;
            if (listMap[one[id]]) {
                one.children = listMap[one[id]];
            }
            if (Magix.has(one, pId) && one[pId] !== '') {
                if (map[one[pId]]) {
                    let c = map[one[pId]].children || (map[one[pId]].children = []);
                    c.push(one);
                } else {
                    if (!listMap[one[pId]]) listMap[one[pId]] = [one];
                    else listMap[one[pId]].push(one);
                }
            } else {
                rootList.push(one);
            }
        }
        return {
            list: rootList,
            map
        };
    }
}