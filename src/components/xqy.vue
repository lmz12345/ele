<template>
	<div class="xqy" v-show="isshow" v-if="obj.seller">
		<div class="xqytp">
			<router-link to="/goods" class="fan"><p><</p></router-link>
			<img src="http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"/>
			<h4>皮蛋瘦肉粥</h4>
			<p>月售1132份 好评率100%</p>
			<div>
				<p class="p1">￥24</p>
				<p class="p2">￥28</p>
				<button>加入购物车</button>
			</div>
		</div>
		<!-- 商品介绍 -->
		<div class="spjs">
			<p>商品介绍</p>
			<p class="zt5"><span v-for="item,index in obj.seller.bulletin">{{item}}</span></p>
		</div>
		<!-- 商品评价 -->
		<div class="sppj">
			<p>商品评价</p>
			<div class="btn">
				<button class="btn1">全部<span>57</span></button>
				<button class="btn2">推荐<span>47</span></button>
				<button class="btn3">吐槽<span>10</span></button>
			</div>
			<!-- 下划线 -->
			<div class="hr"></div>
			<!-- 评价 -->
			<div class="pj">
				<!-- 标题 -->
				<div class="tt">
					<img src="../assets/gou.gif"/>
					<p>只看有内容的评价</p>
				</div>
				<!-- 评论 -->
				<div class="pl" v-for="item,index in obj.ratings">
					<!-- 评论左边 -->
					<div class="plzuo">
						<div class="plzuo1" >
							<p class="p2">2016-07-13 20:33</p>
						</div>
						<div class="plzuo2">
							<img src="../assets/zan.gif"/>
							<p >{{item.text}}</p>
						</div>
					</div>
					<!-- 评论右边 -->
					<div class="plyou">
						<div class="plyou1" >
							<p>{{item.username}}</p>
							<!-- <p class="p2">2016-07-13 20:33</p> -->
							<img v-bind:src="item.avatar"></img>
						</div>
					</div>
				</div>
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
			   isshow:true,
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
			xqyhide(){
				this.isshow=false;
			}
		}
	}
</script>

<style>
	@import url("../assets/css/aaa.css");
	@import url("../assets/css/xqy.css");
</style>
