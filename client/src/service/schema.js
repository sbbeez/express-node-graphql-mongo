
export const getPlayersSchema = `{ getPlayers { _id name thumbnail_url } }`;

export const getPlayerStatsSchema = (ids) => `{ getPlayers(playerList: ["${ids.join('","')}"]) { name age innings_played bowled  matches_won } }`;