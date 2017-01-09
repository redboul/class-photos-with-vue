<template>
  <v-app top-navbar>
    <header>
      <div id="navbar-image">
        <v-navbar class="transparent z-depth-0">
          <v-navbar-logo>Jeanne Labourbe</v-navbar-logo>
          <v-navbar-items v-bind:items="classes"></v-navbar-items>
        </v-navbar>
      </div>
    </header>
    <main>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      classes: [{
        href: '#!',
        text: 'PS-MS',
      }, {
        href: '#!',
        text: 'GS-CP',
      }, {
        href: '#!',
        text: 'CE1-CE2',
      }, {
        href: '#!',
        text: 'CM1-CM2',
      }],
    };
  },
  mounted() {
    this.$vuetify.init();
  },
};
</script>
<style lang="scss">
@import '../node_modules/vuetify/dist/vuetify.min.css';

body {
  font-family: "Open Sans";
	font-size: 14px;
	font-style: normal;
	font-variant: normal;
	font-weight: 400;
	line-height: 20px;
};

#navbar-image {
  background: #111111 url(assets/bandeau-j-labourbe.jpg) no-repeat top left;
  background-size: cover;
};
</style>