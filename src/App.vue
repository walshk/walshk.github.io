<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

export default defineComponent({
	components: {
		RouterView,
	},
	mounted() {
		this.show = true;
	},
	data() {
		return {
			show: false,
		};
	},
	computed: {
		transitionName() {
			return this.$route.name === 'home' ? 'no-transition' : 'route';
		},
	},
});
</script>

<template>
	<RouterView v-slot="{ Component }">
		<transition :name="transitionName" mode="out-in">
			<component v-if="show" :is="Component"></component>
		</transition>
	</RouterView>
</template>

<style>
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css');

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
	transition: all 0.75s ease-in-out;
}

.route-leave-to {
	opacity: 0;
	transform: translateX(-200px);
}
</style>
