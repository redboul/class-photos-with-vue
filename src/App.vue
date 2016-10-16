<template>
  <div id="app">
    <ListPhotos></ListPhotos>
  </div>
</template>

<script>
import ListPhotos from './components/ListPhotos';

export default {
  components: {
    ListPhotos,
  },
};
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.css'

html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
