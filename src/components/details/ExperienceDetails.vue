<script setup lang="ts">
const experiences = [
    {
        employer: 'Booz Allen Hamilton',
        positions: [
            {
                title: 'Lead Software Engineer',
                timeRange: 'July 2021 - Present',
                bullets: [
                    'Gathered requirements and led brainstorming sessions to design the architecture for a full-stack web application to improve user experience for an existing cyber defense capability',
                    'Led development efforts for the web application from initial implementation through several major releases',
                    'Developed unit tests using Jest as well as an end-to-end testing suite using Selenium in order to ensure core application functions were working as intended in an efficient manner',
                    'Developed additional endpoints for an existing Python-based REST API (using FastAPI) along with unit tests (using Pytest) to improve integration with the previously mentioned web application',
                ],
            },
            {
                title: 'Staff Software Engineer',
                timeRange: 'July 2019 - July 2021',
                bullets: [
                    'Containerized a data visualization dashboard product using Docker to reduce local set-up times and avoid issues stemming from running the product on different machines',
                    'Developed new components and services for an existing front-end mapping product using Angular to improve smoothness of user experience',
                    'Rapidly prototyped and dockerized a full-stack web app for a proposed cyber capability to demonstrate potential value for future work',
                    'Developed and deployed machine learning models to detect and classify gestures in live video feeds, employing a variety of statistical tests to engineer effective features',
                    'Conducted a distributed map/reduce effort using Python multiprocessing to extract statistics from large amounts of American Community Survey public-use microdata',
                ],
            },
            {
                title: 'Software Engineer',
                timeRange: 'August 2018 - July 2019',
                bullets: [
                    'Added several new features to a funding prioritization web application, eventually taking over development entirely from the former lead developer',
                    'Developed interactive data visualization dashboards with a strong focus on user experience using D3 and jQuery',
                    'Developed a multi-source data integration capability using a Microsoft HoloLens and NVIDIA Jetson Nano as part of a computer vision proof-of-concept',
                    'Built up knowledge of an emergent machine learning framework (Microsoft ML.NET) in a limited time frame to integrate an AI-based cyber risk scoring capability into an established client-facing product',
                ],
            },
        ],
    },
];
</script>

<template>
    <div class="experience-details h-full">
        <div
            class="experience-block"
            v-for="experience in experiences"
            :key="experience.employer"
        >
            <div class="employer text-3xl font-medium flex items-center">
                {{ experience.employer }}
                <div
                    class="location pl-4 opacity-75 font-extralight text-xl flex items-center gap-1"
                >
                    <font-awesome-icon
                        class="text-sm"
                        :icon="['fas', 'location-dot']"
                    ></font-awesome-icon>
                    Washington, DC
                </div>
            </div>

            <div
                class="position-block pb-4"
                v-for="position in experience.positions"
                :key="position.title"
            >
                <div class="position-title text-2xl font-regular">
                    {{ position.title
                    }}<span class="font-light text-xl opacity-75"
                        >&nbsp;// {{ position.timeRange }}</span
                    >
                </div>
                <ul class="position-bullets pt-2 text-lg pl-8 list-disc">
                    <li
                        v-for="(bullet, index) in position.bullets"
                        :key="`${experience.employer}-${position.title}-${index}`"
                        class="font-light"
                    >
                        {{ bullet }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
