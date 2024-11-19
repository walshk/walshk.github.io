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
    <div
        class="skill-block grid grid-cols-[1fr_14fr] items-center gap-2 w-full"
    >
        <div class="image w-full">
            <img width="80%" height="auto" :src="svgUrl" />
        </div>
        <div class="name-and-description">
            <div class="name text-3xl font-medium">{{ props.name }}</div>
            <div class="description text-2xl font-light">
                {{ props.description }}
            </div>
        </div>
    </div>
</template>
