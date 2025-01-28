<script setup>
import { inject, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
const baseURLApi = inject('baseURLApi');

const username = ref('');
const password = ref('');
const errorMessage = ref('');

const router = useRouter();

const login = async () => {
  try {
    // Kirim kredensial ke API
    const response = await axios.post(`${baseURLApi}/auth/login`, {
      username: username.value,
      password: password.value
    });

    // Jika login berhasil, simpan token
    const token = response.data.data.token;
    localStorage.setItem('jwt', token);

    router.push('/'); // Redirect ke halaman dashboard atau yang diinginkan
  } catch (error) {
    // Tangani error jika login gagal
    errorMessage.value = error.response ? error.response.data.messages : 'Terjadi kesalahan';
  }
};

</script>

<template>
<body class="bg-[#5D5FEF] font-poppins">
  <section class="min-h-full">
    <div class="min-h-screen lg:mx-[300px] justify-center flex items-center">
      <form @submit.prevent="login">
        <div class="p-5 bg-white rounded-xl shadow-2xl">
          <h1 class="text-center text-[20px] font-semibold text-[#5B5B5B]">Silahkan Masuk</h1>
          <div class="flex my-[20px]">
            <img src="/image/logo_sma.png" alt="profile image" class="mx-auto rounded-full" height="100" width="100">
          </div>
          <span class="text-red-600">{{ errorMessage }}</span>
          <div>
            <div class="mb-[10px]">
              <label for="username" class="text-[13px] text-[#5B5B5B] font-semibold mb-[10px]">Username</label>
              <input id="username" type="text" class="bg-[#D9D9D9] w-full h-[40px] rounded-[10px] px-3" v-model="username" required>
            </div>
            <div>
              <label for="password" class="text-[13px] text-[#5B5B5B] font-semibold mb-[10px]">Password</label>
              <input id="password" type="password" class="bg-[#D9D9D9] w-full h-[40px] rounded-[10px] px-3" required v-model="password">
            </div>
          </div>
          <button type="submit" class="w-full bg-[#5D5FEF] p-[10px] text-white font-semibold rounded-[10px] mt-5 text-[13px]">Login</button>
        </div>
      </form>
    </div>
  </section>
</body>
</template>

<style scoped>

</style>