/* 

* This file contains all the 'servers' table related functions
*
*

*/

import { supabase } from '../supabaseClient';

interface checkServerExists {
	discordServerId: string;
}

interface addServer {
	discordServerId: string;
	name: string;
}

interface checkAddServer {
	discordServerId: string;
	name: string;
}

interface getServer {
	discordServerId: string;
}

interface getFilteredServers {
	discordServerIds: Array<string>;
}

export const checkServerExists = async (props: checkServerExists) => {
	const { discordServerId } = props;

	const { data, error } = await supabase
		.from('DiscordServers')
		.select('id')
		.eq('serverId', discordServerId);

	if (error) throw error;

	if (data!.length > 0) {
		return true;
	} else {
		return false;
	}
};

export const addServer = async (props: addServer) => {
	const { discordServerId, name } = props;

	const { data, error } = await supabase
		.from('DiscordServers')
		.insert([{ serverId: discordServerId, name: name }])
		.select();

	if (error) throw error;

	return { data, error };
};

export const checkAddServer = async (props: checkAddServer) => {
	const { discordServerId, name } = props;

	if (!(await checkServerExists({ discordServerId: discordServerId }))) {
		const { data: addServerData, error: addServerError } = await addServer({
			discordServerId: discordServerId,
			name: name,
		});

		if (addServerError) throw addServerError;
	}
};

export const getServerId = async (props: getServer) => {
	const { discordServerId } = props;

	const { data, error } = await supabase
		.from('DiscordServers')
		.select('id')
		.eq('serverId', discordServerId);

	if (error) throw error;

	return { data, error };
};

export const getFilteredServers = async (props: getFilteredServers) => {
	const { discordServerIds } = props;

	const { data, error } = await supabase
		.from('DiscordServers')
		.select('serverId');

	if (error) throw error;

	const filteredData = data?.filter((d) =>
		discordServerIds.includes(d.serverId),
	);

	return filteredData.map((d) => d.serverId);
};
