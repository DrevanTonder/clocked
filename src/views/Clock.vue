<template>
  <div class="container">
    <h1 class="title">
      Welcome,
    </h1>
    <h2 class="subtitle">
      The current time is <time-display :time="time" />
    </h2>
    <div class="content">
      <p>
        The current date is <date-display :time="time" /> and there has been <single-duration-display :value="time" /> milliseconds since January 1, 1970 00:00:00 UTC.
        This is equal to:
        <ul>
          <li><single-duration-display :value="time | seconds" /> seconds</li>
          <li><single-duration-display :value="time | minutes" /> minutes</li> 
          <li><single-duration-display :value="time | hours" /> hours</li> 
          <li><single-duration-display :value="time | days" /> days </li>
          <li><single-duration-display :value="time | weeks" /> weeks </li>
          <li><single-duration-display :value="time | months" /> months </li>
          <li><single-duration-display :value="time | years" /> years.</li>
        </ul>
      </p>
    </div>
  </div>
</template>

<script>
import DateDisplay from "@/components/DateDisplay.vue";
import TimeDisplay from "@/components/TimeDisplay.vue";
import SingleDurationDisplay from "@/components/SingleDurationDisplay.vue";
import moment from "moment";

export default {
  components: {
    DateDisplay,
    TimeDisplay,
    SingleDurationDisplay
  },

  data() {
    return {
      time: Date.now(),
      interval: setInterval(() => (this.time = Date.now()), 1)
    };
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  filters: {
    years: value => {
      return Math.floor(moment.duration(value).asYears());
    },

    months: value => {
      return Math.floor(moment.duration(value).asMonths());
    },

    weeks: value => {
      return Math.floor(moment.duration(value).asWeeks());
    },

    days: value => {
      return Math.floor(moment.duration(value).asDays());
    },

    hours: value => {
      return Math.floor(moment.duration(value).asHours());
    },

    minutes: value => {
      return Math.floor(moment.duration(value).asMinutes());
    },

    seconds: value => {
      return Math.floor(moment.duration(value).asSeconds());
    }
  }
};
</script>
