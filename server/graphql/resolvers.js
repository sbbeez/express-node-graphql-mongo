const { getMongoClient } = require("../dbConnection/mongo");
const { ObjectID } = require("mongodb");

const resolvers = {
    getPlayers: async ({ page_number = 1, playerList = [] }) => {
        let client = getMongoClient();
        let db = client.db("cricket");
        let searchObj = {};
        if (playerList.length > 0) {
            searchObj = { _id: { $in: playerList.map(p => ObjectID(p)) } };
        }
        let players = await db.collection("player")
            .find(searchObj)
            .skip((page_number - 1) * 10)
            .limit(10)
            .toArray();
        return players;
    },
    getPlayerCount: async () => {
        let client = getMongoClient();
        let db = client.db("cricket");
        let totalCount = await db.collection("player").countDocuments();
        return totalCount;
    }
}

exports.rootValue = resolvers;