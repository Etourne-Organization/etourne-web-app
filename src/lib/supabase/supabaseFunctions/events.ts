/*
 * This file contains all the 'events' table related functions
 */

import { supabase } from '../supabaseClient';
import { checkServerExists, getServerId } from './servers';

interface getAllEventsByServerId {
	discordServerId: string;
}

interface getAllEvents {
	discordServerId: string;
}

interface getAllTeamEventsByServerId {
	discordServerId: string;
}

interface addEvent {
	eventId?: number;
	eventName: string;
	gameName: string;
	eventHost: string;
	description: string;
	dateTime: string;
	isTeamEvent: boolean;
	discordServerId: string;
	timezone: string;
	serverName?: string;
	maxNumTeams?: number;
	maxNumTeamPlayers?: number;
	maxNumPlayers?: number;
}

interface getNumEventsCreateInServer {
	discordServerId: string;
}

export const getAllEvents = async (props: getAllEvents) => {
	const { discordServerId } = props;

	const { data: getServerIdData, error: getServerIdError } = await getServerId(
		{
			discordServerId: discordServerId,
		},
	);

	if (getServerIdError) throw getServerIdError;

	const { data, error } = await supabase
		.from('Events')
		.select('*')
		.eq('serverId', getServerIdData![0]['id']);

	if (error) throw error;

	return data;
};

export const getAllEventsByServerId = async (props: getAllEventsByServerId) => {
	const { discordServerId } = props;

	const { data: getServerIdData, error: getServerIdError } = await getServerId(
		{
			discordServerId: discordServerId,
		},
	);

	if (getServerIdError) throw getServerIdError;

	const { data, error } = await supabase
		.from('Events')
		.select('*')
		.eq('serverId', getServerIdData![0]['id']);

	if (error) throw error;

	return data;
};

export const getAllTeamEventsByServerId = async (
	props: getAllTeamEventsByServerId,
) => {
	const { discordServerId } = props;

	const { data: getServerIdData, error: getServerIdError } = await getServerId(
		{
			discordServerId: discordServerId,
		},
	);

	if (getServerIdError) throw getServerIdError;

	const { data, error } = await supabase
		.from('Events')
		.select('*')
		.eq('serverId', getServerIdData![0]['id'])
		.eq('isTeamEvent', true);

	if (error) throw error;

	return data;
};

export const addEvent = async (props: addEvent) => {
	const {
		eventName,
		gameName,
		eventHost,
		description,
		dateTime,
		isTeamEvent,
		discordServerId,
		timezone,
		maxNumTeams,
		maxNumTeamPlayers,
		maxNumPlayers,
	} = props;

	const isServerExist: boolean = await checkServerExists({
		discordServerId: discordServerId,
	});

	// let dbServerId: number;

	const { data: getServerIdData, error: getServerIdError } = await getServerId(
		{
			discordServerId: discordServerId,
		},
	);

	// dbServerId = getServerIdData![0]['id'];

	const { data, error } = await supabase
		.from('Events')
		.insert([
			{
				eventName: eventName,
				eventHost: eventHost,
				gameName: gameName,
				description: description,
				dateTime: dateTime,
				isTeamEvent: isTeamEvent,
				serverId: getServerIdData![0]['id'],
				timezone: timezone,
				maxNumTeams: maxNumTeams,
				maxNumTeamPlayers: maxNumTeamPlayers,
				maxNumPlayers: maxNumPlayers,
			},
		])
		.select();

	if (error) throw error;

	return data;
};

export const getNumEventsCreateInServer = async (
	props: getNumEventsCreateInServer,
) => {
	const { discordServerId } = props;

	const { data: getServerIdData, error: getServerIdError } = await getServerId(
		{
			discordServerId: discordServerId,
		},
	);

	if (getServerIdError) throw getServerIdError;

	const { data, error } = await supabase
		.from('Events')
		.select('*')
		.eq('serverId', getServerIdData![0]['id']);

	if (error) throw error;

	return data.length;
};
