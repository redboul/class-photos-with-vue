<template>
  <v-row>
    <v-col xs12 sm6 md4 lg3 v-for="(item, index) in items">
        <div >
            <Photo v-bind:content="item" v-bind:index="index"></Photo>
        </div>
    </v-col>
  </v-row>
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