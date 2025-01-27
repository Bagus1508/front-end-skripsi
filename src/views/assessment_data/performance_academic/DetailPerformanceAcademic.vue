<script setup>
import { ref, onMounted, reactive, provide } from 'vue';
import { FilterMatchMode } from '@primevue/core/api';
import AddData from './partials/AddData.vue';
import DeleteData from './partials/DeleteData.vue';

const listGrades = ref([]);

const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    identification_number: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },  
    class: { value: null, matchMode: FilterMatchMode.STARTS_WITH },  
    email: { value: null, matchMode: FilterMatchMode.STARTS_WITH },  
});

//Filter Key
const filterKey = Object.keys(filters.value);

const loading = ref(true);
onMounted(async () => {
    try {
        const response = await fetch('/detail_performance_academics.json');
        let listGradesData = await response.json();

        listGradesData = listGradesData.map(student => {
            student.gender_desc = student.gender ? 'Laki - Laki' : 'Perempuan';
            student.status = student.is_active ? 'Aktif' : 'Tidak Aktif';
            return student;
        });

        listGrades.value = listGradesData;

        loading.value = false;
    } catch (error) {
        console.error('Error fetching listGrades:', error);
    }
});

const selectedUser = ref();
const cm = ref();

const menuModel = ref([
    {label: 'Edit', icon: 'bi bi-pencil-square', command: () => editModal(selectedUser)},
    {label: 'View', icon: 'bi bi-eye', command: () => viewModal(selectedUser)},
    {label: 'Delete', icon: 'bi bi-trash', command: () => deleteModal(selectedUser)}
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
});

provide('getData', getData)
provide('showCreateModal', showCreateModal);
provide('showDeleteModal', showDeleteModal);
provide('titleModal', titleModal);
provide('modalType', modalType);

// Fungsi untuk membuka modal
const createModal = () => {
    showCreateModal.value = true;
    titleModal.value = 'Tambah Prestasi';
    modalType.value = 'create';
};

const editModal = (data) => { 
    showCreateModal.value = true;
    titleModal.value = 'Edit Prestasi';
    modalType.value = 'edit';

    getData = Object.assign(getData, data.value);
};

const viewModal = (data) => {
    if (data) {
        router.push({
            path: '/data-nilai/non-akademik/kategori',
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
        <div class="w-1/4 border border-[#D9D9D9] mb-[20px] p-3 rounded-md shadow-lg bg-white">
            <div class="text-lg font-medium">Detail Prestasi</div>
            <div>Bagus Adianto</div>
        </div>
        <div class="relative overflow-x-auto">
            <ContextMenu ref="cm" :model="menuModel" @hide="selectedUser = null" />
            <DataTable v-model:filters="filters" :value="listGrades" resizableColumns columnResizeMode="fit" showGridlines paginator stripedRows :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="margin-bottom: 10px;"
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
                contextMenu v-model:contextMenuSelection="selectedUser"
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
                        <div>
                            <button class="px-5 bg-primary py-2 rounded-lg text-white" @click="createModal">
                                Tambah Data +
                            </button>
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
                <Column field="title" sortable header="Kegiatan/Lomba"></Column>
                <Column field="award" sortable header="Penghargaan"></Column>
                <Column field="score" sortable header="Nilai"></Column>
                <Column field="subject" sortable header="Bidang Lomba"></Column>
            </DataTable>
        </div>
    </div>

    <!-- Delete Form -->
    <DeleteData v-model:showDeleteModal="showDeleteModal" />
</template>

<style scoped>

</style> 