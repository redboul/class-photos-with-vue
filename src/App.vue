<template>
  <v-app top-navbar>
    <header>
      <v-navbar>
        <v-navbar-logo>Jeann Labourbe</v-navbar-logo>
        <v-navbar-items v-bind:items="classes"></v-navbar-items>
      </v-navbar>
    </header>
    <main>
      <v-content>
        <v-container>
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
<style>
@import '../node_modules/vuetify/dist/vuetify.min.css'
</style>