<svelte:head>
	<title>Dashboard | All Events</title>
</svelte:head>

<div class="parent">
	<p class="stat-title spreaded-title">all events</p>

	<table class="all-events-table">
		<thead>
			<tr>
				<th class="col" id="id-col">ID</th>
				<th class="col" id="event-name-col">Event Name</th>
				<th class="col" id="game-name-col">Game Name</th>
				<th class="col" id="timezone-col">Timezone</th>
				<th class="col" id="date-time-col">Date and Time</th>
				<th class="col" id="max-num-players-col">Max Num of Players</th>
				<th class="col" id="max-num-teams-col">Max Num of Teams</th>
				<th class="col" id="max-num-team-players-col">
					Max Num of Team Players
				</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1</td>
				<td>Event 1</td>
				<td>Fall Guys</td>
				<td>Etc/GMT</td>
				<td>12/12/2023 12:12</td>
				<td>12</td>
				<td>10</td>
				<td>13</td>
			</tr>
			<tr>
				<td>1</td>
				<td>Event 1</td>
				<td>Fall Guys</td>
				<td>Etc/GMT</td>
				<td>12/12/2023 12:12</td>
				<td>12</td>
				<td>10</td>
				<td>13</td>
			</tr>
			<tr>
				<td>1</td>
				<td>Event 1</td>
				<td>Fall Guys</td>
				<td>Etc/GMT</td>
				<td>12/12/2023 12:12</td>
				<td>12</td>
				<td>10</td>
				<td>13</td>
			</tr>
			<tr>
				<td>1</td>
				<td>Event 1</td>
				<td>Fall Guys</td>
				<td>Etc/GMT</td>
				<td>12/12/2023 12:12</td>
				<td>12</td>
				<td>10</td>
				<td>13</td>
			</tr>
			<tr>
				<td>1</td>
				<td>Event 1</td>
				<td>Fall Guys</td>
				<td>Etc/GMT</td>
				<td>12/12/2023 12:12</td>
				<td>12</td>
				<td>10</td>
				<td>13</td>
			</tr>
		</tbody>
	</table>
</div>

<style lang="scss">
	.parent {
		.all-events-table {
			margin-top: 40px;
			color: var(--white-color);
			border-collapse: collapse;

			tr {
				border-radius: 15px;

				td,
				th {
					text-align: left;
					padding-top: 15px;
					padding-bottom: 15px;
				}

				th {
					max-width: 120px;
				}

				td:nth-child(1),
				th:nth-child(1) {
					padding-left: 20px;
					min-width: 50px;
				}

				td:nth-child(2),
				th:nth-child(2) {
					padding-left: 20px;
					padding-right: 20px;
					min-width: 60px;
				}

				td:nth-child(3),
				th:nth-child(3) {
					padding-left: 20px;
					padding-right: 20px;
					min-width: 60px;
				}

				td:nth-child(4),
				th:nth-child(4) {
					padding-left: 10px;
					padding-right: 10px;
					min-width: 60px;
				}

				td:nth-child(5),
				th:nth-child(5) {
					padding-left: 20px;
					padding-right: 20px;
					min-width: 60px;
				}

				td:nth-child(6),
				th:nth-child(6) {
					padding-left: 10px;
					padding-right: 10px;
					min-width: 60px;
				}

				td:nth-child(7),
				th:nth-child(7) {
					padding-left: 10px;
					padding-right: 10px;
					min-width: 60px;
				}

				td:nth-child(8),
				th:nth-child(8) {
					padding-right: 20px;
				}

				td:first-child {
					border-top-left-radius: 10px;
					border-bottom-left-radius: 10px;
				}
				td:last-child {
					border-bottom-right-radius: 10px;
					border-top-right-radius: 10px;
				}
			}

			tbody {
				margin-top: 10px;

				tr:nth-child(odd) {
					background: var(--light-secondary-color);
				}
			}
		}
	}
</style>
