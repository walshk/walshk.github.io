<script lang="ts">
import { defineComponent } from 'vue';
import Experience from '../components/pages/experience/Experience.vue';

export default defineComponent({
	name: 'ExperienceView',
	components: {
		Experience,
	},
});
</script>

<template>
	<div class="experienceView">
		<Experience />
	</div>
</template>

<style scoped>
.experienceView {
	height: 100%;
	width: 100%;
}
</style>
