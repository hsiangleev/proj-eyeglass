
var vm=new Vue({
	el: "#app",
	data: {
		bus: new Vue(),
		showLoad: false,
		faceType: [
			{
				type: "全部",
				isTrue: true
			},
			{
				type: "椭圆脸",
				isTrue: false
			},
			{
				type: "圆形脸",
				isTrue: false
			},
			{
				type: "长形脸",
				isTrue: false
			},
			{
				type: "方形脸",
				isTrue: false
			},
			{
				type: "瓜子脸",
				isTrue: false
			},
			{
				type: "心形脸",
				isTrue: false
			}
		],
		oldIndex: 0,
		smallImg: [
			{
				keywords: "椭圆脸",
				src: "images/model_1.jpg",
				addClass: false
			},
			{
				keywords: "圆形脸",
				src: "images/model_2.jpg",
				addClass: false
			},
			{
				keywords: "椭圆脸",
				src: "images/model_3.jpg",
				addClass: false
			},
			{
				keywords: "圆形脸",
				src: "images/model_4.jpg",
				addClass: false
			},

			{
				keywords: "长形脸",
				src: "images/model_5.jpg",
				addClass: false
			},
			{
				keywords: "方形脸",
				src: "images/model_6.jpg",
				addClass: false
			},
			{
				keywords: "长形脸",
				src: "images/model_7.jpg",
				addClass: false
			},
			{
				keywords: "瓜子脸",
				src: "images/model_8.jpg",
				addClass: false
			},

			{
				keywords: "心形脸",
				src: "images/model_9.jpg",
				addClass: false
			},
			{
				keywords: "方形脸",
				src: "images/model_10.jpg",
				addClass: false
			},
			{
				keywords: "心形脸",
				src: "images/model_11.jpg",
				addClass: false
			},
			{
				keywords: "瓜子脸",
				src: "images/model_12.jpg",
				addClass: false
			}
		],
		isSmall: true,
		bigImg: "images/big_1.jpg",
		ulHeight: "200px",
		isUp: false,
		msg: "收缩",
		timer: null,
		showMask: true,
		moveStyle: {
			top: "136px",
			left: "83px"
		},
		bigGlassImg: "images/glass_1.png",
		showbigGlassImg: false
	},
	methods: {
		// 搜索脸型
		addCurrent: function (index){
			// li样式添加
			this.faceType[index].isTrue=true;
			this.faceType[this.oldIndex].isTrue=false;
			this.oldIndex=index;

			// 搜索脸型
			var type=this.faceType[index].type;
			this.smallImg.forEach(function (val,index){
				// 先都不加class
				val.addClass=false;
				// 若关键字不等于脸型则添加class
				if(val.keywords!=type){
					val.addClass=true;
				}
			});
			// 点击全部，则所有的都不添加class
			if(index==0){
				this.smallImg.forEach(function (val,index){
					// 先都不加class
					val.addClass=false;
				});
			}
		},
		// 隐藏小图，显示大图
		hidden: function (index){
			// 若当前小图没有class，即能点，则可以变大图
			if(!this.smallImg[index].addClass){
				this.isSmall=false;
				this.showMask=false;
				this.bigImg="images/big_"+(index+1)+".jpg";
			}	
		},
		// 隐藏大图，显示小图
		show: function (){
			this.isSmall=true;
			this.showMask=true;
		},
		// 重选与收缩ul
		changeLen: function (){
			this.isUp=!this.isUp;
			var self=this;
			var h=parseInt(this.ulHeight);
			if(this.msg=="收缩"){
				this.msg="展开";
				clearInterval(this.timer);
				this.timer=setInterval(function (){
					h-=5;
					if(h>50){
						self.ulHeight=h+"px";
					}else{
						clearInterval(self.timer);
					}
				}, 12);
			}else{
				this.msg="收缩";
				clearInterval(this.timer);
				this.timer=setInterval(function (){
					h+=5;
					if(h<200){
						self.ulHeight=h+"px";
					}else{
						clearInterval(self.timer);
					}
				}, 12);
			}	
		},
		// 移动眼镜
		moveTo: function (e){
			var self=this;
			e.preventDefault();
			var a=this.$refs["oimg"];
			var b=this.$refs["oneGlass"];	// 0
			var c=this.$refs["bigImg"];		// 0
			var d=this.$refs["left"];
			var dd=this.$el;
			var x=e.clientX-a.offsetLeft-d.offsetLeft-dd.offsetLeft;
			var y=e.clientY-a.offsetTop-d.offsetTop-dd.offsetTop;
			document.onmousemove=function (e){
				var xx=e.clientX-x-d.offsetLeft-dd.offsetLeft;
				var yy=e.clientY-y-d.offsetTop-dd.offsetTop;
				self.moveStyle.left=xx+"px";
				self.moveStyle.top=yy+"px";
			}
			a.onmouseup=function (){
				document.onmousemove=null;
			}
		},
		// 显示眼镜
		// 自定义事件，子组件向父组件发送数据
		showBig: function (index){
			this.bigGlassImg="images/glass_"+(index+1)+".png";
			this.showbigGlassImg=true;
		}
			
	},
	components: {
		"search": search,
		"galsslist": galsslist
	},
	mounted: function (){
		var arr=[];
		var load=0;
		var self=this;
		for(var i=1;i<13;i++){
			arr.push("images/model_"+i+".jpg");
			arr.push("images/glass_"+i+".jpg");
		}
		arr.forEach(function (val,index){
			var img=new Image();
			img.src=val;
			img.onload=function (){
				load++;
				if(load>=arr.length){
					self.showLoad=true;
				}
			}
		});
		
	}

});

