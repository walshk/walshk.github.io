<script setup lang="ts">
import SkillBlock from './subcomponents/SkillBlock.vue';

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
                    'Comfortable using Bash for general navigation of the filesystem, file editing in vim/neovim, using various tools such as ripgrep and jq. Some familiarity with shell scripting.',
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
                description:
                    'Very comfortable using Vue.js to build complex single-page applications using state management and making API calls, while supporting sustainability with unit and end-to-end tests.',
            },
            {
                name: 'Node.js',
                svgUrl: 'https://www.svgrepo.com/show/452075/node-js.svg',
                description:
                    'Very comfortable using Node.js (primarily with Express) to build REST APIs handling core application logic, file uploads, streaming responses. Some familiarity with integrating websockets.',
            },
            {
                name: 'Django',
                svgUrl: 'https://www.svgrepo.com/show/373554/django.svg',
                description:
                    'Comfortable building REST APIs and associated models and serializers using Django.',
            },
            {
                name: 'FastAPI',
                svgUrl: 'https://www.svgrepo.com/show/330413/fastapi.svg',
                description:
                    "Comfortable building REST API endpoints using Python's FastAPI library.",
            },
        ],
    },
    {
        name: 'Deployment',
        skills: [
            {
                name: 'Docker',
                svgUrl: 'https://www.svgrepo.com/show/448221/docker.svg',
                description:
                    'Very comfortable building images and deploying Docker containers, including deployment of multiple containers using Docker Compose.',
            },
            {
                name: 'Kubernetes',
                svgUrl: 'https://www.svgrepo.com/show/448233/kubernetes.svg',
                description:
                    'Very comfortable debugging deployed resources using Kubectl to investigate pods, services, events, etc. Some familiarity creating custom resources to deploy into a Kubernetes cluster.',
            },
            {
                name: 'Helm',
                svgUrl: 'https://www.svgrepo.com/show/373664/helm.svg',
                description:
                    'Comfortable reading and understanding Helm chart templates. Some familiarity creating and managing Helm releases in Kubernetes.',
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
                    :description="skill.description"
                    :svg-url="skill.svgUrl"
                />
            </div>
        </div>
    </div>
</template>
