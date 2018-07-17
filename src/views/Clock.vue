<template>
  <div class="main has-text-primary">
    <section class="main-text">
      <time-display :time="time" />
      <date-display :time="time" />
    </section>
  </div>    
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
