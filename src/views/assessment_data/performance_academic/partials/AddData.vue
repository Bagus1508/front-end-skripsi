<script setup>
import { inject, ref } from 'vue';

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
            <InputText label="Kegiatan/Lomba" name="title" :value="getData.title"/>
            <InputText label="Penghargaan" name="award" :value="getData.award"/>
            <InputText label="Bidang Lomba" name="subject" :value="getData.subject"/>
            <InputText label="Nilai" name="score" :value="getData.score"/>
            <InputText label="Deskripsi" name="description" :value="getData.description"/>
            <InputText label="Lampiran" name="attachment" type="file"/>
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