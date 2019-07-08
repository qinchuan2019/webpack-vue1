import VueRouter from 'vue-router'
import account from './main/Account.vue'
import goodList from './main/GoodList.vue'

import login from './subcom/Login.vue'
import register from './subcom/Register.vue'

var router = new VueRouter({
  routes:[
    {
      path:'/account',
      component:account,
      children:[
        {
          path:'login',component:login
        },
        {
          path:'register',component:register
        }
      ]
    },
    {
      path:'/goodList',component:goodList
    }
  ]
})

export default router;