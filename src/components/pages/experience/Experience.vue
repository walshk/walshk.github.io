<script lang="ts">
import { defineComponent } from 'vue';
import NavigationButton from '../../generic/NavigationButton.vue';

export default defineComponent({
	name: 'experience',
	components: {
		NavigationButton,
	},
	data() {
		return {
			experiences: [
				{
					title: 'Software Engineer',
					company: 'Booz Allen Hamilton',
					dates: {
						from: 'August 2018',
						to: 'July 2019',
					},
					bullets: [
						'Began work on funding prioritization web app, eventually took over from former lead developer',
						'Developed data visualization dashboards using D3 and jQuery',
						'Integrated a Microsoft HoloLens and NVIDIA Jetson Nano for a computer vision proof-of-concept',
						'Used an emergent machine learning framework to incorporate a cyber risk into an established product',
					],
				},
				{
					title: 'Staff Software Engineer',
					company: 'Booz Allen Hamilton',
					dates: {
						from: 'July 2019',
						to: 'July 2021',
					},
					bullets: [
						'Containerized an existing product to reduce local set-up times and avoid environment issues',
						'Developed components and services for an existing Angular web app to improve overall UX',
						'Developed machine learning models to detect gestures in live video feeds',
						'Used Python multiprocessing to efficiently extract statistics from American Community Survey public-use microdata via distributed map/reduce',
					],
				},
				{
					title: 'Lead Software Engineer',
					company: 'Booz Allen Hamilton',
					dates: {
						from: 'July 2021',
						to: 'Present',
					},
					bullets: [
						'Designed architecture for a full-stack web app to address user pain points for an existing cyber capability',
						'Led development efforts for aforementioned web app through several major releases',
						'Developed unit tests using Jest as well as end-to-end tests using Selenium',
						'Developed new FastAPI endpoints (with Pytest unit tests) to a separate REST API that integrated with the web app',
					],
				},
			],
		};
	},
});
</script>

<template>
	<div class="experience container">
		<div id="navRow" class="row">
			<div class="col-auto navCol">
				<NavigationButton class="topNav" text="Home" path="/" />
			</div>
			<div class="col-auto navCol">
				<NavigationButton class="topNav" text="About" path="/about" />
			</div>
			<div class="col-auto navCol">
				<NavigationButton class="topNav" text="Skills" path="/skills" />
			</div>
		</div>
		<div id="titleRow" class="row">
			<div class="col-12">
				<h1>Work Experience</h1>
			</div>
		</div>
		<div id="subtitleRow" class="row">
			<div class="col-12">
				<h2>( since graduating college in 2018 )</h2>
			</div>
		</div>
		<div class="row experiencesRow">
			<div
				v-for="exp in experiences"
				:key="exp.title"
				class="col col-sm-12 col-md-4 experienceCol"
			>
				<div class="row">
					<div class="col companyCol">
						<h5>// {{ exp.company }}</h5>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<h3>{{ exp.title }}</h3>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<span>{{ exp.dates.from }} - {{ exp.dates.to }}</span>
					</div>
				</div>
				<div class="row">
					<div class="col bulletsCol">
						<div v-for="bullet in exp.bullets" :key="bullet">
							<div class="row bulletRow">
								<div class="col bulletPointCol col-auto">
									<i
										:class="`bulletPoint bi bi-chevron-right`"
									></i>
								</div>
								<div class="col bulletContentCol">
									<span class="bulletContent">{{
										bullet
									}}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="resumeRow" class="row">
			<div class="row">
				<div class="col">
					<span
						>For more detailed information regarding my work
						experience, you can download my resume here:</span
					>
				</div>
			</div>
			<div class="row">
				<div id="resumeCol" class="col-12">
					<a
						target="_blank"
						href="https://github.com/walshk/walshk.github.io/blob/master/src/assets/files/KRW_Resume.pdf?raw=true"
					>
						<i class="bi bi-file-earmark-text"></i>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.experience {
	padding-top: 1rem;
	color: white;
	text-align: center;
	overflow-x: hidden;

	height: 100%;
}

.topNav {
	font-size: 1.25rem;
	margin: 1rem 0.5rem;
	margin-right: 0;
	padding: 0.25rem 1rem;
}

#navRow {
	justify-content: center;
}
.navCol {
	padding-left: 0.5rem;
	padding-right: 0;
}

.experiencesRow {
	font-family: 'Roboto Slab', sans-serif;
	text-align: left;
	display: flex;
	justify-content: space-between;
}

.companyCol {
	color: darkgrey;
}

#titleRow {
	margin-top: 1rem;
}

#titleRow h1 {
	font-family: 'Bangers', 'sans-serif';
	font-size: 5rem;
	letter-spacing: 2px;
}

#subtitleRow h2 {
	font-family: 'Bangers', 'sans-serif';
	font-size: 1.5rem;
	letter-spacing: 1px;
	margin-top: -1rem;
}

.experienceCol {
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	margin-top: 1.5rem;
}

.bulletsCol {
	max-height: 50vh;
	overflow-y: auto;
	scrollbar-width: thin;
	scrollbar-color: #6969dd #e0e0e0;
}

.bulletRow {
	margin-top: 1rem;
}
.bulletPointCol {
	padding-right: 0;
}
.bulletPoint {
	margin-right: 0.5rem;
}

.bulletContentCol {
	padding-left: 0;
}

#resumeRow {
	margin-top: 1.5rem;
	font-family: 'Roboto Slab', sans-serif;
}

#resumeCol {
	display: flex;
	justify-content: center;
}

#resumeCol a {
	color: white;
	font-size: 3rem;
	margin-left: 2rem;
	margin-right: 2rem;
	text-decoration: none;
	transition: all 0.25s ease-in-out;
}

#resumeCol a:hover {
	transform: scale(120%);
}

/* Scrollbar styles */
/* width */
::-webkit-scrollbar {
	width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
	background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
	background: #888;
	border-radius: 1rem;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
	background: #555;
}
</style>
