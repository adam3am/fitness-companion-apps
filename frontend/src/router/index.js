import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
import HeroWorkout from '@/views/HeroWorkout'; 
import PersonalWorkout from '@/views/PersonalWorkout'; 
import About from '@/views/About'; 

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/heroes", component: HeroWorkout },
  { path: "/personals", component: PersonalWorkout },
  { path: "/about", component: About }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
