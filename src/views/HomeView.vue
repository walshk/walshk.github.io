<script lang="ts">
import { defineComponent } from 'vue';
import Home from '../components/pages/home/Home.vue';

export default defineComponent({
	name: 'HomeView',
	components: {
		Home,
	},
});
</script>

<template>
	<div class="homeView">
		<Home />
	</div>
</template>

<style scoped>
.homeView {
	height: 100%;
	width: 100%;
}
</style>
