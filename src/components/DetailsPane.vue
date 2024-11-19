<script setup lang="ts">
import TabSelectorButton from './TabSelectorButton.vue';
import ExperienceDetails from './details/ExperienceDetails.vue';
import SideProjectsDetails from './details/SideProjectsDetails.vue';
import SkillsDetails from './details/SkillsDetails.vue';

import { ref, computed, type DefineComponent } from 'vue';

const DETAILS_OPTIONS = {
    Experience: ExperienceDetails,
    Skills: SkillsDetails,
    'Side Projects': SideProjectsDetails,
} as { [key: string]: any };

let activeDetailsTabName = ref('Experience');

const tabNames = computed(() => {
    return Object.keys(DETAILS_OPTIONS);
});

const activeDetailsComponent = computed(() => {
    return DETAILS_OPTIONS[activeDetailsTabName.value];
});

function isActiveTab(tabName: string) {
    return tabName === activeDetailsTabName.value;
}

function setActiveTab(tabName: string) {
    activeDetailsTabName.value = tabName;
}
</script>

<template>
    <div class="details-pane flex flex-col gap-4 w-full h-full">
        <div class="tab-selectors flex flex-row w-full gap-4">
            <div
                v-for="tabName in tabNames"
                :key="tabName"
                class="flex justify-center items-center text-xl"
            >
                <TabSelectorButton
                    @selected="setActiveTab(tabName)"
                    :name="tabName"
                    :selected="isActiveTab(tabName)"
                />
            </div>
        </div>
        <div class="details overflow-y-auto h-full">
            <component :is="activeDetailsComponent" />
        </div>
    </div>
</template>
