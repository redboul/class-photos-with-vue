import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pictures: [],
    selectedPicture: null,
  },

  getters: {
    pictures: state => state.pictures,
    selectedPicture: state => state.selectedPicture,
  },

  actions: {
    retrievePhotos({ commit }) {
      Vue.http.get('http://localhost:9000/api/photos')
      .then(response => response.body.map(photo =>
        ({ couleur: null, noirEtBlanc: null, ...photo })))
      .then(photos =>
        commit('updatePhotos', { photos }));
    },
  },

  mutations: {
    /* eslint-disable no-param-reassign */
    updatePhotos: (state, { photos }) => {
      state.pictures = photos;
    },
    updateCouleur: (state, e) => {
      state.selectedPicture.couleur = e.target.value;
    },
    updateNoirEtBlanc: (state, e) => {
      state.selectedPicture.noirEtBlanc = e.target.value;
    },
    selectPhoto: (state, { photo }) => {
      state.selectedPicture = photo;
    },
    unselectPhoto: (state) => {
      state.selectedPicture = null;
    },
  },
});
