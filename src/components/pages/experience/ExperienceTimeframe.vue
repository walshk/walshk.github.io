<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'experienceTimeframe',
	props: {
		title: String,
		contentSections: Array,
	},
	data() {
		return {};
	},
});
</script>

<template>
	<div class="experienceTimeframe container-fluid">
		<div class="row">
			<div id="timeframeTitle" class="col">
				<span>{{ title }}</span>
			</div>
		</div>
	</div>
</template>

<style scoped>
.experienceTimeframe {
	background-color: transparent;
	border: 2px solid #080808;
	display: flex;
	align-items: center;
	justify-content: center;

	height: 30vh;
	border-radius: 2rem;
}

#timeframeTitle {
	font-size: 1.5rem;
	margin-bottom: 1rem;
}
</style>
