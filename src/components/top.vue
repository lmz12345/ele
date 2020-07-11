<template>
	<div class="top1" v-if="obj.seller">
		<img v-bind:src="obj.seller.avatar" class="bgimg" alt=""></img>
		<div class="bgk">
			<div class="content">
				<div class="conl"><img class="img1" v-bind:src="obj.seller.avatar" alt=""></img></div>
				<div class="conr">
					<div class="conrt">
						<img src="../assets/brand@2x.png" class="img2" alt="">
						<h3>粥品香坊（大运村）</h3>
					</div>
					<div class="conrc"><span>蜂鸟专送/38分钟送达</span></div>
					<div class="conrb">
						<img src="../assets/decrease_1@2x.png" alt="">
						<p>在线支付满28减5，满50减10</p>
						<div class="br" v-on:click="topshow">
							<p>5个 ></p>
						</div>
						<!-- 弹出框 -->
						<div class="yhgg" v-show="isshow">
							<div class="ytp">
								<h3>粥品香坊（大运村）</h3>
								<div>
									<img src="../assets/star36_on@2x.png"/>
									<img src="../assets/star36_on@2x.png"/>
									<img src="../assets/star36_on@2x.png"/>
									<img src="../assets/star36_on@2x.png"/>
									<img src="../assets/star36_off@2x.png"/>
								</div>
							</div>
							<!-- 优惠信息 -->
							<div class="yh">
								<div>
									<div class="gang"></div>
									<h4>优惠信息</h4>
									<div class="gang"></div>
								</div>
								<div class="yhdiv">
									<img src="../assets/decrease_1@2x.png"/>
									<p>在线支付满28减5，满50减10</p>
								</div>
								<div class="yhdiv">
									<img src="../assets/discount_1@2x.png"/>
									<p>VC无限橙果汁全场8折</p>
								</div>
								<div class="yhdiv">
									<img src="../assets/discount_1@2x.png"/>
									<p>单人精彩套餐</p>
								</div>
								<div class="yhdiv">
									<img src="../assets/special_1@2x.png"/>
									<p>该商家支持发票,请下单写好发票抬头</p>
								</div>
								<div class="yhdiv">
									<img src="../assets/special_1@2x.png"/>
									<p>已加入“外卖保”计划,食品安全保障</p>
								</div>
							</div>
							<!-- 商家公告 -->
							<div class="gg">
								<div>
									<div class="gang"></div>
									<h4>商家公告</h4>
									<div class="gang"></div>
								</div>
								<div class="ggdiv">
									<p>
										粥品香坊其烹饪粥料的秘方源于中国千年古法，在融合现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心
										品质深的消费者青睐，发展至今成为粥类引领品牌。是2008年奥运会和2013年园博会制定餐饮服务商。
									</p>
								</div>
								<div v-on:click="hideshow" class="close"><p>X</p></div>
								<!-- <router-link to="/goods" class="close"><p>X</p></router-link> -->
							</div>
						</div>
						<!-- <router-link to="/yhgg" class="br" style="text-decoration: none;"><p>5个 ></p></router-link> -->
					</div>
				</div>
			</div>
			<div class="conb">
				<img src="../assets/bulletin@2x.png" alt=""></img>
				<p ><span v-for="item,index in obj.seller.bulletin">{{item}}</span></p>
			</div>
		</div>
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
			topshow(){
				this.isshow=true;
			},
			hideshow(){
				this.isshow=false;
			}
		}
	}
</script>

<style>
	@import url("../assets/css/aaa.css");
	@import url("../assets/css/top.css");
</style>
