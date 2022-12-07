<script lang="ts">
import { defineComponent } from 'vue';
import About from '../components/pages/about/About.vue';

export default defineComponent({
	name: 'AboutView',
	components: {
		About,
	},
});
</script>

<template>
	<div class="aboutView">
		<About />
	</div>
</template>

<style scoped>
.aboutView {
	height: 100%;
	width: 100%;
}
</style>
