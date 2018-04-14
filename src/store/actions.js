import { dlog } from '@/utils';

export default {
  setActiveCard({ commit }, card) {
    dlog(`action setActiveCard ${card.title}`);
    commit('setActiveCard', card);
  }
};
