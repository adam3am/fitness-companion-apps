import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import HeroWorkout from '../views/HeroWorkout.vue'; 
import PersonalWorkout from '../views/PersonalWorkout.vue'; 

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroWorkout,
  },
  {
    path: '/heroes/:heroId',
    name: 'HeroId',
    component: HeroWorkout,
  },
  {
    path: '/personals',
    name: 'Personals',
    component: PersonalWorkout,
  },
  {
    path: '/personals/:personalId',
    name: 'personalId',
    component: PersonalWorkout,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
