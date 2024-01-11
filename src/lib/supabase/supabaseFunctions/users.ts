/*
	* This file contains all the 'users' table related functions *

*/

import { supabase } from '../supabaseClient';
import { getServerId } from './servers';

interface addUser {
	discordUserId: string;
	username: string;
	roleId?: number;
	discordServerId: string;
}

interface checkAddUser {
	discordUserId: string;
	username: string;
	roleId?: number;
	discordServerId: string;
}

interface getUserRole {
	discordUserId: string;
	discordServerId: string;
}

export const addUser = async (props: addUser) => {
	const { username, discordUserId, discordServerId, roleId = 1 } = props;

	const { data: getServerIdData, error: getServerIdError } = await getServerId(
		{
			discordServerId: discordServerId,
		},
	);

	const { data, error } = await supabase
		.from('Users')
		.insert([
			{
				userId: discordUserId,
				username: username,
				serverId: getServerIdData![0]['id'],
				roleId: roleId,
			},
		])
		.select();

	return { data, error };
};

export const checkAddUser = async (props: checkAddUser) => {
	const { username, discordUserId, discordServerId, roleId = 1 } = props;

	// get server column id from supabase
	const { data: getServerIdData, error: getServerIdError } = await getServerId(
		{
			discordServerId: discordServerId,
		},
	);

	// check whether user exists in DB
	const { data: checkUserExistsData, error: checkUserExistsError } =
		await supabase
			.from('Users')
			.select('id')
			.eq('userId', discordUserId)
			.eq('serverId', getServerIdData![0]['id']);

	if (checkUserExistsData!.length === 0) {
		await addUser({
			username: username,
			discordUserId: discordUserId,
			discordServerId: discordServerId,
			roleId: roleId,
		});
	}
};

export const getUserRole = async (
	props: getUserRole,
): Promise<Array<{ roleId: number }> | null> => {
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
