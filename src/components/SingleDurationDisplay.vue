<template>
    <span class="tag is-white">{{ value | commas }}</span>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
      type: Number
    }
  },

  filters: {
    commas: value => {
      while (/(\d+)(\d{3})/.test(value.toString())) {
        value = value.toString().replace(/(\d+)(\d{3})/, "$1" + "," + "$2");
      }
      return value;
    }
  }
};
</script>
