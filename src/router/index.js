import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
import goods from '@/components/goods'
import ratings from '@/components/ratings'
import seller from '@/components/seller'
import xqy from '@/components/xqy'

// import seller1 from '@/views/seller'
// import seller2 from '@/views/seller'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goods',
      component: goods
    },
	{
	  path: '/ratings',
	  name: 'ratings',
	  component: ratings
	},
	{
	  path: '/seller',
	  name: 'seller',
	  component: seller,
	  // 路由的嵌套（子路由）
	  // 子路由不存在根路径  /
	  // children:[
		 //  {
			//   path:'seller1',
			//   component:seller1
		 //  },
		 //  {
			//   path:'seller2',
			//   component:seller2
		 //  }
	  // ]
	  // 路由的多视图
	  // components:{
		 //  default:seller1,
		 //  myview:seller2
	  // }
	},
	{
	  path: '/xqy',
	  component: xqy
	}
  ]
})
