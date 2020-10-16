<template>
  <div class="q-pa-md">
    <e-huno
      v-for="(etiqueta, index) in etiquetas"
      :key="index"
      :titulo="tituloParent"
      @papahazmecaso="manejarclic"
    />
    <q-input v-model="tituloParent" label="Introduce el Título" />

    <div class="row justify-end q-py-sm q-col-gutter-x-sm">
      <div class="col-2">
        <q-btn
          color="primary"
          class="fit"
          no-caps
          label="Carga masiva"
          @click="
            $router.push({
              name: 'bulkLoad',
              query: {
                id: '20',
              },
            })
          "
        />
      </div>
      <div>
        <exportFile
          ref="exportPackages"
          class="fit"
          directExport
          :data="intercambios"
          :columns="columns"
          fileName="nombre_reporte"
          fileSheetName="MiReporte"
          :labelButton="$t('gral.export')"
          @click="handleExport"
        />
      </div>
    </div>
    <e-table
      :data="intercambios"
      :columns="columns"
      :showAddBtn="false"
      :serverSide="false"
    >
    </e-table>
  </div>
</template>

<script>
import ExportFile from 'src/components/local/ExportFile.vue';
import EHuno from 'src/components/local/EHuno.vue';
export default {
  name: 'list-data',
  components: {
    ExportFile,
    EHuno,
  },
  data() {
    return {
      tituloParent: 'Texto inicial',
      etiquetas: [
        {
          titulo: 'Titulo Mas 1',
          subtitulo: 'Sub 1',
        },
        {
          titulo: 'Titulo 2',
          subtitulo: 'Sub 2',
        },
        {
          titulo: 'Titulo 3',
          subtitulo: 'Sub 3',
        },
      ],

      intercambios: [
        {
          folio: 123131231,
          name: 'Pancho Lopez',
        },
        {
          folio: 1212,
          name: 'Rene Garcia',
        },
        {
          folio: 11,
          name: 'Pancho Daniel',
        },
        {
          folio: 222,
          name: 'Vane Garcia',
        },
        {
          folio: 333,
          name: 'Lizeth Lopez',
        },
        {
          folio: 4444,
          name: 'Joselyn Garcia',
        },
        {
          folio: 5555,
          name: 'Pancho Hernandez',
        },
        {
          folio: 666,
          name: 'Denisse Garcia',
        },
      ],
      columns: [
        {
          name: 'folio',
          required: true,
          align: 'center',
          label: 'Folio',
          field: 'folio',
          format: val => `${this.$options.filters.dummy(val)}`,
          sortable: true,
          exportable: true,
          type: 'Number',
        },
        {
          name: 'name',
          required: true,
          align: 'center',
          label: 'Nombre',
          field: 'name',
          format: val => val,
        },
      ],
    };
  },
  methods: {
    async handleExport() {
      // llamado al action/ api
    },
    manejarclic(str) {
      this.tituloParent = str + '';
    },
  },
};
</script>
