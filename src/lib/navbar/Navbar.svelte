<script lang="ts">
	import { goto } from '$app/navigation';

	import {
		signIn as signInWithDiscord,
		signOut as signOutWithDiscord,
	} from '$lib/supabase/auth';
	import { getUser } from '$lib/supabase/auth';

	let discordUser: any;
	getUser().subscribe((u) => (discordUser = u));

	const signIn = async () => {
		await signInWithDiscord();
	};

	const signOut = async () => {
		await signOutWithDiscord();
		goto('/');
	};
</script>

<div class="navbar">
	<img src="/logo/etourne-letter-logo.svg" alt="" />
	<div class="right">
		<ul class="nav-list">
			<li class="nav-li-link">
				<a href="/selectServer" class="link">Dashboard</a>
			</li>
			<li class="nav-li-link">
				<a href="/" class="link">About</a>
			</li>
			<li class="nav-li-link">
				<a href="/" class="link">Add Bot</a>
			</li>
		</ul>
		{#if !discordUser}
			<button class="sign-in-btn" on:click={signIn}>
				<img src="/icons/discord-logo.svg" alt="discord logo" /> Sign In
			</button>
		{:else}
			<button class="sign-out-btn" on:click={signOut}>
				<img src="/icons/signout.svg" alt="sign out" />
			</button>
		{/if}
	</div>
</div>

<style lang="scss">
	.navbar {
		padding: 50px 100px;

		display: flex;
		justify-content: space-between;
		align-items: center;

		.right {
			display: flex;
			align-items: center;
			gap: 80px;

			ul {
				list-style: none;

				display: flex;
				align-items: center;
				gap: 65px;

				a {
					color: var(--white-color);
					text-decoration: none;
					font-size: var(--normal-font-size);
					font-weight: bold;

					&:visited {
						color: var(--white-color);
						text-decoration: none;
					}

					&:hover {
						color: var(--primary-color);
					}
				}
			}

			.sign-in-btn {
				background-color: var(--primary-color);
				color: var(--white-color);
				border: 0;
				border-radius: 15px;
				padding: 15px 30px;

				display: flex;
				gap: 20px;
				align-items: center;
				font-size: var(--normal-font-size);
				font-weight: bold;

				&:hover {
					cursor: pointer;
					filter: brightness(0.95);
				}
			}

			.sign-out-btn {
				background: none;
				border: none;

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
