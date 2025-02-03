<script setup>
import { ref, onMounted, reactive, provide, inject } from 'vue';
import { FilterMatchMode } from '@primevue/core/api';
import AddData from './partials/AddData.vue';
import DeleteData from './partials/DeleteData.vue';
import router from '../../../routes/router';
import { useRoute } from 'vue-router';
const baseURLApi = inject('baseURLApi');

const route = useRoute();

const examSchedules = ref([]);
//Data Constant
const statusDesc = inject('status');

const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    subject: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    user: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    class_name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    category: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
});

//Filter Key
const filterKey = Object.keys(filters.value);

const classesData = ref([]);
const scheduleData = ref([]);

const loading = ref(true);
onMounted(async () => {
  try {
    const classesId = route.query.classes_id;
    // Lakukan kedua fetch secara bersamaan
    const [classesResponse, schedulesResponse] = await Promise.all([
      fetch(`${baseURLApi}/class-rooms/${classesId}`),
      fetch(`${baseURLApi}/schedules?classes_id=${classesId}`)
    ]);

    // Parsing JSON dari kedua response
    const classesResult = await classesResponse.json();
    const schedulesResult = await schedulesResponse.json();

    // Simpan hasil ke variabel reaktif
    classesData.value = classesResult.data;
    let schedules = schedulesResult.data;

    scheduleData.value = schedules.map(schedule => {
        schedule.status_desc = statusDesc.find(status => status.value === schedule.status)?.name || 'Tidak Diketahui';

        return schedule;
    });

    loading.value = false;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

const selectedSchedule = ref();
const cm = ref();

const menuModel = ref([
    {label: 'Detail', icon: 'bi bi-eye', command: () => viewModal(selectedSchedule)},
]);

const onRowContextMenu = (event) => {
    cm.value.show(event.originalEvent);
};

/* Modal */
const showCreateModal = ref(false);
const showDeleteModal = ref(false);
const titleModal = ref('');
const modalType = ref('');

/* Modal Data */
let getData = reactive({
    id: '',
    name: '',
    created_at: '',
    updated_at: ''
});

provide('getData', getData)
provide('showCreateModal', showCreateModal);
provide('showDeleteModal', showDeleteModal);
provide('titleModal', titleModal);
provide('modalType', modalType);

const viewModal = (data) => {
    // Cek apakah data memiliki path atau route tujuan
    if (data) {        
        router.push({
            path: '/data-nilai/akademik/daftar-nilai',
            query: {
                ...data.query,
                classes_id:data.value.classes_id,
                schedule_id:data.value.id
            },
        });
    } else {
        console.error("Data tidak valid atau tidak memiliki path.");
    }
};


const deleteModal = () => {
    showDeleteModal.value = true;
};

</script>

<template>
    <div class="mt-2">
        <div class="w-1/4 border border-[#D9D9D9] mb-[20px] p-3 rounded-md shadow-lg bg-white">
            <div class="text-lg font-medium">{{ classesData.name }}</div>
        </div>
        <div class="relative overflow-x-auto">
            <ContextMenu ref="cm" :model="menuModel" @hide="selectedSchedule = null" />
            <DataTable v-model:filters="filters" :value="scheduleData" resizableColumns columnResizeMode="fit" showGridlines paginator stripedRows :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="margin-bottom: 10px;"
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
                contextMenu v-model:contextMenuSelection="selectedSchedule"
                @rowContextmenu="onRowContextMenu"
                dataKey="id" :loading="loading"
                :globalFilterFields="filterKey"
                scrollable scrollHeight="400px">
                <template #header>
                    <div class="w-full flex justify-between mb-2">
                        <div class="flex justify-end">
                            <IconField>
                                <InputTextPrime v-model="filters['global'].value" placeholder="Pencarian" id="search" />
                            </IconField>
                            <label for="search" class="flex items-center mb-[10px]">
                                <i class="bi bi-search mr-2 m-[5px]" />
                            </label>
                        </div>
                    </div>

                </template>
                <template #empty> Data tidak ditemukan. </template>
                <template #loading> Loading data. Please wait. </template>
                <Column 
                    header="No"
                    >
                    <template #body="slotProps">
                        {{ slotProps.index !== undefined ? slotProps.index + 1 : "-" }}
                    </template>
                </Column>
                <Column field="schedule_date" sortable header="Jadwal"></Column>
                <Column field="name" sortable header="Nama"></Column>
                <Column field="subject_desc" sortable header="Mata Pelajaran"></Column>
                <Column field="category_desc" sortable header="Kategori"></Column>
                <Column field="teacher" sortable header="Guru Pengajar"></Column>
                <Column field="classes_desc" sortable header="Kelas"></Column>
                <Column field="status_desc" sortable header="Status"></Column>
            </DataTable>
        </div>
    </div>
</template>

<style scoped>

</style> 