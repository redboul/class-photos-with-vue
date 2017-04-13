<template>
  <div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col" v-for="(item, index) in items">
        <Photo v-bind:content="item" v-bind:index="index" ></Photo>
      </div>
    </div>
    <OrderOptions></OrderOptions>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import Photo from './Photo';
import OrderOptions from './OrderOptions';

export default {
  components: {
    Photo,
    OrderOptions,
  },
  computed: {
    items() {
      return this.$store.getters.pictures;
    },
  },
  created() {
    this.retrievePhotos();
  },
  methods: {
    ...mapActions(['retrievePhotos']),
  },
};
</script>
<style>

</style>