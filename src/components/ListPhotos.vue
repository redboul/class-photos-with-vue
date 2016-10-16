<template>
    <div class="ListPhotos">
        <div v-for="item in items">
            <Photo v-bind:content="item"></Photo>
        </div>
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