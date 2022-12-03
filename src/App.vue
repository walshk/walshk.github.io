<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

export default defineComponent({
	components: {
		RouterView,
	},
});
</script>

<template>
	<RouterView />
</template>

<style>
html,
body {
	margin: 0;
	height: 100%;
}

body {
	background: linear-gradient(to bottom, #080808 60%, #204040 100%);
}
</style>
