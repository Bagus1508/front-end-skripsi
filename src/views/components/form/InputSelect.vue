<script setup>
import { inject, ref, watch } from 'vue';

// Define props to accept data from parent component
const props = defineProps(["options", "name", "id", "label", "modelValue"]);
const emit = defineEmits(["update:modelValue"]);

// Initialize selectedValue with modelValue for consistency
const selectedValue = ref(props.modelValue);

// Watch for changes to modelValue and update selectedValue
watch(() => props.modelValue, (newValue) => {
  selectedValue.value = newValue;
});

// Inject modalType to handle different modes like 'edit' or 'show'
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

    <select 
      v-model="selectedValue"
      class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-400 bg-slate-100" 
      :id="id || name" 
      :name="name" 
      @change="emit('update:modelValue', selectedValue)"
    >
    <option value="" disabled selected>== Pilih ==</option>
    <option v-for="option in options" :value="option.value" :key="option.value">{{ option.name }}</option>
    </select>
  </div>
</template>
