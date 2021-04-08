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
