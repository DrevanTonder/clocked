<template>
    <time class="time" :datetime="time">
        <h1>
            <span class="time-big">{{ time | minutes }}</span>
            <span class="time-small">:</span>
            <span class="time-big">{{ time | seconds }}</span>
            <span class="time-small">:{{ time | milliseconds }}</span>
        </h1>
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
