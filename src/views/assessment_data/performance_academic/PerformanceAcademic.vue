<script setup>
import { ref, onMounted, reactive, provide, inject } from 'vue';
import { FilterMatchMode } from '@primevue/core/api';
import AddData from './partials/AddData.vue';
import DeleteData from './partials/DeleteData.vue';
import router from '../../../routes/router';
import axios from 'axios';
import Swal from 'sweetalert2';
const baseURLApi = inject('baseURLApi');


const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    identification_number: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },  
    class: { value: null, matchMode: FilterMatchMode.STARTS_WITH },  
    email: { value: null, matchMode: FilterMatchMode.STARTS_WITH },  
});

//Data Constant
const statusDesc = inject('status');

//Filter Key
const filterKey = Object.keys(filters.value);

const loading = ref(true);
const students = ref([]);
onMounted(async () => {
    try {
        const response = await fetch(`${baseURLApi}/students`);
        const result = await response.json();
        let studentsData = result.data;

        students.value = studentsData.map(student => {
            student.number_id = student.userDetails?.number_id,
            student.name = student.userDetails?.name,
            student.classes = student.userDetails?.classes,
            student.classes_desc = student.userDetails?.classes_desc,
            student.email = student.userDetails?.email,
            student.birth_date = student.userDetails?.birth_date,
            student.birth_place = student.userDetails?.birth_place,
            student.age = student.userDetails?.age,
            student.phone_number = student.userDetails?.phone_number,
            student.gender = student.userDetails?.gender;
            student.gender_desc = student.gender ? 'Laki - Laki' : 'Perempuan';
            student.status = student.userDetails.status;
            student.status_desc = statusDesc.find(status => status.value === student.userDetails.status)?.name || 'Tidak Diketahui';
            return student;
        });

        loading.value = false;
    } catch (error) {
        console.error('Error fetching students:', error);
    }
});

const selectedData = ref();
const cm = ref();

const menuModel = ref([
    {label: 'View', icon: 'bi bi-eye', command: () => viewModal(selectedData)},
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

// Fungsi untuk membuka modal
const createModal = () => {
    showCreateModal.value = true;
    titleModal.value = 'Tambah Siswa';
    modalType.value = 'create';
    editMode.value = false;

};

const editModal = (data) => { 
    showCreateModal.value = true;
    titleModal.value = 'Edit Siswa';
    modalType.value = 'edit';
    editMode.value = true;

    getData = Object.assign(getData, data.value);
};

const viewModal = (data) => {
    if (data) {
        router.push({
            path: '/data-nilai/prestasi/detail',
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
      await axios.delete(`${baseURLApi}/students/delete/${id}`);

      // Hapus data dari state frontend
      students.value = students.value.filter(student => student.id !== id);

      // Tampilkan pesan sukses
      Swal.fire({
        title: 'Dihapus!',
        text: 'Data siswa berhasil dihapus.',
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
            <DataTable v-model:filters="filters" :value="students" resizableColumns columnResizeMode="fit" showGridlines paginator stripedRows :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="margin-bottom: 10px;"
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
                <Column field="id" sortable hidden header="ID"></Column>
                <Column field="number_id" sortable header="NIS"></Column>
                <Column field="name" sortable header="Nama"></Column>
                <Column field="classes" hidden header="Kelas Id"></Column>
                <Column field="classes_desc" sortable header="Kelas"></Column>
                <Column field="email" sortable header="Email"></Column>
                <Column field="gender_desc" sortable header="Jenis Kelamin"></Column>
                <Column field="birth_date" sortable header="Tanggal Lahir"></Column>
                <Column field="birth_place" sortable header="Tempat Lahir"></Column>
                <Column field="age" sortable header="Umur"></Column>
                <Column field="phone_number" sortable header="No Telepon"></Column>
                <Column field="status" hidden header="Status"></Column>
                <Column field="status_desc" sortable header="Status"></Column>
            </DataTable>
        </div>
    </div>

    <!-- Delete Form -->
     <DeleteData v-model:showDeleteModal="showDeleteModal" />
</template>

<style scoped>

</style> 