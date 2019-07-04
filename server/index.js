const express = require("express");
const cors = require("cors");
const app = express();
const graphqlExpress = require('express-graphql');
const { schema } = require("./graphql/schema");
const { rootValue } = require("./graphql/resolvers");
const { createConnection, getMongoClient } = require("./dbConnection/mongo");
createConnection();

app.use(cors());

app.use('/graphql', graphqlExpress({
    schema,
    rootValue,
    graphiql: true,
}));

app.get("/insertPlayer", async (req, res) => {
    await createConnection();
    let client = getMongoClient();
    let db = client.db("cricket");
    let player = {
        name: "some palyer",
        thumbnail_url: "https://banner2.kisspng.com/20180528/qgp/kisspng-cricketer-sport-computer-icons-india-national-cric-cricket-players-5b0c12a85759a6.2757433015275178643578.jpg",
        age: 23
    }
    let data = await db.collection("player").insertOne(player);
    res.send(data);
});


app.get("/deleteAllPlayer", async (req, res) => {
    await createConnection();
    let client = getMongoClient();
    let db = client.db("cricket");
    let data = await db.collection("player").deleteMany({});
    res.send(data);
});

app.listen(3503);