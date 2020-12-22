<template>
  <div>
    <q-date v-model="model" color="green-4" range minimal />
  </div>
</template>
<script>
export default {
  name: 'ecalendar/',
  data() {
    return {
      date: '1998/12/08',
      model: { from: '2020/07/08', to: '2020/07/17' },
    };
  },
};
</script>
<style lang="scss">
.material-icons .q-icon .notranslate {
  display: none;
}
.q-date__navigation {
  .col:nth-child(1n) {
    span {
      .q-anchor--skip::after {
        content: '\25BE';
        font-size: 1.25rem;
        padding-left: 4px;
      }
    }
  }
}
.q-date__navigation {
  .flex-center:nth-child(5n) {
    span {
      .q-anchor--skip::after {
        content: '\25BE';
        margin-right: 50px;
        font-size: 1.25rem;
      }
    }
  }
}
.q-date__navigation div:nth-child(3n) {
  position: absolute;
  margin-left: 220px;
  z-index: 2;
}
.q-date__navigation div:nth-child(4n) {
  display: none;
}
.q-date__navigation div:nth-child(6n) {
  display: none;
}
</style>
