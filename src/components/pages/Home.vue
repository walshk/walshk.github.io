<template>
	<b-container class="home">
		<b-row>
			<b-col>
				<Profile />
			</b-col>
		</b-row>
	</b-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Profile from '@/components/Profile.vue';

export default defineComponent({
	name: 'Home',
	components: {
		Profile,
	},
});
</script>

<style scoped>
.home {
	color: white;
}
</style>
