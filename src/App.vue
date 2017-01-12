<template>
  <p>
    coucou {{classes}}
  </p>
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
  render: h => h(),
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