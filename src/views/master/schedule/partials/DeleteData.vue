<script setup>
import { inject, ref } from 'vue';

// Mengambil nilai showDeleteModal dari parent
const showDeleteModal = inject('showDeleteModal');

// Jika showDeleteModal tidak tersedia, beri nilai default false
if (!showDeleteModal) {
  console.error('showDeleteModal not provided');
}   
</script>

<template>
    <!-- Modal -->
    <div class="card flex justify-center">
        <Dialog v-model:visible="showDeleteModal" modal header="Konfirmasi" :style="{ width: '50vw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }" style="background-color: white;border-radius: 5px;">
            <div class="text-lg">
                Apakah anda yakin ingin menghapus data ini?
            </div>
            <div class="flex justify-end gap-1">
                <button class="flex-shrink-0 border-transparent border-4 text-primary hover:text-blue-900 text-sm py-1 px-2 rounded" type="button">
                    Batal
                </button>
                <button class="flex-shrink-0 bg-red-500 hover:bg-red-700 hover:border-red-700 border-red-500 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                    <i class="bi bi-trash mr-1"></i> Hapus 
                </button>
            </div>
        </Dialog>
    </div>
</template>

<style scoped>

</style> 