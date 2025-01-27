<script setup>
import AccuracyModelChart from '../components/chart/AccuracyModelChart.vue';
import DistributionInterestChart from '../components/chart/DistributionInterestChart.vue';


</script>

<template>
    <div class="container">
        <div class="flex justify-between">
            <div class="text-[20px] font-medium text-[#151D48]">
                Laporan Individu - Bagus Adianto
                <div class="text-[16px] font-normal text-[#737791]">
                    Rangkuman Akademik dan Non Akademik Individu
                </div>
            </div>
            <div>
                <a href="#" class="flex gap-3 p-2 border border-[#C3D3E2] rounded-[8px] hover:bg-slate-200">
                    <div class="flex items-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1009 5.11257L8.43924 2.83138C8.31497 2.72244 8.15808 2.66671 8.00038 2.66663C7.89247 2.66657 7.78418 2.69257 7.68568 2.74541C7.64179 2.76889 7.60008 2.79757 7.56152 2.83138L4.89984 5.11257C4.62027 5.35217 4.58788 5.77303 4.82748 6.0526C5.06708 6.33216 5.48794 6.36456 5.7675 6.12496L7.33367 4.78268V9.94578C7.33367 10.314 7.63214 10.6124 8.00033 10.6124C8.36852 10.6124 8.667 10.314 8.667 9.94578L8.667 4.78261L10.2333 6.12496C10.5128 6.36456 10.9337 6.33216 11.1733 6.0526C11.4129 5.77303 11.3805 5.35217 11.1009 5.11257ZM4.00033 9.33329C4.00033 8.9651 4.2988 8.66663 4.66699 8.66663H5.66699C6.03518 8.66663 6.33366 8.36815 6.33366 7.99996C6.33366 7.63177 6.03518 7.33329 5.66699 7.33329H4.66699C3.56242 7.33329 2.66699 8.22872 2.66699 9.33329V11.3333C2.66699 12.4379 3.56242 13.3333 4.66699 13.3333H11.3337C12.4382 13.3333 13.3337 12.4379 13.3337 11.3333V9.33329C13.3337 8.22872 12.4382 7.33329 11.3337 7.33329H10.3337C9.96547 7.33329 9.66699 7.63177 9.66699 7.99996C9.66699 8.36815 9.96547 8.66663 10.3337 8.66663H11.3337C11.7018 8.66663 12.0003 8.9651 12.0003 9.33329V11.3333C12.0003 11.7015 11.7018 12 11.3337 12H4.66699C4.2988 12 4.00033 11.7015 4.00033 11.3333V9.33329Z" fill="#0F3659"/>
                        </svg>  
                    </div>
                    Export                          
                </a>
            </div>
        </div>
        <!-- Card -->
        <div class="flex gap-5 mt-12">
            <!-- Total Siswa -->
            <div class="bg-[#FFE2E5] w-full rounded-xl">
                <div class="p-5">
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="bg-[#FA5A7D] p-[2px] rounded-full">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.12815 0.753154C1.61039 0.270917 2.26445 0 2.94643 0H12.5221C13.204 0 13.8581 0.270917 14.3403 0.753154L20.1933 6.60609C20.6755 7.08833 20.9465 7.74238 20.9465 8.42436V21.4286C20.9465 22.1105 20.6755 22.7647 20.1933 23.2469C19.711 23.7291 19.057 24 18.3751 24H2.94643C2.26443 24 1.61039 23.7291 1.12815 23.2469C0.645917 22.7647 0.375 22.1105 0.375 21.4286V2.57143C0.375 1.88945 0.645917 1.23539 1.12815 0.753154ZM9.13767 7.76292C9.71549 8.17565 9.84933 8.97864 9.43659 9.55646L7.04261 12.908C6.82294 13.2155 6.47909 13.4109 6.10243 13.442C5.72578 13.4732 5.3545 13.3371 5.08725 13.0699L3.65086 11.6335C3.14877 11.1314 3.14877 10.3173 3.65086 9.8152C4.15298 9.31308 4.96704 9.31308 5.46914 9.8152L5.83233 10.1784L7.34414 8.06184C7.75687 7.48402 8.55986 7.35019 9.13767 7.76292ZM10.7657 10.9286C10.7657 10.2185 11.3414 9.64286 12.0514 9.64286H16.3371C17.0472 9.64286 17.6229 10.2185 17.6229 10.9286C17.6229 11.6386 17.0472 12.2143 16.3371 12.2143H12.0514C11.3414 12.2143 10.7657 11.6386 10.7657 10.9286ZM10.7657 17.7322C10.7657 17.0221 11.3414 16.4464 12.0514 16.4464H16.3371C17.0472 16.4464 17.6229 17.0221 17.6229 17.7322C17.6229 18.4423 17.0472 19.0179 16.3371 19.0179H12.0514C11.3414 19.0179 10.7657 18.4423 10.7657 17.7322ZM9.43659 16.4672C9.84933 15.8894 9.71549 15.0864 9.13767 14.6736C8.55986 14.2609 7.75687 14.3947 7.34414 14.9726L5.83233 17.0891L5.46914 16.7259C4.96704 16.2238 4.15298 16.2238 3.65086 16.7259C3.14877 17.2281 3.14877 18.042 3.65086 18.5441L5.08725 19.9805C5.3545 20.2478 5.72578 20.3839 6.10243 20.3527C6.47909 20.3217 6.82294 20.1262 7.04261 19.8187L9.43659 16.4672Z" fill="white"/>
                        </svg>                                    
                    </div>
                    <div class="mt-[16px]">
                        <h1 class="text-[24px] font-semibold text-primary-text">50</h1>
                        <h2 class="text-[16px] font-medium text-[#425166] my-[8px]">Nilai Tersedia</h2>
                        <h2 class="text-[12px] font-medium text-[#4079ED]">+8% Nilai</h2>
                    </div>
                </div>
            </div>         
            <!-- Total Guru -->           
            <div class="bg-[#FFF4DE] w-full rounded-xl">
                <div class="p-5">
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="bg-[#FF947A] p-[2px] rounded-full">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6C4 3.79086 5.79086 2 8 2H14V6C14 8.20914 15.7909 10 18 10H20V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V6ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H10C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11H8ZM8 15C7.44772 15 7 15.4477 7 16C7 16.5523 7.44772 17 8 17H12C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15H8ZM16.6818 4.19879L16.5509 6.16288C16.5106 6.76656 17.0115 7.26743 17.6152 7.22718L19.5792 7.09624C20.4365 7.03909 20.8274 5.99887 20.2198 5.39135L18.3867 3.5582C17.7792 2.95068 16.7389 3.34153 16.6818 4.19879Z" fill="white"/>
                        </svg>                                    
                    </div>
                    <div class="mt-[16px]">
                        <h1 class="text-[24px] font-semibold text-primary-text">12</h1>
                        <h2 class="text-[16px] font-medium text-[#425166] my-[8px]">Ujian Selesai</h2>
                        <h2 class="text-[12px] font-medium text-[#4079ED]">+8% Ujian</h2>
                    </div>
                </div>
            </div>          
            <!-- Total Kelas -->          
            <div class="bg-[#DCFCE7] w-full rounded-xl">
                <div class="p-5">
                    <div>
                        <svg width="22" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="bg-[#3CD856] p-[2px] rounded-full">
                            <g clip-path="url(#clip0_48_9354)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.45388 1.0464C10.9631 -0.181319 13.1267 -0.181319 14.636 1.0464L14.9086 1.26821L15.2557 1.21245C17.1765 0.903819 19.0504 1.98564 19.7435 3.80349L19.8688 4.13191L20.1971 4.25714C22.0149 4.95029 23.0968 6.82408 22.7882 8.74495L22.7323 9.09199L22.9542 9.36465C24.1819 10.8739 24.1819 13.0375 22.9542 14.5467L22.7323 14.8194L22.7882 15.1664C23.0968 17.0873 22.0149 18.9611 20.1971 19.6542L19.8688 19.7795L19.7435 20.1079C19.0504 21.9258 17.1765 23.0075 15.2557 22.6989L14.9086 22.6432L14.636 22.865C13.1267 24.0926 10.9631 24.0926 9.45388 22.865L9.18121 22.6432L8.83419 22.6989C6.91331 23.0075 5.03953 21.9258 4.34638 20.1079L4.22115 19.7795L3.89272 19.6542C2.07488 18.9611 0.993053 17.0873 1.30168 15.1664L1.35744 14.8194L1.13563 14.5467C-0.092085 13.0375 -0.0920848 10.8739 1.13563 9.36465L1.35744 9.09199L1.30168 8.74495C0.993053 6.82408 2.07488 4.95029 3.89272 4.25714L4.22115 4.13191L4.34638 3.80349C5.03953 1.98564 6.91331 0.903819 8.83419 1.21245L9.18123 1.26821L9.45388 1.0464ZM17.0883 6.91236C16.6698 6.49394 15.9914 6.49394 15.573 6.91236L7.0016 15.4838C6.58318 15.9022 6.58318 16.5806 7.0016 16.999C7.42 17.4174 8.0984 17.4174 8.51682 16.999L17.0883 8.42758C17.5067 8.00918 17.5067 7.33078 17.0883 6.91236ZM8.61635 6.81283C7.66957 6.81283 6.90207 7.58035 6.90207 8.52712C6.90207 9.4739 7.66957 10.2414 8.61635 10.2414C9.56312 10.2414 10.3306 9.4739 10.3306 8.52712C10.3306 7.58035 9.56312 6.81283 8.61635 6.81283ZM15.4735 13.67C14.5267 13.67 13.7592 14.4375 13.7592 15.3843C13.7592 16.331 14.5267 17.0985 15.4735 17.0985C16.4203 17.0985 17.1878 16.331 17.1878 15.3843C17.1878 14.4375 16.4203 13.67 15.4735 13.67Z" fill="white"/>
                            </g>
                                <defs>
                                    <clipPath id="clip0_48_9354">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                        </svg>                                    
                    </div>
                    <div class="mt-[16px]">
                        <h1 class="text-[24px] font-semibold text-primary-text">89%</h1>
                        <h2 class="text-[16px] font-medium text-[#425166] my-[8px]">Akurasi Prediksi Rata - Rata</h2>
                        <h2 class="text-[12px] font-medium text-[#4079ED]">+8% Akurasi</h2>
                    </div>
                </div>
            </div>                    
        </div>
        <div class="grid grid-cols-2 gap-5 mt-10">
            <!-- Distribusi ujian -->
            <div class="rounded-xl border shadow-lg w-full p-5">
                <h1 class="font-semibold text-[#05004E] text-xl">Distribusi Minat Bakat</h1>
                <div class="mt-5">
                    <DistributionInterestChart />
                </div>
            </div>
            <!-- Arah Minat Siswa -->
            <div class="rounded-xl border shadow-lg w-full p-5">
                <h1 class="font-semibold text-[#05004E] text-xl">Arah Minat Siswa</h1>
                <div class="mt-2">
                    <div class="relative overflow-x-auto w-full">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead class="text-xs text-[#96A5B8] uppercase bg-gray-50 font-normal">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        #
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Nama
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Popularitas
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Persentase
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        1
                                    </th>
                                    <td class="px-6 py-4">
                                        Programmer
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="w-full bg-gray-200 rounded-full h-2.5">
                                            <div class="bg-[#0095FF] h-2.5 rounded-full" style="width: 45%"></div>
                                        </div>                                                  
                                    </td>
                                    <td class="px-6 py-4">
                                        <span class="px-5 py-2 border border-[#0095FF] rounded-[10px] text-[#0095FF]">
                                            45 %
                                        </span>
                                    </td>
                                </tr>
                                <tr class="bg-white">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        2
                                    </th>
                                    <td class="px-6 py-4">
                                        Data Scientiest
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="w-full bg-gray-200 rounded-full h-2.5">
                                            <div class="bg-[#00E096] h-2.5 rounded-full" style="width: 65%"></div>
                                        </div>                                                  
                                    </td>
                                    <td class="px-6 py-4">
                                        <span class="px-5 py-2 border border-[#00E096] rounded-[10px] text-[#00E096]">
                                            65 %
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!-- Konsistensi Prediksi Akurasi -->
            <div class="rounded-xl border shadow-lg w-full p-5">
                <h1 class="font-semibold text-[#05004E] text-xl">Akurasi Prediksi</h1>
                <div class="mt-5">                            
                    <AccuracyModelChart />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style> 