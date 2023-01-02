<template>
	<div class="home container-fluid">
		<div class="row">
			<div class="col-12">
				<Profile />
			</div>
		</div>
		<div id="navButtonsRow" class="row">
			<div class="col-12 col-md-4">
				<NavigationButton text="About" path="/about" />
			</div>
			<div class="col-12 col-md-4">
				<NavigationButton text="Skills" path="/skills" />
			</div>
			<div class="col-12 col-md-4">
				<NavigationButton text="Experience" path="/experience" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Profile from './Profile.vue';
import NavigationButton from '../../generic/NavigationButton.vue';

export default defineComponent({
	name: 'Home',
	components: {
		Profile,
		NavigationButton,
	},
});
</script>

<style scoped>
.home {
	color: white;
	overflow-y: hidden;
	overflow-x: hidden;
	height: 100%;
}

#navButtonsRow {
	display: flex;
	justify-content: center;
	max-width: 80vw;
	margin-left: auto;
	margin-right: auto;
	margin-top: 4vw;
}

#navButtonsRow {
	animation: 0.75s ease-in-out floatUp;
}

@keyframes floatUp {
	0% {
		transform: translateY(500%);
	}

	100% {
		transform: translateY(0);
	}
}
</style>
