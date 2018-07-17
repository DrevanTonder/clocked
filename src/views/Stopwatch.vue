<template>
  <section class="main-content">
    <duration-display :time="elapsedTime" />

    <div class="buttons">
        <button aria-label="stop/start" role="button" class="button is-primary is-large is-rounded" @click="toggle()">
          <font-awesome-icon :icon="toggleIcon" />
        </button>
        <button v-if="!running" aria-label="reset" role="button" class="button is-primary is-large is-rounded" @click="reset()">
          Reset
        </button>
        <button v-if="running" aria-label="split" role="button" class="button is-primary is-large is-rounded" @click="split()">
          Split
        </button>
    </div>

    <div class="columns is-multiline">
      <duration-display class="column is-2" v-for="split in splits" :key="split" :time="split" />
    </div>
  </section>   
</template>

<script>
import DurationDisplay from "@/components/DurationDisplay.vue";

export default {
  data() {
    return {
      startTime: null,
      elapsedTime: 0,
      interval: null,
      splits: [],
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
      this.startTime = null;
      this.elapsedTime = 0;
      this.splits = [];
      this.stop();
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
      this.toggleIcon = "play";

      clearInterval(this.interval);
      this.interval = null;
    },

    split() {
      this.splits.push(this.elapsedTime);
    }
  }
};
</script>
