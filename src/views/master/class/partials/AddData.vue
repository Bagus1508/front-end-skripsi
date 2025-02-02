<script setup>
import { inject, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import axios from 'axios';
const baseURLApi = inject('baseURLApi');

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
    name: '',
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
      url = `${baseURLApi}/class-rooms/update/${getData.id}`;
      method = 'put';
    } else {
      url = `${baseURLApi}/class-rooms/store`;
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
    // showCreateModal.value = false;
  }
};
</script>

<template>
    <!-- Modal -->
    <div class="card flex justify-center">
        <Dialog v-model:visible="showCreateModal" modal v-model:header="titleModal" :style="{ width: '50vw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }" style="background-color: white;border-radius: 5px;">
            <form @submit.prevent="handleSubmit">
                <InputText label="Nama" name="name" v-model="getData.name"/>
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