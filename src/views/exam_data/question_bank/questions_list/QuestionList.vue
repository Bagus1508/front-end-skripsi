<script setup>
import { ref, onMounted, reactive, provide, inject } from 'vue';
import { FilterMatchMode } from '@primevue/core/api';
import AddData from './partials/AddData.vue';
import DeleteData from './partials/DeleteData.vue';
import CardQuestion from './partials/Card.vue';
import router from '../../../../routes/router';
import { useRoute } from 'vue-router';
import axios from 'axios';
import Swal from 'sweetalert2';
const baseURLApi = inject('baseURLApi');

const route = useRoute();

const scheduleData = ref([]);
const scheduleId = ref('');
const questionsList = ref([]);

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
    // Lakukan kedua fetch secara bersamaan
    const [questionsResponse, schedulesResponse] = await Promise.all([
      fetch(`${baseURLApi}/questions/${route.query.schedule_id}`),
      fetch(`${baseURLApi}/schedules/${route.query.schedule_id}`)
    ]);

    // Parsing JSON dari kedua response
    const questionsResult = await questionsResponse.json();
    const schedulesResult = await schedulesResponse.json();

    // Simpan hasil ke variabel reaktif
    questionsList.value = questionsResult.data;
    scheduleData.value = schedulesResult.data;

    loading.value = false;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});


const selectedData = ref();
const cm = ref();

const menuModel = ref([
    {label: 'Edit', icon: 'bi bi-pencil-square', command: () => editModal(selectedData)},
    /* {label: 'Detail', icon: 'bi bi-eye', command: () => viewModal(selectedData)}, */
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
provide('scheduleData', scheduleData);
provide('editMode', editMode);
provide('scheduleId', scheduleId);


// Fungsi untuk membuka modal
const createModal = () => {
    showCreateModal.value = true;
    titleModal.value = 'Tambah Soal';
    modalType.value = 'create';
    editMode.value = false;
    scheduleId.value = route.query.schedule_id;
};

const editModal = (data) => { 
    showCreateModal.value = true;
    titleModal.value = 'Edit Soal';
    modalType.value = 'edit';
    editMode.value = true;

    getData = Object.assign(getData, data.value);
};

const viewModal = (data) => {
    // Cek apakah data memiliki path atau route tujuan
    if (data) {
        router.push({
            path: '/master/data-guru',
            query: data.query || {},
        });
    } else {
        console.error("Data tidak valid atau tidak memiliki path.");
    }
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
      await axios.delete(`${baseURLApi}/questions/delete/${id}`);

      // Hapus data dari state frontend
      questionsList.value = questionsList.value.filter(questionsList => questionsList.id !== id);

      // Tampilkan pesan sukses
      Swal.fire({
        title: 'Dihapus!',
        text: 'Data soal berhasil dihapus.',
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
    <div>
        <CardQuestion />
    </div>
    <div class="mt-2">
        <div class="relative overflow-x-auto">
            <ContextMenu ref="cm" :model="menuModel" @hide="selectedData = null" />
            <DataTable v-model:filters="filters" :value="questionsList" resizableColumns columnResizeMode="fit" showGridlines paginator stripedRows :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="margin-bottom: 10px;"
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
                <Column field="question" sortable header="Soal"></Column>
                <Column field="score" sortable header="Nilai"></Column>
            </DataTable>
        </div>
    </div>

    <!-- Delete Form -->
     <DeleteData v-model:showDeleteModal="showDeleteModal" />
</template>

<style scoped>

</style> 