<script setup lang="ts">
const props = defineProps({
    name: String,
    description: String,
    svgUrl: {
        type: String,
        required: true,
    },
});

const IMAGE_SIZE = '100';
</script>

<template>
    <div class="skill-block flex flex-col gap-2 w-full">
        <div class="title-row flex items-center gap-4">
            <div class="image flex items-center justify-center">
                <img class="w-16 h-16 md:w-16 md:h-16" :src="svgUrl" />
            </div>
            <div class="name text-2xl md:text-3xl font-medium">
                {{ props.name }}
            </div>
        </div>
        <div class="description text-lg md:text-2xl font-light">
            <span class="opacity-50">•</span>
            {{ props.description }}
        </div>
    </div>
</template>
