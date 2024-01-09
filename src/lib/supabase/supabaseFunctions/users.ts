/*
 
* This file contains all the 'users' table related functions *
*/

import { supabase } from '../supabaseClient';
import { getServerId } from './servers';

interface getUserRole {
	discordUserId: string;
	discordServerId: string;
}

export const getUserRole = async (props: getUserRole) => {
	const { discordUserId, discordServerId } = props;

	const { data: getServerIdData, error: getServerIdError } = await getServerId(
		{
			discordServerId: discordServerId,
		},
	);

	const { data, error } = await supabase
		.from('Users')
		.select('roleId')
		.eq('userId', discordUserId)
		.eq('serverId', getServerIdData![0]['id']);

	return data;
};
