export default {
  setActiveCard({ commit }, card) {
    console.log(`action setActiveCard ${card.title}`);
    commit('setActiveCard', card);
  }
};
