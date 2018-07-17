<template>
    <div class="main has-text-primary">
        <div class="main-text" >
            <time :datetime="timeLeft">
                <h1 class="time is-size-1">
                <span class="time-big">{{ timeLeft | minutes }}</span>:<span class="time-big">{{ timeLeft | seconds }}</span>:<span class="time-small">{{ timeLeft | milliseconds }}</span>
                </h1>
            </time>

            <button aria-label="stop/start" role="button" class="button is-primary is-large is-rounded" @click="start()"><font-awesome-icon icon="play" /></button>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      timeToCountdown: null,
      timeLeft: 0,
      interval: null
    };
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
