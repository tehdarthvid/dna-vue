<template>
  <div>
    <image-modal/>
    <div v-if="null === activeDeck">
      loading...
    </div>
    <div v-else class="container">
      <card v-for="card in activeDeck" :key="card.title" :data-image="card.bgImageURL">
        <h1 slot="header">{{card.title}}</h1>
        <p slot="content">{{card.date}}</p>
      </card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card';
import ImageModal from '@/components/ImageModal';

import { mapState } from 'vuex';

export default {
  name: 'Deck',
  components: { Card, ImageModal },
  //props: {cardList: { type: Array, default: () => [] }},
  computed: {
    ...mapState(['activeDeck'])
  }
};
</script>


<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
