<template>
    <div class="dialogOrderOption" v-show="photo">
        <div class="dialogOrderOptionOverlay" >
        </div>
        <div class="mdl-dialog">
            <div class="mdl-dialog__content">
                <h6>{{ photoName }}</h6>
                <div class="orderOption-photo">
                    <img :src="photoPath" class="img-responsive"/>
                </div>
                <div class="orderOption-choices">
                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input class="mdl-textfield__input" type="number" 
                            step="1" :value="nbExemplaireCouleur" @input="updateCouleur">
                        <label class="mdl-textfield__label" for="sample4">Photos en couleurs</label>
                    </div>
                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input class="mdl-textfield__input" type="number" 
                            step="1" :value="nbExemplaireNoirEtBlanc" @input="updateNoirEtBlanc">
                        <label class="mdl-textfield__label" for="sample4">Photos en Noir et Blanc</label>
                    </div>
                </div>
            </div>
            <div class="mdl-dialog__actions mdl-dialog__actions--full-width">
                <button @click="unselectPhoto()" type="button" class="mdl-button">Close</button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
  computed: {
    photo() {
      return this.$store.getters.selectedPicture;
    },
    photoName() {
      return this.$store.getters.selectedPicture && this.$store.getters.selectedPicture.name;
    },
    photoPath() {
      return this.$store.getters.selectedPicture && this.$store.getters.selectedPicture.path;
    },
    nbExemplaireCouleur() {
      return this.$store.getters.selectedPicture && this.$store.getters.selectedPicture.couleur;
    },
    nbExemplaireNoirEtBlanc() {
      return this.$store.getters.selectedPicture && this.$store.getters.selectedPicture.noirEtBlanc;
    },
  },
  methods: {
    ...mapMutations(['unselectPhoto', 'updateCouleur', 'updateNoirEtBlanc']),
  },
};
</script>
<style lang="scss">
.mdl-dialog {
    position: fixed;
    left: 40%;
    top: 10%;
    z-index: 5;
    background-color: white;
    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .orderOption {
        &-photo {
            margin-bottom: 20px;
        }
    }
    .mdl-textfield {
        width: 200px;
    }
    .img-responsive {
        max-height: 200px;
    }
}

.dialogOrderOptionOverlay {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    height: 100%;
    z-index: 4;
}
</style>