<template>
  <div id="app">
    <section class="hero is-primary is-bold is-fullheight">
      <div class="hero-body">
        <router-view/>
      </div>

      <div class="hero-footer">
        <navbar />
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar
  }
};
</script>
