<script setup lang="ts">
import NameSection from './components/NameSection.vue';
import InfoSection from './components/InfoSection.vue';
import DetailsPane from './components/DetailsPane.vue';

const year = new Date(Date.now()).getFullYear();
</script>

<template>
    <main
        class="main-content flex flex-col gap-8 pb-0 pt-16 px-[5%] h-full w-full"
    >
        <div class="flex justify-center gap-16">
            <NameSection class="min-w-fit" />
            <InfoSection />
        </div>
        <div class="flex w-full flex-grow min-h-0">
            <DetailsPane />
        </div>
        <div
            class="footer flex w-full pb-2 justify-center text-lg h-fit opacity-75 font-extralight"
        >
            &copy; Kevin Walsh 2024. All rights reserved.
        </div>
    </main>
</template>

<style scoped></style>
