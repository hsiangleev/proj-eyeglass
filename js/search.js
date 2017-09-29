var search={
	template: "#group",
	data: function (){
		return {
			toggArr: [
				{
					ogroup: [
						{
							text: "全部",
							isTrue: true
						},
						{
							text: "佐腾樱花",
							isTrue: false
						},
						{
							text: "毕加索",
							isTrue: false
						},
						{
							text: "沙漠之鹰",
							isTrue: false
						},
						{
							text: "蝙蝠侠",
							isTrue: false
						},
					],
					oldIndex: 0,
					isShow: false,
					msg: "品牌",
					zindex: 1
				},
				{
					ogroup: [
						{
							text: "全部",
							isTrue: true
						},
						{
							text: "男款",
							isTrue: false
						},
						{
							text: "女款",
							isTrue: false
						},
						{
							text: "通用款",
							isTrue: false
						},
					],
					oldIndex: 0,
					isShow: false,
					msg: "款式",
					zindex: 1
				},
				{
					ogroup: [
						{
							text: "全部",
							isTrue: true
						},
						{
							text: "椭圆脸",
							isTrue: false
						},
						{
							text: "长形脸",
							isTrue: false
						},
						{
							text: "方形脸",
							isTrue: false
						},
						{
							text: "瓜子脸",
							isTrue: false
						},
						{
							text: "心形脸",
							isTrue: false
						},
					],
					oldIndex: 0,
					isShow: false,
					msg: "脸型",
					zindex: 1
				},
				{
					ogroup: [
						{
							text: "全部",
							isTrue: true
						},
						{
							text: "40-49(小码)",
							isTrue: false
						},
						{
							text: "50-53(中码)",
							isTrue: false
						},
						{
							text: "54-57(大码)",
							isTrue: false
						},
					],
					oldIndex: 0,
					isShow: false,
					msg: "型号",
					zindex: 1
				},
				{
					ogroup: [
						{
							text: "全部",
							isTrue: true
						},
						{
							text: "全框",
							isTrue: false
						},
						{
							text: "半框",
							isTrue: false
						},
						{
							text: "无框",
							isTrue: false
						},
						{
							text: "眉框",
							isTrue: false
						},
					],
					oldIndex: 0,
					isShow: false,
					msg: "框型",
					zindex: 1
				},
				{
					ogroup: [
						{
							text: "全部",
							isTrue: true
						},
						{
							text: "金属合金",
							isTrue: false
						},
						{
							text: "板材镜框",
							isTrue: false
						},
						{
							text: "铁架系列",
							isTrue: false
						},
						{
							text: "钛架系列",
							isTrue: false
						},
						{
							text: "记忆框架",
							isTrue: false
						},
					],
					oldIndex: 0,
					isShow: false,
					msg: "材质",
					zindex: 1
				},
				{
					ogroup: [
						{
							text: "全部",
							isTrue: true
						},
						{
							text: "50以下",
							isTrue: false
						},
						{
							text: "50-100",
							isTrue: false
						},
						{
							text: "100-150",
							isTrue: false
						},
						{
							text: "150-200",
							isTrue: false
						},
						{
							text: "200-300",
							isTrue: false
						},
					],
					oldIndex: 0,
					isShow: false,
					msg: "价格",
					zindex: 1
				},
			],
			clickNum: 1
		
		}
	},
	methods: {
		addCurrent: function (index,ind){
			this.toggArr[index].ogroup[ind].isTrue=true;
			this.toggArr[index].msg=this.toggArr[index].ogroup[ind].text;
			this.toggArr[index].ogroup[this.toggArr[index].oldIndex].isTrue=false;
			this.toggArr[index].oldIndex=ind;

		},
		hidden: function (index){
			this.clickNum++;
			this.toggArr[index].isShow=!this.toggArr[index].isShow;
			this.toggArr[index].zindex=this.clickNum;
		},
		allHidden: function (){
			this.toggArr.forEach(function (val,index){
				val.isShow=false;
			})
		},
		// 向另一个组件传递信息
		search: function (){
			var sendMsg=this.toggArr[0].msg;
			this.$root.bus.$emit("sear",sendMsg);
		}
	}

}