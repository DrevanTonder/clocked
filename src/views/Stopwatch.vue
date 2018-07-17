<template>
    <div class="main has-text-primary">
        <div class="main-text" >     
          <time :datetime="elapsedTime">
            <h1 class="time is-size-1">
              <span class="time-big">{{ elapsedTime | minutes }}</span>:<span class="time-big">{{ elapsedTime | seconds }}</span>:<span class="time-small">{{ elapsedTime | milliseconds }}</span>
            </h1>
          </time>

          <button aria-label="stop/start" role="button" class="button is-primary is-large is-rounded" @click="toggle()"><font-awesome-icon :icon="toggleIcon" /></button>
          <button v-if="!running" aria-label="reset" role="button" class="button is-primary is-large is-rounded" @click="reset()">Reset</button>
          <button v-if="running" aria-label="split" role="button" class="button is-primary is-large is-rounded" @click="split()">Split</button>
        
          <div v-for="split in splits" :key="split">
            <time >
              <span class="time-small">{{ split | minutes }}</span>:<span class="time-small">{{ split | seconds }}</span>:<span class="time-small">{{ split | milliseconds }}</span>
            </time>
          </div>
        </div>
    </div>    
</template>

<script>
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
        10
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
