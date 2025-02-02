<script setup>
import { ref, onMounted, reactive, provide } from 'vue';
import { FilterMatchMode } from '@primevue/core/api';
import AddData from './partials/AddData.vue';
import DeleteData from './partials/DeleteData.vue';
import router from '../../../routes/router';

const school_class = ref([]);

const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
});

const loading = ref(true);
onMounted(async () => {
  try {
    const response = await fetch('/school_class.json');
    school_class.value = await response.json();
    loading.value = false;
  } catch (error) { 
    console.error('Error fetching school_class:', error);
  }
});

const selectedUser = ref();
const cm = ref();

const menuModel = ref([
    {label: 'View', icon: 'bi bi-eye', command: () => viewModal(selectedUser)},
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
const viewModal = (data) => {
    if (data) {
        router.push({
            path: '/data-nilai/akademik/kategori',
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
            <ContextMenu ref="cm" :model="menuModel" @hide="selectedUser = null" />
            <DataTable v-model:filters="filters" :value="school_class" resizableColumns columnResizeMode="fit" showGridlines paginator stripedRows :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="margin-bottom: 10px;"
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
                contextMenu v-model:contextMenuSelection="selectedUser"
                @rowContextmenu="onRowContextMenu"
                dataKey="id" :loading="loading"
                :globalFilterFields="['name']"
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
                <Column field="name" sortable header="Kelas"></Column>
            </DataTable>
        </div>
    </div>

    <!-- Delete Form -->
     <DeleteData v-model:showDeleteModal="showDeleteModal" />
</template>

<style scoped>

</style> 