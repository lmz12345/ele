<template>
	<div class="goods" v-if="obj">
		<!-- 侧边栏 -->
		<div class="left">
			<ul v-for="item,index in obj.goods">
				<li><a :href="'#'+index">{{item.name}}</a></li>
			</ul>
		</div>
		<!-- 右边内容 -->
		<div class="right">
			<!-- 右边头部 -->
			<ul class="rgtop">
				<li v-for="item,index in obj.goods"> 
					<!-- 上标题 -->
					<div class="title" :id="index"><p>{{item.name}}</p></div>
					<!-- 底部内容 -->
					<div class="center" v-for="items in item.foods">
						<!-- 左边 -->
						<div class="cenlt">
							<router-link to="/xqy"><img v-bind:src="items.image" class="zb" alt=""></img></router-link>
						</div>
						<!-- 右边 -->
						<div class="cenrg">
							<div class="div1" >{{items.name}}</div>
							<div class="div2">{{items.description}}</div>
							<div class="div2">月售1132份  好评率100%</div>
							<div class="div4-0">
								<div class="div4">
									<p class="p1">￥{{items.price}}</p>
									<p class="p2">￥28</p>
								</div>
								<div class="div5">
									<div class="show" v-show="items.num>0?true:false">
										<div class="jian" v-on:click="jiagouhide(items)"><p>-</p></div>
										<span>{{items.num}}</span>
									</div>
									<div class="jia" v-on:click="jiagoushow(items)"><p>+</p></div>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<!-- 底部购物车 -->
		<!-- <div class="bigbig"> -->
			<div class="bottom">
				<!-- 购物框 -->
				<div class="big" v-on:click="gwcshow">
					<div v-show="shuliang>0?true:false">
						<div class="smsm" v-show="isshow3"><p>{{shuliang}}</p></div>
					</div>
					<div class="small"><img src="../assets/shopping.gif" alt=""></div>
				</div>
				<div class="con2">￥{{zong}}</div>
				<div class="con3">另需配送费￥4元</div>
				<div class="con4"><p>￥20起送</p></div>
				<div class="con4-1" v-show="shuliang>0?true:false">
					<div class="con4-0" v-show="isshow4"><p>去结算</p></div>
				</div>
			</div>
			<!-- 购物车添加商品 -->
			<div class="gwccon" v-show="isshow2">
				<div class="food">
					<div class="foodtop">
						<div class="foodtplt" v-on:click="gwchide">购物车</div>
						<div class="foodtprg" @click="empty()">清空</div>
					</div>
					<!-- 商品 -->
					<div class="sp">
						<div class="splt" v-for="item,index in gwcList" v-show="item.num>0?true:false">
							<p>{{item.name}}</p>
							<div class="div6">
								<p class="z1">￥{{item.price}}</p>
								<div class="show2">
									<div class="jian2" v-on:click="jiagouhide(item)"><p>-</p></div>
									<span>{{item.num}}</span>
								</div>
								<div class="jia2" v-on:click="jiagoushow(item)"><p>+</p></div>
							</div>
						</div>
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
			  isshow3:false,
			  isshow4:false,
			  gwcList:[],
			 
			  	
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
				this.isshow3=true;
				this.isshow4=true;
				items.num+=1;
				//添加到购物车
				this.gwcList.push(items);
			},
			jiagouhide(items){
				this.isshow=false;
				items.num-=1;
			},
			jiagoushow2(item){
				this.isshow=true;
				this.isshow3=true;
				this.isshow4=true;
				items.num+=1;
				//添加到购物车
				this.gwcList.push(item);
			},
			gwcshow(items){
				this.isshow2=true;
			},
			gwchide(items){
				this.isshow2=false;
			},
			empty(){
				this.spshow=false;
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
					})
				})
				return zongjia;
			},
			shuliang(){
				let geshu=0;
				if(!this.obj.goods){
					return;
				}
				this.obj.goods.forEach((item,index)=>{
					item.foods.forEach((item2,index2)=>{
						geshu+=item2.num;
					})
				})
				return geshu;
			}
		}
	}
</script>

<style>
	@import url("../assets/css/aaa.css");
	@import url("../assets/css/goods.css");
	@import url("../assets/css/bottom.css");
</style>
