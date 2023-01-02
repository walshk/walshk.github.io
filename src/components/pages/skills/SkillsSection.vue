<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'skillsSection',
	props: {
		title: {
			type: String,
			default: '',
		},
	},
	data() {
		const iconsByGroup: { [key: string]: string } = {
			languages: 'code-slash',
			frameworks: 'rocket',
			tools: 'gear',
		};

		const skillsByGroup: { [key: string]: string[] } = {
			languages: ['JavaScript', 'Python', 'Bash'],
			frameworks: ['Vue.js', 'Node.js', 'Express', 'FastAPI', 'Pytest'],
			tools: ['Git', 'Docker', 'Kubernetes'],
		};

		return {
			iconsByGroup,
			skillsByGroup,
		};
	},
	computed: {
		lowercaseTitle() {
			return this.title.toLowerCase();
		},

		sectionIcon() {
			return this.iconsByGroup[this.lowercaseTitle];
		},

		sectionSkills() {
			return this.skillsByGroup[this.lowercaseTitle];
		},
	},
});
</script>

<template>
	<div class="skillsSection col-md-4 col-12">
		<div id="sectionTitle">
			<i :class="`sectionIcon bi bi-${sectionIcon}`"></i>
			<h1>{{ title }}</h1>
		</div>
		<div id="skillsList">
			<div class="skillLine" v-for="skill in sectionSkills" :key="skill">
				<img
					class="skillLogo"
					:src="`/src/assets/logos/${skill}.svg`"
					:alt="`${skill} logo`"
				/>
				<span class="skillName">{{ skill }}</span>
			</div>
		</div>
	</div>
</template>

<style scoped>
.skillsSection h1 {
	font-family: 'Oswald', 'sans-serif';
	font-size: 3rem;
	letter-spacing: 2px;
}

#sectionTitle {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 1rem;
}

.sectionIcon {
	font-size: 3rem;
	margin-right: 0.5rem;
}

#skillsList {
	display: inline-block;
	text-align: center;
	font-family: 'Roboto Slab', sans-serif;
}

.skillLine {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-left: auto;
	margin-right: auto;

	text-align: left;
	width: 100%;

	padding-left: 1rem;
	margin-top: 1rem;
}

.skillLogo {
	height: 4rem;
	width: 4rem;
}
.skillName {
	margin-left: 1rem;
	font-size: 2rem;
}
</style>
