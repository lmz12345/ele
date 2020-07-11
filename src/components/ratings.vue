<template>
	<div class="ratings" v-if="obj">
		<!-- 头部 -->
		<div class="ratingstp">
			<!-- 头部左边 -->
			<div class="tplt">
				<p class="p1">3.9</p>
				<p class="p2">综合评分</p>
				<p class="p3">高于周边商家69.2%</p>
			</div>
			<!-- 头部中间 -->
			<div class="tpcen"></div>
			<!-- 头部右边 -->
			<div class="tprg">
				<div class="tprg1">
					<p>服务态度</p>
					<img src="../assets/star.gif"/>
					<span>3.9</span>
				</div>
				<div class="tprg2">
					<p>服务态度</p>
					<img src="../assets/star.gif"/>
					<span>4.0</span>
				</div>
				<div class="tprg3">
					<p>送达时间</p>
					<span>44分钟</span>
				</div>
			</div>
		</div>
		<!-- 内容 -->
		<div class="ratingscen">
			<div class="btn">
				<button class="btn1">全部<span>57</span></button>
				<button class="btn2">满意<span>47</span></button>
				<button class="btn3">不满意<span>10</span></button>
			</div>
			<!-- 下划线 -->
			<div class="hr"></div>
			<!-- 评价 -->
			<div class="pingjia">
				<!-- 标题 -->
				<div class="title">
					<img src="../assets/gou.gif"/>
					<p>只看有内容的评价</p>
				</div>
				<!-- 评论 -->
				<div class="pinglun" v-for="item,index in obj.ratings">
					<div class="pllt">
						<img v-bind:src="item.avatar"></img>
					</div>
					<div class="plrg">
						<div class="plrg1" >
							<p>{{item.username}}</p>
							<p class="p2">2016-07-13 20:33</p>
						</div>
						<div class="plrg2" >
							<img src="../assets/star.gif"/>
							<p>80分钟送达</p>
						</div>
						<div class="plrg3">
							<p >{{item.text}}</p>
						</div>
						<div class="plrg4">
							<img src="../assets/zan.gif"/>
							<div><button>大王香菇卤...</button>
							<button>大王香菇卤...</button>
							<button>大王香菇卤...</button></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 底部购物车 -->
		<!-- <div class="bigbig"> -->
			<div class="bottom">
				<!-- 购物框 -->
				<div class="big" v-on:click="gwcshow">
					<div class="small"><img src="../assets/shopping.gif" alt=""></div>
				</div>
				<div class="con2">￥{{zong}}</div>
				<div class="con3">另需配送费￥4元</div>
				<div class="con4"><p>￥20起送</p></div>
			</div>
			<!-- 购物车添加商品 -->
			<div class="gwccon" v-show="isshow2">
				<div class="food">
					<div class="foodtop">
						<div class="foodtplt" v-on:click="gwchide">购物车</div>
						<div class="foodtprg">清空</div>
					</div>
					<!-- 商品 -->
					<div class="sp" >
						<div class="splt"></div>
						
					</div>
				</div>
			</div>
		<!-- </div> -->
	</div>
</template>

<script>
	export default {
	  // name: 'app',
	    data:function(){
	  	  return {
			  obj:{
				  ask:{
					  
				  }
			  },
			  isshow:false,
			  isshow2:false,
	  	  }
	    },
	    mounted:function(){
	  	  this.axios
	  	  .get('/static/data/data.json')
	  	  .then((response)=>{
	  		  this.obj=response.data;
	  	  })
	  	  .catch((error)=>{
	  		  console.log(error);
	  	  })
	    },
		methods:{
			jiagoushow(items){
				this.isshow=true;
				items.num+=1;
			},
			jiagouhide(items){
				this.isshow=false;
				items.num-=1;
			},
			gwcshow(items){
				this.isshow2=true;
			},
			gwchide(items){
				this.isshow2=false;
			}
		},
		computed:{
			zong(){
				let zongjia=0;
				if(!this.obj.goods){
					return;
				}
				this.obj.goods.forEach((item,index)=>{
					item.foods.forEach((item2,index2)=>{
						zongjia+=item2.num*item2.price;
						// console.log(zongjia);
					})
				})
				// console.log(zongjia);
				return zongjia;
			}
		}
	}
</script>

<style>
	@import url("../assets/css/aaa.css");
	@import url("../assets/css/ratings.css");
	@import url("../assets/css/bottom.css");
</style>
