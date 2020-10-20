<template>
  <q-card class="q-my-md q-px-md q-py-sm bg-blue-1">
    <div :style="`color:${color};`" class="text-body2" @click="handleClic()">
      {{ titulo }}
    </div>
    <div class="row items-center justify-end">
      <div class="text-body2 text-primary q-mr-sm"></div>
      <e-avatar size="60px" />
    </div>
  </q-card>
</template>
<script>
import EAvatar from 'src/components/local/EAvatar';
export default {
  name: 'e-card',
  components: {
    EAvatar,
  },
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
    },
    /*
    subtitulo: {
      type: String,
      required: true,
      description: 'Subtitulo del card',
    }, */ color: {
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
