var galsslist={
	template: "#galsslist",
	data: function (){
		return {
			glass: [
				{
					src: "images/glass_1.jpg",
					title: "佐腾樱花_ZTYH-001",
					text: "豹纹色",
					show: true
				},
				{
					src: "images/glass_2.jpg",
					title: "佐腾樱花_ZTYH-010",
					text: "蓝色",
					show: true
				},
				{
					src: "images/glass_3.jpg",
					title: "毕加索_55-2062 C6",
					text: "绅士黑",
					show: true
				},

				{
					src: "images/glass_4.jpg",
					title: "毕加索_55-2001 C6",
					text: "绅士黑",
					show: true
				},
				{
					src: "images/glass_5.jpg",
					title: "毕加索_55-2068 C11",
					text: "荧光红",
					show: true
				},
				{
					src: "images/glass_6.jpg",
					title: "毕加索_55-2051 C11",
					text: "荧光红",
					show: true
				},

				{
					src: "images/glass_7.jpg",
					title: "沙漠之鹰_R5152 C16",
					text: "绅士黑",
					show: true
				},
				{
					src: "images/glass_8.jpg",
					title: "沙漠之鹰_R5152 CCG",
					text: "绅士银",
					show: true
				},
				{
					src: "images/glass_9.jpg",
					title: "沙漠之鹰_R5137 C16",
					text: "绅士黑",
					show: true
				},

				{
					src: "images/glass_10.jpg",
					title: "蝙蝠侠_BM95002 C9D",
					text: "绅士黑",
					show: true
				},
				{
					src: "images/glass_11.jpg",
					title: "蝙蝠侠_BM97004 B6",
					text: "绅士银",
					show: true
				},
				{
					src: "images/glass_12.jpg",
					title: "蝙蝠侠_BM97004 B1",
					text: "透明黑",
					show: true
				},
			],
			searchKey: ""
		}
	},
	methods: {
		// 自定义事件，子组件向父组件发送数据
		showGlass: function (index){
			this.$emit("togg",index);
		},
		searchKeywords: function (){
			this.glass.forEach(function (val,index){
				// 先全部显示
				val.show=true;
				var key=val.title.split("_")[0];
				// key不相等，则隐藏
				if(key!=this.searchKey){
					val.show=false;
				}
			},this);
			// 为全部则全部显示
			if(this.searchKey=="全部"){
				this.glass.forEach(function (val,index){
					// 全部显示
					val.show=true;
				});
			}
		}
	},
	// 接收另一组件传递的信息
	created: function (){
		var self=this;
		this.$root.bus.$on("sear",function (val){
			self.searchKey=val;
			self.searchKeywords();
		})
	},
	beforeDestory: function (){
		this.$root.bus.$off("sear");
	}
}