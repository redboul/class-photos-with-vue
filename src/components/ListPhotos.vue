<template>
    <div >
        <Photo v-bind:content="item" v-bind:index="index" v-for="(item, index) in items"></Photo>
    </div>
</template>
<script>
import Photo from './Photo';

export default {
  components: {
    Photo,
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