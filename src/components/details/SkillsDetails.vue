<script setup lang="ts">
import SkillBlock from './subcomponents/SkillBlock.vue';

const skillGroups = [
    {
        name: 'Languages',
        skills: [
            {
                name: 'TypeScript',
                svgUrl: 'https://www.svgrepo.com/show/374146/typescript-official.svg',
            },
            {
                name: 'Python',
                svgUrl: 'https://www.svgrepo.com/show/374016/python.svg',
            },
            {
                name: 'Go',
                svgUrl: 'https://www.svgrepo.com/show/353795/go.svg',
            },
            {
                name: 'Bash',
                svgUrl: 'https://www.svgrepo.com/show/353478/bash-icon.svg',
            },
            {
                name: 'Groovy',
                svgUrl: 'https://www.svgrepo.com/show/373699/jenkins.svg',
            },
        ],
    },
    {
        name: 'Frameworks',
        skills: [
            {
                name: 'Vue.js',
                svgUrl: 'https://www.svgrepo.com/show/452130/vue.svg',
            },
            {
                name: 'Node.js',
                svgUrl: 'https://www.svgrepo.com/show/452075/node-js.svg',
            },
            {
                name: 'Django',
                svgUrl: 'https://www.svgrepo.com/show/373554/django.svg',
            },
            {
                name: 'FastAPI',
                svgUrl: 'https://www.svgrepo.com/show/330413/fastapi.svg',
            },
            {
                name: 'Operator Framework',
                svgUrl: 'https://avatars.githubusercontent.com/u/38202270?s=280&v=4',
            }
        ],
    },
    {
        name: 'Deployment',
        skills: [
            {
                name: 'Docker',
                svgUrl: 'https://www.svgrepo.com/show/448221/docker.svg',
            },
            {
                name: 'Kubernetes',
                svgUrl: 'https://www.svgrepo.com/show/448233/kubernetes.svg',
            },
            {
                name: 'Helm',
                svgUrl: 'https://www.svgrepo.com/show/373664/helm.svg',
            },
        ],
    },
    {
        name: 'Automation',
        skills: [
            {
                name: 'Github Actions',
                svgUrl: 'https://www.svgrepo.com/show/475654/github-color.svg',
            },
            {
                name: 'Gitlab CI/CD',
                svgUrl: 'https://www.svgrepo.com/show/448226/gitlab.svg',
            },
            {
                name: 'Jenkins',
                svgUrl: 'https://www.svgrepo.com/show/373699/jenkins.svg',
            },
        ],
    },
];
</script>

<template>
    <div
        class="skills-details flex lg:flex-row flex-col items-start justify-between"
    >
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
                    :svg-url="skill.svgUrl"
                />
            </div>
        </div>
    </div>
</template>
