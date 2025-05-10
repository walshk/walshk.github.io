<script setup lang="ts">
const props = defineProps({
    name: String,
    selected: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['selected']);
</script>

<template>
    <button
        @click="$emit('selected')"
        class="tab-selector-button px-4 py-2 rounded-md w-full md:w-auto md:min-w-[10rem] font-light flex justify-center items-center h-10 transition-all duration-200"
        :class="[
            props.selected
                ? 'bg-elevation-1-color text-[#e2e2e2] border-2 border-elevation-1-color'
                : 'border-2 border-elevation-1-color text-[#e2e2e2] opacity-80 hover:bg-elevation-1-color hover:text-[#e2e2e2] hover:opacity-100',
        ]"
    >
        {{ props.name }}
    </button>
</template>

<style scoped></style>
