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
    <div class="skill-block flex items-center gap-4">
        <div class="image">
            <img :width="IMAGE_SIZE" :height="IMAGE_SIZE" :src="svgUrl" />
        </div>
        <div class="name-and-description">
            <div class="name text-3xl font-medium">{{ props.name }}</div>
            <div class="description text-2xl font-light">
                {{ props.description }}
            </div>
        </div>
    </div>
</template>
