import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import './scss/app.scss'

Vue.use(VueRouter);

import Home from './components/Home.vue';

Vue.config.productionTip = false

const router = new VueRouter({
  routes:[
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
});

new Vue({
  render: h => h(App),
  component: {App},
  router: router
}).$mount('#app')
