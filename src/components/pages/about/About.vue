<script lang="ts">
import { defineComponent } from 'vue';
import NavigationButton from '../../generic/NavigationButton.vue';

export default defineComponent({
	name: 'about',
	components: {
		NavigationButton,
	},
	data() {
		return {};
	},
});
</script>

<template>
	<div class="about container">
		<div id="navRow" class="row">
			<div class="col-auto navCol">
				<NavigationButton class="topNav" text="Home" path="/" />
			</div>
			<div class="col-auto navCol">
				<NavigationButton class="topNav" text="Skills" path="/skills" />
			</div>
			<div class="col-auto navCol">
				<NavigationButton
					class="topNav"
					text="Experience"
					path="/experience"
				/>
			</div>
		</div>
		<div id="titleRow" class="row">
			<div class="col-12">
				<h1>About Me</h1>
			</div>
		</div>
		<div id="storyRow" class="row">
			<div id="storyCol" class="col-12">
				<p>
					Welcome to my personal site! As the home page said, my name
					is Kevin, and I've been working as a software developer
					since I graduated college in 2018. My experience has been
					primarily focused on full-stack web development, but I've
					also been able to dabble in data science through various
					projects I've been a part of. That said, my primary
					interests lie in software engineering rather than data
					science.
				</p>
				<p>
					When it comes to my work, there's nothing I love more than
					taking a problem, designing an architecture for its
					solution, then implementing it in a clean and maintainable
					fashion.
				</p>
				<p>
					For more information on my professional history, you can
					visit the Experience page by clicking the link at the top of
					this page! You can also download a copy of my resume or
					connect with me on LinkedIn using the links below.
				</p>
			</div>
		</div>
		<div id="resumeRow" class="row">
			<div id="resumeCol" class="col-12">
				<a
					target="_blank"
					href="https://github.com/walshk/walshk.github.io/blob/master/src/assets/files/KRW_Resume.pdf?raw=true"
				>
					<i class="bi bi-file-earmark-text"></i>
				</a>

				<a target="_blank" href="https://www.linkedin.com/in/walshkr/"
					><i class="bi bi-linkedin"></i
				></a>
			</div>
		</div>
	</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');

.about {
	padding-top: 1rem;
	color: white;
	text-align: center;
	overflow-x: hidden;
	height: 100%;
}

.topNav {
	font-size: 1.25rem;
	margin: 1rem 0.5rem;
	margin-right: 0;
	padding: 0.25rem 1rem;
}

#navRow {
	justify-content: center;
}
.navCol {
	padding-left: 0.5rem;
	padding-right: 0;
}

#titleRow {
	margin-top: 1rem;
	text-align: center;
}

#titleRow h1 {
	font-family: 'Bangers', sans-serif;
	font-size: 5rem;
	letter-spacing: 2px;
}

#storyRow {
	margin-top: 1rem;
	justify-content: center;
}

#storyCol {
	color: #faf9f6;
	font-family: 'Roboto Slab', sans-serif;
	font-size: 1.25rem;
	text-align: left;
	text-rendering: optimizeLegibility;
	max-width: 60vw;
}

#resumeRow {
	margin-top: 1rem;
}

#resumeCol {
	display: flex;
	justify-content: center;
}

#resumeCol a {
	color: white;
	font-size: 4rem;
	margin-left: 2rem;
	margin-right: 2rem;
	text-decoration: none;
	transition: all 0.25s ease-in-out;
}

#resumeCol a:hover {
	transform: scale(120%);
}
</style>
