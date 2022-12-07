<script lang="ts">
import { defineComponent } from 'vue';
import NavigationButton from '../../generic/NavigationButton.vue';
import SkillsSection from './SkillsSection.vue';

export default defineComponent({
	name: 'skills',
	components: {
		NavigationButton,
		SkillsSection,
	},
});
</script>

<template>
	<div class="skills container">
		<div id="navRow" class="row">
			<div class="col-auto navCol">
				<NavigationButton class="topNav" text="Home" path="/" />
			</div>
			<div class="col-auto navCol">
				<NavigationButton class="topNav" text="About" path="/about" />
			</div>
			<div class="col-auto navCol">
				<NavigationButton class="topNav" text="Experience" path="/" />
			</div>
		</div>
		<div id="titleRow" class="row">
			<div class="col-12">
				<h1>Technical Toolkit</h1>
			</div>
		</div>
		<div id="subtitleRow" class="row">
			<div class="col-12">
				<h2>Tech Used on a Regular Basis</h2>
			</div>
		</div>
		<div id="skillsRow" class="row">
			<SkillsSection title="Languages" />
			<SkillsSection title="Frameworks" />
			<SkillsSection title="Tools" />
		</div>
	</div>
</template>

<style scoped>
.skills {
	padding-top: 1rem;
	color: white;
	text-align: center;
	overflow-x: hidden;
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
	font-size: 2rem;
	letter-spacing: 1px;
}

#skillsRow {
	margin-top: 2rem;
}
</style>
