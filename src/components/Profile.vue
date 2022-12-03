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
	<b-container class="profile">
		<b-row id="profileRow">
			<b-col id="imageCol" cols="6">
				<div id="profileImageWrapper">
					<img id="profileImage" src="@/assets/img/kevin.jpg" />
				</div>
			</b-col>
			<b-col id="nameTitleCol" cols="4">
				<b-row>
					<b-col>
						<div id="nameHeader">Kevin Walsh</div>
					</b-col>
				</b-row>
				<b-row>
					<b-col>
						<div id="titleHeader">Full-Stack Developer</div>
					</b-col>
				</b-row>
			</b-col>
		</b-row>
	</b-container>
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
	animation: 0.85s linear 0s 1 dropIn;
}

#profileImage {
	height: 40vh;
	width: 40vh;
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
	font-size: 6rem;
	font-weight: normal;
	letter-spacing: 2px;

	animation: 0.75s ease-in 0s 1 slideInFromRight;
}

#titleHeader {
	font-size: 3rem;

	animation: 0.85s ease-in 0s 1 slideInFromLeft;
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

@keyframes dropIn {
	0% {
		transform: translateY(-200%);
	}

	100% {
		transform: translateY(0);
	}
}

@keyframes floating {
	0% {
		transform: translate(0, 0px);
	}
	50% {
		transform: translate(0, 15px);
	}
	100% {
		transform: translate(0, -0px);
	}
}
</style>
