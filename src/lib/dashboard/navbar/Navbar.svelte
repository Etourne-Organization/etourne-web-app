<script lang="ts">
	export let imgUrl: string;
	export let guildName: string;

	import { goto } from '$app/navigation';

	import { signOut as signOutWithDiscord, getUser } from '../../supabase/auth';

	let discordUser: any;
	getUser().subscribe((u) => (discordUser = u));

	const signOut = async () => {
		await signOutWithDiscord();
		goto('/');
	};
</script>

<div class="parent">
	<div class="left">
		<img src={imgUrl} alt="discord guild icon" />
		<h2>{guildName}</h2>
	</div>
	<div class="right">
		<img
			src={discordUser
				? discordUser.user_metadata.avatar_url
				: '/icons/loading.svg'}
			alt="discord guild icon"
		/>
		<p>{discordUser ? discordUser.user_metadata.full_name : 'Loading'}</p>
		<button class="sign-out-btn" on:click={signOut}>
			<img src="/icons/signout.svg" alt="sign out" />
		</button>
	</div>
</div>

<style lang="scss">
	.parent {
		display: flex;
		justify-content: space-between;
		align-items: center;

		color: var(--white-color);

		.left {
			display: flex;
			gap: 25px;
			align-items: center;

			h2 {
				font-size: var(--subheading-font-size);
			}

			img {
				width: 100px;
				border-radius: 50%;
			}
		}

		.right {
			display: flex;
			gap: 20px;
			align-items: center;

			p {
				font-size: var(--normal-font-size);
				font-weight: bold;
			}

			img {
				width: 50px;
				border-radius: 50%;
			}

			.sign-out-btn {
				background: none;
				border: none;

				margin-left: 20px;

				img {
					width: 50px;
				}

				&:hover {
					cursor: pointer;
				}
			}
		}
	}
</style>
