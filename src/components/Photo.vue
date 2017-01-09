<template>
    <div  v-on:click="openModal">
        <v-card horizontal class="PhotoCards" v-bind:class="getColor()">
            <v-card-row  v-bind:img="photo.path" height="125px"></v-card-row>
            <v-card-column>
                <v-card-text>
                    <p>{{photo.name}}</p>
                </v-card-text>
                <v-card-row actions>
                    <v-btn flat class="secondary--text"><v-icon left>add_shopping_cart</v-icon> Commander </v-btn>
                </v-card-row>
            </v-card-column>
        </v-card>
        <v-modal id="modal">
            coucou !
        </v-modal>
    </div>
</template>
<script>
export default {
  props: ['content', 'index'],
  data() {
    return {
      photo: this.content,
      getColor() {
        switch (this.index % 10) {
          case 0: return ['deep-orange', 'darken-1'];
          case 1: return ['pink', 'darken-1'];
          case 2: return ['amber', 'darken-1'];
          case 3: return ['deep-purple', 'lighten-2'];
          case 4: return ['black', 'darken-1'];
          case 5: return ['yellow', 'lighten-1'];
          case 6: return ['brown', 'darken-1'];
          case 7: return ['grey', 'darken-1'];
          case 8: return ['teal', 'darken-1'];
          case 9:
          default: return ['lime', 'darken-1'];
        }
      },
      openModal: () => {
        console.log('click');
        this.$vuetify.bus.pub('modal:open:modal');
      },
    };
  },
};
</script>
<style lang="scss">
.PhotoCards {
    margin: 1rem;
    color: white;
}
</style>