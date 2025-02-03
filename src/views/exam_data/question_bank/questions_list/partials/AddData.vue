<script setup>
import { inject, ref, watch } from 'vue';
const status = inject('status');
import Swal from 'sweetalert2';
import axios from 'axios';
import { useRouter } from 'vue-router';
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
const scheduleId = inject('scheduleId');

//Store Data
const getDataForm = ref({
    question: '',
    score: '',
    attachment: null,
});

// Update getDataForm setiap kali getData berubah (saat edit modal dibuka)
watch(getData, (newData) => {
    if (newData) {
        getDataForm.value = { ...newData };
    }
}, { immediate: true });

const router = useRouter();

const handleFileUpload = (event) => {
  const file = event.target.files[0]; // Ambil file pertama yang dipilih
  if (file) {
    getDataForm.value.attachment = file; // Simpan dalam state
  }
};

const handleSubmit = async () => {
    console.log(getDataForm.value);
    
  try {
    let url = '';
    let method = '';
    
    if (editMode.value) {
      url = `${baseURLApi}/questions/update/${getData.id}`;
      method = 'put';
    } else {
      url = `${baseURLApi}/questions/store`;
      method = 'post';
    }
    
    const response = await axios({
      method: method,
      url: url,
      headers: {
            "Content-Type": "multipart/form-data",
        },
      data: {
          schedule_id: scheduleId.value,
        ...getDataForm.value,
      },
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
  }
};
</script>

<template>  
    <!-- Modal -->
    <div class="card flex justify-center">
        <Dialog v-model:visible="showCreateModal" modal v-model:header="titleModal" :style="{ width: '50vw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }" style="background-color: white;border-radius: 5px;">
            <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
                <InputText label="Pertanyaan" name="question" v-model="getData.question"/>
                <InputText 
                    label="Lampiran" 
                    name="attachment" 
                    type="file"
                    @change="handleFileUpload"
                />
                <div>
                    <img :src="getData.attachment" width="300" alt="soal">
                    <a :href="getData.attachment" target="_blank" class="text-blue-600 hover:text-blue-800 hover:underline">Download</a>
                </div>
                <InputText label="Nilai" name="score" v-model="getData.score" type="number"/>
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