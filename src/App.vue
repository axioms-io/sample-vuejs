<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
const default_layout = "default";

export default {
  name: "app",
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  },
  created() {
    // nothing defined here (when this.$route.path is other than "/")
    // console.log(this.$route, this.$route.meta.layout); // eslint-disable-line no-console
  },
  updated() {
    // something defined here whatever the this.$route.path
    // console.log(this.$route, this.$route.meta.layout); // eslint-disable-line no-console
  }
};
</script>