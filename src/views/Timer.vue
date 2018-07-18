<template>
  <div class="container" >
    <div class="columns">
      <div class="column is-6">
        <h1 class="title">
          <duration-display :time="timeLeft" :ms="false" />
        </h1>
        <h2 class="subtitle">
          <div class="buttons">
            <button aria-label="start" role="button" class="button is-large is-rounded is-success" :disabled="running" @click="start()">
              <font-awesome-icon icon="play" />
            </button>
            <button aria-label="reset" role="button" class="button is-large is-rounded is-danger" @click="reset()">
              Reset
            </button>
          </div>
        </h2>
      </div>
      <div class="column">
        <form class="is-flex is-size-3">
          <input type="number" class="timer-input" min="0" v-model="hours" />
          hr
          <input type="number" class="timer-input" max="60" min="0" v-model="minutes" />
          m
          <input type="number" class="timer-input" max="60" min="0" v-model="seconds" />
          s
        </form>
      </div>  
    </div>
  </div>
</template>

<script>
import moment from "moment";
import DurationDisplay from "@/components/DurationDisplay.vue";

export default {
  data() {
    return {
      timeToCountdown: null,
      countdownStart: null,
      timeLeft: 0,
      interval: null,
      hours: 0,
      minutes: 0,
      seconds: 10
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

  watch: {
    hours() {
      this.timeLeft = this.getTimeFromInputs();
    },

    minutes() {
      this.timeLeft = this.getTimeFromInputs();
    },

    seconds() {
      this.timeLeft = this.getTimeFromInputs();
    }
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {
    start() {
      clearInterval(this.interval);

      this.timeToCountdown = this.getTimeFromInputs();
      this.countdownStart = Date.now() + 1000;

      this.interval = setInterval(() => this.update(), 10);
    },

    stop() {
      clearInterval(this.interval);
    },

    update() {
      this.timeLeft = this.timeToCountdown - (Date.now() - this.countdownStart);
      if (this.timeLeft <= 0) {
        this.stop();
        setTimeout(() => this.reset(), 100);
      }
    },

    reset() {
      this.stop();
      this.interval = null;
      this.timeToCountdown = null;
      this.countdownStart = null;

      this.timeLeft = this.getTimeFromInputs();
    },

    getTimeFromInputs() {
      let hours = moment.duration(Number(this.hours), "h");
      let minutes = moment.duration(Number(this.minutes), "m");
      let seconds = moment.duration(Number(this.seconds), "s");
      return hours
        .add(minutes)
        .add(seconds)
        .asMilliseconds();
    }
  }
};
</script>

<style lang="scss">
.timer-input {
  -moz-appearance: textfield;
}

.timer-input::-webkit-outer-spin-button,
.timer-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.timer-input {
  background-color: transparent;
  border: 2px solid white;
  border-radius: 8px;
  color: white;
  font-size: 2rem;
  width: 5rem;
  margin-left: 1rem;
  margin-right: 0.2rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  text-align: center;
}
</style>
