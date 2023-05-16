<div class="navbar">
	<img src="/logo/etourne-letter-logo.svg" alt="" />
	<div class="right">
		<ul class="nav-list">
			<li class="nav-li-link">
				<a href="/" class="link">About</a>
			</li>
			<li class="nav-li-link">
				<a href="/" class="link">Add Bot</a>
			</li>
		</ul>
		<button class="sign-in-btn">
			<img src="/icons/discord-logo.svg" alt="discord logo" /> Sign In
		</button>
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
		}
	}
</style>
