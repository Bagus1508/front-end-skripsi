<script setup>
import { inject, ref } from 'vue';
const status = inject('status');

// Mengambil nilai visible dari parent
const showCreateModal = inject('showCreateModal');
const titleModal = inject('titleModal');

// Jika visible tidak tersedia, beri nilai default false
if (!showCreateModal) {
  console.error('showCreateModal not provided');
}   

//Mengambil Data
let getData = inject('getData');
</script>

<template>
    <!-- Modal -->
    <div class="card flex justify-center">
        <Dialog v-model:visible="showCreateModal" modal v-model:header="titleModal" :style="{ width: '50vw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }" style="background-color: white;border-radius: 5px;">
            <InputText label="Mata Pelajaran" name="subject" :value="getData.subject"/>
            <InputText label="Kategori" name="category" :value="getData.category"/>
            <InputText label="Guru Pengajar" name="user" :value="getData.user"/>
            <InputText label="Kelas" name="class_name" :value="getData.class_name"/>
            <InputText label="Tanggal Mulai" name="start_date" :value="getData.start_date" type="date"/>
            <InputText label="Tanggal Selesai" name="end_date" :value="getData.end_date" type="date"/>
            <InputText label="Jam Mulai" name="start_time" :value="getData.start_time" type="time"/>
            <InputText label="Jam Selesai" name="end_time" :value="getData.end_time" type="time"/>
            <InputSelect label="Status" name="is_active" :options="status" :value="getData.is_active"/>
            <div class="flex justify-end gap-1">
                <button class="flex-shrink-0 border-transparent border-4 text-primary hover:text-blue-900 text-sm py-1 px-2 rounded" type="button">
                Batal
                </button>
                <button class="flex-shrink-0 bg-primary hover:bg-blue-600 hover:border-blue-600 border-primary text-sm border-4 text-white py-1 px-2 rounded" type="button">
                Simpan
                </button>
            </div>
        </Dialog>
    </div>
</template>

<style scoped>

</style> 