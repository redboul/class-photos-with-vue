<template>
  <div class="mdl-layout mdl-js-layout">
    <header class="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">
      <div class="mdl-layout__header-row">
      <!-- Title -->
      <span class="mdl-layout-title">Jeanne Labourbe</span>
      <!-- Add spacer, to align navigation to the right -->
      <div class="mdl-layout-spacer"></div>
      <!-- Navigation -->
        <nav class="mdl-navigation mdl-js-ripple-effect">
          <a v-for="classe in classes" class="mdl-navigation__link" :href="classe.href">{{classe.text}}</a>
        </nav>
    </div>
    </header>
    <main>
          <router-view></router-view>
    </main>
  </div>
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
};
</script>
<style lang="scss">
@import '../node_modules/material-design-lite/material.min.css';

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