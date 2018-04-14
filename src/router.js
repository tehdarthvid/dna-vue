import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home';
import About from './views/About';

import Deck from '@/views/Deck';

import testCardList from '@/constants/testCardList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/',
      name: 'root',
      component: Deck,
      props: { cardList: testCardList }
    }
  ]
});
