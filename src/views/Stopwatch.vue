<template>
    <main>
        <section class="main-content" >
          <duration-display class="large-text" :time="elapsedTime" />

          <button aria-label="stop/start" role="button" class="button is-primary is-large is-rounded" @click="toggle()"><font-awesome-icon :icon="toggleIcon" /></button>
          <button v-if="!running" aria-label="reset" role="button" class="button is-primary is-large is-rounded" @click="reset()">Reset</button>
          <button v-if="running" aria-label="split" role="button" class="button is-primary is-large is-rounded" @click="split()">Split</button>
        
          <div v-for="split in splits" :key="split">
            <duration-display :time="split" />
          </div>
        </section>
    </main>    
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
