<template>
  <div>
    <h1 :style="`color:${color};`" @click="handleClic()">{{ saludo }}</h1>
    <h6 :style="`color:green;`">{{ local }}</h6>
  </div>
</template>
<script>
export default {
  name: 'e-huno',
  data() {
    return {
      local: 1,
    };
  },
  props: {
    saludo: {
      type: String,
      required: false,
      description: 'Texto a mostrar.',
      default: 'Hola mundo',
    },
    color: {
      type: String,
      required: false,
      default: 'red',
    },
  },
  methods: {
    handleClic() {
      this.local++;
      this.$emit('medisteclic');
    },
  },
};
</script>
