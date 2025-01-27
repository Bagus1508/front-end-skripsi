<script setup>
import { inject } from 'vue';

const props = defineProps(["type", "name", "id", "label", "value"]);

//Modal Type
const modalType = inject('modalType');
</script>

<template>
    <div class="mb-4">
        <!-- Binding props ke atribut 'for' -->
        <label 
            class="block text-gray-700 text-sm font-semibold mb-2" 
            :for="name"
        >
            {{ label || '' }}
        </label>
        <input 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-400 bg-slate-100" 
            :id="id || name"
            :type="type || 'text'" 
            :placeholder="label || ''"
            :value="modalType === 'edit' || modalType === 'show' ? value : ''"
        />
    </div>
</template> 
