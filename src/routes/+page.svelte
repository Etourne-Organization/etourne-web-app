<svelte:head>
	<title>Etourne</title>
</svelte:head>

<div class="home">
	<h1 class="title">Etourne</h1>
	<p class="p-1">Tournament and Event management software</p>
	<p class="p-2">With Discord Bot and Web App</p>
	<p class="wip">website work in progress</p>
</div>

<style lang="scss">
	.home {
		display: flex;
		flex-direction: column;
		align-items: center;

		h1 {
			margin-top: 140px;
			font-size: var(--heading-font-size);
			color: var(--primary-color);
		}

		p {
			color: var(--white-color);
			font-size: var(--normal-font-size);
		}

		.p-1 {
			margin-top: 10px;
		}

		.wip {
			font-size: 1rem;
			font-style: italic;
			margin-top: 35px;
		}
	}
</style>
