<template>
  <div class="container">
    <div class="columns">
      <div class="column is-6">
        <h1 class="title">
          <duration-display :time="elapsedTime" />
        </h1>
        <h2 class="subtitle">
          <div class="buttons">
            <button aria-label="stop/start" role="button" class="button is-large is-rounded" :class="{ 'is-success': !running, 'is-info': running }" @click="toggle()">
              <font-awesome-icon :icon="toggleIcon" />
            </button>
            <button aria-label="reset" role="button" class="button is-danger is-large is-rounded" @click="reset()">
              Reset
            </button>
            <button :disabled="!running" aria-label="lap" role="button" class="button is-success is-large is-rounded" @click="lap()">
              Lap
            </button>
          </div>
        </h2>
      </div>
      <div class="column">
        <p class="help-text">This is where laps will go.	<span class="help-arrow-down" /></p>
        <div class="box splits">
          <ul v-if="laps.length">
            <li v-for="lap in laps" :key="lap">
              <duration-display :time="lap" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import DurationDisplay from "@/components/DurationDisplay.vue";

export default {
  data() {
    return {
      startTime: null,
      elapsedTime: 0,
      interval: null,
      laps: [],
      toggleIcon: "play"
    };
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  components: {
    DurationDisplay
  },

  computed: {
    running() {
      return this.interval != null;
    }
  },

  methods: {
    reset() {
      this.stop();

      this.startTime = null;
      this.elapsedTime = 0;
      this.laps = [];
    },

    toggle() {
      if (this.interval) {
        this.stop();
      } else {
        this.start();
      }
    },

    start() {
      if (!this.startTime) {
        this.startTime = Date.now();
      }

      this.toggleIcon = "stop";

      this.interval = setInterval(
        () => (this.elapsedTime = Date.now() - this.startTime),
        1
      );
    },

    stop() {
      this.lap();

      this.toggleIcon = "play";

      clearInterval(this.interval);
      this.interval = null;
    },

    lap() {
      this.laps.push(this.elapsedTime);
    }
  }
};
</script>

<style lang="scss">
.splits {
  overflow-y: auto;
  height: 400px;
}
</style>
