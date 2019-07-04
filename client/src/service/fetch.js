import { getPlayersSchema, getPlayerStatsSchema } from "./schema";
import { graphQl } from "./url";

export const getPlayers = async (page_number) => {
  let players = await get(getPlayersSchema);
  return players.getPlayers;
}

export const getPlayerStats = async (ids) => {
  let players = await get(getPlayerStatsSchema(ids));
  return players.getPlayers;
}


const get = async (body) => {
  let result = await fetch(graphQl, {
    method: "POST",
    headers: {
      "Content-Type": "application/graphql"
    },
    body
  });
  let res = await result.json();
  return res.data;
}