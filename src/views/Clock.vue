<template>
  <div class="main has-text-primary">
    <section class="main-text">
      <time-date-hr-min-sec :time="time" />
    </section>
  </div>    
</template>

<script>
import TimeDateHrMinSec from "@/components/TimeDateHrMinSec.vue";

export default {
  components: {
    TimeDateHrMinSec
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
