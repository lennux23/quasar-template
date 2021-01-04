<template>
  <div>
    <q-card class="no-shadow">
      <q-tabs
        dense
        v-model="tab"
        no-caps
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="single file" :label="$t('eUpload.singleFile')" />
        <q-tab name="multiple files" :label="$t('eUpload.multiFile')" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="single file">
          {{ select }}
          <hr class="q-mt-md q-separator q-separator q-separator--horizontal" />
          <div class="q-mt-md btn-add-container">
            <q-btn
              no-caps
              dense
              class="text-caption"
              flat
              icon="add_circle_outline"
              color="orange-4"
              :label="$t('eUpload.btnAdd')"
              @click="$refs.uploadFile.pickFiles()"
            />
            <span class="label-btn text-caption">{{ max }}</span>
            <div
              class="q-mt-lg text-caption flex-start"
              :hidden="fileToUpload === null"
            >
              <q-file
                :counter-label="counterLabelFn"
                max-files="1"
                outlined
                color="orange-4"
                style="color: $orange-4;"
                bottom-slots
                v-model="fileToUpload"
                ref="uploadFile"
                counter
              >
                <template v-slot:prepend>
                  <q-icon size="xs" class="i-file" name="attach_file" />
                </template>
                <template v-slot:append>
                  <div
                    @click="fileToUpload = null"
                    class=" text-caption cursor-pointer"
                  >
                    {{ remove }}
                  </div>
                </template>
              </q-file>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="multiple files">
          {{ select }}
          <hr class="q-mt-md q-separator q-separator q-separator--horizontal" />
          <div class="q-mt-md text-caption btn-add-container">
            <q-btn
              no-caps
              dense
              class="btn-add text-caption"
              flat
              icon="
                  add_circle_outline"
              color="orange-4"
              :label="$t('eUpload.btnAdd')"
              @click="$refs.uploadFile.pickFiles()"
            />
            <span class="label-btn text-caption">{{ maxFilesMult }} </span>
            <div class="q-mt-lg" :hidden="fileToUpload === null">
              <q-file
                outlined
                max-files="3"
                :counter-label="counterLabel"
                color="orange-4"
                bottom-slots
                v-model="fileToUpload"
                ref="uploadFile"
                counter
              >
                <template v-slot:prepend>
                  <q-icon size="xs" class="i-file" name="attach_file" />
                </template>
                <template v-slot:append>
                  <div
                    @click="fileToUpload = null"
                    class=" text-caption cursor-pointer"
                  >
                    {{ remove }}
                  </div>
                </template>
              </q-file>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>
<script>
export default {
  name: 'e-upload',
  data() {
    return {
      maxFilesMult: null,
      fileToUpload: null,
      files: null,
      tab: 'single file',
      model: null,
      dense: true,
    };
  },
  props: {
    select: {
      type: String,
      default: function() {
        return this.$t('eUpload.select');
      },
    },
    max: {
      type: String,
      default: function() {
        return this.$t('eUpload.max');
      },
    },
    remove: {
      type: String,
      default: function() {
        return this.$t('eUpload.remove');
      },
    },
  },
  methods: {
    counterLabel({ totalSize, filesNumber, maxFiles }) {
      this.maxFilesMult = `(${filesNumber} of ${maxFiles})`;
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
  },
};
</script>
<style lang="scss">
.q-field__counter {
  //Esta clase acomodan el contador de KB dentro de su label
  position: absolute;
  margin-top: -25px;
  margin-left: 21px;
}
.q-tabs__content--align-justify .q-tab {
  flex: auto;
}
.q-tab {
  padding: 0 100px 0 0;
}
.i-file {
  // Girar el icono y posicionarlo segun el diseño
  margin-top: -10px;
  transform: rotate(45deg);
}
.q-tab-panel {
  padding: 10px 0 0 0;
  // Acomoda el contenido de las tabs
}
</style>
