<template>
  <div>
    <q-card class="my-card ">
      <q-card-section>
        <div class="row">
          <div class="col-6 q-mt-sm text-h6">{{ title }}</div>
          <div class="col-6 flex justify-end">
            <q-select
              borderless
              color="orange-4"
              hide-dropdown-icon
              :label="select"
              label-color="orange-4"
              v-model="model"
              :options="options"
              style="min-width: 200px;"
            >
              <template v-slot:append>
                <q-icon name="keyboard_arrow_down" color="orange-4" />
              </template>
            </q-select>
          </div>
        </div>
        <q-card-section>
          <div>
            <ul class="flex lista">
              <li class="q-ml-xl">safd</li>
              <li class="q-ml-xl">asfd</li>
              <li class="q-ml-xl">asfd</li>
              <li class="q-ml-xl">asdf</li>
              <li class="q-ml-xl">asdf</li>
            </ul>
          </div>
        </q-card-section>
      </q-card-section>
      <div class="" style="">
        <doughnut
          class="doughnut-chart"
          title="478"
          :chartData="datacollection"
          :options="{ cutoutPercentage: 85 }"
        ></doughnut>
      </div>
    </q-card>
  </div>
</template>
<script>
import Egrafica from './Egrafica.vue';
import Doughnut from 'src/components/global/doughnut.js';
export default {
  name: 'ecardgrafica/',
  Egrafica,
  components: { Doughnut },
  data() {
    return {
      model: null,
      options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
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
    title: {
      type: String,
      default: 'Chargeback',
    },
    select: {
      type: String,
      default: 'Name of institution',
    },
  },
};
</script>
<style lang="scss">
.lista {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
