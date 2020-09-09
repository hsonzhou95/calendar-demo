import { createRouter, createWebHistory } from 'vue-router';
import Day from "@/views/Day";
import Demo from "@/views/demo"
const routes = [
  {
    path:"/",
    name:"day",
    component:Demo
  },
  {
    path:"/Month",
    name:"month",
    component:()=>import('../views/Month')
  },
  {
    path:"/Year",
    name:"year",
    component:()=>import('../views/Year')
  },
]

const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
