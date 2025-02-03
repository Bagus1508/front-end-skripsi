<script setup>
import { inject, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import axios from 'axios';
const baseURLApi = inject('baseURLApi');
const status = inject('status');
const categoriesData = inject('categories');
const subjectsData = inject('subjects');
const usersData = inject('users');
const classesData = inject('classes');

// Mengambil nilai visible dari parent
const showCreateModal = inject('showCreateModal');
const titleModal = inject('titleModal');
const errorMessage = ref('');

// Jika visible tidak tersedia, beri nilai default false
if (!showCreateModal) {
  console.error('showCreateModal not provided');
}   

//Mengambil Data
let getData = inject('getData');
const editMode = inject('editMode');

//Store Data
const getDataForm = ref({
    'schedule_date': '',
    'start_date': '',
    'end_date': '',
    'start_time': '',
    'end_time': '',
    'status': '',
    'subject_id': '',
    'user_id': '',
    'classes_id': '',
    'category_id': '',
});

// Update getDataForm setiap kali getData berubah (saat edit modal dibuka)
watch(getData, (newData) => {
    if (newData) {
        getDataForm.value = { ...newData };
    }
}, { immediate: true });

const router = useRouter();

const handleSubmit = async () => {
  try {
    let url = '';
    let method = '';

    if (editMode.value) {
      url = `${baseURLApi}/schedules/update/${getData.id}`;
      method = 'put';
    } else {
      url = `${baseURLApi}/schedules/store`;
      method = 'post';
    }
    
    const response = await axios({
      method: method,
      url: url,
      data: getDataForm.value,
    });

    // Tampilkan pesan sukses
    Swal.fire({
        title: "Sukses",
        text: "Data Berhasil Disimpan",
        icon: "success",
        confirmButtonText: "OK"
    }).then((result) => {
        if (result.isConfirmed) {
            router.go(0); // Refresh setelah klik OK
        }
    });
  } catch (error) {
    // Tangani error
    errorMessage.value = error.response ? error.response.data.messages : 'Terjadi kesalahan';

    // Tampilkan pesan error
    Swal.fire({
      title: "Gagal",
      text: "Data Gagal Disimpan",
      icon: "error"
    });

    // Tetap tutup modal meskipun gagal (opsional)
    // showCreateModal.value = false;
  }
};
</script>

<template>
    <!-- Modal -->
    <div class="card flex justify-center">
        <Dialog v-model:visible="showCreateModal" modal v-model:header="titleModal" :style="{ width: '50vw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }" style="background-color: white;border-radius: 5px;">
            <form @submit.prevent="handleSubmit">
                <InputText label="Jadwal" name="schedule_date" v-model="getData.schedule_date" type="date"/>
                <InputText label="Tanggal Mulai" name="start_date" v-model="getData.start_date" type="date"/>
                <InputText label="Tanggal Selesai" name="end_date" v-model="getData.end_date" type="date"/>
                <InputText label="Jam Masuk" name="start_time" v-model="getData.start_time" type="time"/>
                <InputText label="Jam Selesai" name="end_time" v-model="getData.end_time" type="time"/>
                <InputSelect label="Mata Pelajaran" name="subject_id" :options="subjectsData" v-model="getData.subject_id"/>
                <InputSelect label="Kategori" name="category_id" :options="categoriesData" v-model="getData.category_id"/>
                <InputSelect label="Guru Pengajar" name="user_id" :options="usersData" v-model="getData.user_id"/>
                <InputSelect label="Kelas" name="classes_id" :options="classesData" v-model="getData.classes_id"/>
                <InputSelect label="Status" name="status" :options="status" v-model="getData.status"/>
                <div class="flex justify-end gap-1">
                    <button class="flex-shrink-0 border-transparent border-4 text-primary hover:text-blue-900 text-sm py-1 px-2 rounded" type="button">
                    Batal
                    </button>
                    <button class="flex-shrink-0 bg-primary hover:bg-blue-600 hover:border-blue-600 border-primary text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                    Simpan
                    </button>
                </div>
            </form>
        </Dialog>
    </div>
</template>

<style scoped>

</style> 