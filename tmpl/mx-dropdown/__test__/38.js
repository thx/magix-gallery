let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Base.extend({
    tmpl: '@38.html',
    mixins: [Form, Validator],
    render() {
        let items = [
            {
                "detailUrl": "https://detail.tmall.com/item.htm?id=624139784464",
                "id": 624139784464,
                "imgUrl": "https://img.alicdn.com/imgextra/i3/263817957/O1CN01nuux5f28eM8xAWgJ7-263817957.jpg",
                "name": "韩都衣舍2020秋冬新款韩版女装复古港味宽松ins潮牛仔外套DU9319William Harris",
                "uv": 77506
            },
            {
                "detailUrl": "https://detail.tmall.com/item.htm?id=624139784464",
                "id": 624139784465,
                "imgUrl": "https://img.alicdn.com/imgextra/i3/263817957/O1CN01nuux5f28eM8xAWgJ7-263817957.jpg",
                "name": "韩都衣舍2020秋冬新款韩版女装复古港味宽松ins潮牛仔外套DU9319Mark Perez",
                "uv": 56760
            },
            {
                "detailUrl": "https://detail.tmall.com/item.htm?id=624139784464",
                "id": 624139784466,
                "imgUrl": "https://img.alicdn.com/imgextra/i3/263817957/O1CN01nuux5f28eM8xAWgJ7-263817957.jpg",
                "name": "韩都衣舍2020秋冬新款韩版女装复古港味宽松ins潮牛仔外套DU9319Daniel White",
                "uv": 51132
            },
            {
                "detailUrl": "https://detail.tmall.com/item.htm?id=624139784464",
                "id": 624139784467,
                "imgUrl": "https://img.alicdn.com/imgextra/i3/263817957/O1CN01nuux5f28eM8xAWgJ7-263817957.jpg",
                "name": "韩都衣舍2020秋冬新款韩版女装复古港味宽松ins潮牛仔外套DU9319Laura Perez",
                "uv": 71921
            },
            {
                "detailUrl": "https://detail.tmall.com/item.htm?id=624139784464",
                "id": 624139784468,
                "imgUrl": "https://img.alicdn.com/imgextra/i3/263817957/O1CN01nuux5f28eM8xAWgJ7-263817957.jpg",
                "name": "韩都衣舍2020秋冬新款韩版女装复古港味宽松ins潮牛仔外套DU9319Laura Garcia",
                "uv": 36994
            },
            {
                "detailUrl": "https://detail.tmall.com/item.htm?id=624139784464",
                "id": 624139784469,
                "imgUrl": "https://img.alicdn.com/imgextra/i3/263817957/O1CN01nuux5f28eM8xAWgJ7-263817957.jpg",
                "name": "韩都衣舍2020秋冬新款韩版女装复古港味宽松ins潮牛仔外套DU9319Dorothy Gonzalez",
                "uv": 22457
            },
            {
                "detailUrl": "https://detail.tmall.com/item.htm?id=624139784464",
                "id": 624139784470,
                "imgUrl": "https://img.alicdn.com/imgextra/i3/263817957/O1CN01nuux5f28eM8xAWgJ7-263817957.jpg",
                "name": "韩都衣舍2020秋冬新款韩版女装复古港味宽松ins潮牛仔外套DU9319Sandra Perez",
                "uv": 52472
            },
            {
                "detailUrl": "https://detail.tmall.com/item.htm?id=624139784464",
                "id": 624139784471,
                "imgUrl": "https://img.alicdn.com/imgextra/i3/263817957/O1CN01nuux5f28eM8xAWgJ7-263817957.jpg",
                "name": "韩都衣舍2020秋冬新款韩版女装复古港味宽松ins潮牛仔外套DU9319Steven Johnson",
                "uv": 97306
            },
            {
                "detailUrl": "https://detail.tmall.com/item.htm?id=624139784464",
                "id": 624139784472,
                "imgUrl": "https://img.alicdn.com/imgextra/i3/263817957/O1CN01nuux5f28eM8xAWgJ7-263817957.jpg",
                "name": "韩都衣舍2020秋冬新款韩版女装复古港味宽松ins潮牛仔外套DU9319Jessica Taylor",
                "uv": 90383
            },
            {
                "detailUrl": "https://detail.tmall.com/item.htm?id=624139784464",
                "id": 624139784473,
                "imgUrl": "https://img.alicdn.com/imgextra/i3/263817957/O1CN01nuux5f28eM8xAWgJ7-263817957.jpg",
                "name": "韩都衣舍2020秋冬新款韩版女装复古港味宽松ins潮牛仔外套DU9319Carol Jones",
                "uv": 83120
            },
            {
                "detailUrl": "https://detail.tmall.com/item.htm?id=624139784464",
                "id": 624139784474,
                "imgUrl": "https://img.alicdn.com/imgextra/i3/263817957/O1CN01nuux5f28eM8xAWgJ7-263817957.jpg",
                "name": "韩都衣舍2020秋冬新款韩版女装复古港味宽松ins潮牛仔外套DU9319Anna Gonzalez",
                "uv": 95847
            },
            {
                "detailUrl": "https://detail.tmall.com/item.htm?id=624139784464",
                "id": 624139784475,
                "imgUrl": "https://img.alicdn.com/imgextra/i3/263817957/O1CN01nuux5f28eM8xAWgJ7-263817957.jpg",
                "name": "韩都衣舍2020秋冬新款韩版女装复古港味宽松ins潮牛仔外套DU9319Patricia Anderson",
                "uv": 32560
            },
            {
                "detailUrl": "https://detail.tmall.com/item.htm?id=624139784464",
                "id": 624139784476,
                "imgUrl": "https://img.alicdn.com/imgextra/i3/263817957/O1CN01nuux5f28eM8xAWgJ7-263817957.jpg",
                "name": "韩都衣舍2020秋冬新款韩版女装复古港味宽松ins潮牛仔外套DU9319Melissa Martinez",
                "uv": 32801
            },
            {
                "detailUrl": "https://detail.tmall.com/item.htm?id=624139784464",
                "id": 624139784477,
                "imgUrl": "https://img.alicdn.com/imgextra/i3/263817957/O1CN01nuux5f28eM8xAWgJ7-263817957.jpg",
                "name": "韩都衣舍2020秋冬新款韩版女装复古港味宽松ins潮牛仔外套DU9319Ronald Thomas",
                "uv": 88694
            },
            {
                "detailUrl": "https://detail.tmall.com/item.htm?id=624139784464",
                "id": 624139784478,
                "imgUrl": "https://img.alicdn.com/imgextra/i3/263817957/O1CN01nuux5f28eM8xAWgJ7-263817957.jpg",
                "name": "韩都衣舍2020秋冬新款韩版女装复古港味宽松ins潮牛仔外套DU9319Frank Jones",
                "uv": 75378
            },
            {
                "detailUrl": "https://detail.tmall.com/item.htm?id=624139784464",
                "id": 624139784479,
                "imgUrl": "https://img.alicdn.com/imgextra/i3/263817957/O1CN01nuux5f28eM8xAWgJ7-263817957.jpg",
                "name": "韩都衣舍2020秋冬新款韩版女装复古港味宽松ins潮牛仔外套DU9319Betty Martinez",
                "uv": 61149
            },
            {
                "detailUrl": "https://detail.tmall.com/item.htm?id=624139784464",
                "id": 624139784480,
                "imgUrl": "https://img.alicdn.com/imgextra/i3/263817957/O1CN01nuux5f28eM8xAWgJ7-263817957.jpg",
                "name": "韩都衣舍2020秋冬新款韩版女装复古港味宽松ins潮牛仔外套DU9319William Martinez",
                "uv": 43414
            },
            {
                "detailUrl": "https://detail.tmall.com/item.htm?id=624139784464",
                "id": 624139784481,
                "imgUrl": "https://img.alicdn.com/imgextra/i3/263817957/O1CN01nuux5f28eM8xAWgJ7-263817957.jpg",
                "name": "韩都衣舍2020秋冬新款韩版女装复古港味宽松ins潮牛仔外套DU9319Mary Martinez",
                "uv": 89104
            },
            {
                "detailUrl": "https://detail.tmall.com/item.htm?id=624139784464",
                "id": 624139784482,
                "imgUrl": "https://img.alicdn.com/imgextra/i3/263817957/O1CN01nuux5f28eM8xAWgJ7-263817957.jpg",
                "name": "韩都衣舍2020秋冬新款韩版女装复古港味宽松ins潮牛仔外套DU9319Helen Taylor",
                "uv": 79370
            },
            {
                "detailUrl": "https://detail.tmall.com/item.htm?id=624139784464",
                "id": 624139784483,
                "imgUrl": "https://img.alicdn.com/imgextra/i3/263817957/O1CN01nuux5f28eM8xAWgJ7-263817957.jpg",
                "name": "韩都衣舍2020秋冬新款韩版女装复古港味宽松ins潮牛仔外套DU9319Carol Robinson",
                "uv": 38376
            }
        ];

        let list1 = [], list2 = [];
        for (let i = 0; i < 4; i++) {
            list1.push({
                value: i,
                text: `选项${i}`
            })
            list2.push({
                value: i,
                text: `选项${i}`
            })
        }
        this.updater.digest({
            list1,
            selected1: list1[0].value,
            list2,
            selected2: list2[0].value,
            items,
            itemId: '',
        });
    }
});