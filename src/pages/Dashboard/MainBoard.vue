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
        <q-card class="q-mr-xl btm-add">
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="single file" :label="$t('modal.singleFile')" />
            <q-tab name="multiple files" :label="$t('modal.multiFile')" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="single file">
              {{ select }}
              <div class="q-mt-xl btn-add-container">
                <q-btn
                  class="btn-add"
                  flat
                  icon="
                  add_circle_outline"
                  color="orange-4"
                  :label="$t('modal.btnAdd')"
                  @click="$refs.uploadFile.pickFiles()"
                />
                <span class="label-btn">{{ max }}</span>
                <div class="q-mt-lg" :hidden="fileToUpload === null">
                  <q-file
                    :counter-label="counterLabelFn"
                    max-files="1"
                    class="e-file"
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
                        class="e-remove-btn cursor-pointer"
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
              <div class="q-mt-xl btn-add-container">
                <q-btn
                  class="btn-add"
                  flat
                  icon="
                  add_circle_outline"
                  color="orange-4"
                  :label="$t('modal.btnAdd')"
                  @click="$refs.uploadFile.pickFiles()"
                />
                <span class="label-btn">{{ maxFilesMult }} </span>
                <div class="q-mt-lg" :hidden="fileToUpload === null">
                  <q-file
                    class="e-file-mult"
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
                      <div @click="fileToUpload = null" class="e-remove-btn">
                        {{ remove }}
                      </div>
                    </template>
                  </q-file>
                  <q-file
                    class="e-file-mult"
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
                      <div @click="fileToUpload = null" class="e-remove-btn">
                        {{ remove }}
                      </div>
                    </template>
                  </q-file>
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </template></e-modal
    >
    <e-calendar class="q-mt-xl"></e-calendar>

    <transition
      mode="out-in"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div class="full-width">
        <router-view />
      </div>
    </transition>
  </q-page>
</template>
<script>
import ECalendar from 'src/components/global/ECalendar.vue';
export default {
  components: { ECalendar },
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
.q-field--float .q-field__label {
  margin-top: -20px;
  transition-delay: 0s;
  transition-duration: 0s;
  transition-property: all;
  transition-timing-function: ease;
  margin-left: -10px;
}
.q-field--dense.q-field--float .q-field__label {
  transform: translatey(0);
  transition-delay: 0s;
  transition-duration: 0s;
  transition-property: all;
  transition-timing-function: ease;
  font-size: x-small;
}
.q-field--dense .q-field__label {
  top: 0;
  position: absolute;
}
.q-field--labeled ::-webkit-input-placeholder {
  display: block;
}
input {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
.q-card {
  box-shadow: none;
}
.q-tab {
  padding: 0 27px 0 0;
}
.q-tabs__content--align-justify .q-tab {
  flex: none;
}
.q-tab-panel {
  padding: 16px 0 0 0;
  margin: 0 0 40px 0;
}
.q-btn {
  text-transform: none;
}
body.desktop .q-hoverable:hover > .q-focus-helper {
  background: none;
}
.btn-add {
  padding: none;
  font-size: 0.8em;
  margin-left: -15px;
}
.btn-add-container .label-btn {
  color: #777470;
  font-size: 0.8em;
}
.i-file {
  margin-top: -10px;
  transform: rotate(45deg);
}
.e-remove-btn {
  color: $orange-4;
  font-size: 0.8rem;
}
.e-file .q-field__counter {
  position: absolute;
  margin-top: -25px;
  margin-left: 21px;
}
.e-file-mult .q-field__counter {
  position: absolute;
  margin-top: -25px;
  margin-left: 21px;
}
</style>
