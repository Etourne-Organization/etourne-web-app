<script lang="ts">
	import { page } from '$app/stores';

	import Navbar from '$lib/navbar/Navbar.svelte';
	import '../css/global.css';
</script>

<div
	class="layout"
	style="background: {$page.url.pathname === '/'
		? "url('/landingPage/landing-page-bkg.png') no-repeat center center/cover"
		: 'var(--secondary-color'}"
>
	<Navbar />
	<div class="children">
		<slot />
	</div>
</div>

<style lang="scss">
	.layout {
		height: 100vh;
		overflow-y: scroll;

		.children {
			padding: 50px 100px;
		}
	}
</style>
