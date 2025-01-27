<script setup>
import { ref, onMounted, reactive, provide } from 'vue';
import { FilterMatchMode } from '@primevue/core/api';
import AddData from './partials/AddData.vue';
import DeleteData from './partials/DeleteData.vue';
import router from '../../../routes/router';

const testResults = ref([]);

const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    subject: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    user: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    class_name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    category: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
});

//Filter Key
const filterKey = Object.keys(filters.value);

const loading = ref(true);
onMounted(async () => {
  try {
    const response = await fetch('/test_results.json');
    let testResultsData = await response.json();

    //Map Data
    testResultsData = testResultsData.map(schedule => {
        schedule.status = schedule.is_active ? 'Aktif' : 'Tidak Aktif';
        schedule.schedule_range = `${schedule.start_date} - ${schedule.end_date}`;

        return schedule;
    });

    testResults.value = testResultsData;

    loading.value = false;
  } catch (error) { 
    console.error('Error fetching testResults:', error);
  }
});

const selectedSchedule = ref();
const cm = ref();

const menuModel = ref([
    {label: 'Edit', icon: 'bi bi-pencil-square', command: () => editModal(selectedSchedule)},
    {label: 'Detail', icon: 'bi bi-eye', command: () => viewModal(selectedSchedule)},
    {label: 'Delete', icon: 'bi bi-trash', command: () => deleteModal(selectedSchedule)}
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

// Fungsi untuk membuka modal
const createModal = () => {
    showCreateModal.value = true;
    titleModal.value = 'Tambah Jadwal';
    modalType.value = 'create';
};

const editModal = (data) => { 
    showCreateModal.value = true;
    titleModal.value = 'Edit Jadwal';
    modalType.value = 'edit';

    getData = Object.assign(getData, data.value);
};

const viewModal = (data) => {
    // Cek apakah data memiliki path atau route tujuan
    if (data) {
        router.push({
            path: '/data-ujian/bank-soal/daftar-soal',
            query: data.query || {},
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
        <div class="relative overflow-x-auto">
            <ContextMenu ref="cm" :model="menuModel" @hide="selectedSchedule = null" />
            <DataTable v-model:filters="filters" :value="testResults" resizableColumns columnResizeMode="fit" showGridlines paginator stripedRows :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="margin-bottom: 10px;"
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
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
                        <div>
                            <AddData v-model:showCreateModal="showCreateModal"/>
                        </div>
                    </div>

                </template>
                <template #empty> Data tidak ditemukan. </template>
                <template #loading> Loading customers data. Please wait. </template>
                <Column 
                    header="No"
                    >
                    <template #body="slotProps">
                        {{ slotProps.index !== undefined ? slotProps.index + 1 : "-" }}
                    </template>
                </Column>
                <Column field="user_name" sortable header="Nama Siswa"></Column>
                <Column field="score" sortable header="Nilai"></Column>
            </DataTable>
        </div>
    </div>

    <!-- Delete Form -->
     <DeleteData v-model:showDeleteModal="showDeleteModal" />
</template>

<style scoped>

</style> 