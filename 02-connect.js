'use strict';

// подключение пакета
const {Client} = require(`pg`);

const connectionString = `postgres://academy:123456@localhost/phonebook`;
const client = new Client(connectionString);

// применение async/await
(async () => {
  await client.connect();
  const sql = `SELECT * FROM peoples`;
  const {rows} = await client.query(sql);
  console.table(rows);
  client.end();
})();
