<script setup lang="ts">
import NameSection from './components/NameSection.vue';
import InfoSection from './components/InfoSection.vue';
import DetailsPane from './components/DetailsPane.vue';

const year = new Date(Date.now()).getFullYear();
</script>

<template>
    <main
        class="main-content flex flex-col gap-4 md:gap-8 pb-0 pt-8 md:pt-16 px-[5%] h-full w-full"
    >
        <div class="flex flex-col md:flex-row justify-center gap-4 md:gap-16">
            <NameSection class="min-w-fit" />
            <div
                class="h-[10vh] md:h-auto overflow-y-auto md:overflow-visible custom-scrollbar"
            >
                <InfoSection />
            </div>
        </div>
        <div class="flex w-full flex-grow min-h-0">
            <DetailsPane />
        </div>
        <div
            class="footer flex w-full pb-2 justify-center text-base md:text-lg h-fit opacity-75 font-extralight"
        >
            &copy; Kevin Walsh 2025. All rights reserved.
        </div>
    </main>
</template>

<style>
.custom-scrollbar::-webkit-scrollbar {
    width: 5px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: #1b1b1b;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #7c3aed;
    border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #5b21b6;
}
</style>
