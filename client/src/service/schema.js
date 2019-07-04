
export const getPlayersSchema = `{ getPlayers { _id name thumbnail_url } }`;

export const getPlayerStatsSchema = (ids) => `{ getPlayers(playerList: ["${ids.join('","')}"]) { _id name age } }`;