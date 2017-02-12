<template>
   <!-- <div>
        <v-card horizontal class="PhotoCards" v-bind:class="getColor()">
            <v-card-row  v-bind:img="photo.path" height="125px"></v-card-row>
            <v-card-column>
                <v-card-text>
                    <p>{{photo.name}}</p>
                </v-card-text>
                <v-card-row actions>
                    <v-btn flat v-modal:modal   class="secondary--text"><v-icon left>add_shopping_cart</v-icon> Commander </v-btn>
                </v-card-row>
            </v-card-column>
        </v-card> -->
    <div class="demo-card-event mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title mdl-card--expand">
            <img :src="photo.path" class="img-responsive"/>
        </div>
        <div class="mdl-card__actions mdl-card--border">
            <a @click="openOrderModal()" class="mdl-card-actions--allWidth mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            <i class="material-icons">add_shopping_cart</i>
            Commander
            </a>
        </div>
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
      openOrderModal() {
        console.log('coucou !');
      },
    };
  },
};
</script>
<style lang="scss">
.demo-card-event.mdl-card {
  width: 100%;
}
.img-responsive {
    max-width: 100%;
    height: auto;
    display: block;
}
.demo-card-event {
    margin: 10px;
}
.demo-card-event.mdl-card {
  background: #3E4EB8;
}
.demo-card-event > .mdl-card__actions {
  border-color: rgba(255, 255, 255, 0.2);
}
.demo-card-event > .mdl-card__title {
  align-items: flex-start;
}
.demo-card-event > .mdl-card__title > h4 {
  margin-top: 0;
}
.demo-card-event > .mdl-card__actions {
  display: flex;
  box-sizing:border-box;
  align-items: center;

}
.demo-card-event > .mdl-card__actions > .material-icons {
  padding-right: 10px;
}
.demo-card-event > .mdl-card__title,
.demo-card-event > .mdl-card__actions,
.demo-card-event > .mdl-card__actions > .mdl-button {
  color: #fff;
}

.mdl-card-actions--allWidth {
  width: 100%
}
</style>