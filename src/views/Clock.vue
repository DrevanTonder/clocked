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
      time: new Date(),
      interval: setInterval(() => (this.time = new Date()), 1000)
    };
  },

  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>
