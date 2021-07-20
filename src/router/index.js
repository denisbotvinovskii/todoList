import { createRouter, createWebHistory } from 'vue-router'
import Todo from '../components/Todo.vue'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Registration from '../components/Registration.vue'
import Main from '../components/Main.vue'




const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { auth: true }

  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo,
    meta: { auth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/',
    name: 'Main',
    component: Main
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
