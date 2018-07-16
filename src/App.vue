<template>
  <div id="app">
    <nav class="navbar is-transparent is-fixed-top">
      <div class="navbar-brand">
        <div class="navbar-burger burger" data-target="navMenu" @click="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navMenu" class="navbar-menu" :class="{ 'is-active': menuActive } ">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Clock</router-link>
          <router-link class="navbar-item" to="/about">Stopwatch</router-link>
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


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
