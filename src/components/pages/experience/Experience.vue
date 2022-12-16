<script lang="ts">
import { defineComponent } from 'vue';
import NavigationButton from '../../generic/NavigationButton.vue';
import ExperienceTimeframe from './ExperienceTimeframe.vue';

export default defineComponent({
	name: 'experience',
	components: {
		NavigationButton,
		ExperienceTimeframe,
	},
	data() {
		return {
			experiences: [
				{
					title: 'College',
					sections: [
						"While I was at the University of Rochester, I wasn't sure what I wanted to do for work when I graduated - at least not for the first 3 years. I started out wanted to become a game developer, because what 18-year-old who plays video games doesn't? My imminent struggles in Calculus 2 and Data Structures & Algorithms made me question the software path entirely. I ended up changing my major to business, and soon took an interest in Accounting - there was something about the in-depth problem solving work that I thoroughly enjoyed.",
					],
				},
				{
					title: 'Software Engineer',
					sections: [],
				},
				{
					title: 'Staff Software Engineer',
					sections: [],
				},
				{
					title: 'Lead Software Engineer',
					sections: [],
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
				<NavigationButton
					class="topNav"
					text="Experience"
					path="/experience"
				/>
			</div>
		</div>
		<div class="row experiencesRow">
			<div
				v-for="(exp, index) in experiences"
				:key="`${exp.title}-${index}`"
				class="col"
			>
				<ExperienceTimeframe
					:title="exp.title"
					:contentSections="exp.sections"
				/>
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
	margin-top: 10%;
}
</style>
