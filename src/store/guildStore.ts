import { persisted } from 'svelte-local-storage-store';

export const guildInfo = persisted('guildInfo', {});

// guildInfo structure
/*
   {
      imgUrl: `https://cdn.discordapp.com/icons/${id}/${guildInfo.icon}.png`,
      guildName: guildInfo.name,
      guildId: id,
   }
*/
