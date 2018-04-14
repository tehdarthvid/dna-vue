import { dlog } from '@/utils';

export default {
  setActiveCard(state, card) {
    dlog(`mutation setActiveCard ${card.title}`);
    state.activeCard = card;
  }
};
