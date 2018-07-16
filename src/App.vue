<template>
  <div id="app">
    <nav class="navbar is-dark is-fixed-top">
      <div class="navbar-brand">
        <div class="navbar-burger burger" data-target="navMenu" @click="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navMenu" class="navbar-menu" :class="{ 'is-active': menuActive } ">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/"><font-awesome-icon icon="clock" />&nbsp; Clock</router-link>
          <router-link class="navbar-item" to="/about"><font-awesome-icon icon="stopwatch" />&nbsp; Stopwatch</router-link>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuActive: false
    };
  },

  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    }
  }
};
</script>
