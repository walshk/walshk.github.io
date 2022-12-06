<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

export default defineComponent({
	components: {
		RouterView,
	},
});
</script>

<template>
	<RouterView v-slot="{ Component }">
		<transition name="route" mode="out-in">
			<component :is="Component"></component>
		</transition>
	</RouterView>
</template>

<style>
#app {
	height: 100%;
	overflow-x: hidden;
}

html,
body {
	margin: 0;
	height: 100%;
}

body {
	background: linear-gradient(to bottom, #080808 0%, #204040 100%);
}

.route-enter-from {
	opacity: 0;
	transform: translateX(200px);
}

.route-enter-active {
	transition: all 0.5s ease-out;
}

.route-leave-to {
	opacity: 0;
	transform: translateX(-200px);
}
</style>
