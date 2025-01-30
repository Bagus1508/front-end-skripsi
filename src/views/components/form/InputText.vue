<script setup>
import { inject } from 'vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'text'
    },
    name: String,
    id: String,
    label: String,
    modelValue: String // Harus pakai modelValue biar bisa v-model
});

const emit = defineEmits(['update:modelValue']);

// Inject modalType
const modalType = inject('modalType');
</script>

<template>
    <div class="mb-4">
        <label 
            class="block text-gray-700 text-sm font-semibold mb-2" 
            :for="name"
        >
            {{ label || '' }}
        </label>
        <input 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-400 bg-slate-100" 
            :id="id || name"
            :type="type"
            :placeholder="label || ''"
            :value="modalType === 'edit' || modalType === 'show' ? modelValue : ''"
            @input="emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>