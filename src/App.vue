<template>
  <v-app top-navbar>
    <header>
      <v-navbar></v-navbar>
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
    return {};
  },
  mounted() {
    this.$vuetify.init();
  },
};
</script>