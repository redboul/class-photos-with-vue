<template>
    <div class="media">
        <div class="media-left">
            <a href="#">
                <img class="media-object" height="50px" v-bind:src="photo.path" v-bind:alt="photo.name"/>
            </a>
        </div>
        <div class="media-body">
            <h4 class="media-heading">Media heading</h4>
        </div>
    </div>
</template>
<script>
export default {
  props: ['content'],
  data() {
    return {
      photo: this.content,
    };
  },
};
</script>
<style>
</style>