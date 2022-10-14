import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import PlayersListVue from '@/pages/PlayersList.vue';
import StartGameVue from '@/pages/StartGame.vue';
import TabsFooter from '@/FooterComponent.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/start'
  },
  {
    path: '/',
    component: TabsFooter,
    children: [
      {
        path: 'start',
        component: StartGameVue
      },
      {
        path: 'players',
        component: PlayersListVue
      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
