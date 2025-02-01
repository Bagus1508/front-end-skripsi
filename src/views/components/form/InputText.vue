<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue';

const props = defineProps(["type", "name", "id", "label", "modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const inputValue = ref(props.modelValue);

// Update `inputValue` saat `modelValue` berubah dari parent (misal saat modal dibuka)
watch(() => props.modelValue, (newValue) => {
    inputValue.value = newValue;
});

// Emit event saat user mengetik
const updateValue = (event) => {
    inputValue.value = event.target.value;
    emit("update:modelValue", inputValue.value);
};
</script>

<template>
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-semibold mb-2" :for="name">
            {{ label || '' }}
        </label>
        <input 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-400 bg-slate-100" 
            :id="id || name"
            :type="type || 'text'" 
            :placeholder="label || ''"
            :value="inputValue"
            @input="updateValue"
        />
    </div>
</template>
