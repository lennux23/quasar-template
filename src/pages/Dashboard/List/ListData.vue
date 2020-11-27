<template>
  <div class="q-pa-md">
    <div class="row q-col-gutter-sm">
      <div class="col-6 " v-for="(etiqueta, index) in etiquetas" :key="index">
        <e-card :titulo="etiqueta.titulo" :description="etiqueta.description" />
      </div>
    </div>
    <e-card titulo="Tarehta 2">
      <template v-slot:header>
        <h1>Contenido de padre</h1>
      </template>
      <template v-slot:footer> </template>
    </e-card>
    <e-card titulo="Tarehta 3">
      <template slot="footer">
        <q-input v-model="name" label="Introduce el Nombre" />
      </template>
    </e-card>
    <e-card titulo="Tarehta 4" />
    <!--  <div class="row">
      <div class="col-5">
        <q-input v-model="name" label="Introduce el Nombre" />
        <h3>{{ contador }}</h3>
        <h3>{{ multiplicaPorDos }}</h3>
        <div class="row">
          <q-btn
            color="primary"
            class="fit"
            no-caps
            label="Aumenta++"
            @click="aumenta()"
          />
          <q-btn
            color="red"
            class="fit"
            no-caps
            label="Decremetar"
            @click="decrementa()"
          />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import ECard from 'src/components/local/ECard.vue';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'list-data',
  components: {
    ECard,
  },
  computed: {
    ...mapState('numeros', ['contador']),
    ...mapGetters('numeros', ['multiplicaPorDos']),
  },
  data() {
    return {
      name: '',
      etiquetas: [
        {
          titulo: 'Developer',
          description: 'Una descripción',
        },
        {
          titulo: 'ADmin',
          description: 'Una descripción',
        },
      ],
    };
  },
  methods: {
    async handleExport() {
      // llamado al action/ api
    },
    aumenta() {
      this.$store.dispatch('numeros/aumentaUno');
    },
    decrementa() {
      this.$store.dispatch('numeros/decrementar');
    },
  },
};
</script>
