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
import Photo from './Photo';
import OrderOptions from './OrderOptions';

export default {
  components: {
    Photo,
    OrderOptions,
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.$http.get('http://localhost:9000/api/photos').then(response => (this.items = response.body));
  },
};
</script>
<style>

</style>