<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'profile',
	data() {
		return {};
	},
});
</script>

<template>
	<div class="profile">
		<div id="profileRow">
			<div id="imageCol">
				<div id="profileImageWrapper">
					<img
						id="profileImage"
						src="../../../assets/img/kevin.jpg"
					/>
				</div>
			</div>
			<div id="nameTitleCol">
				<div>
					<div>
						<div id="nameHeader">Kevin Walsh</div>
					</div>
				</div>
				<div>
					<div>
						<div id="titleHeader">Full-Stack Developer</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');

.profile {
	font-family: 'Bangers', sans-serif;
	overflow-x: hidden;
}

#profileRow {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60vh;
}

#profileImageWrapper {
	background: white;
	border-radius: 50%;
	padding: 0.15rem;
	/* animation: 0.85s linear 0s 1 dropIn; */
}

#profileImage {
	height: 20vw;
	width: 20vw;
	object-fit: cover;
	border-radius: 50%;
}

#imageCol {
	margin-right: 2rem;
}

#nameTitleCol {
	margin-left: 2rem;
}

#nameHeader {
}

#nameHeader {
	font-size: 8vw;
	font-weight: normal;
	letter-spacing: 2px;
	margin-bottom: -2vw;

	animation: 1s ease-in 0s 1 slideInFromRight;
}

#titleHeader {
	font-size: 4vw;

	animation: 1s ease-in 0s 1 slideInFromLeft;
}

@keyframes slideInFromRight {
	0% {
		transform: translateX(+250%);
	}

	100% {
		transform: translateX(0);
	}
}

@keyframes slideInFromLeft {
	0% {
		transform: translateX(-300%);
	}

	100% {
		transform: translateX(0);
	}
}
</style>
