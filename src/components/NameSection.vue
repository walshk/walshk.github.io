<script setup lang="ts">
type ExternalLink = 'github' | 'linkedin' | 'email';

const GITHUB_URL = 'https://github.com/walshk';
const LINKEDIN_URL = 'https://www.linkedin.com/in/walshkr/';
const EMAIL_URL = 'mailto:kevin@kwalsh.dev';

function openExternalLink(link: ExternalLink) {
    let url: string;
    if (link === 'github') {
        url = GITHUB_URL;
    } else if (link === 'linkedin') {
        url = LINKEDIN_URL;
    } else {
        url = EMAIL_URL;
    }
    window.open(url, '_blank');
}
</script>

<template>
    <div class="flex flex-col gap-1">
        <div class="name font-medium text-5xl">Kevin Walsh</div>
        <div class="title font-extralight text-3xl">Software Engineer</div>
        <div class="links flex gap-4 text-3xl">
            <font-awesome-icon
                @click="openExternalLink('github')"
                class="external-link hover:cursor-pointer hover:text-elevation-1-color"
                :icon="['fab', 'github']"
            ></font-awesome-icon>
            <font-awesome-icon
                @click="openExternalLink('linkedin')"
                class="external-link hover:cursor-pointer hover:text-elevation-1-color"
                :icon="['fab', 'linkedin']"
            ></font-awesome-icon>
            <font-awesome-icon
                @click="openExternalLink('email')"
                class="external-link hover:cursor-pointer hover:text-elevation-1-color"
                :icon="['fas', 'envelope']"
            ></font-awesome-icon>
        </div>
    </div>
</template>

<style lang="css" scoped>
.external-link {
    transition: color 0.2s ease-out;
}
</style>
