<script setup>
import { provide } from 'vue';

const roles = [
  { value: 'admin', name: 'Admin' },
  { value: 'teacher', name: 'Guru' },
  { value: 'student', name: 'Siswa' }
];
const status = [
  { value: true, name: 'Aktif' },
  { value: false, name: 'Tidak Aktif' }
];
const gender = [
  { value: true, name: 'Laki - Laki' },
  { value: false, name: 'Perempuan' }
];

const baseURLApi = import.meta.env.VITE_BASE_URL;

// Menyediakan data agar dapat diakses di komponen anak
provide('roles', roles);
provide('status', status);
provide('gender', gender);
provide('baseURLApi', baseURLApi);
</script>

<template>
    <div id="app" v-if="this.$route.meta.layout == 'AuthLayout'">
      <router-view/>
    </div>
    <div id="app" class="flex h-screen overflow-hidden" v-else>
        <router-view name="sidebar"></router-view>
        <div class="flex flex-col w-full overflow-auto">
          <router-view name="navbar"></router-view>
          <main class="container flex-1 bg-gray-100 p-[20px]">
            <router-view/>
          </main>
        </div>
    </div>
</template>

<style>
.p-datatable-thead {
  background-color: #5D5FEF;
  color: white;
}

.p-datatable-column-header-content {
  padding: 5px;
  font-weight: 500;
}

.p-datatable-column-title {
  margin-right: 10px;
}

.p-datatable-header {
  background-color: #F3F4F6 !important;
  border: none !important;
}

.p-row-even:hover {
  background-color: #d6d6d6;
}

.p-row-odd:hover {
  background-color: #d6d6d6 !important;
}

.p-row-even > td {
  padding: 5px !important;
  color: #151D48 !important;
}

.p-row-odd > td {
  padding: 5px !important;
  color: #151D48 !important;
  background-color: #d6d6d65e;
}

.p-iconfield {
  width: 200px;
  margin-bottom: 10px;
}

.p-inputtext {
  background-color: #E5E7EB !important;
  color: #334155 !important;
  border: 1px solid #A1A1AA !important;
  padding: 5px !important;
  padding-left: 10px !important;
  border-radius: 10px !important;
}

.p-iconfield {
    display: flex !important;
    align-items: center !important;
}

.p-paginator {
  background-color: #F3F4F6 !important;
  justify-content: right !important;
  margin-top: 20px !important;
}

.p-paginator-content {
  gap: 10px !important;
}

.p-datatable-header-cell {
  border-color: #E5E7EB !important;
  background-color: #5D5FEF !important;
}

.p-datatable-paginator-bottom {
  border: none !important;
}

.p-datatable-tbody > tr > td {
  border-color: #E5E7EB !important;
}

.p-datatable-sort-icon {
  color: white !important;
}

.p-select {
  background-color: white !important;
  border: 1px solid !important;
  border-color: #A1A1AA !important;
  border-radius: 5px !important;
  margin-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  gap: 10px !important;
}

.p-select-overlay {
  background-color: white !important;
  border-color: #A1A1AA !important;
  color: #A1A1AA !important;
}

.p-select-list-container {
  margin-top: 5px !important;
  border: 1px solid #A1A1AA !important;
  border-radius: 5px !important;
}

.p-select-option {
  color: #A1A1AA !important;
}

.p-select-option.p-select-option-selected {
  background-color: #5D5FEF !important;
  color: white !important;
}

.p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {
  background-color: #A1A1AA !important;
  color: white !important;
}

.p-select-label {
  color: #A1A1AA !important;
}

.p-paginator-first {
  background-color: #5D5FEF !important;
  color: white !important;
  padding: 5px !important;
  border-radius: 5px !important;
}

.p-paginator-prev {
  background-color: #5D5FEF !important;
  color: white !important;
  padding: 5px !important;
  border-radius: 5px !important;
}

.p-paginator-pages {
  gap: 5px !important;
}

.p-paginator-page.p-paginator-page-selected {
  background-color: #5D5FEF !important;
  color: white !important;
  padding: 5px !important;
  border-radius: 5px !important;
}

.p-paginator-next {
  background-color: #5D5FEF !important;
  color: white !important;
  padding: 5px !important;
  border-radius: 5px !important;
}

.p-paginator-last {
  background-color: #5D5FEF !important;
  color: white !important;
  padding: 5px !important;
  border-radius: 5px !important;
}

.p-contextmenu {
  background-color: white !important;
  border: 1px solid !important;
  border-color: #A1A1AA !important;
  border-radius: 5px !important;
  color: #A1A1AA !important;
  padding: 5px;
}

.p-contextmenu-item-link {
  color: #334155 !important;
}

:root {
    --p-contextmenu-item-focus-background: #e0e0e0 !important;
    --p-contextmenu-item-focus-color: #e0e0e0 !important;
    --p-inputtext-hover-border-color: #5D5FEF !important;
    --p-inputtext-focus-border-color: #5D5FEF !important;
}

/* Modal Style */
.p-dialog-mask {
  background: rgba(0, 0, 0, 0.6) !important; /* Latar belakang gelap transparan */
  /* backdrop-filter: blur(1px) !important; */ /* Efek blur */
  z-index: 9999999 !important;
}

.p-dialog-header {
  color: #151D48;
  font-weight: bold;
  padding-top: 10px !important;
  padding-bottom: 10px !important;
  padding-left: 15px !important;
  padding-right: 15px !important;
  border-bottom: 1px solid #A1A1AA;
}

.p-button:hover {
  background-color: rgba(255, 0, 0, 0.205) !important;
  height: 25px !important;
  width: 25px !important;
  border-radius: 50% !important;
  display: flex !important;
  color: white !important;
}

.p-dialog-content {
  padding: 15px !important;
}
</style> 