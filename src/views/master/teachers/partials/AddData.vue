<script setup>
import { inject, ref, watch, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import axios from 'axios';
const baseURLApi = inject('baseURLApi');
const roles = inject('roles');
const statusDesc = inject('status');
const genderDesc = inject('gender');
const subjectDesc = inject('subjects');

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
    number_id: '',
    name: '',
    classes: '',
    email: '',
    gender: '',
    birth_date: '',
    birth_place: '',
    age: '',
    phone_number: '',
    status: '',
    username: '',
    password: '',
    role_id: 2
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
      url = `${baseURLApi}/students/update/${getData.id}`;
      method = 'put';
    } else {
      url = `${baseURLApi}/students/store`;
      method = 'post';
    }

    const response = await axios({
      method: method,
      url: url,
      data: {
            ...getDataForm.value, // Spread data dari form
            role_id: 2, // Default role_id ke 2 jika kosong
        },
    });

    // Tampilkan pesan sukses
    Swal.fire({
      title: "Sukses",
      text: "Data Berhasil Disimpan",
      icon: "success"
    });

    // Tutup modal setelah berhasil
    showCreateModal.value = false;
    router.go(0);
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
              <InputText label="NUPTK" name="number_id" v-model="getDataForm.number_id" />
              <InputText label="Nama" name="name" v-model="getDataForm.name"/>
              <InputSelect label="Mata Pelajaran" name="subject_id" :options="subjectDesc" v-model="getDataForm.subject_id"/>
              <InputText label="Email" name="email" v-model="getDataForm.email"/>
              <InputSelect label="Gender" name="gender" :options="genderDesc" v-model="getDataForm.gender"/>
              <InputText label="Tanggal Lahir" name="birth_date" type="date" v-model="getDataForm.birth_date"/>
              <InputText label="Tempat Lahir" name="birth_place" v-model="getDataForm.birth_place"/>
              <InputText label="Usia" name="age" v-model="getDataForm.age"/>
              <InputText label="No Telepon" name="phone_number" v-model="getDataForm.phone_number"/>  
              <InputSelect label="Status" name="status" :options="statusDesc" v-model="getDataForm.status"/>
              <InputText label="Username" name="username" v-model="getDataForm.username"/>
              <InputText label="Password" name="password" type="password" v-model="getDataForm.password"/>
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