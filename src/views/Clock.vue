<template>
  <main>
    <section class="main-content">
      <time-display class="large-text" :time="time" />
      <date-display class="large-text" :time="time" />
    </section>
  </main>    
</template>

<script>
import DateDisplay from "@/components/DateDisplay.vue";
import TimeDisplay from "@/components/TimeDisplay.vue";

export default {
  components: {
    DateDisplay,
    TimeDisplay
  },

  data() {
    return {
      time: Date.now(),
      interval: setInterval(() => (this.time = Date.now()), 1000)
    };
  },

  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>
