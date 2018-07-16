<template>
  <div class="home">
    <clock />
  </div>
</template>

<script>
// @ is an alias to /src
import Clock from "@/components/Clock.vue";

export default {
  name: "home",
  components: {
    Clock
  }
};
</script>
