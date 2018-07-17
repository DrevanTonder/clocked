<template>
    <main>
        <section class="main-content" >
            <duration-display class="large-text" :time="timeLeft" />

            <button aria-label="stop/start" role="button" class="button is-primary is-large is-rounded" @click="start()"><font-awesome-icon icon="play" /></button>
        </section>
    </main>
</template>

<script>
import DurationDisplay from "@/components/DurationDisplay.vue";

export default {
  data() {
    return {
      timeToCountdown: null,
      timeLeft: 0,
      interval: null
    };
  },

  components: {
    DurationDisplay
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
