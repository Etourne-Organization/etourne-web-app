/*
 * This file contains all the 'teams' table related functions

*/

import { supabase } from '../supabaseClient';

interface getAllTeamsByEventId {
	eventId: number;
}

interface getAllTeamsByEventIds {
	eventIds: [number];
}

export const getAllTeamsByEventId = async (props: getAllTeamsByEventId) => {
	const { eventId } = props;

	const { data, error } = await supabase
		.from('Teams')
		.select('*')
		.eq('eventId', eventId);

	if (error) throw error;

	return data;
};

export const getAllTeamsByEventIds = async (props: getAllTeamsByEventIds) => {
	const { eventIds } = props;

	const { data, error } = await supabase
		.from('Teams')
		.select('*')
		.in('eventId', eventIds);

	if (error) throw error;

	return data;
};
