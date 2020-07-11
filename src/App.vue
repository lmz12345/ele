<template>
	<div id="app">
		<top></top>
		<ul class="ul1">
			<router-link to="/" tag="li" class="li1">商品</router-link>
			<router-link to="/ratings" tag="li" class="li1">评价</router-link>
			<router-link to="/seller" tag="li" class="li1">商家</router-link>
		</ul>
		<!-- <router-link to="/xqy"></router-link> -->
		<!-- <div> -->
			<!-- 默认视图 -->
			<router-view></router-view>
			<!-- 命名视图 -->
			<router-view name="myview"></router-view>
			<!-- <center></center> -->
		<!-- </div> -->
		<!-- <bottom></bottom> -->
	</div>
</template>

<script>
	import top from '@/components/top'
	// import bottom from '@/components/bottom'

export default {
	name: 'App',
	// 注册组件
	components:{
	  top,
	  // bottom
	},
    data:function(){
  	  return {
  		  obj:{
  			  
  		  }
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
    }
}

</script>

<style>
	#app{
		height: 100%;
		width: 100%;
	}
	.ys{
		color: red;
	}
	.ul1{
		position: fixed;
		z-index: 1;
		width: 100%;
		height: 3.4rem;
		top: 11.65rem;
		background: white;
		display: flex;
		justify-content: space-around;
		border-bottom: 1px solid #ccc;
	}
	.li1{
		position: relative;
		z-index: 1;
		list-style: none;
		line-height: 3.4rem;
	}
	.router-link-exact-active{
		color: red;
	}
</style>
