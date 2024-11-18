<script setup lang="ts">
import SkillBlock from './subcomponents/SkillBlock.vue';

const SKILL_SVG_BASE_URL = '@/components/details/images/skills';
const skillGroups = [
    {
        name: 'Languages',
        skills: [
            {
                name: 'TypeScript',
                svgUrl: 'https://www.svgrepo.com/show/374146/typescript-official.svg',
                description:
                    'Very comfortable with using TypeScript for front-end development purposes.',
            },
            {
                name: 'Python',
                svgUrl: 'https://www.svgrepo.com/show/374016/python.svg',
                description:
                    'Very comfortable with using Python for REST API development (Django, FastAPI), as well as data processing (numpy, pandas, matplotlib).',
            },
            {
                name: 'Bash',
                svgUrl: 'https://www.svgrepo.com/show/353478/bash-icon.svg',
                description:
                    'Comfortable using Bash for general navigation of the filesystem, file editing in Vim, using various tools such as cat, grep, and jq. Some familiarity with shell scripting.',
            },
        ],
    },
];

function getSvgUrl(skillName: string) {
    return `${SKILL_SVG_BASE_URL}/${skillName}.svg`;
}
</script>

<template>
    <div class="skills-details">
        <div
            class="group-block pb-8"
            v-for="skillGroup in skillGroups"
            :key="skillGroup.name"
        >
            <div class="group-name text-4xl font-semibold pb-2">
                {{ skillGroup.name }}
            </div>
            <div class="group-skills flex flex-col gap-4">
                <SkillBlock
                    v-for="skill in skillGroup.skills"
                    :key="skill.name"
                    :name="skill.name"
                    :description="skill.description"
                    :svg-url="skill.svgUrl"
                />
            </div>
        </div>
    </div>
</template>
