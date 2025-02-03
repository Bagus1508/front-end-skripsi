<script setup>
import { inject, onMounted } from 'vue';

const questions = inject('questionData');
</script>

<template>
    <div class="border border-[#a1a1a186] shadow-lg p-[10px] rounded-lg mb-[20px]">
        <div class="font-medium mb-[10px]"></div>
        <!-- Kategori Ujian -->
        <div class="mb-[10px]">
            <div class="mb-[5px]">
                Pertanyaan
            </div>
            <div class="border border-[#a1a1a186] rounded-lg w-1/4 shadow-md p-2 text-gray-500">
                {{questions.question}}
            </div>
        </div>
    </div>
</template>

<style scoped>

</style> 