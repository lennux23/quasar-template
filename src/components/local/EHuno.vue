<template>
  <q-card class="q-my-md q-px-md q-py-sm bg-purple-1">
    <div :style="`color:${color};`" class="text-body2" @click="handleClic()">
      {{ titulo }}
    </div>
    <!--    <div :style="`color:${color};`" class="text-caption">
      {{ etiquetas.subtitulo }}
    </div> -->
  </q-card>
</template>
<script>
export default {
  name: 'e-huno',
  data() {
    return {
      local: 0,
    };
  },
  props: {
    /*     etiquetas: {
      type: Object,
      required: true,
      description: 'Etiquetas del card',
    }, */
    titulo: {
      type: String,
      required: true,
      description: 'Titulo del card',
    } /*
    subtitulo: {
      type: String,
      required: true,
      description: 'Subtitulo del card',
    }, */,
    color: {
      type: String,
      required: false,
      default: 'red',
    },
  },
  methods: {
    handleClic() {
      this.$emit('papahazmecaso', this.local++);
    },
  },
};
</script>
