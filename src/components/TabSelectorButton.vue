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
        class="tab-selector-button px-4 py-1 rounded-md min-w-[10rem] font-light flex justify-center items-center"
        :class="[
            props.selected
                ? 'bg-elevation-1-selected-color'
                : 'bg-elevation-1-color',
        ]"
    >
        {{ props.name }}
    </button>
</template>

<style scoped></style>
