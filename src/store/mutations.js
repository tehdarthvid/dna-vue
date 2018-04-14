export default {
  setActiveCard(state, card) {
    console.log(`mutation setActiveCard ${card.title}`);
    state.activeCard = card;
  }
};
