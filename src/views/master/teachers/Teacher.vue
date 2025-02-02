<script setup>
import { ref, onMounted, reactive, provide, inject } from 'vue';
import { FilterMatchMode } from '@primevue/core/api';
import AddData from './partials/AddData.vue';
import DeleteData from './partials/DeleteData.vue';
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
const teachers = ref([]);
onMounted(async () => {
    try {
        const response = await fetch(`${baseURLApi}/teachers`);
        const result = await response.json();
        let teachersData = result.data;

        teachers.value = teachersData.map(teacher => {
            teacher.number_id = teacher.userDetails?.number_id,
            teacher.name = teacher.userDetails?.name,
            teacher.subject_id = teacher.userDetails?.subject_id,
            teacher.subject = teacher.userDetails?.subject_desc,
            teacher.email = teacher.userDetails?.email,
            teacher.birth_date = teacher.userDetails?.birth_date,
            teacher.birth_place = teacher.userDetails?.birth_place,
            teacher.age = teacher.userDetails?.age,
            teacher.phone_number = teacher.userDetails?.phone_number,
            teacher.gender = teacher.userDetails.gender;
            teacher.gender_desc = teacher.gender ? 'Laki - Laki' : 'Perempuan';
            teacher.status = teacher.userDetails.status;
            teacher.status_desc = statusDesc.find(status => status.value === teacher.userDetails.status)?.name || 'Tidak Diketahui';
            return teacher;
        });
        
        loading.value = false;
    } catch (error) {
        console.error('Error fetching teachers:', error);
    }
});

const selectedUser = ref();
const cm = ref();

const menuModel = ref([
    {label: 'Edit', icon: 'bi bi-pencil-square', command: () => editModal(selectedUser)},
    {label: 'View', icon: 'bi bi-eye', command: () => viewModal(selectedUser)},
    {label: 'Delete', icon: 'bi bi-trash', command: () => showDelete(selectedUser)}
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
    titleModal.value = 'Tambah Guru';
    modalType.value = 'create';
    editMode.value = false;

};

const editModal = (data) => { 
    showCreateModal.value = true;
    titleModal.value = 'Edit Guru';
    modalType.value = 'edit';
    editMode.value = true;

    getData = Object.assign(getData, data.value);
};

const viewModal = (data) => {
    showCreateModal.value = true;
    titleModal.value = 'Detail Guru';
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
      await axios.delete(`${baseURLApi}/teachers/delete/${id}`);

      // Hapus data dari state frontend
      teachers.value = teachers.value.filter(teacher => teacher.id !== id);

      // Tampilkan pesan sukses
      Swal.fire({
        title: 'Dihapus!',
        text: 'Data Guru berhasil dihapus.',
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
    console.error('Error deleting teacher:', error);
  }
};

</script>

<template>
    <div class="mt-2">
        <div class="relative overflow-x-auto">
            <ContextMenu ref="cm" :model="menuModel" @hide="selectedUser = null" />
            <DataTable v-model:filters="filters" :value="teachers" resizableColumns columnResizeMode="fit" showGridlines paginator stripedRows :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="margin-bottom: 10px;"
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
                <template #loading> Loading data. Please wait. </template>
                <Column 
                    header="No"
                    >
                    <template #body="slotProps">
                        {{ slotProps.index !== undefined ? slotProps.index + 1 : "-" }}
                    </template>
                </Column>
                <Column field="id" sortable hidden header="ID"></Column>
                <Column field="number_id" sortable header="NUPTK"></Column>
                <Column field="name" sortable header="Nama"></Column>
                <Column field="subject" sortable header="Mata Pelajaran"></Column>
                <Column field="subject_id" hidden sortable header="Mata Pelajaran Id"></Column>
                <Column field="email" sortable header="Email"></Column>
                <Column field="gender_desc" sortable header="Jenis Kelamin"></Column>
                <Column field="birth_date" sortable header="Tanggal Lahir"></Column>
                <Column field="birth_place" sortable header="Tempat Lahir"></Column>
                <Column field="age" sortable header="Umur"></Column>
                <Column field="phone_number" sortable header="No Telepon"></Column>
                <Column field="status" sortable hidden header="Status"></Column>
                <Column field="status_desc" sortable header="Status"></Column>
            </DataTable>
        </div>
    </div>

    <!-- Delete Form -->
     <DeleteData v-model:showDeleteModal="showDeleteModal" />
</template>

<style scoped>

</style> 