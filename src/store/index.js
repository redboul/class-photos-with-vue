import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pictures: [],
    selectedPictureName: null,
  },

  getters: {
    pictures: state => state.pictures,
    selectedPictureName: state => state.selectedPictureName,
  },

  actions: {
    retrievePhotos({ commit }) {
      Vue.http.get('http://localhost:9000/api/photos').then(response =>
        commit('updatePhotos', { photos: response.body }));
    },
  },

  mutations: {
    /* eslint-disable no-param-reassign */
    updatePhotos: (state, { photos }) => {
      state.pictures = photos;
    },
    selectPhoto: (state, { name }) => {
      state.selectedPictureName = name;
    },
    unselectPhoto: (state) => {
      state.selectedPictureName = null;
    },
  },
});
