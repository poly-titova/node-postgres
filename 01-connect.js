// подключение пакета
const {Client} = require(`pg`);
const connectionString = `postgres://academy:123456@localhost/phonebook`;

// проверка на ошибку
client.connect((err) => {

  if (err) {
    throw new Error(`Ошибка установки соединения: ${err.message}`);
  }

  console.log(`Соединение с PostgreSQL установлено!`);
});

// получение всех записей таблицы
const sql = `SELECT * FROM peoples`;
client.query(sql, (err, res) => {
  if (err) {
    throw new Error(`Ошибка при выполнении запроса: ${err.message}`);
  }

  console.table(res.rows);
  client.end();
});
