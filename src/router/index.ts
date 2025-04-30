import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import EducationView from '../views/EducationView.vue'
import ProjectView from '../views/AllprojectsView.vue'
import AllcertificatesView from '../views/AllcertificatesView.vue'
import ContackView from '../views/ContackView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuView,
    },
    {
      path: '/education',
      name: 'education',
      component: EducationView,
    },
    {
      path: '/all-project',
      name: 'all-proejct',
      component: ProjectView,
    },
    {
      path: '/certificates',
      name: 'certificates',
      component: AllcertificatesView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContackView,
    },
  ],
})

export default router
