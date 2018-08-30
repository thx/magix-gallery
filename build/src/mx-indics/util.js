/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-indics/util",[],(require,exports,module)=>{
/**/

// /**
//  * 报表接口数据规范
//  * 		所有的钱单元分 double
//  * 		所有的百分比已乘以100 percent
//  * 		量 整数 int
//  * 0 统一显示为 -
//  */
// let Magix = require('magix');
// let Accounting = require('accounting');
// let $ = require('$');
// let All = Magix.config('zs_scaffold.all')
// let Empty = All.empty;
// let Formats = {
// 	int: (value) => {
// 		return value ? Accounting.formatNumber(value, 0) : Empty;
// 	},
// 	double: (value) => {
// 		if (!value) {
// 			return Empty;
// 		}
// 		return Accounting.formatNumber((parseFloat(value) / 100), 2);
// 	},
// 	percent: (value) => {
// 		if (!value) {
// 			return Empty;
// 		}
// 		return Accounting.formatNumber(value, 2) + '%';
// 	}
// }
// let Display = (value) => {
// 	if (value == Empty) {
// 		return value;
// 	}
// 	let match = value.split('.');
// 	let result = '<span class="fontsize-20">' + match[0] + '</span>';
// 	if (match[1]) {
// 		result += '.<span class="fontsize-14">' + match[1] + '</span>';
// 	}
// 	return result;
// }
// let Vs = (a, b) => {
// 	if (a == undefined) {
// 		a = 0;
// 	}
// 	if (b == undefined) {
// 		b = 0;
// 	}
// 	if (a == 0 || b == 0 || a == b) {
// 		return '';
// 	}
// 	let percent = (Math.abs(a - b) / b * 100).toFixed(0);
// 	if (a > b) {
// 		return `<span class="color-red">+ ${percent}%</span>`;
// 	} else {
// 		return `<span class="color-green">- ${percent}%</span>`;
// 	}
// }
// let Fields = [{
// 	key: 'cost',
// 	label: '消耗',
// 	unit: '元',
// 	type: 'double',
// 	tip: '提示提示提示',
// 	default: true
// }, {
// 	key: 'impression',
// 	label: '展现量',
// 	type: 'int',
// 	default: true
// }, {
// 	key: 'click',
// 	label: '点击量',
// 	type: 'int',
// 	default: true
// }, {
// 	key: 'ctr',
// 	label: '点击率',
// 	type: 'percent',
// 	default: true
// }, {
// 	key: 'cpc',
// 	label: '平均点击单价',
// 	unit: '元',
// 	type: 'double',
// 	default: true
// }, {
// 	key: 'coverage',
// 	label: '点击转化率',
// 	type: 'percent',
// 	default: true
// }, {
// 	key: 'transactionShippingTotal',
// 	label: '成交笔数',
// 	type: 'int',
// 	default: true
// }, {
// 	key: 'transactionTotal',
// 	label: '成交金额',
// 	unit: '元',
// 	type: 'double',
// 	default: true
// }, {
// 	key: 'cartTotal',
// 	label: '总加购数',
// 	type: 'int',
// 	default: true
// }, {
// 	key: 'favItemTotal',
// 	label: '收藏宝贝量',
// 	type: 'int',
// 	default: true
// }, {
// 	key: 'favShopTotal',
// 	label: '收藏店铺量',
// 	type: 'int',
// 	default: true
// }, {
// 	key: 'favTotal',
// 	label: '总收藏数',
// 	type: 'int'
// }, {
// 	key: 'directCartTotal',
// 	label: '直接购物车',
// 	type: 'int'
// }, {
// 	key: 'directTransaction',
// 	label: '直接成交金额',
// 	type: 'double'
// }, {
// 	key: 'directTransactionShipping',
// 	label: '直接成交笔数',
// 	type: 'int'
// }, {
// 	key: 'indirectCartTotal',
// 	label: '间接购物车',
// 	type: 'int'
// }, {
// 	key: 'indirectTransaction',
// 	label: '间接成交金额',
// 	type: 'double'
// }, {
// 	key: 'indirectTransactionShipping',
// 	label: '间接成交笔数',
// 	type: 'int'
// }, {
// 	key: 'roi',
// 	label: '投入产出比',
// 	type: 'double',
// 	default: true
// }, {
// 	key: 'cpm',
// 	label: '千次展示成本',
// 	type: 'double'
// }]
// let Defaults = [],
// 	DefaultKeys = [];
// Fields.forEach(field => {
// 	field.vsFn = Vs;
// 	field.displayFn = Display;
// 	field.formatFn = Formats[field.type];
// 	if (field.default) {
// 		Defaults.push(field);
// 		DefaultKeys.push(field.key);
// 	}
// })
// let FieldMap = Magix.toMap(Fields, 'key');
// let UserInfo = Magix.config('zs_scaffold.user')
// // 需要保留配置数据的  info.json memberConfig 保留配置的参数
// let MemberConfigMap = {
// 	crabIndex: 1, //横向管理汇总报表
// 	crabCampaign: 2, //横向管理计划列表
// 	crabAdgroup: 3, //横向管理单元列表
// 	crabTarget: 4, //横向管理定向列表
// 	crabAdzone: 5, //横向管理资源位列表
// 	crabCreative: 6, //横向管理创意列表
// 	reportIndex: 7
// }
// module.exports = {
// 	getAllFields() {
// 		//所有的指标
// 		return $.extend(true, [], Fields);
// 	},
// 	getFieldMap() {
// 		// 所有指标map
// 		return $.extend(true, {}, FieldMap);
// 	},
// 	getDefaults() {
// 		//默认指标
// 		return $.extend(true, [], Defaults);
// 	},
// 	getDefaultKeys() {
// 		//默认指标
// 		return $.extend(true, [], DefaultKeys);
// 	},
// 	getFields(selectedKeys) {
// 		// 根据选中的key值返回对应的field详情
// 		let selectedFields = [];
// 		selectedKeys.forEach(selectedKey => {
// 			selectedFields.push(FieldMap[selectedKey]);
// 		})
// 		return $.extend(true, [], selectedFields);
// 	},
// 	setMemberConfig(pageKey, selectedKeys) {
// 		// 需要调用接口写入用户信息保存用户配置的
// 		// 此处只是写入了全局UserInfo中
// 		let configType = MemberConfigMap[pageKey],
// 			config = selectedKeys.join(',');
// 		UserInfo.memberConfigs = UserInfo.memberConfigs || [];
// 		let has = false;
// 		for (var i = 0; i < UserInfo.memberConfigs.length; i++) {
// 			if (UserInfo.memberConfigs[i].configType == configType) {
// 				UserInfo.memberConfigs[i].config = config;
// 				has = true;
// 			}
// 		}
// 		if (!has) {
// 			UserInfo.memberConfigs.push({
// 				config,
// 				configType
// 			})
// 		}
// 	},
// 	getMemberConfig(pageKey) {
// 		let configType = MemberConfigMap[pageKey];
// 		let memberConfigs = (UserInfo.memberConfigs || []);
// 		let memberConfig = {};
// 		for (var i = 0; i < memberConfigs.length; i++) {
// 			if (memberConfigs[i].configType == configType) {
// 				memberConfig = memberConfigs[i];
// 				break;
// 			}
// 		}
// 		let selectedKeys = DefaultKeys;
// 		if (memberConfig.config) {
// 			selectedKeys = memberConfig.config.split(',');
// 		}
// 		return selectedKeys;
// 	}
// }

});