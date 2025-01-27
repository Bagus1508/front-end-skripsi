<script setup>
import { inject } from 'vue';

const props = defineProps(["options", "name", "id", "label", "value"]);

const options = props.options;  

//Modal Type
const modalType = inject('modalType');
</script>

<template>
    <div class="relative mb-4">
        <label 
            class="block text-gray-700 text-sm font-semibold mb-2" 
            :for="name"
        >
            {{ label || '' }}
        </label>
        <select class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-400 bg-slate-100" :id="id || name" :name="name" :value="modalType === 'edit' || modalType === 'show' ? value : '== Pilih Role =='">
          <option v-for="option in options" :value="option.value">{{option.name}}</option>
        </select>
      </div>
</template> 
