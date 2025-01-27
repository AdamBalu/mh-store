import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/Homepage.vue')
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('./components/molecules/About.vue')
  // },
  {
    path: '/painting/:id',
    name: 'PaintingDetail',
    component: () => import('./views/Painting.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);

app.use(router);

app.mount('#app')
