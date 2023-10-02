<script lang="ts">
	import { page } from '$app/stores';

	import Navbar from '$lib/navbar/Navbar.svelte';
	import '../../css/global.css';
</script>

<div
	class="layout h-screen overflow-y-scroll"
	style="background: {$page.url.pathname === '/'
		? "url('/landingPage/landing-page-bkg.png') no-repeat center center/cover"
		: 'var(--secondary-color)'}"
>
	<Navbar />
	<div class="children py-12 px-24">
		<slot />
	</div>
</div>
