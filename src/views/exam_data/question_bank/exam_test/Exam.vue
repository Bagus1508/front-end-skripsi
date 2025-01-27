<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const time = ref("");

const updateTime = () => {
  const now = new Date();
  time.value = now.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

let interval;

onMounted(() => {
  updateTime(); // Update waktu saat komponen dimuat
  interval = setInterval(updateTime, 1000); // Update setiap detik
});

onBeforeUnmount(() => {
  clearInterval(interval); // Bersihkan interval saat komponen dilepas
});
</script>

<template>
    <div class="flex justify-between">
        <div>
            <button class="bg-primary hover:bg-blue-600 px-5 py-2 rounded-[10px] font-medium text-white"><i class="bi bi-arrow-left-circle mr-2"></i>Sebelumnya</button>
        </div>
        <div class="items-center my-auto align-middle flex mb-[10px] mx-[10px]">
            <div class="bg-primary px-5 py-1 text-white rounded-md">{{ time }}</div>
        </div>
        <div>
            <button class="bg-primary hover:bg-blue-600 px-5 py-2 rounded-[10px] font-medium text-white">Selanjutnya<i class="bi bi-arrow-right-circle ml-2"></i></button>
        </div>
    </div>
    <div class="bg-[#d9d9d9a4] rounded-xl max-h-[550px] mt-[10px] overflow-hidden flex justify-between">
        <div class="w-3/4 border-r-2 border-[#d9d9d9] p-[40px]">
            <div>
                <img src="/src/assets/soal.png" alt="attachment" class="max-h-[200px]">
            </div>
            <div class="mt-[10px]">
                Pilih Opsi Gambar Selanjutnya!
            </div>
        </div>
        <form class="w-1/4 pt-[40px] pb-[40px] pl-[10px]">
            <div>
                <div class="flex justify-start gap-2 mb-[10px]">
                    <input type="radio" name="option" id="option1">
                    <label for="option1">
                        <img src="/src/assets/soal.png" alt="attachment" class="max-h-[100px]">
                    </label>
                </div>
                <div class="flex justify-start gap-2 mb-[10px]">
                    <input type="radio" name="option" id="option2">
                    <label for="option2">
                        <img src="/src/assets/soal.png" alt="attachment" class="max-h-[100px]">
                    </label>
                </div>
                <div class="flex justify-start gap-2 mb-[10px]">
                    <input type="radio" name="option" id="option3">
                    <label for="option3">
                        <img src="/src/assets/soal.png" alt="attachment" class="max-h-[100px]">
                    </label>
                </div>
                <div class="flex justify-start gap-2 mb-[10px]">
                    <input type="radio" name="option" id="option4">
                    <label for="option4">
                        <img src="/src/assets/soal.png" alt="attachment" class="max-h-[100px]">
                    </label>
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped>

</style>