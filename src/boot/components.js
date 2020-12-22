import Vue from 'vue';

import ETable from 'src/components/global/ETable.vue';
import EModal from 'src/components/global/EModal.vue';
import ECalendar from 'src/components/global/ECalendar.vue';
import Egrafica from 'src/components/global/Egrafica.vue';
import ECardgraphic from 'src/components/global/ECardgraphic.vue';
import Eupload from 'src/components/global/Eupload.vue';
import EFooter from 'src/components/global/EFooter.vue';

Vue.component('e-table', ETable);
Vue.component('e-modal', EModal);
Vue.component('e-calendar', ECalendar);
Vue.component('e-grafica', Egrafica);
Vue.component('e-cardgraphic', ECardgraphic);
Vue.component('e-upload', Eupload);
Vue.component('e-footer', EFooter); 
