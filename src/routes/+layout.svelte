<script lang="ts">
	import Navbar from '$lib/navbar/Navbar.svelte';
	import '../css/global.css';
</script>

<div class="layout">
	<Navbar />
	<slot />
</div>

<style lang="scss">
	.layout {
		height: 100vh;
		background: url('/landingPage/landing-page-bkg.png') no-repeat center
			center/cover;
	}
</style>
