<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const activeStyleParent = 'bg-primary text-white';
const activeStyleSubRoute = 'bg-[#D9D9D9] bg-opacity-50';

const isActiveRoute = (path) => {
    if (path === '/') {
        // Cek eksak untuk root path
        return route.path === path;
    }

    return route.path.startsWith(path);
}

function toggleDropdown(dropdownId) {    
    const dropdown = document.getElementById(dropdownId);
    const parentLi = dropdown.closest('li');
    const isDropdownVisible = !dropdown.classList.contains('hidden');
    const arrowIcon = parentLi.querySelector('a').querySelectorAll('div')[1].querySelector('svg');

    // Menyembunyikan / Menampilkan dropdown
    dropdown.classList.toggle('hidden');     

    // Ubah warna elemen di dalam <li> jika dropdown aktif
    if (isDropdownVisible) {
        // Dropdown dihapus, kembalikan ke keadaan semula
        parentLi.classList.remove('bg-primary', 'white-text', 'rounded-[10px]', 'pb-2', 'shadow-2xl');
        arrowIcon.classList.remove('rotate-180');
        parentLi.querySelectorAll('.group, .group svg, .group div').forEach(element => {
            element.classList.remove('white-text');
        });
    } else {
        // Dropdown ditampilkan, beri warna putih untuk teks dan latar belakang
        parentLi.classList.add('bg-primary', 'white-text', 'rounded-[10px]', 'pb-2', 'shadow-2xl');
        arrowIcon.classList.add('rotate-180');
        parentLi.querySelectorAll('.group, .group svg, .group div').forEach(element => {
            element.classList.add('white-text');
        });
    }
}
</script>
<template>
    <!-- Sidebar -->
    <aside class="w-[300px] min-h-screen bg-white border-r-4 p-5 overflow-auto scrollbar max-sm:hidden">
        <a href="#"  class="flex gap-6">
        <div class="w-[46px] h-[46px]">
            <img src="../../image/logo_sma.png" alt="logo" class="w-[46px] h-[46px] bg-primary rounded-[10px] text-white">
        </div>
        <div class="font-semibold text-xl text-[#151D48] flex justify-center items-center">
            <div>
                Kenalin
            </div>
        </div>            
        </a>

        <div class="mt-[50px] max-h-screen">
        <ul class="">
            <li class="mb-2">
                <a href="/" class="flex gap-5 p-2 rounded-lg text-[#737791] hover:text-white hover:bg-primary group" :class="isActiveRoute('/') ? activeStyleParent : ''">
                    <div>
                        <!-- Gunakan fill="currentColor" agar SVG mengikuti warna teks -->
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="group-hover:fill-white">
                            <mask id="mask0_33_1877" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
                                <rect width="30" height="30" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_33_1877)">
                                <!-- Ganti fill dengan currentColor agar SVG mengikuti warna teks -->
                                <path d="M13.6702 7.84579L14.0414 13.3657L14.2257 16.1401C14.2277 16.4255 14.2723 16.7089 14.3586 16.9813C14.5811 17.5101 15.1166 17.8461 15.6991 17.8227L24.5754 17.242C24.9598 17.2357 25.331 17.3795 25.6073 17.6417C25.8375 17.8603 25.9862 18.1461 26.0331 18.4536L26.0489 18.6403C25.6815 23.7265 21.9459 27.9689 16.8702 29.064C11.7944 30.1591 6.58947 27.8457 4.08127 23.3799C3.35818 22.0824 2.90652 20.6564 2.75283 19.1853C2.68863 18.7499 2.66036 18.31 2.6683 17.87C2.66036 12.417 6.54362 7.70262 11.9794 6.5661C12.6337 6.46422 13.275 6.81057 13.5374 7.40738C13.6053 7.54559 13.6501 7.69362 13.6702 7.84579Z" fill="currentColor"/>
                                <path opacity="0.4" d="M29.3337 13.083L29.3244 13.1264L29.2975 13.1896L29.3012 13.3631C29.2873 13.5929 29.1985 13.8139 29.0457 13.9926C28.8864 14.1786 28.6688 14.3053 28.4292 14.3545L28.2831 14.3745L18.042 15.0381C17.7013 15.0717 17.3621 14.9618 17.1089 14.7359C16.8977 14.5475 16.7628 14.2934 16.7247 14.0195L16.0373 3.79334C16.0253 3.75877 16.0253 3.72129 16.0373 3.6867C16.0467 3.40482 16.1708 3.13838 16.3819 2.9469C16.5928 2.75542 16.8733 2.65486 17.1604 2.66769C23.2403 2.82237 28.3501 7.19431 29.3337 13.083Z" fill="currentColor"/>
                            </g>
                        </svg>
                    </div>
                    <div class="font-normal text-[#737791] flex justify-center items-center group-hover:text-white" :class="isActiveRoute('/') ? activeStyleParent : ''">
                        <div id="title">
                            Dashboard
                        </div>
                    </div>
                </a>
            </li>
            <!-- Data Ujian -->
            <li class="group mb-2">
                <!-- Tombol utama dengan toggle dropdown -->
                <a id="button-test-data" href="#" class="flex gap-5 p-2 rounded-lg text-[#737791] hover:text-white hover:bg-primary group" :class="isActiveRoute('/data-ujian') ? activeStyleParent : ''" @click="toggleDropdown('dropdown-data-ujian')">
                    <div>
                        <svg width="30" height="30" viewBox="0 0 34 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="group-hover:text-white">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20925 1.00421C2.87331 0.361223 3.77399 0 4.7131 0H17.8992C18.8383 0 19.739 0.361223 20.4031 1.00421L28.4628 8.80812C29.1269 9.45111 29.5001 10.3232 29.5001 11.2325V28.5714C29.5001 29.4807 29.1269 30.3529 28.4628 30.9959C27.7988 31.6389 26.8982 32 25.9591 32H4.7131C3.77396 32 2.87331 31.6389 2.20925 30.9959C1.54519 30.3529 1.17212 29.4807 1.17212 28.5714V3.42857C1.17212 2.51927 1.54519 1.64719 2.20925 1.00421ZM13.2388 10.3506C14.0344 10.9009 14.2187 11.9715 13.6504 12.7419L10.3537 17.2107C10.0513 17.6207 9.57775 17.8812 9.05907 17.9227C8.54041 17.9643 8.02914 17.7828 7.66111 17.4265L5.68314 15.5113C4.99173 14.8418 4.99173 13.7564 5.68314 13.0869C6.37458 12.4174 7.49558 12.4174 8.187 13.0869L8.68712 13.5712L10.769 10.7491C11.3373 9.9787 12.4431 9.80025 13.2388 10.3506ZM15.4806 14.5714C15.4806 13.6247 16.2733 12.8571 17.2511 12.8571H23.1528C24.1306 12.8571 24.9233 13.6247 24.9233 14.5714C24.9233 15.5182 24.1306 16.2857 23.1528 16.2857H17.2511C16.2733 16.2857 15.4806 15.5182 15.4806 14.5714ZM15.4806 23.643C15.4806 22.6961 16.2733 21.9286 17.2511 21.9286H23.1528C24.1306 21.9286 24.9233 22.6961 24.9233 23.643C24.9233 24.5897 24.1306 25.3573 23.1528 25.3573H17.2511C16.2733 25.3573 15.4806 24.5897 15.4806 23.643ZM13.6504 21.9562C14.2187 21.1858 14.0344 20.1152 13.2388 19.5648C12.4431 19.0145 11.3373 19.193 10.769 19.9634L8.68712 22.7854L8.187 22.3012C7.49558 21.6317 6.37458 21.6317 5.68314 22.3012C4.99173 22.9707 4.99173 24.056 5.68314 24.7255L7.66111 26.6407C8.02914 26.997 8.54041 27.1785 9.05907 27.1369C9.57775 27.0955 10.0513 26.835 10.3537 26.4249L13.6504 21.9562Z"/>
                        </svg>
                    </div>
                    <div class="font-normal text-[#737791] flex justify-center items-center group-hover:text-white" :class="isActiveRoute('/data-ujian') ? activeStyleParent : ''">
                        <div class="flex gap-3">
                            Data Ujian
                            <div class="flex text-center items-center justify-center group">
                                <svg width="15" height="15" viewBox="0 0 22 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="group-hover:text-white transform" id="arrow-dropdown-data-ujian">
                                    <path d="M15.7094 9.71421C16.1392 9.3674 16.2065 8.73783 15.8597 8.30801C15.5129 7.87819 14.8833 7.8109 14.4535 8.15771L15.7094 9.71421ZM10.9735 12.2505L10.3456 13.0288C10.712 13.3245 11.2351 13.3245 11.6015 13.0288L10.9735 12.2505ZM7.49357 8.15771C7.06375 7.8109 6.43417 7.87819 6.08737 8.30801C5.74056 8.73783 5.80785 9.3674 6.23766 9.71421L7.49357 8.15771ZM14.4535 8.15771L10.3456 11.4723L11.6015 13.0288L15.7094 9.71421L14.4535 8.15771ZM11.6015 11.4723L7.49357 8.15771L6.23766 9.71421L10.3456 13.0288L11.6015 11.4723ZM2.88542 10C2.88542 5.61189 6.5686 2 11.1805 2V0C5.52534 0 0.885422 4.44699 0.885422 10H2.88542ZM11.1805 2C15.7924 2 19.4756 5.61189 19.4756 10H21.4756C21.4756 4.44699 16.8357 0 11.1805 0V2ZM19.4756 10C19.4756 14.3881 15.7924 18 11.1805 18V20C16.8357 20 21.4756 15.553 21.4756 10H19.4756ZM11.1805 18C6.5686 18 2.88542 14.3881 2.88542 10H0.885422C0.885422 15.553 5.52534 20 11.1805 20V18Z"/>
                                </svg>
                            </div>                                 
                        </div>
                    </div>
                </a>                    
                <!-- Dropdown Submenu -->
                <div id="dropdown-data-ujian" class="hidden">
                    <ul class="text-[#737791]">
                        <li class="p-2 text-white cursor-pointer rounded-lg text-center">
                            <a class="hover:bg-opacity-50 hover:bg-[#D9D9D9] px-5 py-2 rounded-xl" href="/data-ujian/bank-soal" :class="isActiveRoute('/data-ujian/bank-soal') ? activeStyleSubRoute : ''">Bank Soal</a>
                        </li>
                        <li class="p-2 text-white cursor-pointer rounded-lg text-center">
                            <a class="hover:bg-opacity-50 hover:bg-[#D9D9D9] px-5 py-2 rounded-xl" href="/data-ujian/kategori-ujian" :class="isActiveRoute('/data-ujian/kategori-ujian') ? activeStyleSubRoute : ''">Kategori Ujian</a>
                        </li>
                        <li class="p-2 text-white cursor-pointer rounded-lg text-center">
                            <a class="hover:bg-opacity-50 hover:bg-[#D9D9D9] px-5 py-2 rounded-xl" href="/data-ujian/hasil-tes" :class="isActiveRoute('/data-ujian/hasil-tes') ? activeStyleSubRoute : ''">Hasil Tes</a>
                        </li>                            
                    </ul>
                </div>
            </li>
            <!-- Data Nilai -->
            <li class="group mb-2">
                <!-- Tombol utama dengan toggle dropdown -->
                <a id="button-test-data" href="#" class="flex gap-5 p-2 rounded-lg text-[#737791] hover:text-white hover:bg-primary group" @click="toggleDropdown('dropdown-data-nilai')">
                    <div>                                
                        <svg width="30" height="30" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="group-hover:text-white">
                            <path d="M23.3335 10.1734V6.66669C23.3335 4.00002 22.0002 2.66669 19.3335 2.66669H12.6668C10.0002 2.66669 8.66684 4.00002 8.66684 6.66669V10.08M5.68018 14.6934V21.32C5.68018 23.7467 5.68018 23.7467 7.97351 25.2934L14.2802 28.9334C15.2268 29.48 16.7735 29.48 17.7202 28.9334L24.0268 25.2934C26.3202 23.7467 26.3202 23.7467 26.3202 21.32V14.6934C26.3202 12.2667 26.3202 12.2667 24.0268 10.72L17.7202 7.08002C16.7735 6.53335 15.2268 6.53335 14.2802 7.08002L7.97351 10.72C5.68018 12.2667 5.68018 12.2667 5.68018 14.6934ZM16.8402 14.6534L17.6002 15.84C17.7202 16.0267 17.9868 16.2134 18.1868 16.2667L19.5468 16.6134C20.3868 16.8267 20.6135 17.5467 20.0668 18.2134L19.1735 19.2934C19.0402 19.4667 18.9335 19.7734 18.9468 19.9867L19.0268 21.3867C19.0802 22.2534 18.4668 22.6934 17.6668 22.3734L16.3602 21.8534C16.1602 21.7734 15.8268 21.7734 15.6268 21.8534L14.3202 22.3734C13.5202 22.6934 12.9068 22.24 12.9602 21.3867L13.0402 19.9867C13.0535 19.7734 12.9468 19.4534 12.8135 19.2934L11.9202 18.2134C11.3735 17.5467 11.6002 16.8267 12.4402 16.6134L13.8002 16.2667C14.0135 16.2134 14.2802 16.0134 14.3868 15.84L15.1468 14.6534C15.6268 13.9334 16.3735 13.9334 16.8402 14.6534Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="font-normal text-[#737791] flex justify-center items-center group-hover:text-white">
                        <div class="flex gap-3">
                            Data Nilai
                            <div class="flex text-center items-center justify-center group">
                                <svg width="15" height="15" viewBox="0 0 22 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="group-hover:text-white transform" id="arrow-dropdown-data-ujian">
                                    <path d="M15.7094 9.71421C16.1392 9.3674 16.2065 8.73783 15.8597 8.30801C15.5129 7.87819 14.8833 7.8109 14.4535 8.15771L15.7094 9.71421ZM10.9735 12.2505L10.3456 13.0288C10.712 13.3245 11.2351 13.3245 11.6015 13.0288L10.9735 12.2505ZM7.49357 8.15771C7.06375 7.8109 6.43417 7.87819 6.08737 8.30801C5.74056 8.73783 5.80785 9.3674 6.23766 9.71421L7.49357 8.15771ZM14.4535 8.15771L10.3456 11.4723L11.6015 13.0288L15.7094 9.71421L14.4535 8.15771ZM11.6015 11.4723L7.49357 8.15771L6.23766 9.71421L10.3456 13.0288L11.6015 11.4723ZM2.88542 10C2.88542 5.61189 6.5686 2 11.1805 2V0C5.52534 0 0.885422 4.44699 0.885422 10H2.88542ZM11.1805 2C15.7924 2 19.4756 5.61189 19.4756 10H21.4756C21.4756 4.44699 16.8357 0 11.1805 0V2ZM19.4756 10C19.4756 14.3881 15.7924 18 11.1805 18V20C16.8357 20 21.4756 15.553 21.4756 10H19.4756ZM11.1805 18C6.5686 18 2.88542 14.3881 2.88542 10H0.885422C0.885422 15.553 5.52534 20 11.1805 20V18Z"/>
                                </svg>
                            </div>                                 
                        </div>
                    </div>
                </a>                    
                <!-- Dropdown Submenu -->
                <div id="dropdown-data-nilai" class="hidden">
                    <ul class="text-[#737791]">
                        <li class="p-2 text-white cursor-pointer rounded-lg text-center">
                            <a class="hover:bg-opacity-50 hover:bg-[#D9D9D9] px-5 py-2 rounded-xl" href="#">Akademik</a>
                        </li>
                        <li class="p-2 text-white cursor-pointer rounded-lg text-center">
                            <a class="hover:bg-opacity-50 hover:bg-[#D9D9D9] px-5 py-2 rounded-xl" href="#">Non Akademik</a>
                        </li>
                        <li class="p-2 text-white cursor-pointer rounded-lg text-center">
                            <a class="hover:bg-opacity-50 hover:bg-[#D9D9D9] px-5 py-2 rounded-xl" href="#">Prestasi</a>
                        </li>                            
                    </ul>
                </div>
            </li>
            <!-- Hasil Analisis -->
            <li class="group mb-2">
                <!-- Tombol utama dengan toggle dropdown -->
                <a id="button-test-data" href="#" class="flex gap-5 p-2 rounded-lg text-[#737791] hover:text-white hover:bg-primary group" @click="toggleDropdown('dropdown-data-hasil-analisis')">
                    <div>                                
                        <svg width="30" height="30" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="group-hover:text-white">
                            <path d="M28 26.6667H4V6.66669" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M28 9.33331L17.3333 18.6666L12 13.3333L4 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                                
                    </div>
                    <div class="font-normal text-[#737791] flex justify-center items-center group-hover:text-white">
                        <div class="flex gap-3">
                            Analisis
                            <div class="flex text-center items-center justify-center group">
                                <svg width="15" height="15" viewBox="0 0 22 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="group-hover:text-white transform" id="arrow-dropdown-data-ujian">
                                    <path d="M15.7094 9.71421C16.1392 9.3674 16.2065 8.73783 15.8597 8.30801C15.5129 7.87819 14.8833 7.8109 14.4535 8.15771L15.7094 9.71421ZM10.9735 12.2505L10.3456 13.0288C10.712 13.3245 11.2351 13.3245 11.6015 13.0288L10.9735 12.2505ZM7.49357 8.15771C7.06375 7.8109 6.43417 7.87819 6.08737 8.30801C5.74056 8.73783 5.80785 9.3674 6.23766 9.71421L7.49357 8.15771ZM14.4535 8.15771L10.3456 11.4723L11.6015 13.0288L15.7094 9.71421L14.4535 8.15771ZM11.6015 11.4723L7.49357 8.15771L6.23766 9.71421L10.3456 13.0288L11.6015 11.4723ZM2.88542 10C2.88542 5.61189 6.5686 2 11.1805 2V0C5.52534 0 0.885422 4.44699 0.885422 10H2.88542ZM11.1805 2C15.7924 2 19.4756 5.61189 19.4756 10H21.4756C21.4756 4.44699 16.8357 0 11.1805 0V2ZM19.4756 10C19.4756 14.3881 15.7924 18 11.1805 18V20C16.8357 20 21.4756 15.553 21.4756 10H19.4756ZM11.1805 18C6.5686 18 2.88542 14.3881 2.88542 10H0.885422C0.885422 15.553 5.52534 20 11.1805 20V18Z"/>
                                </svg>
                            </div>                                 
                        </div>
                    </div>
                </a>                    
                <!-- Dropdown Submenu -->
                <div id="dropdown-data-hasil-analisis" class="hidden">
                    <ul class="text-[#737791]">
                        <li class="p-2 text-white cursor-pointer rounded-lg text-center">
                            <a class="hover:bg-opacity-50 hover:bg-[#D9D9D9] px-2 py-2 rounded-xl" href="/analyze-result/personal">Laporan Individu</a>
                        </li>
                        <li class="p-2 text-white cursor-pointer rounded-lg text-center">
                            <a class="hover:bg-opacity-50 hover:bg-[#D9D9D9] px-2 py-2 rounded-xl" href="/analyze-result/group">Laporan Kelompok</a>
                        </li>                       
                    </ul>
                </div>
            </li>
            <!-- Data Master -->
            <li class="group mb-2">
                <!-- Tombol utama dengan toggle dropdown -->
                <a id="button-test-data" href="#" class="flex gap-5 p-2 rounded-lg text-[#737791] hover:text-white hover:bg-primary group" :class="isActiveRoute('/master') ? activeStyleParent : ''" @click="toggleDropdown('dropdown-data-master')">
                    <div>                                
                        <svg width="30" height="30" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="group-hover:text-white">
                            <path d="M4 14.6667C4 15.7867 4.84 17.08 5.86667 17.5333L14.92 21.56C15.6133 21.8667 16.4 21.8667 17.08 21.56L26.1333 17.5333C27.16 17.08 28 15.7867 28 14.6667M4 21.3333C4 22.5733 4.73333 23.6933 5.86667 24.2L14.92 28.2267C15.6133 28.5333 16.4 28.5333 17.08 28.2267L26.1333 24.2C27.2667 23.6933 28 22.5733 28 21.3333M17.3467 3.89332L25.2133 7.38666C27.48 8.38666 27.48 10.04 25.2133 11.04L17.3467 14.5333C16.4533 14.9333 14.9867 14.9333 14.0933 14.5333L6.22667 11.04C3.96 10.04 3.96 8.38666 6.22667 7.38666L14.0933 3.89332C14.9867 3.49332 16.4533 3.49332 17.3467 3.89332Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                                                          
                    </div>
                    <div class="font-normal text-[#737791] flex justify-center items-center group-hover:text-white" :class="isActiveRoute('/master') ? activeStyleParent : ''">
                        <div class="flex gap-3">
                            Data Master
                            <div class="flex text-center items-center justify-center group">
                                <svg width="15" height="15" viewBox="0 0 22 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="group-hover:text-white transform" id="arrow-dropdown-data-ujian">
                                    <path d="M15.7094 9.71421C16.1392 9.3674 16.2065 8.73783 15.8597 8.30801C15.5129 7.87819 14.8833 7.8109 14.4535 8.15771L15.7094 9.71421ZM10.9735 12.2505L10.3456 13.0288C10.712 13.3245 11.2351 13.3245 11.6015 13.0288L10.9735 12.2505ZM7.49357 8.15771C7.06375 7.8109 6.43417 7.87819 6.08737 8.30801C5.74056 8.73783 5.80785 9.3674 6.23766 9.71421L7.49357 8.15771ZM14.4535 8.15771L10.3456 11.4723L11.6015 13.0288L15.7094 9.71421L14.4535 8.15771ZM11.6015 11.4723L7.49357 8.15771L6.23766 9.71421L10.3456 13.0288L11.6015 11.4723ZM2.88542 10C2.88542 5.61189 6.5686 2 11.1805 2V0C5.52534 0 0.885422 4.44699 0.885422 10H2.88542ZM11.1805 2C15.7924 2 19.4756 5.61189 19.4756 10H21.4756C21.4756 4.44699 16.8357 0 11.1805 0V2ZM19.4756 10C19.4756 14.3881 15.7924 18 11.1805 18V20C16.8357 20 21.4756 15.553 21.4756 10H19.4756ZM11.1805 18C6.5686 18 2.88542 14.3881 2.88542 10H0.885422C0.885422 15.553 5.52534 20 11.1805 20V18Z"/>
                                </svg>
                            </div>                                 
                        </div>
                    </div>
                </a>                    
                <!-- Dropdown Submenu -->
                <div id="dropdown-data-master" class="hidden">
                    <ul class="text-[#737791]">
                        <li class="p-2 text-white cursor-pointer rounded-lg text-center">
                            <a class="hover:bg-opacity-50 hover:bg-[#D9D9D9] px-2 py-2 rounded-xl" href="/master/data-akun" :class="isActiveRoute('/master/data-akun') ? activeStyleSubRoute : ''">Data Akun</a>
                        </li>
                        <li class="p-2 text-white cursor-pointer rounded-lg text-center">
                            <a class="hover:bg-opacity-50 hover:bg-[#D9D9D9] px-2 py-2 rounded-xl" href="/master/data-siswa" :class="isActiveRoute('/master/data-siswa') ? activeStyleSubRoute : ''">Data Siswa</a>
                        </li>                       
                        <li class="p-2 text-white cursor-pointer rounded-lg text-center">
                            <a class="hover:bg-opacity-50 hover:bg-[#D9D9D9] px-2 py-2 rounded-xl" href="/master/data-guru" :class="isActiveRoute('/master/data-guru') ? activeStyleSubRoute : ''">Data Guru</a>
                        </li>                       
                        <li class="p-2 text-white cursor-pointer rounded-lg text-center">
                            <a class="hover:bg-opacity-50 hover:bg-[#D9D9D9] px-2 py-2 rounded-xl" href="/master/data-kelas" :class="isActiveRoute('/master/data-kelas') ? activeStyleSubRoute : ''">Data Kelas</a>
                        </li>                       
                        <li class="p-2 text-white cursor-pointer rounded-lg text-center">
                            <a class="hover:bg-opacity-50 hover:bg-[#D9D9D9] px-2 py-2 rounded-xl" href="/master/data-mata-pelajaran" :class="isActiveRoute('/master/data-mata-pelajaran') ? activeStyleSubRoute : ''">Data Mata Pelajaran</a>
                        </li>                       
                        <li class="p-2 text-white cursor-pointer rounded-lg text-center">
                            <a class="hover:bg-opacity-50 hover:bg-[#D9D9D9] px-2 py-2 rounded-xl" href="/master/data-jadwal" :class="isActiveRoute('/master/data-jadwal') ? activeStyleSubRoute : ''">Data Jadwal</a>
                        </li>                       
                        <li class="p-2 text-white cursor-pointer rounded-lg text-center">
                            <a class="hover:bg-opacity-50 hover:bg-[#D9D9D9] px-2 py-2 rounded-xl" href="/master/data-kategori" :class="isActiveRoute('/master/data-kategori') ? activeStyleSubRoute : ''">Data Kategori</a>
                        </li>                       
                        <li class="p-2 text-white cursor-pointer rounded-lg text-center">
                            <a class="hover:bg-opacity-50 hover:bg-[#D9D9D9] px-2 py-2 rounded-xl" href="/master/hak-akses" :class="isActiveRoute('/master/hak-akses') ? activeStyleSubRoute : ''">Hak Akses</a>
                        </li>                       
                    </ul>
                </div>
            </li>
        </ul>                    
        </div>
    </aside>
</template>

<style scoped>
    .scrollbar::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    }

    .scrollbar::-webkit-scrollbar-track {
        border-radius: 100vh;
        background: #f7f4ed;
    }   

    .scrollbar::-webkit-scrollbar-thumb {
        background: #e0cbcb;
        border-radius: 100vh;
        border: 3px solid #f6f7ed;
    }

    .scrollbar::-webkit-scrollbar-thumb:hover {
        background: #c0a0b9;
    }

    .white-text {
        color: white;
    }
</style> 