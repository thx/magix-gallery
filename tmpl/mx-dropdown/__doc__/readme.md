## 下拉框组件

> 该组件包含“单选、多选”两个子组件。


### 单选下拉框

#### 使用

<a href="https://magix-components.github.io/magix-components/#!/mx-dropdown/index" target="_blank">在线示例</a>

```html
<mx-view path="app/gallery/mx-dropdown/index"
    searchbox="true"
    empty-text="请选择日期"
    mx-change="showWeek()"
    class="fl" style="width:150px;">
    <item value="mon">周一</item>
    <item value="wed">周三</item>
    <item value="thu">周四</item>
    <item value="fri">周五</item>
    <item value="sat">周六</item>
</mx-view>
```

或

```html
<mx-view path="app/gallery/mx-dropdown/index"
    searchbox="true"
    empty-text="请选择用户"
    text-key="name"
    value-key="id"
    selected="<%@ userSelected %>"
    list="<%@ userList %>"
    mx-change="showUser()"
    class="fl" style="width:200px;">
</mx-view>
```

```js
let Magix = require('magix');
let GTip = require('app/gallery/mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest({
            userList: [{
                name: 'xinglie',
                id: 58782
            }, {
                name: 'xinglie1',
                id: 587821
            }, {
                name: 'xinglie2',
                id: 587822
            }, {
                name: 'xinglie3',
                id: 587823
            }, {
                name: 'xinglie4',
                id: 587824
            }, {
                name: 'xinglie5',
                id: 587825
            }, {
                name: 'xinglie6',
                id: 587826
            }, {
                name: 'xinglie7',
                id: 587827
            }, {
                name: 'xinglie8',
                id: 587828
            }, {
                name: 'xinglie9',
                id: 587829
            }],
            userSelected: 587828
        });
    },
    'showUser<change>' (e) {
        this.gtipRB('name:' + e.text + ',id:' + e.value);
    }
});
```

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| list    | 列表数组，可为简单数组或[1,2,3]或对象数组，如[{id:1,text:'a'}] | array |  |
| textKey     | 当列表中的项为对象时，渲染text时读取的key | string |  |
| valueKey     | 当列表中的项为对象时，渲染value时读取的key | string |  |
| searchbox     | 是否包含搜索框 | boolean | false |
| disabled     | 是否禁用 | boolean | false |
| emptyText     | 空值 | string | &nbsp; |
| selected     | 选中的值 | string | &nbsp; |

#### event
#### change 下拉框选项变化时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| item | any | 选中的数据对象 |
| keys | object | 包含textKey和valueKey的对象 |
| value | any | 选中值 |
| text | string | 选中文本 |

-----

### 多选下拉框

#### 使用

<a href="https://magix-components.github.io/magix-components/#!/mx-dropdown/index" target="_blank">在线示例</a>

```html
<mx-view path="app/gallery/mx-dropdown/multiple"
    searchbox="true"
    empty-text="请选择日期"
    mx-change="showWeeks()"
    class="fl" style="width:150px;">
    <item value="mon">周一</item>
    <item value="wed">周三</item>
    <item value="thu">周四</item>
    <item value="fri">周五</item>
    <item value="sat">周六</item>
</mx-view>
```

或

```html
<mx-view path="app/gallery/mx-dropdown/multiple"
    searchbox="true"
    empty-text="请选择用户"
    text-key="name"
    value-key="id"
    selected="<%@ usersSelected %>"
    list="<%@ userList %>"
    mx-change="showUsers()"
    class="fl" style="width:200px;">
</mx-view>
```

```js
let Magix = require('magix');
let GTip = require('app/gallery/mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest({
            userList: [{
                name: 'xinglie',
                id: 58782
            }, {
                name: 'xinglie1',
                id: 587821
            }, {
                name: 'xinglie2',
                id: 587822
            }, {
                name: 'xinglie3',
                id: 587823
            }, {
                name: 'xinglie4',
                id: 587824
            }, {
                name: 'xinglie5',
                id: 587825
            }, {
                name: 'xinglie6',
                id: 587826
            }, {
                name: 'xinglie7',
                id: 587827
            }, {
                name: 'xinglie8',
                id: 587828
            }, {
                name: 'xinglie9',
                id: 587829
            }],
            usersSelected: [587828,587829]
        });
    },
    'showUsers<change>' (e) {
        this.gtipRB('user ids:' + e.values);
    }
});
```

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| list    | 列表数组，可为简单数组或[1,2,3]或对象数组，如[{id:1,text:'a'}] | array |  |
| textKey     | 当列表中的项为对象时，渲染text时读取的key | string |  |
| valueKey     | 当列表中的项为对象时，渲染value时读取的key | string |  |
| searchbox     | 是否包含搜索框 | boolean | false |
| disabled     | 是否禁用 | boolean | false |
| emptyText     | 空值 | string | &nbsp; |
| selected     | 逗号分割的选中的值 | string | &nbsp; |

#### event
#### change 下拉框选项变化时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| keys | object | 包含textKey和valueKey的对象 |
| values | array | 选中值集合 |




