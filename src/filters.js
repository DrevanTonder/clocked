import Vue from "vue";
import moment from "moment";

Vue.filter("dayString", value => {
  return moment(value).format("dddd");
});

Vue.filter("monthString", value => {
  return moment(value).format("MMMM");
});

Vue.filter("year", value => {
  return moment(value).format("YYYY");
});

Vue.filter("month", value => {
  return moment(value).format("MM");
});

Vue.filter("date", value => {
  return moment(value).format("D");
});

Vue.filter("day", value => {
  return moment(value).format("d");
});

Vue.filter("hours", value => {
  return moment(value).format("HH");
});

Vue.filter("minutes", value => {
  return moment(value).format("mm");
});

Vue.filter("seconds", value => {
  return moment(value).format("ss");
});

Vue.filter("minutes", value => {
  return moment(value).format("mm");
});

Vue.filter("seconds", value => {
  return moment(value).format("ss");
});

Vue.filter("milliseconds", value => {
  return moment(value).format("SS");
});
