<div class="parent">
	<div class="left">
		<img src="/egIcon/nd-logo.png" alt="discord guild icon" />
		<h2>Noob Dev 54 Official Server</h2>
	</div>
	<div class="right">
		<img src="/egIcon/nd-logo.png" alt="discord guild icon" />
		<p>mz10ah</p>
		<button class="sign-out-btn">
			<img src="/icons/signout.svg" alt="sign out" />
		</button>
	</div>
</div>

<style lang="scss">
	.parent {
		display: flex;
		justify-content: space-between;

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
