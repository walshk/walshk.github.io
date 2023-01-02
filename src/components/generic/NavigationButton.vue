<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'navigationButton',
	props: {
		text: String,
		path: {
			type: String,
			default: '',
		},
	},
	methods: {
		navigate() {
			console.log(`nav to ${this.path}`);
			this.$router.push({ path: this.path });
		},
	},
});
</script>

<template>
	<div class="navigationButton" :to="path" @click="navigate">{{ text }}</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap');

.navigationButton {
	text-align: center;
	font-family: 'Oswald', sans-serif;
	font-weight: 200;
	min-width: fit-content;
	letter-spacing: 0.05rem;
	color: white;
	font-size: 2rem;
	margin: 1rem 5vw;
	padding: 0.5rem 2rem;
	background: linear-gradient(to left, transparent 50%, #90ee90 50%) right;
	background-size: 200% 100%;
	border-radius: 0.5rem;
	transition: all 0.2s ease-in-out;
	border: 2px solid #90ee90;
}

.navigationButton:hover {
	cursor: pointer;
	background-position: left;
	color: black;
}
</style>
