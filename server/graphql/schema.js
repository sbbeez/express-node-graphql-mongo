const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Player {
      _id: String
      name: String!
      age:  Int!
      thumbnail_url: String
  }
  type Query {
      getPlayers(page_number: Int, playerList: [String]): [Player]
      getPlayerCount: Int!
  }
`);

exports.schema = schema;