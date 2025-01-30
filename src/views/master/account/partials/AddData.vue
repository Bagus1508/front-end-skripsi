<script setup>
import { inject, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
const baseURLApi = inject('baseURLApi');

// Mengambil nilai visible dari parent
const showCreateModal = inject('showCreateModal');
const titleModal = inject('titleModal');

// Jika visible tidak tersedia, beri nilai default false
if (!showCreateModal) {
  console.error('showCreateModal not provided');
}   

//Mengambil Data
let getData = inject('getData');

const roles = inject('roles');

//Store Data
const name = ref('');
const email = ref('');
const username = ref('');
const password = ref('');
const role_id = ref('');
const errorMessage = ref('');

const router = useRouter();

const store = async () => {
  try {
    const response = await axios.post(`${baseURLApi}/users/store`, {
      name: name.value,
      email: email.value,
      username: username.value,
      password: password.value,
      role_id: role_id.value,
    });
    
    // Tampilkan pesan sukses
    Swal.fire({
      title: "Sukses",
      text: "Data Berhasil Disimpan",
      icon: "success"
    });

    // Tutup modal setelah berhasil
    showCreateModal.value = false;
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
    showCreateModal.value = false;
  }
};
</script>

<template>
    <!-- Modal -->
    <div class="card flex justify-center">
        <Dialog v-model:visible="showCreateModal" modal v-model:header="titleModal" :style="{ width: '50vw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }" style="background-color: white;border-radius: 5px;">
            <form @submit.prevent="store">
                <InputText label="Nama" name="name" :modelValue="getData.userDetails?.name"/>
                <InputText label="Email" name="email" :modelValue="getData.userDetails?.email"/>
                <InputText label="Username" name="username" :modelValue="getData.username" v-model="username"/>
                <InputText label="Password" name="password" type="password"/>
                <InputSelect label="Role" name="role_id" :options="roles" :modelValue="getData.role_id" v-model="role_id"/>
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