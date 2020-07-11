<template>
	<div class="seller" v-if="obj.seller">
		<!-- 头部 -->
		<div class="sellertp">
			<!-- 头部顶部 -->
			<div class="sellertpt">
				<div class="sellertptlt">
					<p>粥品香坊（大运村）</p>
					<div class="bt">
						<img src="../assets/star.gif"/>
						<p>（661）</p>
						<p>月售690单</p>
					</div>
				</div>
				<div class="sellertptrg">
					<img src="../assets/heart.gif"/>
					<p>已收藏</p>
				</div>
			</div>
			<!-- 下划线 -->
			<div class="hr"></div>
			<!-- 头部底部 -->
			<div class="sellerbt">
				<div class="bt1">
					<p class="zt1">起送价</p>
					<p class="zt2">20 <span class="sp1">元</span></p>
				</div>
				<div class="bt1">
					<p class="zt1">商家配送</p>
					<p class="zt2">4 <span class="sp1">元</span></p>
				</div>
				<div class="bt1">
					<p class="zt1">平均配送时间</p>
					<p class="zt2">39 <span class="sp1">分钟</span></p>
				</div>
			</div>
		</div>
		<!-- 公告与活动 -->
		<div class="gonggao">
			<p>公告与活动</p>
			<p class="zt5"><span v-for="item,index in obj.seller.bulletin">{{item}}</span></p>
			<!-- 下划线 -->
			<!-- <div class="hr"></div> -->
			<div class="pai" v-for="item,index in obj.seller.supports">
				<ul>
					<li>
						<!-- 下划线 -->
						<div class="hr"></div>
						<div class="pai2">
							<img src="../assets/decrease_3@2x.png"/>
							<p class="zt3">{{item.description}}</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!-- 商家实景 -->
		<div class="sj">
			<p>商家实景</p>
			<div class="img1">
				<div v-for="item,index in obj.seller.pics">
					<img v-bind:src="item"></img>
				</div>
			</div>
		</div>
		<!-- 商家信息 -->
		<div class="sjxx">
			<p class="title1">商家信息</p>
			<div v-for="item,index in obj.seller.infos">
				<!-- 下划线 -->
				<div class="hr"></div>
				<p class="zt4" >{{item}}</p>
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
	@import url("../assets/css/seller.css");
	@import url("../assets/css/bottom.css");
</style>
