<template>
  <div class="main has-text-primary">
    <div class="main-text">
      <time-min-sec-ms :time="timeLeft" :edit="true" />

      <button aria-label="stop/start" role="button" class="button is-primary is-large is-rounded" @click="start()">
        <font-awesome-icon icon="play" />
      </button>
    </div>
  </div>
</template>

<script>
import TimeMinSecMs from "@/components/TimeMinSecMs.vue";

export default {
  data() {
    return {
      timeToCountdown: null,
      timeLeft: 0,
      interval: null
    };
  },

  components: {
    TimeMinSecMs
  },

  computed: {
    running() {
      return this.interval != null;
    }
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {
    start() {
      this.timeToCountdown = 10000;

      this.interval = setInterval(
        () => (this.timeLeft = this.timeToCountdown - Date.now()),
        10
      );
    }
  }
};
</script>
