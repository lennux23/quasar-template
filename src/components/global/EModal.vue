<template>
  <div>
    <q-btn label="Modal Active" color="primary" @click="icon = true" />
    <q-dialog v-model="icon">
      <q-card class="q-py-sm">
        <div class="flex justify-end q-px-md">
          <q-btn icon="close" flat round dense v-close-popup />
        </div>

        <div class="q-px-xl">
          <div class="text-h6 q-mb-md">{{ title }}</div>
          <div class="text-caption q-mb-md">
            <slot name="header">{{ description }}</slot>
          </div>
          <slot name="body"></slot>
          <slot name="footer"
            ><div class="q-mb-lg q-mt-xl">
              <q-btn
                @click="save"
                unelevated
                rounded
                no-caps
                class="q-mr-md q-px-lg"
                color="orange-4"
                :label="btnText"
              ></q-btn>
              <q-btn
                @click="cancel"
                outline
                rounded
                class="q-px-lg"
                no-caps
                color="orange-4"
                :label="$t('gral.cancel')"
              >
              </q-btn></div
          ></slot>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
export default {
  name: 'e-modal',
  data() {
    return {
      icon: false,
      bar: false,
      bar2: false,
      toolbar: false,
    };
  },
  props: {
    title: {
      type: String,
      default: 'Export Confirmation',
    },
    description: {
      type: String,
      default:
        'Are you sure you want to export the selected records within activity logs?',
    },
    btnText: {
      type: String,
      default: function() {
        return this.$t('gral.save');
      },
    },
  },
  methods: {
    save() {
      this.$emit('save');
    },
    cancel() {
      this.$emit('cancel');
    },
  },
};
</script>
<style lang="scss">
/* .btn {
  margin-left: 420px;
  margin-top: 10px;
} */
/* .btn-container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
} */
/* .card-container {
  margin: 0 0px 50px 50px;
  margin-top: 0;
} */
/* .description {
  width: 90%;
  margin-top: 10px;
} */
</style>
