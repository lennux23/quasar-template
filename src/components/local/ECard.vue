<template>
  <q-card class="q-my-md q-px-md q-py-sm bg-blue-1">
    <slot name="header"></slot>
    <div :style="`color:${color};`" class="text-body2" @click="handleClic()">
      {{ titulo }}
    </div>
    <slot name="footer"> <e-link /> </slot>
  </q-card>
</template>
<script>
import ELink from 'src/components/local/ELink';

export default {
  name: 'e-card',
  components: {
    ELink,
  },
  data() {
    return {
      local: 0,
      variableInterna: {
        name: 'Mau',
        age: 10,
      },
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
    description: {
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
