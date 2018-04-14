<template>
<div>
  <image-modal/>
  <div class="container">
    <card v-for="card in cardList" :key="card.title" :data-image="card.bgImageURL">
      <h1 slot="header">{{card.title}}</h1>
      <p slot="content">{{card.date}}</p>
    </card>
  </div>
  </div>
</template>

<script>
import Card from '@/components/Card';
import ImageModal from '@/components/ImageModal';

export default {
  name: 'Deck',
  components: { Card, ImageModal },
  props: {
    cardList: { type: Array, default: () => [] }
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
