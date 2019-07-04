const MongoClient = require('mongodb').MongoClient;
let client;
const config = require("../config/keys");

const createConnection = async () => {
    client = await MongoClient.connect(config.mongoUrl, { useNewUrlParser: true });
}

const getMongoClient = () => {
    return client;
}

exports.createConnection = createConnection;
exports.getMongoClient = getMongoClient;