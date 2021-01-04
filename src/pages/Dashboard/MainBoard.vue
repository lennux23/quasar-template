<template>
  <q-page class="flex flex-center">
    <e-modal @save="saludo" @cancel="despedida"></e-modal>
    <e-modal
      @save="saludo"
      @cancel="despedida"
      title="Changue language"
      description="Select the language you'd prefer to use."
      btnText="Save changes"
    >
      <template v-slot:body>
        <q-select
          transition-show="flip-up"
          transition-hide="flip-down"
          class="q-mt-lg"
          label="Language"
          placeholder="Language"
          outlined
          :dense="dense"
          :options-dense="denseOpts"
          use-input
          hide-selected
          fill-input
          input-debounce="0"
          :options="options"
          v-model="ph"
          style="width: 60%;"
        >
        </q-select> </template
    ></e-modal>
    <e-modal
      @save="saludo"
      @cancel="despedida"
      title="Documentation upload"
      description=""
      :btnText="$t('modal.btnUpload')"
    >
      <template v-slot:body>
        <e-upload></e-upload>
      </template>
    </e-modal>
    <transition
      mode="out-in"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div class="full-width">
        <e-cardgraphic></e-cardgraphic>
        <router-view />
      </div>
    </transition>
  </q-page>
</template>
<script>
export default {
  name: 'main-board',
  data() {
    return {
      maxFilesMult: null,
      fileToUpload: null,
      files: null,
      tab: 'single file',
      ph: 'Language',
      name: 'main-board',
      model: null,
      options: ['English, USA', 'Español, MEX', 'Frances'],
      dense: true,
      denseOpts: true,
      datacollection: {
        labels: ['Transacciones Totales', 'Transacciones con alertas'],
        datasets: [
          {
            label: '478', //Texto mostrado en el centro de la grafica
            backgroundColor: ['red', 'orange', 'blue'],
            data: [19, 29, 10],
          },
        ],
      },
    };
  },
  props: {
    select: {
      type: String,
      default: function() {
        return this.$t('modal.select');
      },
    },
    max: {
      type: String,
      default: function() {
        return this.$t('modal.max');
      },
    },
    remove: {
      type: String,
      default: function() {
        return this.$t('modal.remove');
      },
    },
  },
  methods: {
    counterLabel({ totalSize, filesNumber, maxFiles }) {
      this.maxFilesMult = `${filesNumber} of ${maxFiles}`;
      return `${totalSize}`;
    },
    counterLabelFn({ totalSize }) {
      return ` ${totalSize}`;
    },
    saludo() {
      alert('Hola desde padre');
    },
    despedida() {
      alert('Adios desde padre');
    },
    onRejected(rejectedEntries) {
      this.$q.notify({
        type: 'negative',
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`,
      });
    },
  },
};
</script>
<style lang="scss">
// .q-field--float .q-field__label {
//   margin-top: -20px;
//   transition-delay: 0s;
//   transition-duration: 0s;
//   transition-property: all;
//   transition-timing-function: ease;
//   margin-left: -10px;
// }
// .q-field--dense.q-field--float .q-field__label {
//   transform: translatey(0);
//   transition-delay: 0s;
//   transition-duration: 0s;
//   transition-property: all;
//   transition-timing-function: ease;
//   font-size: x-small;
// }
// .q-field--dense .q-field__label {
//   top: 0;
//   position: absolute;
// }
// .q-field--labeled ::-webkit-input-placeholder {
//   display: block;
// }
// input {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 10px;
// }
// .q-card {
//   box-shadow: none;
// }
// .q-tab {
//   padding: 0 27px 0 0;
// }
// .q-tabs__content--align-justify .q-tab {
//   flex: none;
// }
// .q-tab-panel {
//   padding: 16px 0 0 0;
//   margin: 0 0 40px 0;
// }
// .q-btn {
//   text-transform: none;
// }
// body.desktop .q-hoverable:hover > .q-focus-helper {
//   background: none;
// }
// .btn-add {
//   padding: none;
//   font-size: 0.8em;
//   margin-left: -15px;
// }
// .btn-add-container .label-btn {
//   color: #777470;
//   font-size: 0.8em;
// }
// .i-file {
//   margin-top: -10px;
//   transform: rotate(45deg);
// }
// .e-remove-btn {
//   color: $orange-4;
//   font-size: 0.8rem;
// }
// .e-file .q-field__counter {
//   position: absolute;
//   margin-top: -25px;
//   margin-left: 21px;
// }
// .e-file-mult .q-field__counter {
//   position: absolute;
//   margin-top: -25px;
//   margin-left: 21px;
// }
</style>
