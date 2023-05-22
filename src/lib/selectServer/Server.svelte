<script lang="ts">
	export let imgUrl: string;
	export let guildName: string;
	export let id: string;
	export let index: number;

	import { goto } from '$app/navigation';
</script>

<div class="parent" {id}>
	<img src={imgUrl} alt="server url" />
	<p>{guildName}</p>
</div>

<style lang="scss">
	.parent {
		display: flex;
		flex-direction: column;
		gap: 15px;
		align-items: center;
		justify-content: center;

		img {
			border-radius: 15px;
			width: 170px;
			/* object-fit: cover; */
		}

		p {
			font-size: var(--normal-font-size);
			color: var(--white-color);
			text-align: center;
		}

		&:hover {
			cursor: pointer;
			transform: translateZ(0);
			box-shadow: 0 0 1px rgba(0, 0, 0, 0);
			backface-visibility: hidden;
			-moz-osx-font-smoothing: grayscale;
			transition-duration: 0.3s;
			transition-property: transform;
		}

		&:hover,
		&:focus,
		&:active {
			transform: scale(1.1);
		}
	}
</style>
