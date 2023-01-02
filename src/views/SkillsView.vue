<script lang="ts">
import { defineComponent } from 'vue';
import Skills from '../components/pages/skills/Skills.vue';

export default defineComponent({
	name: 'SkillsView',
	components: {
		Skills,
	},
});
</script>

<template>
	<div class="skillsView">
		<Skills />
	</div>
</template>

<style scoped>
.skillsView {
	height: 100%;
	width: 100%;
}
</style>
