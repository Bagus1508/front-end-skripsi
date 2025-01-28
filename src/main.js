import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/router'; // Pastikan import router sesuai
import './index.css';
import "preline/preline";
import VueApexCharts from 'vue3-apexcharts';
import { PrimeVue } from '@primevue/core';
import Aura from '@primevue/themes/aura';
import Nora from '@primevue/themes/nora';
import Lara from '@primevue/themes/lara';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional
import { ContextMenu } from 'primevue';
import InputTextPrime from 'primevue/inputtext';
import InputText from './views/components/form/InputText.vue';
import InputSelect from './views/components/form/InputSelect.vue';
import InputIcon from 'primevue/inputicon';
import IconField from 'primevue/iconfield';
import Dialog from 'primevue/dialog';
import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp(App);

app.use(router); // Daftarkan router
app.use(VueApexCharts);
app.use(PrimeVue, {
    /* theme: {
        preset: Aura,
    } */
})
app.mount('#app');
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ContextMenu', ContextMenu);
app.component('InputText', InputText);
app.component('InputSelect', InputSelect);
app.component('InputTextPrime', InputTextPrime);
app.component('InputIcon', InputIcon);
app.component('IconField', IconField);
app.component('Dialog', Dialog);