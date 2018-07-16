<template>
    <div class="main has-text-primary">
        <div class="main-text" >     
          <time :datetime="elapsedTime">
            <h1 class="time is-size-1">
              <span class="time-big">{{ minutes }}</span>:<span class="time-big">{{ seconds }}</span>:<span class="time-small">{{ milliseconds }}</span>
            </h1>
          </time>

          <button aria-label="stop/start" role="button" class="button is-primary is-large is-rounded" @click="toggle()"><font-awesome-icon :icon="toggleIcon" /></button>
          <button aria-label="reset" role="button" class="button is-primary is-large is-rounded" @click="reset()">Reset</button>
        </div>

        
    </div>    
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      startTime: null,
      elapsedTime: 0,
      interval: null,
      toggleIcon: "play"
    };
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  computed: {
    minutes() {
      return moment(this.elapsedTime).format("mm");
    },

    seconds() {
      return moment(this.elapsedTime).format("ss");
    },

    milliseconds() {
      return moment(this.elapsedTime).format("SS");
    }
  },

  methods: {
    reset() {
      this.startTime = null;
      this.elapsedTime = 0;
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
    }
  }
};
</script>
