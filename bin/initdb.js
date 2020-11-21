require('dotenv').config();

const { Client } = require('pg');
const client = new Client();

(async () => {
  try {
    await client.connect()
    console.log("dropping table, if exists...");
    const droppingTable = "DROP TABLE IF EXISTS tweets";
    await client.query(droppingTable);

    console.log("creating table...");
    const createTable =
      `CREATE TABLE IF NOT EXISTS tweets (
      id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
      , message text NOT NULL
    )`
    await client.query(createTable);

    const text = 'INSERT INTO tweets(message) VALUES($1) RETURNING *';
    const values = ['THIS IS A TWEET'];

    await client.query(text, values)
    console.log("init db finished");
    await client.end()
  } catch (error) {
    throw new Error(error);
  }
})()