import axios from 'axios';
import { dlog, error } from '@/utils';

export default {
  setActiveCard({ commit }, card) {
    dlog(`action setActiveCard ${card.title}`);
    commit('setActiveCard', card);
  },
  setActiveDeck({ commit }, cards) {
    dlog(`action setActiveDeck ${cards.length()}`);
    commit('setActiveDeck', cards);
  },
  initStore({ commit }) {
    dlog(`action initStore`);
    axios
      .get(
        `https://us-central1-playground-dna.cloudfunctions.net/api/graphql/?query={cards%20{title%20bgImageURL%20date}}`
      )
      .then(response => {
        dlog(`initStore promise then`);
        commit(`setActiveDeck`, response.data.data.cards);
      })
      .catch(e => {
        error(`initStore promise catch ${e}`);
      });
  }
};
