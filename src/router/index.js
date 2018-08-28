import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/module/HelloWorld'
import ClickNumVue from '@/components/module/ClickNumVue.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/statisstagefe/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/statisstagefe/',
      name: 'ClickNumVue',
      component: ClickNumVue
    }
  ]
})
