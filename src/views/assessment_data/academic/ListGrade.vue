<script setup>
import { ref, onMounted, reactive, provide, inject, watch } from 'vue';
import { FilterMatchMode } from '@primevue/core/api';
import AddData from './partials/AddData.vue';
import DeleteData from './partials/DeleteData.vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import Swal from 'sweetalert2';
const baseURLApi = inject('baseURLApi');

const route = useRoute();

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

const listGrades = ref([]);
const schedules = ref([]);

const classesId = route.query.classes_id;
let scheduleId = route.query.schedule_id;
let subjectId = ref(null);

onMounted(async () => {
  try {
    // Lakukan kedua fetch secara bersamaan
    const [classesResponse, schedulesResponse] = await Promise.all([
      fetch(`${baseURLApi}/academic-reports?schedule_id=${scheduleId}`),
      fetch(`${baseURLApi}/schedules?classes_id=${classesId}`)
    ]);

    // Parsing JSON dari kedua response
    const academicReportResult = await classesResponse.json();
    const schedulesResult = await schedulesResponse.json();

    // Simpan hasil ke variabel reaktif
    listGrades.value = academicReportResult.data;
    schedules.value = schedulesResult.data[0];

    subjectId.value = schedules.value.subject_id;

    loading.value = false;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
let subjectIdVal = null;
watch(subjectId, (newVal) => {
    subjectIdVal = newVal 
})

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

});

provide('getData', getData)
provide('showCreateModal', showCreateModal);
provide('showDeleteModal', showDeleteModal);
provide('titleModal', titleModal);
provide('modalType', modalType);
provide('editMode', editMode);
provide('subjectId', subjectId);
provide('scheduleId', scheduleId);

// Fungsi untuk membuka modal
const createModal = () => {
    showCreateModal.value = true;
    titleModal.value = 'Tambah Nilai Siswa';
    modalType.value = 'create';
    editMode.value = false;
    scheduleId;
    subjectId.value;
};

const editModal = (data) => { 
    showCreateModal.value = true;
    titleModal.value = 'Edit Nilai Siswa';
    modalType.value = 'edit';
    editMode.value = true;

    getData = Object.assign(getData, data.value);
};

const viewModal = (data) => {
    showCreateModal.value = true;
    titleModal.value = 'Detail Nilai Siswa';
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
      await axios.delete(`${baseURLApi}/academic-reports/delete/${id}`);

      // Hapus data dari state frontend
      listGrades.value = listGrades.value.filter(listGrades => listGrades.id !== id);

      // Tampilkan pesan sukses
      Swal.fire({
        title: 'Dihapus!',
        text: 'Data Nilai berhasil dihapus.',
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
        <div class="w-1/4 border border-[#D9D9D9] mb-[20px] p-3 rounded-md shadow-lg bg-white">
            <div class="text-lg font-medium">{{schedules.category_desc}}</div>
            <div>{{schedules.subject_desc}}</div>
        </div>
        <div class="relative overflow-x-auto">
            <ContextMenu ref="cm" :model="menuModel" @hide="selectedData = null" />
            <DataTable v-model:filters="filters" :value="listGrades" resizableColumns columnResizeMode="fit" showGridlines paginator stripedRows :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="margin-bottom: 10px;"
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
                contextMenu v-model:contextMenuSelection="selectedData"
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
                <template #loading> Loading data. Please wait. </template>
                <Column 
                    header="No"
                    >
                    <template #body="slotProps">
                        {{ slotProps.index !== undefined ? slotProps.index + 1 : "-" }}
                    </template>
                </Column>
                <Column field="identification_number" sortable header="NIS"></Column>
                <Column field="student" sortable header="Nama"></Column>
                <Column field="class_desc" sortable header="Kelas"></Column>
                <Column field="score" sortable header="Nilai"></Column>
                <Column field="gender_desc" sortable header="Jenis Kelamin"></Column>
                <Column field="status" sortable header="Status"></Column>
            </DataTable>
        </div>
    </div>

    <!-- Delete Form -->
     <DeleteData v-model:showDeleteModal="showDeleteModal" />
</template>

<style scoped>

</style> 