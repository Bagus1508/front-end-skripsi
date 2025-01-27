<script setup>
import AcademicPerformanceChart from './components/chart/AcademicPerformanceChart.vue';
import DistributionInterestChart from './components/chart/DistributionInterestChart.vue';
</script>

<template>
    <div class="container p-5">
        <div class="flex justify-between">
            <div class="text-[20px] font-medium text-[#151D48]">
                Selamat Datang, Bagus Adianto!
                <div class="text-[16px] font-normal text-[#737791]">
                    Rangkuman Akademik
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
        <div class="grid grid-cols-3 max-sm:grid-cols-1 gap-5 mt-12">
            <!-- Total Siswa -->
            <div class="bg-[#FFE2E5] w-full rounded-xl">    
                <div class="p-5">
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="bg-[#FA5A7D] p-[2px] rounded-full">
                            <g clip-path="url(#clip0_22_1212)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7143 7.71433C13.7143 10.5546 11.4117 12.8572 8.57143 12.8572C5.73111 12.8572 3.42857 10.5546 3.42857 7.71433C3.42857 4.87402 5.73111 2.57147 8.57143 2.57147C11.4117 2.57147 13.7143 4.87402 13.7143 7.71433ZM8.57143 14.5714C3.83757 14.5714 0 18.409 0 23.1429C0 23.6162 0.383757 24 0.857143 24H16.2857C16.7591 24 17.1429 23.6162 17.1429 23.1429C17.1429 18.409 13.3053 14.5714 8.57143 14.5714ZM23.143 24H19.1616C19.2425 23.7285 19.2859 23.4406 19.2859 23.1429C19.2859 19.6438 17.6086 16.5366 15.0143 14.5813C15.1516 14.5747 15.2898 14.5714 15.4287 14.5714C20.1626 14.5714 24.0002 18.409 24.0002 23.1429C24.0002 23.6162 23.6163 24 23.143 24ZM15.4287 12.8572C14.9115 12.8572 14.4121 12.7808 13.9411 12.6388C15.131 11.342 15.8573 9.61299 15.8573 7.71433C15.8573 5.81567 15.131 4.08664 13.9411 2.78989C14.4121 2.64783 14.9115 2.57147 15.4287 2.57147C18.269 2.57147 20.5716 4.87402 20.5716 7.71433C20.5716 10.5546 18.269 12.8572 15.4287 12.8572Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_22_1212">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div class="mt-[16px]">
                        <h1 class="text-[24px] font-semibold text-primary-text">1000</h1>
                        <h2 class="text-[16px] font-medium text-[#425166] my-[8px]">Total Siswa</h2>
                        <h2 class="text-[12px] font-medium text-[#4079ED]">+8% Siswa</h2>
                    </div>
                </div>
            </div>         
            <!-- Total Guru -->           
            <div class="bg-[#FFF4DE] w-full rounded-xl">
                <div class="p-5">
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="bg-[#FF947A] p-[2px] rounded-full">
                            <g clip-path="url(#clip0_22_1212)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7143 7.71433C13.7143 10.5546 11.4117 12.8572 8.57143 12.8572C5.73111 12.8572 3.42857 10.5546 3.42857 7.71433C3.42857 4.87402 5.73111 2.57147 8.57143 2.57147C11.4117 2.57147 13.7143 4.87402 13.7143 7.71433ZM8.57143 14.5714C3.83757 14.5714 0 18.409 0 23.1429C0 23.6162 0.383757 24 0.857143 24H16.2857C16.7591 24 17.1429 23.6162 17.1429 23.1429C17.1429 18.409 13.3053 14.5714 8.57143 14.5714ZM23.143 24H19.1616C19.2425 23.7285 19.2859 23.4406 19.2859 23.1429C19.2859 19.6438 17.6086 16.5366 15.0143 14.5813C15.1516 14.5747 15.2898 14.5714 15.4287 14.5714C20.1626 14.5714 24.0002 18.409 24.0002 23.1429C24.0002 23.6162 23.6163 24 23.143 24ZM15.4287 12.8572C14.9115 12.8572 14.4121 12.7808 13.9411 12.6388C15.131 11.342 15.8573 9.61299 15.8573 7.71433C15.8573 5.81567 15.131 4.08664 13.9411 2.78989C14.4121 2.64783 14.9115 2.57147 15.4287 2.57147C18.269 2.57147 20.5716 4.87402 20.5716 7.71433C20.5716 10.5546 18.269 12.8572 15.4287 12.8572Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_22_1212">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div class="mt-[16px]">
                        <h1 class="text-[24px] font-semibold text-primary-text">100</h1>
                        <h2 class="text-[16px] font-medium text-[#425166] my-[8px]">Total Guru</h2>
                        <h2 class="text-[12px] font-medium text-[#4079ED]">+8% Guru</h2>
                    </div>
                </div>
            </div>          
            <!-- Total Kelas -->          
            <div class="bg-[#DCFCE7] w-full rounded-xl">
                <div class="p-5">
                    <div>
                        <svg width="22" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="bg-[#3CD856] p-[2px] rounded-full">
                            <g clip-path="url(#clip0_22_1223)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2597 15.388H12.4438C14.4452 15.2201 16.0173 13.5424 16.0173 11.4976C16.0173 9.34131 14.2693 7.59333 12.113 7.59333H9.23253C9.88963 6.70947 10.2784 5.6143 10.2784 4.42833C10.2784 2.57921 9.33327 0.950854 7.89972 0H21.2597C22.5369 0 23.572 1.03524 23.572 2.31226V13.0757C23.572 14.3527 22.5369 15.388 21.2597 15.388ZM4.96836 7.59554C6.71757 7.59554 8.13557 6.17753 8.13557 4.42833C8.13557 2.67914 6.71757 1.26113 4.96836 1.26113C3.21917 1.26113 1.80117 2.67914 1.80117 4.42833C1.80117 6.17753 3.21917 7.59554 4.96836 7.59554ZM13.8744 11.4976C13.8744 10.5248 13.0858 9.73618 12.113 9.73618H4.96899C2.46106 9.73618 0.427979 11.7693 0.427979 14.2772V16.3438C0.427979 17.2562 1.16757 17.9957 2.07989 17.9957H2.37413L2.85753 22.4698C2.95157 23.3403 3.6864 24 4.56189 24H5.42294C6.2784 24 7.00293 23.3693 7.12085 22.5221L8.41013 13.2589H12.113C13.0858 13.2589 13.8744 12.4703 13.8744 11.4976Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_22_1223">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div class="mt-[16px]">
                        <h1 class="text-[24px] font-semibold text-primary-text">10</h1>
                        <h2 class="text-[16px] font-medium text-[#425166] my-[8px]">Total Kelas</h2>
                        <h2 class="text-[12px] font-medium text-[#4079ED]">+8% Kelas</h2>
                    </div>
                </div>
            </div>                    
        </div>
        <div class="grid grid-cols-2 max-sm:grid-cols-1 gap-5 mt-10">
            <div class="rounded-xl border shadow-lg w-full p-5 bg-white">
                <h1 class="font-semibold text-[#05004E] text-xl">Distribusi Minat Bakat</h1>
                <div class="max-sm:flex max-sm:justify-center mt-5">
                    <DistributionInterestChart />
                </div>
            </div>
            <div class="rounded-xl border shadow-lg w-full p-5 bg-white">
                <h1 class="font-semibold text-[#05004E] text-xl">Performa Akademik</h1>
                <div class="mt-5">                            
                    <AcademicPerformanceChart />
                </div>
            </div>
            <div class="rounded-xl border shadow-lg w-full p-5 bg-white">
                <h1 class="font-semibold text-[#05004E] text-xl">Top Minat Bakat</h1>
                <div class="mt-2">
                    <div class="relative overflow-auto">
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
                                    <td class="flex justify-center">
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
                                    <td class="flex justify-center">
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
        </div>
    </div>
</template>

<style scoped>

</style> 