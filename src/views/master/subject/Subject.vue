<script setup>
import { ref, onMounted, reactive, provide, inject } from 'vue';
import { FilterMatchMode } from '@primevue/core/api';
import AddData from './partials/AddData.vue';
import DeleteData from './partials/DeleteData.vue';
import axios from 'axios';
import Swal from 'sweetalert2';
const baseURLApi = inject('baseURLApi');

const subjects = ref([]);

const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
});

const loading = ref(true);
onMounted(async () => {
  try {
    const response = await fetch(`${baseURLApi}/subjects`);
    const result = await response.json();
    subjects.value = result.data;

    loading.value = false;
  } catch (error) { 
    console.error('Error fetching subjects:', error);
  }
});

const selectedData = ref();
const cm = ref();

const menuModel = ref([
    {label: 'Edit', icon: 'bi bi-pencil-square', command: () => editModal(selectedData)},
    {label: 'View', icon: 'bi bi-eye', command: () => viewModal(selectedData)},
    {label: 'Delete', icon: 'bi bi-trash', command: () => showDelete(selectedData)}
]);

const onRowContextMenu = (event) => {
    cm.value.show(event.originalEvent);
};

/* Modal */
const showCreateModal = ref(false);
const showDeleteModal = ref(false);
const titleModal = ref('');
const modalType = ref('');
const editMode = ref(false);

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
provide('editMode', editMode);

// Fungsi untuk membuka modal
const createModal = () => {
    showCreateModal.value = true;
    titleModal.value = 'Tambah Mata Pelajaran';
    modalType.value = 'create';
    editMode.value = false;
};

const editModal = (data) => { 
    showCreateModal.value = true;
    titleModal.value = 'Edit Mata Pelajaran';
    modalType.value = 'edit';
    editMode.value = true;

    getData = Object.assign(getData, data.value);
};

const viewModal = (data) => {
    showCreateModal.value = true;
    titleModal.value = 'Detail Mata Pelajaran';
    modalType.value = 'show';

    getData = Object.assign(getData, data.value);
};

const showDelete = async (data) => {
  try {
    const id = data.value.id;

    // Konfirmasi sebelum menghapus
    const confirmResult = await Swal.fire({
      title: 'Apakah Anda yakin?',
      text: "Data yang dihapus tidak dapat dikembalikan!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Batal',
      confirmButtonText: 'Ya, hapus!',
    });

    // Jika pengguna menekan "Ya, hapus!"
    if (confirmResult.isConfirmed) {
      // Hapus data dari backend
      await axios.delete(`${baseURLApi}/subjects/delete/${id}`);

      // Hapus data dari state frontend
      subjects.value = subjects.value.filter(subjects => subjects.id !== id);

      // Tampilkan pesan sukses
      Swal.fire({
        title: 'Dihapus!',
        text: 'Data Mata Pelajaran berhasil dihapus.',
        icon: 'success',
      });
    }
  } catch (error) {
    // Tampilkan pesan error
    Swal.fire({
      title: 'Gagal!',
      text: 'Terjadi kesalahan saat menghapus data.',
      icon: 'error',
    });
    console.error('Error deleting student:', error);
  }
};

</script>

<template>
    <div class="mt-2">
        <div class="relative overflow-x-auto">
            <ContextMenu ref="cm" :model="menuModel" @hide="selectedData = null" />
            <DataTable v-model:filters="filters" :value="subjects" resizableColumns columnResizeMode="fit" showGridlines paginator stripedRows :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="margin-bottom: 10px;"
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
                contextMenu v-model:contextMenuSelection="selectedData"
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
                        <div>
                            <button class="px-5 bg-primary py-2 rounded-lg text-white" @click="createModal">
                                Tambah Data +
                            </button>
                            <AddData v-model:showCreateModal="showCreateModal"/>
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
                <Column field="name" sortable header="Mata Pelajaran"></Column>
            </DataTable>
        </div>
    </div>

    <!-- Delete Form -->
     <DeleteData v-model:showDeleteModal="showDeleteModal" />
</template>

<style scoped>

</style> 