<template>
  <div>
    <q-btn label="Modal Active" color="primary" @click="icon = true" />
    <q-dialog v-model="icon">
      <q-card>
        <div class="btncontainer">
          <q-btn icon="close" class="btnx" flat round dense v-close-popup />
        </div>
        <div class="cardCotainer">
          <div class="text-h6">{{ title }}</div>
          <div class="description text-caption">
            <slot name="header">{{ description }}</slot>
          </div>
          <div></div>
          <slot name="body"></slot>
          <slot name="footer"
            ><div class="q-mt-lg">
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
  name: 'emodal/',
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
    save: function() {
      this.$emit('save');
    },
    cancel: function() {
      this.$emit('cancel');
    },
  },
};
</script>
<style>
.btnx {
  margin-left: 420px;
  margin-top: 10px;
}
.btncontainer {
  display: flex;
  justify-content: start;
  align-items: end;
}
.cardCotainer {
  margin: 0 0px 50px 50px;
  margin-top: 0;
}
.description {
  width: 90%;
  margin-top: 10px;
}
</style>
