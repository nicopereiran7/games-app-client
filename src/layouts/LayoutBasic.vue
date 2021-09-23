<template>
  <div class="layout-basic">
    <NavBar />
    <div class="layout-basic__content">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer,
  }
}
</script>

<style lang="scss">
  .layout-basic {
    &__content {
      min-height: 90vh;
    }
  }
</style>