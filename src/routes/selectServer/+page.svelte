<script lang="ts">
	import Server from '$lib/selectServer/Server.svelte';
</script>

<svelte:head>
	<title>Etourne - Select Server</title>
</svelte:head>

<div class="parent">
	<div class="top">
		<img src="/icons/server.svg" alt="" />
		<h1 class="title">Servers</h1>
	</div>
	<p class="text">
		Servers you and Etourne bot is in. Please select a server.
	</p>
	<ul class="server-list">
		<Server imgUrl="/exampleImages/nd-logo.png" serverName="Noob Dev 54" />
		<Server imgUrl="/exampleImages/nd-logo.png" serverName="Noob Dev 54" />
		<Server imgUrl="/exampleImages/nd-logo.png" serverName="Noob Dev 54" />
	</ul>
</div>

<style lang="scss">
	.parent {
		.top {
			display: flex;
			gap: 35px;

			.title {
				font-size: var(--heading-font-size);
				color: var(--white-color);
			}
		}

		.text {
			font-size: var(--normal-font-size);
			color: var(--white-color);
			margin-top: 20px;
		}

		.server-list {
			margin-top: 50px;

			display: flex;
			gap: 40px;
		}
	}
</style>
