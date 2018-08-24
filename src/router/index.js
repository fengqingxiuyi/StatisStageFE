import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/module/HelloWorld'
import ClickNumVue from '@/components/module/ClickNumVue.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'ClickNumVue',
      component: ClickNumVue
    }
  ]
})
