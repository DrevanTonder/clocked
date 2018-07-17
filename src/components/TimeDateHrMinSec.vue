<template>
  <time class="time" :datetime="time">
    <h1>
      <span class="time-big">{{ time | hours }}</span>
      <span class="time-small">:</span>
      <span class="time-big">{{ time | minutes }}</span>
      <span class="time-small">:{{ time | seconds }}</span>
    </h1>

    <h2 class="time-small">{{ time | dayString }}, {{ time | date }} {{ time | monthString }}</h2>
  </time>
</template>

<script>
export default {
  props: {
    time: {
      required: true,
      type: Number
    }
  }
};
</script>
