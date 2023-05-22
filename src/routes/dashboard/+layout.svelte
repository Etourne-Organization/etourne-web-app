<script lang="ts">
	import { page } from '$app/stores';
	import Sidebar from '$lib/dashboard/sidebar/Sidebar.svelte';
	import Navbar from '$lib/dashboard/navbar/Navbar.svelte';

	import '../../css/global.css';
</script>

<div class="layout">
	<div class="left-sidebar">
		<Sidebar />
	</div>
	<div class="right">
		<Navbar />
		<div class="children">
			<slot />
		</div>
	</div>
</div>

<style lang="scss">
	.layout {
		height: 100vh;
		background: var(--secondary-color);

		display: flex;

		.right {
			overflow-y: scroll;
			width: 100%;
			padding: 50px 55px;

			.children {
				padding: 50px 100px;
			}
		}
	}
</style>
