<script setup>

</script>

<template>
    <div class="mt-2">
        <div class="relative overflow-x-auto">
            <div class="w-full flex justify-between mb-5">
                <div class="flex gap-3">
                    <input type="text" class="border shadow-md w-[300px] rounded-[10px] bg-gray-200 px-3" placeholder="Pencarian">
                    <button type="button" class="bg-primary p-[10px] rounded-md">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4333 12.25L7.75833 8.575C7.46667 8.80833 7.13125 8.99306 6.75208 9.12917C6.37292 9.26528 5.96944 9.33333 5.54167 9.33333C4.48194 9.33333 3.58507 8.96632 2.85104 8.23229C2.11701 7.49826 1.75 6.60139 1.75 5.54167C1.75 4.48194 2.11701 3.58507 2.85104 2.85104C3.58507 2.11701 4.48194 1.75 5.54167 1.75C6.60139 1.75 7.49826 2.11701 8.23229 2.85104C8.96632 3.58507 9.33333 4.48194 9.33333 5.54167C9.33333 5.96944 9.26528 6.37292 9.12917 6.75208C8.99306 7.13125 8.80833 7.46667 8.575 7.75833L12.25 11.4333L11.4333 12.25ZM5.54167 8.16667C6.27083 8.16667 6.89062 7.91146 7.40104 7.40104C7.91146 6.89062 8.16667 6.27083 8.16667 5.54167C8.16667 4.8125 7.91146 4.19271 7.40104 3.68229C6.89062 3.17188 6.27083 2.91667 5.54167 2.91667C4.8125 2.91667 4.19271 3.17188 3.68229 3.68229C3.17188 4.19271 2.91667 4.8125 2.91667 5.54167C2.91667 6.27083 3.17188 6.89062 3.68229 7.40104C4.19271 7.91146 4.8125 8.16667 5.54167 8.16667Z" fill="#FEF7FF"/>
                        </svg>                                    
                    </button>
                </div>
                <div>
                    <button class="px-5 bg-primary py-2 rounded-lg text-white">
                        Tambah Data +
                    </button>
                </div>
            </div>
            <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead class="text-xs text-[#96A5B8] uppercase bg-gray-50 font-normal">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            #
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Kategori
                        </th>
                        <th scope="col" class="px-6 py-3 w-[100px]">
                            Aksi
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            1
                        </th>
                        <td class="px-6 py-4">
                            Ujian Akhir Semester
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex gap-3 justify-center">
                                <button class="bg-[#4800FF] px-4 py-2 flex rounded-[10px] items-center gap-3">
                                    <span class="text-white">Edit</span>
                                    <svg width="20" height="20" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.0415 0.833347H4.12484C1.83317 0.833347 0.916504 1.66668 0.916504 3.75001V6.25001C0.916504 8.33335 1.83317 9.16668 4.12484 9.16668H6.87484C9.1665 9.16668 10.0832 8.33335 10.0832 6.25001V5.41668M6.83359 1.72918C7.14067 2.72501 7.99775 3.50418 9.09775 3.78751M7.3515 1.25835L3.73984 4.54168C3.60234 4.66668 3.46484 4.91251 3.43734 5.09168L3.24025 6.34585C3.16692 6.80001 3.51984 7.11668 4.01942 7.05418L5.399 6.87501C5.5915 6.85001 5.86192 6.72501 6.004 6.60001L9.61567 3.31668C10.239 2.75001 10.5323 2.09168 9.61567 1.25835C8.699 0.425014 7.97484 0.69168 7.3515 1.25835Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>                                                
                                </button>
                                <button class="bg-[#00FF8C] px-4 py-2 flex rounded-[10px] items-center gap-3">
                                    <span class="text-white">Detail</span>
                                    <svg width="20" height="20" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 4.99999C0.5 4.99999 2.5 1.66666 6 1.66666C9.5 1.66666 11.5 4.99999 11.5 4.99999C11.5 4.99999 9.5 8.33332 6 8.33332C2.5 8.33332 0.5 4.99999 0.5 4.99999Z" stroke="#F3F3F3" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6 6.24999C6.82843 6.24999 7.5 5.69035 7.5 4.99999C7.5 4.30963 6.82843 3.74999 6 3.74999C5.17157 3.74999 4.5 4.30963 4.5 4.99999C4.5 5.69035 5.17157 6.24999 6 6.24999Z" stroke="#F3F3F3" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>         
                                </button>
                                <button class="bg-[#FF5154] px-4 py-2 flex rounded-[10px] items-center gap-3">
                                    <span class="text-white">Delete</span>
                                    <svg width="20" height="20" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 2.50001H2.5M2.5 2.50001H10.5M2.5 2.50001L2.5 8.33334C2.5 8.55436 2.60536 8.76632 2.79289 8.9226C2.98043 9.07888 3.23478 9.16668 3.5 9.16668H8.5C8.76522 9.16668 9.01957 9.07888 9.20711 8.9226C9.39464 8.76632 9.5 8.55436 9.5 8.33334V2.50001M4 2.50001V1.66668C4 1.44566 4.10536 1.2337 4.29289 1.07742C4.48043 0.921141 4.73478 0.833344 5 0.833344H7C7.26522 0.833344 7.51957 0.921141 7.70711 1.07742C7.89464 1.2337 8 1.44566 8 1.66668V2.50001M5 4.58334V7.08334M7 4.58334V7.08334" stroke="#F5F5F5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>                                           
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>

</style> 