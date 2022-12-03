<script lang="ts">
import { defineComponent } from 'vue';
import Home from '../components/pages/Home.vue';

export default defineComponent({
	name: 'HomeView',
	components: {
		Home,
	},
});
</script>

<template>
	<b-container class="homeView">
		<Home />
	</b-container>
</template>

<style scoped>
.homeView {
	height: 100%;
	width: 100%;
}
</style>
